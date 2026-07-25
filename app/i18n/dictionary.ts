// app/i18n/dictionary.ts
import { Locale } from "./config";

export interface Dictionary {
  brand: {
    name: string;
    slogan: string;
    description: string;
  };
  nav: {
    about: string;
    features: string;
    categories: string;
    products: string;
    support: string;
    blog: string;
    contact: string;
    explore: string;
    search: string;
    searchPlaceholder: string;
    cart: string;
    wishlist: string;
    account: string;
    orders: string;
    compare: string;
  };
  hero: {
    eyebrow: string;
    badge: string;
    title: string;
    titleHighlight: string;
    titleTail: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trust: string;
    delivery: string;
    warranty: string;
    returns: string;
    statCraft: string;
    statCraftLabel: string;
    statQuiet: string;
    statQuietLabel: string;
    statCustomers: string;
    statCustomersLabel: string;
  };
  categories: {
    title: string;
    subtitle: string;
    viewAll: string;
  };
  products: {
    title: string;
    subtitle: string;
    bestsellers: string;
    bestsellersSubtitle: string;
    newArrivals: string;
    newArrivalsSubtitle: string;
    specialOffers: string;
    specialOffersSubtitle: string;
    featured: string;
    addToCart: string;
    buyNow: string;
    outOfStock: string;
    inStock: string;
    onlyLeft: string;
    filter: string;
    sort: string;
    price: string;
    brand: string;
    rating: string;
    reviews: string;
    quickView: string;
    compare: string;
    viewDetails: string;
    freeShipping: string;
    resultsCount: string;
    noResults: string;
    noResultsDesc: string;
  };
  product: {
    specifications: string;
    description: string;
    reviews: string;
    related: string;
    warranty: string;
    delivery: string;
    return: string;
    quantity: string;
    color: string;
    share: string;
    sku: string;
    brand: string;
    model: string;
    inStock: string;
    outOfStock: string;
    lowStock: string;
    addToCart: string;
    buyNow: string;
    addToWishlist: string;
    removeFromWishlist: string;
    zoomHint: string;
    backToProducts: string;
  };
  cart: {
    title: string;
    empty: string;
    emptyDesc: string;
    continueShopping: string;
    subtotal: string;
    shipping: string;
    shippingFree: string;
    total: string;
    checkout: string;
    remove: string;
    update: string;
    coupon: string;
    apply: string;
    itemSingular: string;
    itemPlural: string;
  };
  checkout: {
    title: string;
    shippingInfo: string;
    payment: string;
    orderSummary: string;
    placeOrder: string;
    securePayment: string;
  };
  wishlist: {
    title: string;
    empty: string;
    emptyDesc: string;
    moveAllToCart: string;
  };
  footer: {
    brandDesc: string;
    newsletter: string;
    newsletterDesc: string;
    emailPlaceholder: string;
    subscribe: string;
    subscribed: string;
    links: string;
    categories: string;
    support: string;
    about: string;
    contact: string;
    faq: string;
    shipping: string;
    returns: string;
    rights: string;
    paymentMethods: string;
    privacy: string;
    terms: string;
  };
  common: {
    loading: string;
    error: string;
    success: string;
    close: string;
    save: string;
    cancel: string;
    delete: string;
    edit: string;
    view: string;
    more: string;
    less: string;
    seeAll: string;
    popular: string;
    new: string;
    sale: string;
    off: string;
    currency: string;
    addedToCart: string;
    addedToCartDesc: string;
    addedToWishlist: string;
    removedFromWishlist: string;
  };
}

const en: Dictionary = {
  brand: {
    name: "Novira",
    slogan: "Quiet Engineering for the Modern Home",
    description:
      "Novira designs electronic home appliances that disappear into daily life - precise, whisper-quiet, and built to last.",
  },
  nav: {
    about: "About",
    features: "Craft",
    categories: "Categories",
    products: "Shop",
    support: "Support",
    blog: "Journal",
    contact: "Contact",
    explore: "Shop Novira",
    search: "Search appliances...",
    searchPlaceholder: "What are you looking for?",
    cart: "Cart",
    wishlist: "Wishlist",
    account: "My Account",
    orders: "My Orders",
    compare: "Compare",
  },
  hero: {
    eyebrow: "Novira - Est. 2020",
    badge: "The Aria Collection, 2026",
    title: "Appliances engineered",
    titleHighlight: "for silence",
    titleTail: "and precision.",
    subtitle:
      "Every Novira object is tuned, weighted and finished by hand-checked machines - so your home runs quietly, efficiently, and exactly as it should.",
    ctaPrimary: "Shop the Collection",
    ctaSecondary: "Watch the Film",
    trust: "Trusted in 50,000+ homes worldwide",
    delivery: "White-Glove Delivery",
    warranty: "5-Year Warranty",
    returns: "30-Day Trial",
    statCraft: "128",
    statCraftLabel: "Engineering checkpoints per unit",
    statQuiet: "19dB",
    statQuietLabel: "Quieter than a whispered room",
    statCustomers: "50K+",
    statCustomersLabel: "Homes across 24 countries",
  },
  categories: {
    title: "Shop by Category",
    subtitle: "Every room, considered - find the piece built for its space",
    viewAll: "View All Categories",
  },
  products: {
    title: "Signature Pieces",
    subtitle: "Handpicked from the current Novira lineup",
    bestsellers: "Most Loved",
    bestsellersSubtitle: "The pieces our customers reorder for every room",
    newArrivals: "New This Season",
    newArrivalsSubtitle: "Fresh from the Novira design studio",
    specialOffers: "Considered Offers",
    specialOffersSubtitle: "A limited selection, priced for a limited time",
    featured: "Featured",
    addToCart: "Add to Cart",
    buyNow: "Buy Now",
    outOfStock: "Out of Stock",
    inStock: "In Stock",
    onlyLeft: "Only {count} left",
    filter: "Filter",
    sort: "Sort by",
    price: "Price",
    brand: "Brand",
    rating: "Rating",
    reviews: "reviews",
    quickView: "Quick View",
    compare: "Compare",
    viewDetails: "View Details",
    freeShipping: "Free Shipping",
    resultsCount: "pieces",
    noResults: "No pieces match your filters",
    noResultsDesc: "Try adjusting or clearing your filters to see more of the collection.",
  },
  product: {
    specifications: "Specifications",
    description: "Description",
    reviews: "Customer Reviews",
    related: "You May Also Like",
    warranty: "Warranty",
    delivery: "Delivery Info",
    return: "Return Policy",
    quantity: "Quantity",
    color: "Finish",
    share: "Share",
    sku: "SKU",
    brand: "Brand",
    model: "Model",
    inStock: "In Stock",
    outOfStock: "Out of Stock",
    lowStock: "Low Stock",
    addToCart: "Add to Cart",
    buyNow: "Buy Now",
    addToWishlist: "Add to Wishlist",
    removeFromWishlist: "Remove from Wishlist",
    zoomHint: "Hover to zoom",
    backToProducts: "Back to Shop",
  },
  cart: {
    title: "Your Cart",
    empty: "Your cart is empty",
    emptyDesc: "Browse the collection and add a piece you love.",
    continueShopping: "Continue Shopping",
    subtotal: "Subtotal",
    shipping: "Shipping",
    shippingFree: "Free",
    total: "Total",
    checkout: "Proceed to Checkout",
    remove: "Remove",
    update: "Update",
    coupon: "Coupon Code",
    apply: "Apply",
    itemSingular: "item",
    itemPlural: "items",
  },
  checkout: {
    title: "Checkout",
    shippingInfo: "Shipping Information",
    payment: "Payment Method",
    orderSummary: "Order Summary",
    placeOrder: "Place Order",
    securePayment: "Secure Payment",
  },
  wishlist: {
    title: "Your Wishlist",
    empty: "Your wishlist is empty",
    emptyDesc: "Save pieces you're considering - they'll wait for you here.",
    moveAllToCart: "Add All to Cart",
  },
  footer: {
    brandDesc:
      "Novira is a design-led maker of electronic home appliances - engineered for quiet performance and built to be lived with, not around.",
    newsletter: "Join the Novira Circle",
    newsletterDesc: "Early access to new releases, private sales, and design notes.",
    emailPlaceholder: "Enter your email address",
    subscribe: "Subscribe",
    subscribed: "You're on the list.",
    links: "Explore",
    categories: "Categories",
    support: "Customer Care",
    about: "About Novira",
    contact: "Contact Us",
    faq: "FAQ",
    shipping: "Shipping Info",
    returns: "Returns & Exchanges",
    rights: "All rights reserved.",
    paymentMethods: "Payment Methods",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },
  common: {
    loading: "Loading...",
    error: "Something went wrong",
    success: "Success",
    close: "Close",
    save: "Save",
    cancel: "Cancel",
    delete: "Delete",
    edit: "Edit",
    view: "View",
    more: "More",
    less: "Less",
    seeAll: "See All",
    popular: "Popular",
    new: "New",
    sale: "Sale",
    off: "OFF",
    currency: "$",
    addedToCart: "Added to cart",
    addedToCartDesc: "It's waiting for you in your cart.",
    addedToWishlist: "Added to wishlist",
    removedFromWishlist: "Removed from wishlist",
  },
};

const fa: Dictionary = {
  brand: {
    name: "نوویرا",
    slogan: "مهندسی آرام برای خانه مدرن",
    description:
      "نوویرا لوازم خانگی الکترونیکی طراحی می‌کند که در زندگی روزمره محو می‌شوند - دقیق، آرام و ساخته شده برای دوام.",
  },
  nav: {
    about: "درباره ما",
    features: "صنایع دستی",
    categories: "دسته‌بندی‌ها",
    products: "محصولات",
    support: "پشتیبانی",
    blog: "مجله",
    contact: "تماس با ما",
    explore: "خرید از نوویرا",
    search: "جستجوی لوازم خانگی...",
    searchPlaceholder: "چه چیزی دنبالش هستی؟",
    cart: "سبد خرید",
    wishlist: "علاقه‌مندی‌ها",
    account: "حساب من",
    orders: "سفارشات من",
    compare: "مقایسه",
  },
  hero: {
    eyebrow: "نوویرا - تاسیس ۲۰۲۰",
    badge: "مجموعه آریا، ۲۰۲۶",
    title: "لوازم خانگی مهندسی شده",
    titleHighlight: "برای سکوت",
    titleTail: "و دقت.",
    subtitle:
      "هر محصول نوویرا با دقت تنظیم، وزن‌دهی و پرداخت شده توسط ماشین‌های بررسی دستی - تا خانه‌تان به‌صورت آرام، کارآمد و دقیقاً همان‌طور که باید کار کند.",
    ctaPrimary: "مشاهده مجموعه",
    ctaSecondary: "تماشای فیلم",
    trust: "اعتماد بیش از ۵۰,۰۰۰ خانه در سراسر جهان",
    delivery: "تحویل ویژه",
    warranty: "گارانتی ۵ ساله",
    returns: "تضمین ۳۰ روزه",
    statCraft: "۱۲۸",
    statCraftLabel: "نقطه بازرسی مهندسی برای هر واحد",
    statQuiet: "۱۹dB",
    statQuietLabel: "آرام‌تر از یک اتاق زمزمه‌ای",
    statCustomers: "+۵۰K",
    statCustomersLabel: "خانه در ۲۴ کشور",
  },
  categories: {
    title: "خرید بر اساس دسته‌بندی",
    subtitle: "هر اتاق، در نظر گرفته شده - قطعه‌ای را برای فضای خود پیدا کنید",
    viewAll: "مشاهده همه دسته‌بندی‌ها",
  },
  products: {
    title: "قطعات امضایی",
    subtitle: "انتخاب دستی از خط تولید فعلی نوویرا",
    bestsellers: "محبوب‌ترین‌ها",
    bestsellersSubtitle: "قطعاتی که مشتریان ما برای هر اتاق دوباره سفارش می‌دهند",
    newArrivals: "جدید این فصل",
    newArrivalsSubtitle: "تازه از استودیوی طراحی نوویرا",
    specialOffers: "پیشنهادات ویژه",
    specialOffersSubtitle: "انتخابی محدود، قیمت‌گذاری شده برای مدت محدود",
    featured: "ویژه",
    addToCart: "افزودن به سبد",
    buyNow: "خرید فوری",
    outOfStock: "ناموجود",
    inStock: "موجود",
    onlyLeft: "تنها {count} عدد باقی مانده",
    filter: "فیلتر",
    sort: "مرتب‌سازی",
    price: "قیمت",
    brand: "برند",
    rating: "امتیاز",
    reviews: "نظرات",
    quickView: "مشاهده سریع",
    compare: "مقایسه",
    viewDetails: "مشاهده جزئیات",
    freeShipping: "ارسال رایگان",
    resultsCount: "قطعه",
    noResults: "هیچ قطعه‌ای با فیلترهای شما مطابقت ندارد",
    noResultsDesc: "فیلترها را تنظیم یا پاک کنید تا مجموعه بیشتری را ببینید.",
  },
  product: {
    specifications: "مشخصات فنی",
    description: "توضیحات",
    reviews: "نظرات مشتریان",
    related: "شاید دوست داشته باشید",
    warranty: "گارانتی",
    delivery: "اطلاعات ارسال",
    return: "سیاست بازگشت",
    quantity: "تعداد",
    color: "رنگ",
    share: "اشتراک‌گذاری",
    sku: "کد محصول",
    brand: "برند",
    model: "مدل",
    inStock: "موجود",
    outOfStock: "ناموجود",
    lowStock: "موجودی کم",
    addToCart: "افزودن به سبد",
    buyNow: "خرید فوری",
    addToWishlist: "افزودن به علاقه‌مندی‌ها",
    removeFromWishlist: "حذف از علاقه‌مندی‌ها",
    zoomHint: "برای بزرگنمایی هاور کنید",
    backToProducts: "بازگشت به فروشگاه",
  },
  cart: {
    title: "سبد خرید شما",
    empty: "سبد خرید شما خالی است",
    emptyDesc: "مجموعه را مرور کنید و قطعه‌ای که دوست دارید اضافه کنید.",
    continueShopping: "ادامه خرید",
    subtotal: "جمع جزء",
    shipping: "هزینه ارسال",
    shippingFree: "رایگان",
    total: "جمع کل",
    checkout: "ادامه فرآیند خرید",
    remove: "حذف",
    update: "به‌روزرسانی",
    coupon: "کد تخفیف",
    apply: "اعمال",
    itemSingular: "کالا",
    itemPlural: "کالا",
  },
  checkout: {
    title: "تسویه حساب",
    shippingInfo: "اطلاعات ارسال",
    payment: "روش پرداخت",
    orderSummary: "خلاصه سفارش",
    placeOrder: "ثبت سفارش",
    securePayment: "پرداخت امن",
  },
  wishlist: {
    title: "علاقه‌مندی‌های شما",
    empty: "لیست علاقه‌مندی‌های شما خالی است",
    emptyDesc: "قطعاتی که در نظر دارید را ذخیره کنید - اینجا منتظر شما هستند.",
    moveAllToCart: "افزودن همه به سبد",
  },
  footer: {
    brandDesc:
      "نوویرا سازنده پیشرو در طراحی لوازم خانگی الکترونیکی است - مهندسی شده برای عملکرد آرام و ساخته شده برای زندگی با آن، نه دور از آن.",
    newsletter: "عضویت در خبرنامه نوویرا",
    newsletterDesc: "دسترسی زودهنگام به محصولات جدید، فروش خصوصی و یادداشت‌های طراحی.",
    emailPlaceholder: "آدرس ایمیل خود را وارد کنید",
    subscribe: "عضویت",
    subscribed: "شما در لیست هستید.",
    links: "کاوش",
    categories: "دسته‌بندی‌ها",
    support: "خدمات مشتریان",
    about: "درباره نوویرا",
    contact: "تماس با ما",
    faq: "سوالات متداول",
    shipping: "اطلاعات ارسال",
    returns: "بازگشت و تعویض",
    rights: "تمامی حقوق محفوظ است.",
    paymentMethods: "روش‌های پرداخت",
    privacy: "حریم خصوصی",
    terms: "شرایط استفاده",
  },
  common: {
    loading: "در حال بارگذاری...",
    error: "مشکلی پیش آمد",
    success: "موفقیت‌آمیز",
    close: "بستن",
    save: "ذخیره",
    cancel: "لغو",
    delete: "حذف",
    edit: "ویرایش",
    view: "مشاهده",
    more: "بیشتر",
    less: "کمتر",
    seeAll: "مشاهده همه",
    popular: "محبوب",
    new: "جدید",
    sale: "فروش ویژه",
    off: "تخفیف",
    currency: "تومان",
    addedToCart: "به سبد اضافه شد",
    addedToCartDesc: "در سبد خرید شما منتظر است.",
    addedToWishlist: "به علاقه‌مندی‌ها اضافه شد",
    removedFromWishlist: "از علاقه‌مندی‌ها حذف شد",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, fa };

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale];
}