"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { CartItem, Product, ProductColor } from "@/app/types";

const STORAGE_KEY = "novira:cart";

interface CartContextType {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  isHydrated: boolean;
  addItem: (product: Product, color: ProductColor, quantity?: number) => void;
  removeItem: (productId: string, colorName: string) => void;
  updateQuantity: (productId: string, colorName: string, quantity: number) => void;
  clearCart: () => void;
  isInCart: (productId: string) => boolean;
}

const CartContext = createContext<CartContextType | null>(null);

function lineKey(productId: string, colorName: string) {
  return `${productId}::${colorName}`;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load persisted cart on mount
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[];
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {
      // ignore corrupt storage
    } finally {
      setIsHydrated(true);
    }
  }, []);

  // Persist on change (skip the very first render before hydration)
  useEffect(() => {
    if (!isHydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // storage may be unavailable (private mode, quota) - fail silently
    }
  }, [items, isHydrated]);

  // Cross-tab sync
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY || !e.newValue) return;
      try {
        const parsed = JSON.parse(e.newValue) as CartItem[];
        if (Array.isArray(parsed)) setItems(parsed);
      } catch {
        // ignore
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const addItem = useCallback(
    (product: Product, color: ProductColor, quantity: number = 1) => {
      setItems((prev) => {
        const key = lineKey(product.id, color.name);
        const existing = prev.find(
          (it) => lineKey(it.product.id, it.selectedColor.name) === key
        );
        if (existing) {
          return prev.map((it) =>
            lineKey(it.product.id, it.selectedColor.name) === key
              ? { ...it, quantity: it.quantity + quantity }
              : it
          );
        }
        return [...prev, { product, quantity, selectedColor: color }];
      });
    },
    []
  );

  const removeItem = useCallback((productId: string, colorName: string) => {
    setItems((prev) =>
      prev.filter(
        (it) => lineKey(it.product.id, it.selectedColor.name) !== lineKey(productId, colorName)
      )
    );
  }, []);

  const updateQuantity = useCallback(
    (productId: string, colorName: string, quantity: number) => {
      if (quantity <= 0) {
        removeItem(productId, colorName);
        return;
      }
      setItems((prev) =>
        prev.map((it) =>
          lineKey(it.product.id, it.selectedColor.name) === lineKey(productId, colorName)
            ? { ...it, quantity }
            : it
        )
      );
    },
    [removeItem]
  );

  const clearCart = useCallback(() => setItems([]), []);

  const isInCart = useCallback(
    (productId: string) => items.some((it) => it.product.id === productId),
    [items]
  );

  const itemCount = useMemo(
    () => items.reduce((sum, it) => sum + it.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, it) => sum + it.product.price * it.quantity, 0),
    [items]
  );

  const value = useMemo(
    () => ({
      items,
      itemCount,
      subtotal,
      isHydrated,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      isInCart,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [items, itemCount, subtotal, isHydrated, addItem, removeItem, updateQuantity, clearCart, isInCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}