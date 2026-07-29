"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { CartItem } from "@/app/types";

export type OrderStatus = "processing" | "shipped" | "delivered" | "cancelled";

export interface OrderItem {
  productId: string;
  productName: string;
  productNameFa?: string;
  quantity: number;
  price: number;
  colorName: string;
  colorNameFa?: string;
}

export interface Order {
  id: string;
  date: string;
  status: OrderStatus;
  total: number;
  subtotal: number;
  shippingCost: number;
  itemCount: number;
  items: OrderItem[];
  shippingAddress: string;
  shippingMethod: string;
  paymentMethod: string;
}

export interface Address {
  id: string;
  title: string;
  details: string;
  city: string;
  province: string;
  postalCode: string;
  isDefault: boolean;
}

export interface UserProfile {
  name: string;
  email: string;
  phone: string;
}

export interface UserSettings {
  notifEmail: boolean;
  notifSms: boolean;
}

interface StoredUser {
  password: string;
  profile: UserProfile;
  addresses: Address[];
  orders: Order[];
  settings: UserSettings;
}

interface AccountContextType {
  isLoggedIn: boolean;
  isHydrated: boolean;
  user: UserProfile | null;
  addresses: Address[];
  orders: Order[];
  settings: UserSettings;
  login: (email: string, password: string) => { ok: boolean; error?: string };
  register: (data: {
    name: string;
    email: string;
    phone: string;
    password: string;
  }) => { ok: boolean; error?: string };
  logout: () => void;
  updateProfile: (profile: Partial<UserProfile>) => { ok: boolean; error?: string };
  changePassword: (
    currentPassword: string,
    newPassword: string
  ) => { ok: boolean; error?: string };
  addAddress: (address: Omit<Address, "id" | "isDefault"> & { isDefault?: boolean }) => void;
  updateAddress: (id: string, patch: Partial<Omit<Address, "id">>) => void;
  deleteAddress: (id: string) => void;
  updateSettings: (patch: Partial<UserSettings>) => void;
  placeOrder: (payload: {
    items: CartItem[];
    subtotal: number;
    shippingCost: number;
    total: number;
    shippingAddress: string;
    shippingMethod: string;
    paymentMethod: string;
  }) => Order | null;
}

const USERS_KEY = "novira:users";
const SESSION_KEY = "novira:session";

const defaultSettings: UserSettings = { notifEmail: true, notifSms: false };

function loadUsers(): Record<string, StoredUser> {
  try {
    const raw = window.localStorage.getItem(USERS_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, StoredUser>;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveUsers(users: Record<string, StoredUser>) {
  window.localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function loadSession(): string | null {
  try {
    return window.localStorage.getItem(SESSION_KEY);
  } catch {
    return null;
  }
}

function saveSession(email: string | null) {
  if (email) window.localStorage.setItem(SESSION_KEY, email);
  else window.localStorage.removeItem(SESSION_KEY);
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

function generateOrderId() {
  return `NV-${Date.now().toString(36).toUpperCase().slice(-8)}`;
}

function generateAddressId() {
  return `addr-${Date.now().toString(36)}`;
}

const AccountContext = createContext<AccountContextType | null>(null);

export function AccountProvider({ children }: { children: ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [sessionEmail, setSessionEmail] = useState<string | null>(null);
  const [users, setUsers] = useState<Record<string, StoredUser>>({});

  useEffect(() => {
    setUsers(loadUsers());
    setSessionEmail(loadSession());
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    saveUsers(users);
  }, [users, isHydrated]);

  useEffect(() => {
    if (!isHydrated) return;
    saveSession(sessionEmail);
  }, [sessionEmail, isHydrated]);

  const currentUser = sessionEmail ? users[sessionEmail] ?? null : null;

  const persistUser = useCallback((email: string, updater: (user: StoredUser) => StoredUser) => {
    setUsers((prev) => {
      const existing = prev[email];
      if (!existing) return prev;
      return { ...prev, [email]: updater(existing) };
    });
  }, []);

  const login = useCallback(
    (email: string, password: string) => {
      const key = normalizeEmail(email);
      const user = users[key];
      if (!user) {
        return { ok: false, error: "user_not_found" as const };
      }
      if (user.password !== password) {
        return { ok: false, error: "wrong_password" as const };
      }
      setSessionEmail(key);
      return { ok: true };
    },
    [users]
  );

  const register = useCallback(
    (data: { name: string; email: string; phone: string; password: string }) => {
      const key = normalizeEmail(data.email);
      if (!data.name.trim() || !key || !data.password.trim()) {
        return { ok: false, error: "invalid_fields" as const };
      }
      if (users[key]) {
        return { ok: false, error: "email_exists" as const };
      }
      const newUser: StoredUser = {
        password: data.password,
        profile: {
          name: data.name.trim(),
          email: key,
          phone: data.phone.trim(),
        },
        addresses: [],
        orders: [],
        settings: { ...defaultSettings },
      };
      setUsers((prev) => ({ ...prev, [key]: newUser }));
      setSessionEmail(key);
      return { ok: true };
    },
    [users]
  );

  const logout = useCallback(() => {
    setSessionEmail(null);
  }, []);

  const updateProfile = useCallback(
    (profile: Partial<UserProfile>) => {
      if (!sessionEmail) return { ok: false, error: "not_logged_in" as const };
      persistUser(sessionEmail, (user) => ({
        ...user,
        profile: {
          ...user.profile,
          ...profile,
          email: sessionEmail,
        },
      }));
      return { ok: true };
    },
    [sessionEmail, persistUser]
  );

  const changePassword = useCallback(
    (currentPassword: string, newPassword: string) => {
      if (!sessionEmail || !currentUser) {
        return { ok: false, error: "not_logged_in" as const };
      }
      if (currentUser.password !== currentPassword) {
        return { ok: false, error: "wrong_password" as const };
      }
      if (newPassword.trim().length < 6) {
        return { ok: false, error: "weak_password" as const };
      }
      persistUser(sessionEmail, (user) => ({
        ...user,
        password: newPassword,
      }));
      return { ok: true };
    },
    [sessionEmail, currentUser, persistUser]
  );

  const addAddress = useCallback(
    (address: Omit<Address, "id" | "isDefault"> & { isDefault?: boolean }) => {
      if (!sessionEmail) return;
      const newAddress: Address = {
        id: generateAddressId(),
        title: address.title.trim(),
        details: address.details.trim(),
        city: address.city.trim(),
        province: address.province.trim(),
        postalCode: address.postalCode.trim(),
        isDefault: address.isDefault ?? false,
      };
      persistUser(sessionEmail, (user) => {
        let addresses = [...user.addresses];
        if (newAddress.isDefault) {
          addresses = addresses.map((a) => ({ ...a, isDefault: false }));
        }
        if (addresses.length === 0) newAddress.isDefault = true;
        return { ...user, addresses: [...addresses, newAddress] };
      });
    },
    [sessionEmail, persistUser]
  );

  const updateAddress = useCallback(
    (id: string, patch: Partial<Omit<Address, "id">>) => {
      if (!sessionEmail) return;
      persistUser(sessionEmail, (user) => {
        let addresses = user.addresses.map((a) =>
          a.id === id ? { ...a, ...patch } : a
        );
        if (patch.isDefault) {
          addresses = addresses.map((a) =>
            a.id === id ? { ...a, isDefault: true } : { ...a, isDefault: false }
          );
        }
        return { ...user, addresses };
      });
    },
    [sessionEmail, persistUser]
  );

  const deleteAddress = useCallback(
    (id: string) => {
      if (!sessionEmail) return;
      persistUser(sessionEmail, (user) => {
        const addresses = user.addresses.filter((a) => a.id !== id);
        if (addresses.length > 0 && !addresses.some((a) => a.isDefault)) {
          addresses[0] = { ...addresses[0], isDefault: true };
        }
        return { ...user, addresses };
      });
    },
    [sessionEmail, persistUser]
  );

  const updateSettings = useCallback(
    (patch: Partial<UserSettings>) => {
      if (!sessionEmail) return;
      persistUser(sessionEmail, (user) => ({
        ...user,
        settings: { ...user.settings, ...patch },
      }));
    },
    [sessionEmail, persistUser]
  );

  const placeOrder = useCallback(
    (payload: {
      items: CartItem[];
      subtotal: number;
      shippingCost: number;
      total: number;
      shippingAddress: string;
      shippingMethod: string;
      paymentMethod: string;
    }) => {
      if (!sessionEmail || payload.items.length === 0) return null;

      const order: Order = {
        id: generateOrderId(),
        date: new Date().toISOString(),
        status: "processing",
        total: payload.total,
        subtotal: payload.subtotal,
        shippingCost: payload.shippingCost,
        itemCount: payload.items.reduce((sum, it) => sum + it.quantity, 0),
        shippingAddress: payload.shippingAddress,
        shippingMethod: payload.shippingMethod,
        paymentMethod: payload.paymentMethod,
        items: payload.items.map((it) => ({
          productId: it.product.id,
          productName: it.product.name,
          productNameFa: it.product.nameFa,
          quantity: it.quantity,
          price: it.product.price,
          colorName: it.selectedColor.name,
          colorNameFa: it.selectedColor.nameFa,
        })),
      };

      persistUser(sessionEmail, (user) => ({
        ...user,
        orders: [order, ...user.orders],
      }));

      return order;
    },
    [sessionEmail, persistUser]
  );

  const value = useMemo(
    () => ({
      isLoggedIn: Boolean(sessionEmail && currentUser),
      isHydrated,
      user: currentUser?.profile ?? null,
      addresses: currentUser?.addresses ?? [],
      orders: currentUser?.orders ?? [],
      settings: currentUser?.settings ?? defaultSettings,
      login,
      register,
      logout,
      updateProfile,
      changePassword,
      addAddress,
      updateAddress,
      deleteAddress,
      updateSettings,
      placeOrder,
    }),
    [
      sessionEmail,
      currentUser,
      isHydrated,
      login,
      register,
      logout,
      updateProfile,
      changePassword,
      addAddress,
      updateAddress,
      deleteAddress,
      updateSettings,
      placeOrder,
    ]
  );

  return <AccountContext.Provider value={value}>{children}</AccountContext.Provider>;
}

export function useAccount() {
  const ctx = useContext(AccountContext);
  if (!ctx) throw new Error("useAccount must be used within AccountProvider");
  return ctx;
}
