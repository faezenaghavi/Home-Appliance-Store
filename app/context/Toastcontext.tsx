"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  ReactNode,
} from "react";
import { CheckCircle2, XCircle, Info, X, Heart, ShoppingBag } from "lucide-react";

export type ToastVariant = "success" | "error" | "info" | "cart" | "wishlist";

export interface Toast {
  id: string;
  title: string;
  description?: string;
  variant: ToastVariant;
}

interface ToastContextType {
  showToast: (toast: Omit<Toast, "id">) => void;
}

const ToastContext = createContext<ToastContextType | null>(null);

const ICONS: Record<ToastVariant, typeof CheckCircle2> = {
  success: CheckCircle2,
  error: XCircle,
  info: Info,
  cart: ShoppingBag,
  wishlist: Heart,
};

// استایل‌های اختصاصی برای هر نوع اعلان
const VARIANT_STYLES: Record<ToastVariant, { container: string; iconBg: string; iconColor: string }> = {
  success: {
    container: "bg-white border-emerald-100 shadow-[0_10px_40px_rgba(16,185,129,0.15)]",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600"
  },
  cart: {
    container: "bg-gradient-to-r from-white to-emerald-50 border-emerald-100 shadow-[0_10px_40px_rgba(16,185,129,0.15)]",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600"
  },
  wishlist: {
    container: "bg-gradient-to-r from-white to-emerald-50 border-emerald-100 shadow-[0_10px_40px_rgba(16,185,129,0.15)]",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600"
  },
  error: {
    container: "bg-white border-red-100 shadow-[0_10px_40px_rgba(239,68,68,0.15)]",
    iconBg: "bg-red-100",
    iconColor: "text-red-600"
  },
  info: {
    container: "bg-white border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.08)]",
    iconBg: "bg-slate-100",
    iconColor: "text-slate-600"
  }
};

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const timers = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    const timer = timers.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timers.current.delete(id);
    }
  }, []);

  const showToast = useCallback(
    (toast: Omit<Toast, "id">) => {
      const id = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
      setToasts((prev) => [...prev.slice(-2), { ...toast, id }]);
      const timer = setTimeout(() => dismiss(id), 3200);
      timers.current.set(id, timer);
    },
    [dismiss]
  );

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="fixed bottom-5 right-5 z-[100] flex flex-col gap-2.5 w-[calc(100vw-2.5rem)] max-w-sm pointer-events-none"
      >
        {toasts.map((toast) => {
          const Icon = ICONS[toast.variant];
          const styles = VARIANT_STYLES[toast.variant];
          
          return (
            <div
              key={toast.id}
              role="status"
              className={`pointer-events-auto flex items-start gap-3 rounded-2xl border backdrop-blur-md px-4 py-3.5 animate-fadeUp ${styles.container}`}
            >
              <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center ${styles.iconBg}`}>
                <Icon className={`w-4 h-4 ${styles.iconColor}`} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold leading-snug text-gray-900">
                  {toast.title}
                </p>
                {toast.description && (
                  <p className="text-xs text-gray-500 mt-0.5 leading-snug">
                    {toast.description}
                  </p>
                )}
              </div>
              <button
                onClick={() => dismiss(toast.id)}
                className="shrink-0 text-gray-400 hover:text-gray-700 transition-colors"
                aria-label="Dismiss notification"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within ToastProvider");
  return ctx;
}