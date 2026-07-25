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
import { Product } from "@/app/types";

const STORAGE_KEY = "novira:wishlist";

interface WishlistContextType {
  items: Product[];
  itemCount: number;
  isHydrated: boolean;
  isWishlisted: (productId: string) => boolean;
  toggleWishlist: (product: Product) => boolean; // returns new state (true = added)
  removeItem: (productId: string) => void;
  clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | null>(null);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Product[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Product[];
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {
      // ignore corrupt storage
    } finally {
      setIsHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // storage may be unavailable - fail silently
    }
  }, [items, isHydrated]);

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY || !e.newValue) return;
      try {
        const parsed = JSON.parse(e.newValue) as Product[];
        if (Array.isArray(parsed)) setItems(parsed);
      } catch {
        // ignore
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const isWishlisted = useCallback(
    (productId: string) => items.some((p) => p.id === productId),
    [items]
  );

  const toggleWishlist = useCallback((product: Product) => {
    let added = false;
    setItems((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        added = false;
        return prev.filter((p) => p.id !== product.id);
      }
      added = true;
      return [...prev, product];
    });
    return added;
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((p) => p.id !== productId));
  }, []);

  const clearWishlist = useCallback(() => setItems([]), []);

  const itemCount = useMemo(() => items.length, [items]);

  const value = useMemo(
    () => ({
      items,
      itemCount,
      isHydrated,
      isWishlisted,
      toggleWishlist,
      removeItem,
      clearWishlist,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [items, itemCount, isHydrated, isWishlisted, toggleWishlist, removeItem, clearWishlist]
  );

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}