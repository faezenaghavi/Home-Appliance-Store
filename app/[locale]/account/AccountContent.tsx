"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { User, Package, MapPin, Settings, LogOut, Home, ChevronRight, ChevronLeft, Camera, Eye, Trash2, Edit3, Lock, Bell, Globe2, DollarSign, Plus } from "lucide-react";
import { useI18n } from "@/app/i18n/Provider";
import Link from "next/link";

type Tab = "profile" | "orders" | "addresses" | "settings";

const mockOrders = [
  { id: "WV-10234", date: "2026-07-01", status: "delivered", total: 34900000, items: 2 },
  { id: "WV-10198", date: "2026-06-12", status: "shipped", total: 19900000, items: 1 },
  { id: "WV-10120", date: "2026-05-03", status: "processing", total: 27900000, items: 3 },
];

const mockAddresses = [
  { id: 1, title: "خانه", details: "تهران، خیابان ولیعصر، کوچه شماره ۴، پلاک ۱۲" },
  { id: 2, title: "محل کار", details: "تهران، سعادت آباد، بلوار دریا، برج آبی، طبقه ۵" },
];

export default function AccountContent() {
  const { locale, direction } = useI18n();
  const isRTL = direction === "rtl";
  const searchParams = useSearchParams();
  const initialTab = (searchParams.get("tab") as Tab) || "profile";
  const [tab, setTab] = useState<Tab>(initialTab);
  const [profile, setProfile] = useState({ name: "Ali Rezaei", email: "ali@novira.ir", phone: "09121234567" });
  const [notifEmail, setNotifEmail] = useState(true);
  const [notifSms, setNotifSms] = useState(false);

  const tabs: { key: Tab; labelFa: string; labelEn: string; icon: typeof User }[] = [
    { key: "profile", labelFa: "پروفایل", labelEn: "Profile", icon: User },
    { key: "orders", labelFa: "سفارشات", labelEn: "Orders", icon: Package },
    { key: "addresses", labelFa: "آدرس‌ها", labelEn: "Addresses", icon: MapPin },
    { key: "settings", labelFa: "تنظیمات", labelEn: "Settings", icon: Settings },
  ];

  const getLabel = (item: { labelFa: string; labelEn: string }) => isRTL ? item.labelFa : item.labelEn;
  const formatPrice = (price: number) => new Intl.NumberFormat(isRTL ? 'fa-IR' : 'en-US').format(price);
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered": return "bg-green-100 text-green-700";
      case "shipped": return "bg-blue-100 text-blue-700";
      case "processing": return "bg-yellow-100 text-yellow-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <main dir={direction} className="min-h-screen bg-[#faf8f5]">
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto pt-24 sm:pt-28 pb-16">
        
        {/* Breadcrumb */}
        <div className="text-sm text-[#8a8577] flex items-center gap-2 mb-8">
          <Link href={`/${locale}`} className="hover:text-[#c4a882] transition-colors flex items-center gap-1.5">
            <Home className="w-3.5 h-3.5" />{isRTL ? "خانه" : "Home"}
          </Link>
          {isRTL ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
          <span className="text-[#1a1a1a] font-medium">{isRTL ? "حساب کاربری" : "My Account"}</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#1a1a1a] leading-tight mb-3">{isRTL ? "حساب کاربری" : "My Account"}</h1>
          <p className="text-[#8a8577] text-base max-w-lg leading-relaxed">{isRTL ? "مدیریت پروفایل، پیگیری سفارشات و تنظیمات." : "Manage your profile, track orders, and update settings."}</p>
          <div className="w-20 h-1 bg-[#c4a882] rounded-full mt-6"></div>
        </div>
      </div>

      {/* Account Grid */}
      <section className="px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl mx-auto pb-16 sm:pb-24">
        <div className="grid lg:grid-cols-[260px_1fr] gap-8">
          
          {/* Dark Sidebar */}
          <aside>
            <div className="bg-[#1a1a1a] rounded-2xl p-3 shadow-lg sticky top-28">
              {tabs.map((tb) => (
                <button 
                  key={tb.key} 
                  onClick={() => setTab(tb.key)} 
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${tab === tb.key ? "bg-[#c4a882] text-[#1a1a1a]" : "text-white/70 hover:text-white hover:bg-white/10"}`}
                >
                  <tb.icon className="w-4 h-4" />{getLabel(tb)}
                </button>
              ))}
              <div className="border-t border-white/10 mt-2 pt-2">
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-red-400 hover:bg-red-500/10 hover:text-red-500 transition-colors">
                  <LogOut className="w-4 h-4" />{isRTL ? "خروج از حساب" : "Sign Out"}
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="bg-white rounded-2xl border border-[#1a1a1a]/5 p-6 sm:p-8 shadow-sm min-h-[500px]">
            
            {tab === "profile" && (
              <div>
                {/* Avatar & User Quick Info */}
                <div className="flex items-center gap-5 mb-8 border-b border-[#1a1a1a]/5 pb-8">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full bg-[#c4a882]/10 flex items-center justify-center border-2 border-dashed border-[#c4a882]/30 text-[#c4a882] font-bold text-2xl">
                      {profile.name ? profile.name.charAt(0) : "N"}
                    </div>
                    <button className="absolute bottom-0 end-0 w-6 h-6 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center shadow-md hover:bg-[#c4a882] transition-colors">
                      <Camera className="w-3 h-3" />
                    </button>
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold text-[#1a1a1a]">{profile.name || (isRTL ? "کاربر نوویرا" : "Novira User")}</h2>
                    <p className="text-sm text-[#8a8577]">{profile.email || "user@novira.ir"}</p>
                  </div>
                </div>

                {/* Form */}
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-6">{isRTL ? "اطلاعات شخصی" : "Personal Information"}</h3>
                <div className="grid sm:grid-cols-2 gap-5 mb-6">
                  <Field label={isRTL ? "نام و نام خانوادگی" : "Full Name"}>
                    <input value={profile.name} onChange={(e) => setProfile((p) => ({ ...p, name: e.target.value }))} className="w-full px-4 py-3 bg-[#faf8f5] border border-[#1a1a1a]/10 rounded-xl text-sm text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#c4a882]/20" />
                  </Field>
                  <Field label={isRTL ? "شماره موبایل" : "Phone Number"}>
                    <input value={profile.phone} onChange={(e) => setProfile((p) => ({ ...p, phone: e.target.value }))} className="w-full px-4 py-3 bg-[#faf8f5] border border-[#1a1a1a]/10 rounded-xl text-sm text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#c4a882]/20" />
                  </Field>
                  <Field label={isRTL ? "ایمیل" : "Email Address"}>
                    <input type="email" value={profile.email} onChange={(e) => setProfile((p) => ({ ...p, email: e.target.value }))} className="w-full px-4 py-3 bg-[#faf8f5] border border-[#1a1a1a]/10 rounded-xl text-sm text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#c4a882]/20" />
                  </Field>
                </div>
                <button className="px-6 py-3 bg-[#1a1a1a] text-white rounded-xl text-sm font-semibold hover:bg-[#c4a882] transition-colors">
                  {isRTL ? "ذخیره تغییرات" : "Save Changes"}
                </button>

                {/* Password Section */}
                <div className="border-t border-[#1a1a1a]/5 mt-8 pt-8">
                  <h3 className="text-lg font-bold text-[#1a1a1a] mb-4 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-[#c4a882]" />{isRTL ? "تغییر رمز عبور" : "Change Password"}
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-5 mb-6">
                    <Field label={isRTL ? "رمز فعلی" : "Current Password"}>
                      <input type="password" className="w-full px-4 py-3 bg-[#faf8f5] border border-[#1a1a1a]/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#c4a882]/20" />
                    </Field>
                    <Field label={isRTL ? "رمز جدید" : "New Password"}>
                      <input type="password" className="w-full px-4 py-3 bg-[#faf8f5] border border-[#1a1a1a]/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#c4a882]/20" />
                    </Field>
                    <Field label={isRTL ? "تکرار رمز جدید" : "Confirm New Password"}>
                      <input type="password" className="w-full px-4 py-3 bg-[#faf8f5] border border-[#1a1a1a]/10 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#c4a882]/20" />
                    </Field>
                  </div>
                  <button className="px-6 py-3 bg-[#1a1a1a] text-white rounded-xl text-sm font-semibold hover:bg-[#c4a882] transition-colors">
                    {isRTL ? "به‌روزرسانی رمز" : "Update Password"}
                  </button>
                </div>
              </div>
            )}

            {tab === "orders" && (
              <div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-6">{isRTL ? "تاریخچه سفارشات" : "Order History"}</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-right border-collapse min-w-[600px]">
                    <thead>
                      <tr className="border-b border-[#1a1a1a]/10 text-[#8a8577] text-xs uppercase">
                        <th className="py-3 px-4 font-medium">{isRTL ? "شماره سفارش" : "Order ID"}</th>
                        <th className="py-3 px-4 font-medium">{isRTL ? "تاریخ" : "Date"}</th>
                        <th className="py-3 px-4 font-medium">{isRTL ? "وضعیت" : "Status"}</th>
                        <th className="py-3 px-4 font-medium">{isRTL ? "مبلغ" : "Total"}</th>
                        <th className="py-3 px-4 font-medium text-center">{isRTL ? "عملیات" : "Action"}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockOrders.map((order) => (
                        <tr key={order.id} className="border-b border-[#1a1a1a]/5 hover:bg-[#faf8f5] transition-colors">
                          <td className="py-4 px-4 font-bold text-[#1a1a1a]">{order.id}</td>
                          <td className="py-4 px-4 text-[#8a8577]">{order.date}</td>
                          <td className="py-4 px-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${getStatusColor(order.status)}`}>
                              {isRTL ? 
                                (order.status === 'delivered' ? 'تحویل شده' : order.status === 'shipped' ? 'ارسال شده' : 'در حال پردازش') 
                                : order.status}
                            </span>
                          </td>
                          <td className="py-4 px-4 font-medium text-[#1a1a1a]">
                            {formatPrice(order.total)} {isRTL ? "تومان" : "IRR"}
                          </td>
                          <td className="py-4 px-4 text-center">
                            <button className="text-[#c4a882] hover:text-[#1a1a1a] flex items-center gap-1 mx-auto text-xs font-medium">
                              <Eye className="w-4 h-4" /> {isRTL ? "مشاهده" : "View"}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {tab === "addresses" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-[#1a1a1a]">{isRTL ? "آدرس‌های من" : "My Addresses"}</h3>
                  <button className="flex items-center gap-2 text-sm font-semibold text-[#c4a882] hover:text-[#1a1a1a] transition-colors">
                    <Plus className="w-4 h-4" /> {isRTL ? "افزودن آدرس" : "Add Address"}
                  </button>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {mockAddresses.map((addr) => (
                    <div key={addr.id} className="border border-[#1a1a1a]/10 rounded-xl p-5 hover:border-[#c4a882] transition-colors relative">
                      <div className="flex items-center gap-2 mb-3">
                        <MapPin className="w-5 h-5 text-[#c4a882]" />
                        <h4 className="font-bold text-[#1a1a1a]">{addr.title}</h4>
                      </div>
                      <p className="text-sm text-[#8a8577] leading-relaxed mb-6">{addr.details}</p>
                      <div className="flex gap-3 absolute bottom-4 end-5">
                        <button className="text-[#8a8577] hover:text-[#c4a882] transition-colors">
                          <Edit3 className="w-4 h-4" />
                        </button>
                        <button className="text-[#8a8577] hover:text-red-500 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tab === "settings" && (
              <div>
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-6">{isRTL ? "تنظیمات حساب" : "Account Settings"}</h3>
                
                {/* Notifications */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-[#8a8577] uppercase mb-4 flex items-center gap-2">
                    <Bell className="w-4 h-4" /> {isRTL ? "اعلان‌ها" : "Notifications"}
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-[#faf8f5] rounded-xl">
                      <span className="text-sm font-medium text-[#1a1a1a]">{isRTL ? "اعلان‌های ایمیلی" : "Email Notifications"}</span>
                      <button 
                        onClick={() => setNotifEmail(!notifEmail)}
                        className={`w-12 h-6 rounded-full transition-colors relative ${notifEmail ? 'bg-[#c4a882]' : 'bg-[#1a1a1a]/20'}`}
                      >
                        <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${notifEmail ? 'end-1' : 'start-1'}`}></span>
                      </button>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-[#faf8f5] rounded-xl">
                      <span className="text-sm font-medium text-[#1a1a1a]">{isRTL ? "اعلان‌های پیامکی" : "SMS Notifications"}</span>
                      <button 
                        onClick={() => setNotifSms(!notifSms)}
                        className={`w-12 h-6 rounded-full transition-colors relative ${notifSms ? 'bg-[#c4a882]' : 'bg-[#1a1a1a]/20'}`}
                      >
                        <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${notifSms ? 'end-1' : 'start-1'}`}></span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Preferences */}
                <div className="border-t border-[#1a1a1a]/5 pt-8">
                  <h4 className="text-sm font-bold text-[#8a8577] uppercase mb-4 flex items-center gap-2">
                    <Settings className="w-4 h-4" /> {isRTL ? "ترجیحات" : "Preferences"}
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label={isRTL ? "زبان نمایش" : "Display Language"}>
                      <div className="relative">
                        <Globe2 className="w-4 h-4 absolute top-1/2 -translate-y-1/2 start-4 text-[#8a8577]" />
                        <select className="w-full py-3 ps-10 pe-4 bg-[#faf8f5] border border-[#1a1a1a]/10 rounded-xl text-sm text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#c4a882]/20 appearance-none">
                          <option>{isRTL ? "فارسی" : "English"}</option>
                        </select>
                      </div>
                    </Field>
                    <Field label={isRTL ? "واحد پولی" : "Currency"}>
                      <div className="relative">
                        <DollarSign className="w-4 h-4 absolute top-1/2 -translate-y-1/2 start-4 text-[#8a8577]" />
                        <select className="w-full py-3 ps-10 pe-4 bg-[#faf8f5] border border-[#1a1a1a]/10 rounded-xl text-sm text-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#c4a882]/20 appearance-none">
                          <option>{isRTL ? "تومان (IRR)" : "Toman (IRR)"}</option>
                        </select>
                      </div>
                    </Field>
                  </div>
                </div>
              </div>
            )}
            
          </div>
        </div>
      </section>
    </main>
  );
}

// Helper Component for Form Fields
function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-medium text-[#8a8577] mb-2">{label}</label>
      {children}
    </div>
  );
}