"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  User,
  Package,
  MapPin,
  Settings,
  LogOut,
  Camera,
  Eye,
  Trash2,
  Edit3,
  Lock,
  Bell,
  Plus,
  X,
  Loader2,
  LogIn,
  UserPlus,
  Sparkles,
} from "lucide-react";
import { useI18n } from "@/app/i18n/Provider";
import Breadcrumb from "@/app/components/Breadcrumb";
import AccountWaveBackground from "@/app/components/account/AccountWaveBackground";
import AuthSuccessScreen from "@/app/components/account/AuthSuccessScreen";
import { useAccount, Order, Address } from "@/app/context/AccountContext";
import { useToast } from "@/app/context/Toastcontext";

const DEMO_EMAIL = "demo@novira.com";
const DEMO_PASSWORD = "demo123";
const DEMO_NAME_FA = "کاربر آزمایشی";
const DEMO_NAME_EN = "Demo User";

type Tab = "profile" | "orders" | "addresses" | "settings";

export default function AccountContent() {
  const { locale, direction } = useI18n();
  const isRTL = direction === "rtl";
  const router = useRouter();
  const searchParams = useSearchParams();
  const { showToast } = useToast();
  const {
    isLoggedIn,
    isHydrated,
    user,
    addresses,
    orders,
    settings,
    login,
    register,
    logout,
    updateProfile,
    changePassword,
    addAddress,
    updateAddress,
    deleteAddress,
    updateSettings,
  } = useAccount();

  const initialTab = (searchParams.get("tab") as Tab) || "profile";
  const [tab, setTab] = useState<Tab>(initialTab);
  const [authMode, setAuthMode] = useState<"login" | "register">("login");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [addressModal, setAddressModal] = useState<{
    mode: "add" | "edit";
    address?: Address;
  } | null>(null);

  const [profileForm, setProfileForm] = useState({ name: "", email: "", phone: "" });
  const [passwordForm, setPasswordForm] = useState({
    current: "",
    next: "",
    confirm: "",
  });
  const [authForm, setAuthForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [addressForm, setAddressForm] = useState({
    title: "",
    province: "",
    city: "",
    postalCode: "",
    details: "",
    isDefault: false,
  });
  const [saving, setSaving] = useState(false);
  const [pendingAuth, setPendingAuth] = useState<{
    type: "login" | "register";
    name: string;
  } | null>(null);

  useEffect(() => {
    if (!pendingAuth) return;
    const timer = window.setTimeout(() => setPendingAuth(null), 2000);
    return () => window.clearTimeout(timer);
  }, [pendingAuth]);

  useEffect(() => {
    if (user) {
      setProfileForm({
        name: user.name,
        email: user.email,
        phone: user.phone,
      });
    }
  }, [user]);

  useEffect(() => {
    const urlTab = searchParams.get("tab") as Tab | null;
    if (urlTab && urlTab !== tab) setTab(urlTab);
  }, [searchParams, tab]);

  const switchTab = (next: Tab) => {
    setTab(next);
    router.replace(`/${locale}/account?tab=${next}`, { scroll: false });
  };

  const tabs: { key: Tab; labelFa: string; labelEn: string; icon: typeof User }[] = [
    { key: "profile", labelFa: "پروفایل", labelEn: "Profile", icon: User },
    { key: "orders", labelFa: "سفارشات", labelEn: "Orders", icon: Package },
    { key: "addresses", labelFa: "آدرس‌ها", labelEn: "Addresses", icon: MapPin },
    { key: "settings", labelFa: "تنظیمات", labelEn: "Settings", icon: Settings },
  ];

  const getLabel = (item: { labelFa: string; labelEn: string }) =>
    isRTL ? item.labelFa : item.labelEn;

  const formatPrice = (price: number) =>
    new Intl.NumberFormat(isRTL ? "fa-IR" : "en-US").format(price);

  const formatDate = (iso: string) => {
    const date = new Date(iso);
    return date.toLocaleDateString(isRTL ? "fa-IR" : "en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const getStatusLabel = (status: Order["status"]) => {
    if (!isRTL) return status;
    switch (status) {
      case "delivered":
        return "تحویل شده";
      case "shipped":
        return "ارسال شده";
      case "cancelled":
        return "لغو شده";
      default:
        return "در حال پردازش";
    }
  };

  const getStatusColor = (status: Order["status"]) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-700";
      case "shipped":
        return "bg-blue-100 text-blue-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  const authErrorMessage = (code?: string) => {
    if (code === "user_not_found")
      return isRTL ? "کاربری با این ایمیل یافت نشد." : "No account found with this email.";
    if (code === "wrong_password")
      return isRTL ? "رمز عبور اشتباه است." : "Incorrect password.";
    if (code === "email_exists")
      return isRTL ? "این ایمیل قبلاً ثبت شده است." : "This email is already registered.";
    if (code === "weak_password")
      return isRTL ? "رمز عبور باید حداقل ۶ کاراکتر باشد." : "Password must be at least 6 characters.";
    if (code === "invalid_fields")
      return isRTL ? "لطفاً همه فیلدهای ضروری را پر کنید." : "Please fill in all required fields.";
    return isRTL ? "خطایی رخ داد. دوباره تلاش کنید." : "Something went wrong. Please try again.";
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const result = login(authForm.email, authForm.password);
    setSaving(false);
    if (result.ok) {
      setPendingAuth({ type: "login", name: result.name ?? authForm.email });
      showToast({
        variant: "success",
        title: isRTL ? "ورود موفق" : "Signed in",
        description: isRTL ? "به حساب کاربری خود خوش آمدید." : "Welcome back to your account.",
      });
    } else {
      showToast({ variant: "error", title: authErrorMessage(result.error) });
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (authForm.password !== authForm.confirmPassword) {
      showToast({
        variant: "error",
        title: isRTL ? "رمز عبور و تکرار آن یکسان نیست." : "Passwords do not match.",
      });
      return;
    }
    setSaving(true);
    const result = register({
      name: authForm.name,
      email: authForm.email,
      phone: authForm.phone,
      password: authForm.password,
    });
    setSaving(false);
    if (result.ok) {
      setPendingAuth({ type: "register", name: result.name ?? authForm.name });
      showToast({
        variant: "success",
        title: isRTL ? "ثبت‌نام موفق" : "Account created",
        description: isRTL ? "حساب شما ساخته شد." : "Your account has been created.",
      });
    } else {
      showToast({ variant: "error", title: authErrorMessage(result.error) });
    }
  };

  const handleDemoAuth = (mode: "login" | "register") => {
    setSaving(true);
    const demoName = isRTL ? DEMO_NAME_FA : DEMO_NAME_EN;

    let result = login(DEMO_EMAIL, DEMO_PASSWORD);

    if (!result.ok && result.error === "user_not_found") {
      result = register({
        name: demoName,
        email: DEMO_EMAIL,
        phone: "09120000000",
        password: DEMO_PASSWORD,
      });
    }

    setSaving(false);

    if (result.ok) {
      setPendingAuth({ type: mode, name: result.name ?? demoName });
      showToast({
        variant: "success",
        title:
          mode === "register"
            ? isRTL
              ? "ثبت‌نام آزمایشی موفق"
              : "Demo registration successful"
            : isRTL
              ? "ورود آزمایشی موفق"
              : "Demo sign-in successful",
      });
    } else {
      showToast({ variant: "error", title: authErrorMessage(result.error) });
    }
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const result = updateProfile(profileForm);
    if (result.ok) {
      showToast({
        variant: "success",
        title: isRTL ? "ذخیره شد" : "Saved",
        description: isRTL ? "اطلاعات پروفایل به‌روزرسانی شد." : "Profile updated successfully.",
      });
    }
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordForm.next !== passwordForm.confirm) {
      showToast({
        variant: "error",
        title: isRTL ? "رمز جدید و تکرار آن یکسان نیست." : "New passwords do not match.",
      });
      return;
    }
    const result = changePassword(passwordForm.current, passwordForm.next);
    if (result.ok) {
      setPasswordForm({ current: "", next: "", confirm: "" });
      showToast({
        variant: "success",
        title: isRTL ? "رمز عبور تغییر کرد" : "Password updated",
      });
    } else {
      showToast({ variant: "error", title: authErrorMessage(result.error) });
    }
  };

  const openAddAddress = () => {
    setAddressForm({
      title: "",
      province: "",
      city: "",
      postalCode: "",
      details: "",
      isDefault: addresses.length === 0,
    });
    setAddressModal({ mode: "add" });
  };

  const openEditAddress = (address: Address) => {
    setAddressForm({
      title: address.title,
      province: address.province,
      city: address.city,
      postalCode: address.postalCode,
      details: address.details,
      isDefault: address.isDefault,
    });
    setAddressModal({ mode: "edit", address });
  };

  const handleSaveAddress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!addressForm.title.trim() || !addressForm.details.trim()) {
      showToast({
        variant: "error",
        title: isRTL ? "عنوان و آدرس الزامی است." : "Title and address are required.",
      });
      return;
    }
    if (addressModal?.mode === "edit" && addressModal.address) {
      updateAddress(addressModal.address.id, addressForm);
      showToast({
        variant: "success",
        title: isRTL ? "آدرس ویرایش شد" : "Address updated",
      });
    } else {
      addAddress(addressForm);
      showToast({
        variant: "success",
        title: isRTL ? "آدرس اضافه شد" : "Address added",
      });
    }
    setAddressModal(null);
  };

  const handleLogout = () => {
    logout();
    showToast({
      variant: "info",
      title: isRTL ? "خارج شدید" : "Signed out",
    });
  };

  if (!isHydrated) {
    return (
      <main dir={direction} className="min-h-screen bg-[#faf8f5] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#808080] animate-spin" />
      </main>
    );
  }

  if (pendingAuth) {
    return (
      <AuthSuccessScreen
        type={pendingAuth.type}
        name={pendingAuth.name}
        isRTL={isRTL}
        direction={direction}
      />
    );
  }

  if (!isLoggedIn) {
    return (
      <main dir={direction} className="relative min-h-screen overflow-hidden">
        <AccountWaveBackground />

        <div className="relative z-10 min-h-screen flex flex-col justify-center px-4 sm:px-6 pt-24 sm:pt-28 pb-16">
          <div className="w-full max-w-5xl mx-auto">
            <div className="lg:hidden mb-6">
              <Breadcrumb items={[{ label: isRTL ? "حساب کاربری" : "My Account" }]} />
            </div>

            <div className="grid lg:grid-cols-[1fr_420px] gap-8 lg:gap-12 items-center">
              <div className="hidden lg:block text-start pe-4">
                <Breadcrumb
                  items={[{ label: isRTL ? "حساب کاربری" : "My Account" }]}
                  className="mb-8"
                />
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#808080]/10 border border-[#808080]/20 text-[#666666] text-[11px] font-semibold uppercase tracking-wider mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  NOVIRA Account
                </div>
              <h1 className="font-display text-4xl xl:text-5xl font-bold text-[#1a1a1a] leading-tight mb-4">
                {isRTL ? "به دنیای لوازم خانگی لوکس خوش آمدید" : "Welcome to luxury home living"}
              </h1>
              <p className="text-[#8a8577] text-base leading-relaxed max-w-md mb-8">
                {isRTL
                  ? "سفارش‌ها، آدرس‌ها و تنظیمات خود را در یک پنل مدیریت کنید."
                  : "Manage orders, addresses, and preferences in one elegant panel."}
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 rounded-xl bg-white/60 border border-[#808080]/15 text-sm text-[#1a1a1a]">
                  {isRTL ? "گارانتی معتبر" : "Valid warranty"}
                </div>
                <div className="px-4 py-2 rounded-xl bg-white/60 border border-[#808080]/15 text-sm text-[#1a1a1a]">
                  {isRTL ? "پیگیری سفارش" : "Order tracking"}
                </div>
                <div className="px-4 py-2 rounded-xl bg-white/60 border border-[#808080]/15 text-sm text-[#1a1a1a]">
                  {isRTL ? "پشتیبانی سریع" : "Fast support"}
                </div>
              </div>
            </div>

            <div className="w-full max-w-md mx-auto lg:max-w-none">
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/70 p-6 sm:p-8 shadow-[0_24px_80px_rgba(26,26,26,0.1)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-2xl bg-[#808080]/15 border border-[#808080]/25 flex items-center justify-center">
                    {authMode === "login" ? (
                      <LogIn className="w-5 h-5 text-[#808080]" />
                    ) : (
                      <UserPlus className="w-5 h-5 text-[#808080]" />
                    )}
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#1a1a1a]">
                      {authMode === "login"
                        ? isRTL
                          ? "ورود به حساب"
                          : "Sign In"
                        : isRTL
                          ? "ثبت‌نام"
                          : "Create Account"}
                    </h2>
                    <p className="text-[#8a8577] text-xs sm:text-sm">
                      {isRTL
                        ? "برای ادامه وارد شوید یا حساب جدید بسازید."
                        : "Sign in or create a new account to continue."}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 mb-6 p-1 bg-[#faf8f5]/80 rounded-xl border border-[#1a1a1a]/5">
                  <button
                    type="button"
                    onClick={() => setAuthMode("login")}
                    className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                      authMode === "login"
                        ? "bg-[#808080] text-white shadow-sm"
                        : "text-[#8a8577] hover:text-[#1a1a1a]"
                    }`}
                  >
                    {isRTL ? "ورود" : "Login"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setAuthMode("register")}
                    className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                      authMode === "register"
                        ? "bg-[#808080] text-white shadow-sm"
                        : "text-[#8a8577] hover:text-[#1a1a1a]"
                    }`}
                  >
                    {isRTL ? "ثبت‌نام" : "Register"}
                  </button>
                </div>

                {authMode === "login" ? (
                  <form onSubmit={handleLogin} className="space-y-4">
                    <Field label={isRTL ? "ایمیل" : "Email"}>
                      <input
                        type="email"
                        required
                        value={authForm.email}
                        onChange={(e) => setAuthForm((f) => ({ ...f, email: e.target.value }))}
                        className={inputClass}
                        placeholder="demo@novira.com"
                      />
                    </Field>
                    <Field label={isRTL ? "رمز عبور" : "Password"}>
                      <input
                        type="password"
                        required
                        value={authForm.password}
                        onChange={(e) => setAuthForm((f) => ({ ...f, password: e.target.value }))}
                        className={inputClass}
                        placeholder="••••••"
                      />
                    </Field>
                    <button
                      type="submit"
                      disabled={saving}
                      className="w-full py-3.5 bg-[#1a1a1a] text-white rounded-xl text-sm font-semibold hover:bg-[#808080] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                      {saving ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <>
                          <LogIn className="w-4 h-4" />
                          {isRTL ? "ورود" : "Sign In"}
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  <form onSubmit={handleRegister} className="space-y-4">
                    <Field label={isRTL ? "نام و نام خانوادگی" : "Full Name"}>
                      <input
                        required
                        value={authForm.name}
                        onChange={(e) => setAuthForm((f) => ({ ...f, name: e.target.value }))}
                        className={inputClass}
                      />
                    </Field>
                    <Field label={isRTL ? "ایمیل" : "Email"}>
                      <input
                        type="email"
                        required
                        value={authForm.email}
                        onChange={(e) => setAuthForm((f) => ({ ...f, email: e.target.value }))}
                        className={inputClass}
                      />
                    </Field>
                    <Field label={isRTL ? "شماره موبایل" : "Phone"}>
                      <input
                        value={authForm.phone}
                        onChange={(e) => setAuthForm((f) => ({ ...f, phone: e.target.value }))}
                        className={inputClass}
                      />
                    </Field>
                    <Field label={isRTL ? "رمز عبور" : "Password"}>
                      <input
                        type="password"
                        required
                        minLength={6}
                        value={authForm.password}
                        onChange={(e) => setAuthForm((f) => ({ ...f, password: e.target.value }))}
                        className={inputClass}
                      />
                    </Field>
                    <Field label={isRTL ? "تکرار رمز عبور" : "Confirm Password"}>
                      <input
                        type="password"
                        required
                        value={authForm.confirmPassword}
                        onChange={(e) =>
                          setAuthForm((f) => ({ ...f, confirmPassword: e.target.value }))
                        }
                        className={inputClass}
                      />
                    </Field>
                    <button
                      type="submit"
                      disabled={saving}
                      className="w-full py-3.5 bg-[#1a1a1a] text-white rounded-xl text-sm font-semibold hover:bg-[#808080] transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                    >
                      {saving ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <>
                          <UserPlus className="w-4 h-4" />
                          {isRTL ? "ثبت‌نام" : "Create Account"}
                        </>
                      )}
                    </button>
                  </form>
                )}

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#1a1a1a]/10" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="px-3 bg-white/80 text-[11px] text-[#8a8577] uppercase tracking-wider">
                      {isRTL ? "یا تست سریع" : "Or quick test"}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  disabled={saving}
                  onClick={() => handleDemoAuth(authMode)}
                  className="w-full py-3 rounded-xl border-2 border-dashed border-[#808080]/35 bg-[#808080]/5 text-[#666666] text-sm font-semibold hover:bg-[#808080]/10 hover:border-[#808080]/50 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  {authMode === "login"
                    ? isRTL
                      ? "ورود آزمایشی (بدون فرم)"
                      : "Demo sign-in (no form)"
                    : isRTL
                      ? "ثبت‌نام آزمایشی (بدون فرم)"
                      : "Demo register (no form)"}
                </button>

                <p className="mt-4 text-center text-[11px] text-[#8a8577] leading-relaxed">
                  {isRTL ? "حساب تست:" : "Test account:"}{" "}
                  <span className="font-mono text-[#1a1a1a]">{DEMO_EMAIL}</span> /{" "}
                  <span className="font-mono text-[#1a1a1a]">{DEMO_PASSWORD}</span>
                </p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main dir={direction} className="min-h-screen bg-[#faf8f5]">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto pt-24 sm:pt-28 pb-16">
        <Breadcrumb
          items={[{ label: isRTL ? "حساب کاربری" : "My Account" }]}
          className="mb-8"
        />
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] leading-tight mb-3">
            {isRTL ? "حساب کاربری" : "My Account"}
          </h1>
          <p className="text-[#8a8577] text-base max-w-lg leading-relaxed">
            {isRTL
              ? "مدیریت پروفایل، پیگیری سفارشات و تنظیمات."
              : "Manage your profile, track orders, and update settings."}
          </p>
          <div className="w-20 h-1 bg-[#808080] rounded-full mt-6" />
        </div>
      </div>

      <section className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto pb-16 sm:pb-24">
        <div className="grid lg:grid-cols-[260px_1fr] gap-8">
          <aside>
            <div className="bg-[#1a1a1a] rounded-2xl p-3 shadow-lg sticky top-28">
              {tabs.map((tb) => (
                <button
                  key={tb.key}
                  onClick={() => switchTab(tb.key)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    tab === tb.key
                      ? "bg-[#808080] text-white"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <tb.icon className="w-4 h-4" />
                  {getLabel(tb)}
                </button>
              ))}
              <div className="border-t border-white/10 mt-2 pt-2">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-red-400 hover:bg-red-500/10 hover:text-red-500 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  {isRTL ? "خروج از حساب" : "Sign Out"}
                </button>
              </div>
            </div>
          </aside>

          <div className="bg-white rounded-2xl border border-[#1a1a1a]/5 p-6 sm:p-8 shadow-sm min-h-[500px]">
            {tab === "profile" && (
              <div>
                <div className="flex items-center gap-5 mb-8 border-b border-[#1a1a1a]/5 pb-8">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-[#808080]/10 flex items-center justify-center border-2 border-dashed border-[#808080]/30 text-[#808080] font-bold text-2xl">
                      {profileForm.name ? profileForm.name.charAt(0).toUpperCase() : "N"}
                    </div>
                    <button
                      type="button"
                      className="absolute bottom-0 end-0 w-6 h-6 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center shadow-md hover:bg-[#808080] transition-colors"
                    >
                      <Camera className="w-3 h-3" />
                    </button>
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold text-[#1a1a1a]">
                      {profileForm.name}
                    </h2>
                    <p className="text-sm text-[#8a8577]">{profileForm.email}</p>
                  </div>
                </div>

                <form onSubmit={handleSaveProfile}>
                  <h3 className="text-lg font-bold text-[#1a1a1a] mb-6">
                    {isRTL ? "اطلاعات شخصی" : "Personal Information"}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-5 mb-6">
                    <Field label={isRTL ? "نام و نام خانوادگی" : "Full Name"}>
                      <input
                        value={profileForm.name}
                        onChange={(e) =>
                          setProfileForm((p) => ({ ...p, name: e.target.value }))
                        }
                        className={inputClass}
                      />
                    </Field>
                    <Field label={isRTL ? "شماره موبایل" : "Phone Number"}>
                      <input
                        value={profileForm.phone}
                        onChange={(e) =>
                          setProfileForm((p) => ({ ...p, phone: e.target.value }))
                        }
                        className={inputClass}
                      />
                    </Field>
                    <Field label={isRTL ? "ایمیل" : "Email Address"}>
                      <input
                        type="email"
                        value={profileForm.email}
                        disabled
                        className={`${inputClass} opacity-60 cursor-not-allowed`}
                      />
                    </Field>
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#1a1a1a] text-white rounded-xl text-sm font-semibold hover:bg-[#808080] transition-colors"
                  >
                    {isRTL ? "ذخیره تغییرات" : "Save Changes"}
                  </button>
                </form>

                <form onSubmit={handleChangePassword} className="border-t border-[#1a1a1a]/5 mt-8 pt-8">
                  <h3 className="text-lg font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-[#808080]" />
                    {isRTL ? "تغییر رمز عبور" : "Change Password"}
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-5 mb-6">
                    <Field label={isRTL ? "رمز فعلی" : "Current Password"}>
                      <input
                        type="password"
                        required
                        value={passwordForm.current}
                        onChange={(e) =>
                          setPasswordForm((p) => ({ ...p, current: e.target.value }))
                        }
                        className={inputClass}
                      />
                    </Field>
                    <Field label={isRTL ? "رمز جدید" : "New Password"}>
                      <input
                        type="password"
                        required
                        minLength={6}
                        value={passwordForm.next}
                        onChange={(e) =>
                          setPasswordForm((p) => ({ ...p, next: e.target.value }))
                        }
                        className={inputClass}
                      />
                    </Field>
                    <Field label={isRTL ? "تکرار رمز جدید" : "Confirm New Password"}>
                      <input
                        type="password"
                        required
                        value={passwordForm.confirm}
                        onChange={(e) =>
                          setPasswordForm((p) => ({ ...p, confirm: e.target.value }))
                        }
                        className={inputClass}
                      />
                    </Field>
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#1a1a1a] text-white rounded-xl text-sm font-semibold hover:bg-[#808080] transition-colors"
                  >
                    {isRTL ? "به‌روزرسانی رمز" : "Update Password"}
                  </button>
                </form>
              </div>
            )}

            {tab === "orders" && (
              <div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-6">
                  {isRTL ? "تاریخچه سفارشات" : "Order History"}
                </h3>
                {orders.length === 0 ? (
                  <p className="text-[#8a8577] text-sm py-12 text-center">
                    {isRTL ? "هنوز سفارشی ثبت نکرده‌اید." : "You have not placed any orders yet."}
                  </p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse min-w-[600px]">
                      <thead>
                        <tr className="border-b border-[#1a1a1a]/10 text-[#8a8577] text-xs uppercase">
                          <th className="py-3 px-4 font-medium text-start">
                            {isRTL ? "شماره سفارش" : "Order ID"}
                          </th>
                          <th className="py-3 px-4 font-medium text-start">
                            {isRTL ? "تاریخ" : "Date"}
                          </th>
                          <th className="py-3 px-4 font-medium text-start">
                            {isRTL ? "وضعیت" : "Status"}
                          </th>
                          <th className="py-3 px-4 font-medium text-start">
                            {isRTL ? "مبلغ" : "Total"}
                          </th>
                          <th className="py-3 px-4 font-medium text-center">
                            {isRTL ? "عملیات" : "Action"}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {orders.map((order) => (
                          <tr
                            key={order.id}
                            className="border-b border-[#1a1a1a]/5 hover:bg-[#faf8f5] transition-colors"
                          >
                            <td className="py-4 px-4 font-bold text-[#1a1a1a]">{order.id}</td>
                            <td className="py-4 px-4 text-[#8a8577]">{formatDate(order.date)}</td>
                            <td className="py-4 px-4">
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}
                              >
                                {getStatusLabel(order.status)}
                              </span>
                            </td>
                            <td className="py-4 px-4 font-medium text-[#1a1a1a]">
                              {formatPrice(order.total)} {isRTL ? "تومان" : "IRR"}
                            </td>
                            <td className="py-4 px-4 text-center">
                              <button
                                type="button"
                                onClick={() => setSelectedOrder(order)}
                                className="text-[#808080] hover:text-[#1a1a1a] inline-flex items-center gap-1 text-xs font-medium"
                              >
                                <Eye className="w-4 h-4" />
                                {isRTL ? "مشاهده" : "View"}
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {tab === "addresses" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-[#1a1a1a]">
                    {isRTL ? "آدرس‌های من" : "My Addresses"}
                  </h3>
                  <button
                    type="button"
                    onClick={openAddAddress}
                    className="flex items-center gap-2 text-sm font-semibold text-[#808080] hover:text-[#1a1a1a] transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    {isRTL ? "افزودن آدرس" : "Add Address"}
                  </button>
                </div>
                {addresses.length === 0 ? (
                  <p className="text-[#8a8577] text-sm py-12 text-center">
                    {isRTL ? "آدرسی ثبت نشده است." : "No addresses saved yet."}
                  </p>
                ) : (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {addresses.map((addr) => (
                      <div
                        key={addr.id}
                        className="border border-[#1a1a1a]/10 rounded-xl p-5 hover:border-[#808080] transition-colors relative"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <MapPin className="w-5 h-5 text-[#808080]" />
                          <h4 className="font-bold text-[#1a1a1a]">{addr.title}</h4>
                          {addr.isDefault && (
                            <span className="text-[10px] px-2 py-0.5 bg-[#808080]/10 text-[#808080] rounded-full">
                              {isRTL ? "پیش‌فرض" : "Default"}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-[#8a8577] leading-relaxed mb-6">
                          {addr.province}، {addr.city} — {addr.postalCode}
                          <br />
                          {addr.details}
                        </p>
                        <div className="flex gap-3 absolute bottom-4 end-5">
                          <button
                            type="button"
                            onClick={() => openEditAddress(addr)}
                            className="text-[#8a8577] hover:text-[#808080] transition-colors"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              deleteAddress(addr.id);
                              showToast({
                                variant: "info",
                                title: isRTL ? "آدرس حذف شد" : "Address removed",
                              });
                            }}
                            className="text-[#8a8577] hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {tab === "settings" && (
              <div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-6">
                  {isRTL ? "تنظیمات حساب" : "Account Settings"}
                </h3>
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-[#8a8577] uppercase mb-4 flex items-center gap-2">
                    <Bell className="w-4 h-4" />
                    {isRTL ? "اعلان‌ها" : "Notifications"}
                  </h4>
                  <div className="space-y-4">
                    <ToggleRow
                      label={isRTL ? "اعلان‌های ایمیلی" : "Email Notifications"}
                      checked={settings.notifEmail}
                      onChange={(v) => updateSettings({ notifEmail: v })}
                    />
                    <ToggleRow
                      label={isRTL ? "اعلان‌های پیامکی" : "SMS Notifications"}
                      checked={settings.notifSms}
                      onChange={(v) => updateSettings({ notifSms: v })}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {selectedOrder && (
        <Modal onClose={() => setSelectedOrder(null)} title={selectedOrder.id} isRTL={isRTL}>
          <div className="space-y-4 text-sm">
            <div className="flex justify-between text-[#8a8577]">
              <span>{isRTL ? "تاریخ" : "Date"}</span>
              <span className="text-[#1a1a1a]">{formatDate(selectedOrder.date)}</span>
            </div>
            <div className="flex justify-between text-[#8a8577]">
              <span>{isRTL ? "وضعیت" : "Status"}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${getStatusColor(selectedOrder.status)}`}>
                {getStatusLabel(selectedOrder.status)}
              </span>
            </div>
            <div className="flex justify-between text-[#8a8577]">
              <span>{isRTL ? "آدرس" : "Address"}</span>
              <span className="text-[#1a1a1a] text-end max-w-[60%]">
                {selectedOrder.shippingAddress}
              </span>
            </div>
            <div className="border-t border-[#1a1a1a]/10 pt-4 space-y-3">
              {selectedOrder.items.map((item, i) => (
                <div key={i} className="flex justify-between gap-4">
                  <span className="text-[#1a1a1a]">
                    {isRTL && item.productNameFa ? item.productNameFa : item.productName} ×{" "}
                    {item.quantity.toLocaleString(isRTL ? "fa-IR" : "en-US")}
                  </span>
                  <span className="text-[#808080] shrink-0">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
            <div className="border-t border-[#1a1a1a]/10 pt-4 flex justify-between font-bold text-[#1a1a1a]">
              <span>{isRTL ? "جمع کل" : "Total"}</span>
              <span>
                {formatPrice(selectedOrder.total)} {isRTL ? "تومان" : "IRR"}
              </span>
            </div>
          </div>
        </Modal>
      )}

      {addressModal && (
        <Modal
          onClose={() => setAddressModal(null)}
          title={
            addressModal.mode === "add"
              ? isRTL
                ? "افزودن آدرس"
                : "Add Address"
              : isRTL
                ? "ویرایش آدرس"
                : "Edit Address"
          }
          isRTL={isRTL}
        >
          <form onSubmit={handleSaveAddress} className="space-y-4">
            <Field label={isRTL ? "عنوان (مثلاً خانه)" : "Title (e.g. Home)"}>
              <input
                required
                value={addressForm.title}
                onChange={(e) => setAddressForm((f) => ({ ...f, title: e.target.value }))}
                className={inputClass}
              />
            </Field>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label={isRTL ? "استان" : "Province"}>
                <input
                  value={addressForm.province}
                  onChange={(e) => setAddressForm((f) => ({ ...f, province: e.target.value }))}
                  className={inputClass}
                />
              </Field>
              <Field label={isRTL ? "شهر" : "City"}>
                <input
                  value={addressForm.city}
                  onChange={(e) => setAddressForm((f) => ({ ...f, city: e.target.value }))}
                  className={inputClass}
                />
              </Field>
            </div>
            <Field label={isRTL ? "کد پستی" : "Postal Code"}>
              <input
                value={addressForm.postalCode}
                onChange={(e) => setAddressForm((f) => ({ ...f, postalCode: e.target.value }))}
                className={inputClass}
              />
            </Field>
            <Field label={isRTL ? "آدرس کامل" : "Full Address"}>
              <textarea
                required
                rows={3}
                value={addressForm.details}
                onChange={(e) => setAddressForm((f) => ({ ...f, details: e.target.value }))}
                className={`${inputClass} resize-none`}
              />
            </Field>
            <label className="flex items-center gap-2 text-sm text-[#1a1a1a] cursor-pointer">
              <input
                type="checkbox"
                checked={addressForm.isDefault}
                onChange={(e) =>
                  setAddressForm((f) => ({ ...f, isDefault: e.target.checked }))
                }
                className="rounded border-[#1a1a1a]/20"
              />
              {isRTL ? "آدرس پیش‌فرض" : "Set as default address"}
            </label>
            <button
              type="submit"
              className="w-full py-3 bg-[#808080] text-white rounded-xl text-sm font-semibold hover:bg-[#666666] transition-colors"
            >
              {isRTL ? "ذخیره آدرس" : "Save Address"}
            </button>
          </form>
        </Modal>
      )}
    </main>
  );
}

const inputClass =
  "w-full px-4 py-3 bg-[#faf8f5] border border-[#1a1a1a]/10 rounded-xl text-sm text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#808080]/20";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-medium text-[#8a8577] mb-2">{label}</label>
      {children}
    </div>
  );
}

function ToggleRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between p-4 bg-[#faf8f5] rounded-xl">
      <span className="text-sm font-medium text-[#1a1a1a]">{label}</span>
      <button
        type="button"
        onClick={() => onChange(!checked)}
        className={`w-12 h-6 rounded-full transition-colors relative ${
          checked ? "bg-[#808080]" : "bg-[#1a1a1a]/20"
        }`}
      >
        <span
          className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${
            checked ? "end-1" : "start-1"
          }`}
        />
      </button>
    </div>
  );
}

function Modal({
  children,
  title,
  onClose,
  isRTL,
}: {
  children: React.ReactNode;
  title: string;
  onClose: () => void;
  isRTL: boolean;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div
        dir={isRTL ? "rtl" : "ltr"}
        className="bg-white rounded-2xl w-full max-w-md p-6 shadow-xl relative max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold text-[#1a1a1a]">{title}</h3>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-[#faf8f5] flex items-center justify-center text-[#8a8577]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
