// app/data/appliances.ts
// NOTE: Auto-expanded dataset — every brand and every category now has 50+ products.
// Types/interfaces are unchanged from the original file.
export interface ApplianceCategory {
  id: string;
  name: string;
  nameFa: string;
  description: string;
  descriptionFa: string;
  image: string;
  productCount: number;
  icon: string;
}

export interface ApplianceProduct {
  id: string;
  name: string;
  nameFa: string;
  category: string;
  categoryFa: string;
  price: number;
  originalPrice?: number;
  description: string;
  descriptionFa: string;
  features: string[];
  featuresFa: string[];
  specs: Record<string, string>;
  specsFa: Record<string, string>;
  images: string[];
  colors: { name: string; nameFa: string; hex: string }[];
  rating: number;
  reviews: number;
  badge?: string;
  isNew?: boolean;
  isBestseller?: boolean;
  brand: string;
  brandFa: string;
  model: string;
}

export const applianceCategories: ApplianceCategory[] = [
  {
    id: "tv-entertainment",
    name: "TV & Entertainment",
    nameFa: "تلویزیون و سرگرمی",
    description: "Smart TVs, OLED, QLED, soundbars and home theater systems",
    descriptionFa: "تلویزیون‌های هوشمند، OLED، QLED، ساندبار و سینمای خانگی",
    image: "/images/cat-tv-entertainment.jpg",
    productCount: 52,
    icon: "Monitor"
  },
  {
    id: "refrigerator",
    name: "Refrigerators",
    nameFa: "یخچال و فریزر",
    description: "French door, side-by-side, and smart refrigerators",
    descriptionFa: "یخچال‌های ساید بای ساید، دوقلو و هوشمند",
    image: "/images/cat-refrigerator.jpg",
    productCount: 55,
    icon: "Refrigerator"
  },
  {
    id: "washing",
    name: "Washing Machines",
    nameFa: "ماشین لباسشویی",
    description: "Front load, top load, and washer-dryer combos",
    descriptionFa: "ماشین لباسشویی درب از جلو، درب از بالا و خشک‌کن‌دار",
    image: "/images/cat-washing.jpg",
    productCount: 55,
    icon: "WashingMachine"
  },
  {
    id: "air-conditioner",
    name: "Air Conditioners",
    nameFa: "کولر گازی",
    description: "Split, portable, and inverter AC units",
    descriptionFa: "کولر گازی اسپلیت، پرتابل و اینورتر",
    image: "/images/cat-air-conditioner.jpg",
    productCount: 67,
    icon: "Wind"
  },
  {
    id: "vacuum",
    name: "Vacuum Cleaners",
    nameFa: "جاروبرقی",
    description: "Robot, cordless, and canister vacuums",
    descriptionFa: "جاروبرقی رباتیک، شارژی و سطلی",
    image: "/images/cat-vacuum.jpg",
    productCount: 126,
    icon: "Sparkles"
  },
  {
    id: "kitchen",
    name: "Kitchen Appliances",
    nameFa: "لوازم آشپزخانه",
    description: "Mixers, air fryers, microwaves, and more",
    descriptionFa: "میکسر، سرخ‌کن، مایکروویو و موارد دیگر",
    image: "/images/cat-kitchen.jpg",
    productCount: 103,
    icon: "ChefHat"
  }
];

export const appliances: ApplianceProduct[] = [
  {
    id: "samsung-qled-tv-1",
    name: "Samsung QLED TV 65\" SA923Neo",
    nameFa: "تلویزیون کیولد سامسونگ 65\" مدل SA923Neo",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 119875907,
    description: "QLED TV from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون کیولد از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Hub with Voice Assistant",
      "AI Upscaling Processor",
      "4K/8K Ultra HD Resolution",
      "Dolby Vision & Atmos",
      "HDR10+ Support",
      "Slim Bezel-less Design"
    ],
    featuresFa: [
      "هاب هوشمند با دستیار صوتی",
      "پردازنده ارتقای هوشمند AI",
      "رزولوشن ۴K/۸K",
      "دالبی ویژن و اتموس",
      "پشتیبانی از HDR10+",
      "طراحی بی‌قاب باریک"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "144Hz",
      "Smart Platform": "Android TV",
      "HDMI Ports": "3 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.6,
    reviews: 1167,
    isBestseller: true,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA923Neo"
  },
  {
    id: "samsung-smart-tv-2",
    name: "Samsung Smart TV 75\" SA966Neo",
    nameFa: "تلویزیون هوشمند سامسونگ 75\" مدل SA966Neo",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 42035207,
    description: "Smart TV from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون هوشمند از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Slim Bezel-less Design",
      "4K/8K Ultra HD Resolution",
      "Dolby Vision & Atmos",
      "Smart Hub with Voice Assistant",
      "Gaming Mode with Low Latency",
      "AI Upscaling Processor"
    ],
    featuresFa: [
      "طراحی بی‌قاب باریک",
      "رزولوشن ۴K/۸K",
      "دالبی ویژن و اتموس",
      "هاب هوشمند با دستیار صوتی",
      "حالت گیمینگ با تأخیر پایین",
      "پردازنده ارتقای هوشمند AI"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "60Hz",
      "Smart Platform": "Tizen OS",
      "HDMI Ports": "3 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.8,
    reviews: 1378,
    isBestseller: true,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA966Neo"
  },
  {
    id: "samsung-home-theater-system-3",
    name: "Samsung Home Theater System 50\" SA392Plus",
    nameFa: "سیستم سینمای خانگی سامسونگ 50\" مدل SA392Plus",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 117442919,
    description: "Home Theater System from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سیستم سینمای خانگی از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Gaming Mode with Low Latency",
      "Smart Hub with Voice Assistant",
      "4K/8K Ultra HD Resolution",
      "Dolby Vision & Atmos",
      "HDR10+ Support",
      "AI Upscaling Processor"
    ],
    featuresFa: [
      "حالت گیمینگ با تأخیر پایین",
      "هاب هوشمند با دستیار صوتی",
      "رزولوشن ۴K/۸K",
      "دالبی ویژن و اتموس",
      "پشتیبانی از HDR10+",
      "پردازنده ارتقای هوشمند AI"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "120Hz",
      "Smart Platform": "Google TV",
      "HDMI Ports": "4 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80",
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.7,
    reviews: 720,
    badge: "Best Seller",
    isBestseller: true,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA392Plus"
  },
  {
    id: "samsung-oled-tv-4",
    name: "Samsung OLED TV 70\" SA474X",
    nameFa: "تلویزیون اولد سامسونگ 70\" مدل SA474X",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 120364587,
    description: "OLED TV from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون اولد از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Gaming Mode with Low Latency",
      "AI Upscaling Processor",
      "Slim Bezel-less Design",
      "Smart Hub with Voice Assistant",
      "120Hz High Refresh Rate",
      "4K/8K Ultra HD Resolution"
    ],
    featuresFa: [
      "حالت گیمینگ با تأخیر پایین",
      "پردازنده ارتقای هوشمند AI",
      "طراحی بی‌قاب باریک",
      "هاب هوشمند با دستیار صوتی",
      "نرخ تازه‌سازی ۱۲۰ هرتز",
      "رزولوشن ۴K/۸K"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "120Hz",
      "Smart Platform": "Tizen OS",
      "HDMI Ports": "4 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80",
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.3,
    reviews: 1736,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA474X"
  },
  {
    id: "samsung-smart-tv-5",
    name: "Samsung Smart TV 43\" SA848Neo",
    nameFa: "تلویزیون هوشمند سامسونگ 43\" مدل SA848Neo",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 84748460,
    description: "Smart TV from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون هوشمند از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Slim Bezel-less Design",
      "Gaming Mode with Low Latency",
      "Dolby Vision & Atmos",
      "AI Upscaling Processor",
      "120Hz High Refresh Rate",
      "4K/8K Ultra HD Resolution"
    ],
    featuresFa: [
      "طراحی بی‌قاب باریک",
      "حالت گیمینگ با تأخیر پایین",
      "دالبی ویژن و اتموس",
      "پردازنده ارتقای هوشمند AI",
      "نرخ تازه‌سازی ۱۲۰ هرتز",
      "رزولوشن ۴K/۸K"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "120Hz",
      "Smart Platform": "webOS",
      "HDMI Ports": "4 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.8,
    reviews: 1106,
    badge: "Best Seller",
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA848Neo"
  },
  {
    id: "samsung-home-theater-system-6",
    name: "Samsung Home Theater System 65\" SA659Plus",
    nameFa: "سیستم سینمای خانگی سامسونگ 65\" مدل SA659Plus",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 84201099,
    description: "Home Theater System from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سیستم سینمای خانگی از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "AI Upscaling Processor",
      "4K/8K Ultra HD Resolution",
      "Dolby Vision & Atmos",
      "HDR10+ Support",
      "Slim Bezel-less Design",
      "Smart Hub with Voice Assistant"
    ],
    featuresFa: [
      "پردازنده ارتقای هوشمند AI",
      "رزولوشن ۴K/۸K",
      "دالبی ویژن و اتموس",
      "پشتیبانی از HDR10+",
      "طراحی بی‌قاب باریک",
      "هاب هوشمند با دستیار صوتی"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "60Hz",
      "Smart Platform": "Tizen OS",
      "HDMI Ports": "2 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.7,
    reviews: 2059,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA659Plus"
  },
  {
    id: "samsung-oled-tv-7",
    name: "Samsung OLED TV 75\" SA335X",
    nameFa: "تلویزیون اولد سامسونگ 75\" مدل SA335X",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 52390367,
    description: "OLED TV from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون اولد از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "4K/8K Ultra HD Resolution",
      "Gaming Mode with Low Latency",
      "Slim Bezel-less Design",
      "AI Upscaling Processor",
      "Dolby Vision & Atmos",
      "120Hz High Refresh Rate"
    ],
    featuresFa: [
      "رزولوشن ۴K/۸K",
      "حالت گیمینگ با تأخیر پایین",
      "طراحی بی‌قاب باریک",
      "پردازنده ارتقای هوشمند AI",
      "دالبی ویژن و اتموس",
      "نرخ تازه‌سازی ۱۲۰ هرتز"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "120Hz",
      "Smart Platform": "webOS",
      "HDMI Ports": "3 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.5,
    reviews: 1374,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA335X"
  },
  {
    id: "samsung-oled-tv-8",
    name: "Samsung OLED TV 43\" SA165",
    nameFa: "تلویزیون اولد سامسونگ 43\" مدل SA165",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 95963851,
    description: "OLED TV from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون اولد از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "HDR10+ Support",
      "Gaming Mode with Low Latency",
      "4K/8K Ultra HD Resolution",
      "120Hz High Refresh Rate",
      "Slim Bezel-less Design",
      "Smart Hub with Voice Assistant"
    ],
    featuresFa: [
      "پشتیبانی از HDR10+",
      "حالت گیمینگ با تأخیر پایین",
      "رزولوشن ۴K/۸K",
      "نرخ تازه‌سازی ۱۲۰ هرتز",
      "طراحی بی‌قاب باریک",
      "هاب هوشمند با دستیار صوتی"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "120Hz",
      "Smart Platform": "webOS",
      "HDMI Ports": "2 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.8,
    reviews: 2164,
    isBestseller: true,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA165"
  },
  {
    id: "samsung-smart-tv-9",
    name: "Samsung Smart TV 70\" SA168X",
    nameFa: "تلویزیون هوشمند سامسونگ 70\" مدل SA168X",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 111780227,
    originalPrice: 127800000,
    description: "Smart TV from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون هوشمند از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "4K/8K Ultra HD Resolution",
      "AI Upscaling Processor",
      "Gaming Mode with Low Latency",
      "Slim Bezel-less Design",
      "Dolby Vision & Atmos",
      "120Hz High Refresh Rate"
    ],
    featuresFa: [
      "رزولوشن ۴K/۸K",
      "پردازنده ارتقای هوشمند AI",
      "حالت گیمینگ با تأخیر پایین",
      "طراحی بی‌قاب باریک",
      "دالبی ویژن و اتموس",
      "نرخ تازه‌سازی ۱۲۰ هرتز"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "120Hz",
      "Smart Platform": "Tizen OS",
      "HDMI Ports": "2 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.6,
    reviews: 1229,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA168X"
  },
  {
    id: "samsung-qled-tv-10",
    name: "Samsung QLED TV 50\" SA771Neo",
    nameFa: "تلویزیون کیولد سامسونگ 50\" مدل SA771Neo",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 75569469,
    originalPrice: 88400000,
    description: "QLED TV from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون کیولد از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "120Hz High Refresh Rate",
      "Slim Bezel-less Design",
      "AI Upscaling Processor",
      "Gaming Mode with Low Latency",
      "HDR10+ Support",
      "4K/8K Ultra HD Resolution"
    ],
    featuresFa: [
      "نرخ تازه‌سازی ۱۲۰ هرتز",
      "طراحی بی‌قاب باریک",
      "پردازنده ارتقای هوشمند AI",
      "حالت گیمینگ با تأخیر پایین",
      "پشتیبانی از HDR10+",
      "رزولوشن ۴K/۸K"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "60Hz",
      "Smart Platform": "Google TV",
      "HDMI Ports": "4 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.6,
    reviews: 343,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA771Neo"
  },
  {
    id: "samsung-smart-tv-11",
    name: "Samsung Smart TV 65\" SA370Pro",
    nameFa: "تلویزیون هوشمند سامسونگ 65\" مدل SA370Pro",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 51883128,
    description: "Smart TV from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون هوشمند از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "AI Upscaling Processor",
      "Dolby Vision & Atmos",
      "Smart Hub with Voice Assistant",
      "120Hz High Refresh Rate",
      "4K/8K Ultra HD Resolution",
      "Slim Bezel-less Design"
    ],
    featuresFa: [
      "پردازنده ارتقای هوشمند AI",
      "دالبی ویژن و اتموس",
      "هاب هوشمند با دستیار صوتی",
      "نرخ تازه‌سازی ۱۲۰ هرتز",
      "رزولوشن ۴K/۸K",
      "طراحی بی‌قاب باریک"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "144Hz",
      "Smart Platform": "Google TV",
      "HDMI Ports": "3 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.7,
    reviews: 2633,
    isNew: true,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA370Pro"
  },
  {
    id: "samsung-soundbar-12",
    name: "Samsung Soundbar 85\" SA328Plus",
    nameFa: "ساندبار سامسونگ 85\" مدل SA328Plus",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 80678132,
    description: "Soundbar from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "ساندبار از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Gaming Mode with Low Latency",
      "Smart Hub with Voice Assistant",
      "4K/8K Ultra HD Resolution",
      "Slim Bezel-less Design",
      "HDR10+ Support",
      "AI Upscaling Processor"
    ],
    featuresFa: [
      "حالت گیمینگ با تأخیر پایین",
      "هاب هوشمند با دستیار صوتی",
      "رزولوشن ۴K/۸K",
      "طراحی بی‌قاب باریک",
      "پشتیبانی از HDR10+",
      "پردازنده ارتقای هوشمند AI"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "120Hz",
      "Smart Platform": "Google TV",
      "HDMI Ports": "3 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.6,
    reviews: 306,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA328Plus"
  },
  {
    id: "samsung-soundbar-13",
    name: "Samsung Soundbar 65\" SA657Neo",
    nameFa: "ساندبار سامسونگ 65\" مدل SA657Neo",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 116507116,
    description: "Soundbar from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "ساندبار از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "HDR10+ Support",
      "AI Upscaling Processor",
      "Gaming Mode with Low Latency",
      "120Hz High Refresh Rate",
      "Dolby Vision & Atmos",
      "4K/8K Ultra HD Resolution"
    ],
    featuresFa: [
      "پشتیبانی از HDR10+",
      "پردازنده ارتقای هوشمند AI",
      "حالت گیمینگ با تأخیر پایین",
      "نرخ تازه‌سازی ۱۲۰ هرتز",
      "دالبی ویژن و اتموس",
      "رزولوشن ۴K/۸K"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "60Hz",
      "Smart Platform": "webOS",
      "HDMI Ports": "2 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.3,
    reviews: 1732,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA657Neo"
  },
  {
    id: "samsung-oled-tv-14",
    name: "Samsung OLED TV 70\" SA788",
    nameFa: "تلویزیون اولد سامسونگ 70\" مدل SA788",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 52181765,
    originalPrice: 61100000,
    description: "OLED TV from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون اولد از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "AI Upscaling Processor",
      "Gaming Mode with Low Latency",
      "Dolby Vision & Atmos",
      "HDR10+ Support",
      "120Hz High Refresh Rate",
      "Slim Bezel-less Design"
    ],
    featuresFa: [
      "پردازنده ارتقای هوشمند AI",
      "حالت گیمینگ با تأخیر پایین",
      "دالبی ویژن و اتموس",
      "پشتیبانی از HDR10+",
      "نرخ تازه‌سازی ۱۲۰ هرتز",
      "طراحی بی‌قاب باریک"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "60Hz",
      "Smart Platform": "Android TV",
      "HDMI Ports": "3 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.3,
    reviews: 1902,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA788"
  },
  {
    id: "samsung-smart-tv-15",
    name: "Samsung Smart TV 50\" SA838",
    nameFa: "تلویزیون هوشمند سامسونگ 50\" مدل SA838",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 39766271,
    description: "Smart TV from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون هوشمند از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Dolby Vision & Atmos",
      "Slim Bezel-less Design",
      "Smart Hub with Voice Assistant",
      "120Hz High Refresh Rate",
      "AI Upscaling Processor",
      "HDR10+ Support"
    ],
    featuresFa: [
      "دالبی ویژن و اتموس",
      "طراحی بی‌قاب باریک",
      "هاب هوشمند با دستیار صوتی",
      "نرخ تازه‌سازی ۱۲۰ هرتز",
      "پردازنده ارتقای هوشمند AI",
      "پشتیبانی از HDR10+"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "144Hz",
      "Smart Platform": "webOS",
      "HDMI Ports": "3 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.7,
    reviews: 146,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA838"
  },
  {
    id: "samsung-soundbar-16",
    name: "Samsung Soundbar 85\" SA977Pro",
    nameFa: "ساندبار سامسونگ 85\" مدل SA977Pro",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 136082130,
    originalPrice: 151300000,
    description: "Soundbar from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "ساندبار از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Dolby Vision & Atmos",
      "120Hz High Refresh Rate",
      "4K/8K Ultra HD Resolution",
      "Gaming Mode with Low Latency",
      "HDR10+ Support",
      "Slim Bezel-less Design"
    ],
    featuresFa: [
      "دالبی ویژن و اتموس",
      "نرخ تازه‌سازی ۱۲۰ هرتز",
      "رزولوشن ۴K/۸K",
      "حالت گیمینگ با تأخیر پایین",
      "پشتیبانی از HDR10+",
      "طراحی بی‌قاب باریک"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "60Hz",
      "Smart Platform": "webOS",
      "HDMI Ports": "3 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.6,
    reviews: 1286,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA977Pro"
  },
  {
    id: "samsung-smart-tv-17",
    name: "Samsung Smart TV 85\" SA964Neo",
    nameFa: "تلویزیون هوشمند سامسونگ 85\" مدل SA964Neo",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 110401900,
    originalPrice: 131500000,
    description: "Smart TV from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون هوشمند از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Dolby Vision & Atmos",
      "HDR10+ Support",
      "Slim Bezel-less Design",
      "AI Upscaling Processor",
      "4K/8K Ultra HD Resolution",
      "Smart Hub with Voice Assistant"
    ],
    featuresFa: [
      "دالبی ویژن و اتموس",
      "پشتیبانی از HDR10+",
      "طراحی بی‌قاب باریک",
      "پردازنده ارتقای هوشمند AI",
      "رزولوشن ۴K/۸K",
      "هاب هوشمند با دستیار صوتی"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "144Hz",
      "Smart Platform": "webOS",
      "HDMI Ports": "4 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80",
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.7,
    reviews: 3186,
    isBestseller: true,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA964Neo"
  },
  {
    id: "samsung-qled-tv-18",
    name: "Samsung QLED TV 65\" SA262S",
    nameFa: "تلویزیون کیولد سامسونگ 65\" مدل SA262S",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 144659433,
    originalPrice: 174700000,
    description: "QLED TV from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون کیولد از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Dolby Vision & Atmos",
      "HDR10+ Support",
      "Slim Bezel-less Design",
      "Smart Hub with Voice Assistant",
      "120Hz High Refresh Rate",
      "Gaming Mode with Low Latency"
    ],
    featuresFa: [
      "دالبی ویژن و اتموس",
      "پشتیبانی از HDR10+",
      "طراحی بی‌قاب باریک",
      "هاب هوشمند با دستیار صوتی",
      "نرخ تازه‌سازی ۱۲۰ هرتز",
      "حالت گیمینگ با تأخیر پایین"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "120Hz",
      "Smart Platform": "Tizen OS",
      "HDMI Ports": "2 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.3,
    reviews: 665,
    isBestseller: true,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA262S"
  },
  {
    id: "samsung-oled-tv-19",
    name: "Samsung OLED TV 43\" SA272",
    nameFa: "تلویزیون اولد سامسونگ 43\" مدل SA272",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 28283744,
    originalPrice: 37700000,
    description: "OLED TV from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون اولد از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "120Hz High Refresh Rate",
      "Gaming Mode with Low Latency",
      "Dolby Vision & Atmos",
      "HDR10+ Support",
      "Smart Hub with Voice Assistant",
      "Slim Bezel-less Design"
    ],
    featuresFa: [
      "نرخ تازه‌سازی ۱۲۰ هرتز",
      "حالت گیمینگ با تأخیر پایین",
      "دالبی ویژن و اتموس",
      "پشتیبانی از HDR10+",
      "هاب هوشمند با دستیار صوتی",
      "طراحی بی‌قاب باریک"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "60Hz",
      "Smart Platform": "Tizen OS",
      "HDMI Ports": "2 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.5,
    reviews: 2829,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA272"
  },
  {
    id: "samsung-home-theater-system-20",
    name: "Samsung Home Theater System 50\" SA588X",
    nameFa: "سیستم سینمای خانگی سامسونگ 50\" مدل SA588X",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 84303358,
    originalPrice: 107100000,
    description: "Home Theater System from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سیستم سینمای خانگی از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Gaming Mode with Low Latency",
      "Slim Bezel-less Design",
      "4K/8K Ultra HD Resolution",
      "AI Upscaling Processor",
      "HDR10+ Support",
      "120Hz High Refresh Rate"
    ],
    featuresFa: [
      "حالت گیمینگ با تأخیر پایین",
      "طراحی بی‌قاب باریک",
      "رزولوشن ۴K/۸K",
      "پردازنده ارتقای هوشمند AI",
      "پشتیبانی از HDR10+",
      "نرخ تازه‌سازی ۱۲۰ هرتز"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "60Hz",
      "Smart Platform": "Android TV",
      "HDMI Ports": "4 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.8,
    reviews: 2781,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA588X"
  },
  {
    id: "samsung-qled-tv-21",
    name: "Samsung QLED TV 58\" SA637Neo",
    nameFa: "تلویزیون کیولد سامسونگ 58\" مدل SA637Neo",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 107488569,
    description: "QLED TV from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون کیولد از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "HDR10+ Support",
      "Gaming Mode with Low Latency",
      "AI Upscaling Processor",
      "Slim Bezel-less Design",
      "Dolby Vision & Atmos",
      "Smart Hub with Voice Assistant"
    ],
    featuresFa: [
      "پشتیبانی از HDR10+",
      "حالت گیمینگ با تأخیر پایین",
      "پردازنده ارتقای هوشمند AI",
      "طراحی بی‌قاب باریک",
      "دالبی ویژن و اتموس",
      "هاب هوشمند با دستیار صوتی"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "120Hz",
      "Smart Platform": "Tizen OS",
      "HDMI Ports": "2 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80",
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.9,
    reviews: 309,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA637Neo"
  },
  {
    id: "samsung-home-theater-system-22",
    name: "Samsung Home Theater System 65\" SA298Pro",
    nameFa: "سیستم سینمای خانگی سامسونگ 65\" مدل SA298Pro",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 59141224,
    description: "Home Theater System from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سیستم سینمای خانگی از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Gaming Mode with Low Latency",
      "AI Upscaling Processor",
      "120Hz High Refresh Rate",
      "Smart Hub with Voice Assistant",
      "HDR10+ Support",
      "4K/8K Ultra HD Resolution"
    ],
    featuresFa: [
      "حالت گیمینگ با تأخیر پایین",
      "پردازنده ارتقای هوشمند AI",
      "نرخ تازه‌سازی ۱۲۰ هرتز",
      "هاب هوشمند با دستیار صوتی",
      "پشتیبانی از HDR10+",
      "رزولوشن ۴K/۸K"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "120Hz",
      "Smart Platform": "Google TV",
      "HDMI Ports": "3 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80",
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.1,
    reviews: 2173,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA298Pro"
  },
  {
    id: "samsung-bottom-freezer-refrigerator-23",
    name: "Samsung Bottom Freezer Refrigerator 29 cu.ft SA491Pro",
    nameFa: "یخچال فریزر پایین سامسونگ 29 cu.ft مدل SA491Pro",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 137903435,
    description: "Bottom Freezer Refrigerator from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال فریزر پایین از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Convertible FlexZone",
      "Smart Connectivity",
      "Dual Auto Ice Maker",
      "Twin Cooling System",
      "No-Frost Technology",
      "Door-in-Door Access"
    ],
    featuresFa: [
      "منطقه قابل تبدیل",
      "اتصال هوشمند",
      "یخ‌ساز خودکار دوگانه",
      "سیستم خنک‌کننده دوگانه",
      "فناوری بدون یخ‌زدگی",
      "دسترسی درون درب"
    ],
    specs: {
      Capacity: "19 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A+",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.4,
    reviews: 3026,
    isNew: true,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA491Pro"
  },
  {
    id: "samsung-bottom-freezer-refrigerator-24",
    name: "Samsung Bottom Freezer Refrigerator 32 cu.ft SA462Plus",
    nameFa: "یخچال فریزر پایین سامسونگ 32 cu.ft مدل SA462Plus",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 240974942,
    description: "Bottom Freezer Refrigerator from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال فریزر پایین از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "No-Frost Technology",
      "Energy Star Certified",
      "Dual Auto Ice Maker",
      "Door-in-Door Access",
      "Convertible FlexZone",
      "Digital Touch Display"
    ],
    featuresFa: [
      "فناوری بدون یخ‌زدگی",
      "دارای گواهی انرژی استار",
      "یخ‌ساز خودکار دوگانه",
      "دسترسی درون درب",
      "منطقه قابل تبدیل",
      "نمایشگر لمسی دیجیتال"
    ],
    specs: {
      Capacity: "24 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "Energy Star",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.6,
    reviews: 216,
    isBestseller: true,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA462Plus"
  },
  {
    id: "samsung-bottom-freezer-refrigerator-25",
    name: "Samsung Bottom Freezer Refrigerator 18 cu.ft SA683Neo",
    nameFa: "یخچال فریزر پایین سامسونگ 18 cu.ft مدل SA683Neo",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 124905548,
    description: "Bottom Freezer Refrigerator from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال فریزر پایین از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Dual Auto Ice Maker",
      "Digital Touch Display",
      "Door-in-Door Access",
      "Smart Connectivity",
      "No-Frost Technology",
      "Twin Cooling System"
    ],
    featuresFa: [
      "یخ‌ساز خودکار دوگانه",
      "نمایشگر لمسی دیجیتال",
      "دسترسی درون درب",
      "اتصال هوشمند",
      "فناوری بدون یخ‌زدگی",
      "سیستم خنک‌کننده دوگانه"
    ],
    specs: {
      Capacity: "15 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4,
    reviews: 2184,
    isNew: true,
    isBestseller: true,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA683Neo"
  },
  {
    id: "samsung-side-by-side-refrigerator-26",
    name: "Samsung Side-by-Side Refrigerator 25 cu.ft SA993Neo",
    nameFa: "یخچال ساید بای ساید سامسونگ 25 cu.ft مدل SA993Neo",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 183856710,
    description: "Side-by-Side Refrigerator from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال ساید بای ساید از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Digital Touch Display",
      "Convertible FlexZone",
      "Smart Connectivity",
      "No-Frost Technology",
      "Twin Cooling System",
      "Door-in-Door Access"
    ],
    featuresFa: [
      "نمایشگر لمسی دیجیتال",
      "منطقه قابل تبدیل",
      "اتصال هوشمند",
      "فناوری بدون یخ‌زدگی",
      "سیستم خنک‌کننده دوگانه",
      "دسترسی درون درب"
    ],
    specs: {
      Capacity: "19 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "Energy Star",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80",
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.2,
    reviews: 419,
    isNew: true,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA993Neo"
  },
  {
    id: "samsung-smart-fridge-27",
    name: "Samsung Smart Fridge 32 cu.ft SA974X",
    nameFa: "یخچال هوشمند سامسونگ 32 cu.ft مدل SA974X",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 246667226,
    originalPrice: 298400000,
    description: "Smart Fridge from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال هوشمند از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Twin Cooling System",
      "No-Frost Technology",
      "Convertible FlexZone",
      "Door-in-Door Access",
      "Digital Touch Display",
      "Smart Connectivity"
    ],
    featuresFa: [
      "سیستم خنک‌کننده دوگانه",
      "فناوری بدون یخ‌زدگی",
      "منطقه قابل تبدیل",
      "دسترسی درون درب",
      "نمایشگر لمسی دیجیتال",
      "اتصال هوشمند"
    ],
    specs: {
      Capacity: "18 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "Energy Star",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.5,
    reviews: 1407,
    badge: "Top Rated",
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA974X"
  },
  {
    id: "samsung-smart-fridge-28",
    name: "Samsung Smart Fridge 25 cu.ft SA885S",
    nameFa: "یخچال هوشمند سامسونگ 25 cu.ft مدل SA885S",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 151980715,
    description: "Smart Fridge from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال هوشمند از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Dual Auto Ice Maker",
      "Smart Connectivity",
      "Twin Cooling System",
      "Digital Touch Display",
      "Convertible FlexZone",
      "Energy Star Certified"
    ],
    featuresFa: [
      "یخ‌ساز خودکار دوگانه",
      "اتصال هوشمند",
      "سیستم خنک‌کننده دوگانه",
      "نمایشگر لمسی دیجیتال",
      "منطقه قابل تبدیل",
      "دارای گواهی انرژی استار"
    ],
    specs: {
      Capacity: "16 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80",
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.6,
    reviews: 457,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA885S"
  },
  {
    id: "samsung-bottom-freezer-refrigerator-29",
    name: "Samsung Bottom Freezer Refrigerator 29 cu.ft SA390",
    nameFa: "یخچال فریزر پایین سامسونگ 29 cu.ft مدل SA390",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 79175610,
    originalPrice: 88500000,
    description: "Bottom Freezer Refrigerator from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال فریزر پایین از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Energy Star Certified",
      "Convertible FlexZone",
      "Twin Cooling System",
      "Smart Connectivity",
      "Digital Touch Display",
      "No-Frost Technology"
    ],
    featuresFa: [
      "دارای گواهی انرژی استار",
      "منطقه قابل تبدیل",
      "سیستم خنک‌کننده دوگانه",
      "اتصال هوشمند",
      "نمایشگر لمسی دیجیتال",
      "فناوری بدون یخ‌زدگی"
    ],
    specs: {
      Capacity: "21 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80",
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.3,
    reviews: 379,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA390"
  },
  {
    id: "samsung-smart-fridge-30",
    name: "Samsung Smart Fridge 18 cu.ft SA171X",
    nameFa: "یخچال هوشمند سامسونگ 18 cu.ft مدل SA171X",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 291561225,
    description: "Smart Fridge from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال هوشمند از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "No-Frost Technology",
      "Convertible FlexZone",
      "Digital Touch Display",
      "Dual Auto Ice Maker",
      "Twin Cooling System",
      "Door-in-Door Access"
    ],
    featuresFa: [
      "فناوری بدون یخ‌زدگی",
      "منطقه قابل تبدیل",
      "نمایشگر لمسی دیجیتال",
      "یخ‌ساز خودکار دوگانه",
      "سیستم خنک‌کننده دوگانه",
      "دسترسی درون درب"
    ],
    specs: {
      Capacity: "31 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A+",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80",
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.3,
    reviews: 2557,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA171X"
  },
  {
    id: "samsung-french-door-refrigerator-31",
    name: "Samsung French Door Refrigerator 27 cu.ft SA640Neo",
    nameFa: "یخچال درب فرانسوی سامسونگ 27 cu.ft مدل SA640Neo",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 138623694,
    originalPrice: 181900000,
    description: "French Door Refrigerator from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال درب فرانسوی از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Connectivity",
      "Dual Auto Ice Maker",
      "Energy Star Certified",
      "Digital Touch Display",
      "No-Frost Technology",
      "Twin Cooling System"
    ],
    featuresFa: [
      "اتصال هوشمند",
      "یخ‌ساز خودکار دوگانه",
      "دارای گواهی انرژی استار",
      "نمایشگر لمسی دیجیتال",
      "فناوری بدون یخ‌زدگی",
      "سیستم خنک‌کننده دوگانه"
    ],
    specs: {
      Capacity: "26 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A+",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80",
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.4,
    reviews: 2564,
    badge: "Top Rated",
    isNew: true,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA640Neo"
  },
  {
    id: "samsung-smart-fridge-32",
    name: "Samsung Smart Fridge 18 cu.ft SA766X",
    nameFa: "یخچال هوشمند سامسونگ 18 cu.ft مدل SA766X",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 153787563,
    description: "Smart Fridge from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال هوشمند از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Digital Touch Display",
      "Energy Star Certified",
      "Door-in-Door Access",
      "Convertible FlexZone",
      "Twin Cooling System",
      "Smart Connectivity"
    ],
    featuresFa: [
      "نمایشگر لمسی دیجیتال",
      "دارای گواهی انرژی استار",
      "دسترسی درون درب",
      "منطقه قابل تبدیل",
      "سیستم خنک‌کننده دوگانه",
      "اتصال هوشمند"
    ],
    specs: {
      Capacity: "25 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "Energy Star",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80",
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.9,
    reviews: 3097,
    badge: "Editor's Choice",
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA766X"
  },
  {
    id: "samsung-side-by-side-refrigerator-33",
    name: "Samsung Side-by-Side Refrigerator 25 cu.ft SA896",
    nameFa: "یخچال ساید بای ساید سامسونگ 25 cu.ft مدل SA896",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 272168258,
    description: "Side-by-Side Refrigerator from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال ساید بای ساید از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Energy Star Certified",
      "Dual Auto Ice Maker",
      "Door-in-Door Access",
      "Digital Touch Display",
      "No-Frost Technology",
      "Twin Cooling System"
    ],
    featuresFa: [
      "دارای گواهی انرژی استار",
      "یخ‌ساز خودکار دوگانه",
      "دسترسی درون درب",
      "نمایشگر لمسی دیجیتال",
      "فناوری بدون یخ‌زدگی",
      "سیستم خنک‌کننده دوگانه"
    ],
    specs: {
      Capacity: "26 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "Energy Star",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.7,
    reviews: 1655,
    isNew: true,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA896"
  },
  {
    id: "samsung-french-door-refrigerator-34",
    name: "Samsung French Door Refrigerator 32 cu.ft SA667S",
    nameFa: "یخچال درب فرانسوی سامسونگ 32 cu.ft مدل SA667S",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 260242013,
    originalPrice: 288900000,
    description: "French Door Refrigerator from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال درب فرانسوی از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Connectivity",
      "Dual Auto Ice Maker",
      "Convertible FlexZone",
      "Twin Cooling System",
      "Energy Star Certified",
      "Digital Touch Display"
    ],
    featuresFa: [
      "اتصال هوشمند",
      "یخ‌ساز خودکار دوگانه",
      "منطقه قابل تبدیل",
      "سیستم خنک‌کننده دوگانه",
      "دارای گواهی انرژی استار",
      "نمایشگر لمسی دیجیتال"
    ],
    specs: {
      Capacity: "19 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A+",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4,
    reviews: 447,
    isNew: true,
    isBestseller: true,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA667S"
  },
  {
    id: "samsung-smart-fridge-35",
    name: "Samsung Smart Fridge 25 cu.ft SA431X",
    nameFa: "یخچال هوشمند سامسونگ 25 cu.ft مدل SA431X",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 81437895,
    originalPrice: 92700000,
    description: "Smart Fridge from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال هوشمند از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Twin Cooling System",
      "Convertible FlexZone",
      "Dual Auto Ice Maker",
      "Door-in-Door Access",
      "Energy Star Certified",
      "Smart Connectivity"
    ],
    featuresFa: [
      "سیستم خنک‌کننده دوگانه",
      "منطقه قابل تبدیل",
      "یخ‌ساز خودکار دوگانه",
      "دسترسی درون درب",
      "دارای گواهی انرژی استار",
      "اتصال هوشمند"
    ],
    specs: {
      Capacity: "26 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.2,
    reviews: 982,
    isBestseller: true,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA431X"
  },
  {
    id: "samsung-bottom-freezer-refrigerator-36",
    name: "Samsung Bottom Freezer Refrigerator 18 cu.ft SA470X",
    nameFa: "یخچال فریزر پایین سامسونگ 18 cu.ft مدل SA470X",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 229073167,
    originalPrice: 300600000,
    description: "Bottom Freezer Refrigerator from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال فریزر پایین از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Door-in-Door Access",
      "Smart Connectivity",
      "No-Frost Technology",
      "Twin Cooling System",
      "Digital Touch Display",
      "Energy Star Certified"
    ],
    featuresFa: [
      "دسترسی درون درب",
      "اتصال هوشمند",
      "فناوری بدون یخ‌زدگی",
      "سیستم خنک‌کننده دوگانه",
      "نمایشگر لمسی دیجیتال",
      "دارای گواهی انرژی استار"
    ],
    specs: {
      Capacity: "31 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "Energy Star",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.1,
    reviews: 1578,
    badge: "Editor's Choice",
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA470X"
  },
  {
    id: "samsung-side-by-side-refrigerator-37",
    name: "Samsung Side-by-Side Refrigerator 22 cu.ft SA275X",
    nameFa: "یخچال ساید بای ساید سامسونگ 22 cu.ft مدل SA275X",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 266481552,
    description: "Side-by-Side Refrigerator from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال ساید بای ساید از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Dual Auto Ice Maker",
      "No-Frost Technology",
      "Smart Connectivity",
      "Door-in-Door Access",
      "Energy Star Certified",
      "Digital Touch Display"
    ],
    featuresFa: [
      "یخ‌ساز خودکار دوگانه",
      "فناوری بدون یخ‌زدگی",
      "اتصال هوشمند",
      "دسترسی درون درب",
      "دارای گواهی انرژی استار",
      "نمایشگر لمسی دیجیتال"
    ],
    specs: {
      Capacity: "28 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A+",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.2,
    reviews: 2754,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA275X"
  },
  {
    id: "samsung-smart-fridge-38",
    name: "Samsung Smart Fridge 18 cu.ft SA218Plus",
    nameFa: "یخچال هوشمند سامسونگ 18 cu.ft مدل SA218Plus",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 79809173,
    originalPrice: 96500000,
    description: "Smart Fridge from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال هوشمند از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Twin Cooling System",
      "Smart Connectivity",
      "Energy Star Certified",
      "Digital Touch Display",
      "Convertible FlexZone",
      "Dual Auto Ice Maker"
    ],
    featuresFa: [
      "سیستم خنک‌کننده دوگانه",
      "اتصال هوشمند",
      "دارای گواهی انرژی استار",
      "نمایشگر لمسی دیجیتال",
      "منطقه قابل تبدیل",
      "یخ‌ساز خودکار دوگانه"
    ],
    specs: {
      Capacity: "25 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.5,
    reviews: 3167,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA218Plus"
  },
  {
    id: "samsung-side-by-side-refrigerator-39",
    name: "Samsung Side-by-Side Refrigerator 22 cu.ft SA593X",
    nameFa: "یخچال ساید بای ساید سامسونگ 22 cu.ft مدل SA593X",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 304773070,
    originalPrice: 363100000,
    description: "Side-by-Side Refrigerator from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال ساید بای ساید از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Energy Star Certified",
      "Door-in-Door Access",
      "No-Frost Technology",
      "Digital Touch Display",
      "Twin Cooling System",
      "Dual Auto Ice Maker"
    ],
    featuresFa: [
      "دارای گواهی انرژی استار",
      "دسترسی درون درب",
      "فناوری بدون یخ‌زدگی",
      "نمایشگر لمسی دیجیتال",
      "سیستم خنک‌کننده دوگانه",
      "یخ‌ساز خودکار دوگانه"
    ],
    specs: {
      Capacity: "32 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.1,
    reviews: 2082,
    isNew: true,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA593X"
  },
  {
    id: "samsung-bottom-freezer-refrigerator-40",
    name: "Samsung Bottom Freezer Refrigerator 29 cu.ft SA743Plus",
    nameFa: "یخچال فریزر پایین سامسونگ 29 cu.ft مدل SA743Plus",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 146068893,
    description: "Bottom Freezer Refrigerator from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال فریزر پایین از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Twin Cooling System",
      "Energy Star Certified",
      "Convertible FlexZone",
      "Dual Auto Ice Maker",
      "Digital Touch Display",
      "Door-in-Door Access"
    ],
    featuresFa: [
      "سیستم خنک‌کننده دوگانه",
      "دارای گواهی انرژی استار",
      "منطقه قابل تبدیل",
      "یخ‌ساز خودکار دوگانه",
      "نمایشگر لمسی دیجیتال",
      "دسترسی درون درب"
    ],
    specs: {
      Capacity: "32 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A+",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.4,
    reviews: 3171,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA743Plus"
  },
  {
    id: "samsung-french-door-refrigerator-41",
    name: "Samsung French Door Refrigerator 25 cu.ft SA165Neo",
    nameFa: "یخچال درب فرانسوی سامسونگ 25 cu.ft مدل SA165Neo",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 104980482,
    description: "French Door Refrigerator from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال درب فرانسوی از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "No-Frost Technology",
      "Energy Star Certified",
      "Smart Connectivity",
      "Digital Touch Display",
      "Dual Auto Ice Maker",
      "Convertible FlexZone"
    ],
    featuresFa: [
      "فناوری بدون یخ‌زدگی",
      "دارای گواهی انرژی استار",
      "اتصال هوشمند",
      "نمایشگر لمسی دیجیتال",
      "یخ‌ساز خودکار دوگانه",
      "منطقه قابل تبدیل"
    ],
    specs: {
      Capacity: "22 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A+",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.2,
    reviews: 1009,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA165Neo"
  },
  {
    id: "samsung-smart-fridge-42",
    name: "Samsung Smart Fridge 27 cu.ft SA498S",
    nameFa: "یخچال هوشمند سامسونگ 27 cu.ft مدل SA498S",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 292818729,
    originalPrice: 368200000,
    description: "Smart Fridge from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال هوشمند از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Digital Touch Display",
      "Dual Auto Ice Maker",
      "Convertible FlexZone",
      "Energy Star Certified",
      "No-Frost Technology",
      "Twin Cooling System"
    ],
    featuresFa: [
      "نمایشگر لمسی دیجیتال",
      "یخ‌ساز خودکار دوگانه",
      "منطقه قابل تبدیل",
      "دارای گواهی انرژی استار",
      "فناوری بدون یخ‌زدگی",
      "سیستم خنک‌کننده دوگانه"
    ],
    specs: {
      Capacity: "29 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A+",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.2,
    reviews: 1135,
    isBestseller: true,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA498S"
  },
  {
    id: "samsung-top-load-washer-43",
    name: "Samsung Top Load Washer 9kg SA139S",
    nameFa: "لباسشویی درب از بالا سامسونگ 9kg مدل SA139S",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 161582690,
    description: "Top Load Washer from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی درب از بالا از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Vibration Reduction Technology",
      "WiFi App Control",
      "Auto Dosing System",
      "Anti-Stain Removal",
      "Quick Wash Program",
      "Steam Sanitize+ Cycle"
    ],
    featuresFa: [
      "کاهش لرزش",
      "کنترل اپلیکیشن WiFi",
      "سیستم دوزینگ خودکار",
      "سیستم ضد لک",
      "برنامه شستشوی سریع",
      "چرخه ضدعفونی با بخار"
    ],
    specs: {
      "Wash Capacity": "8 kg",
      "Spin Speed": "1600 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80",
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.2,
    reviews: 2530,
    isNew: true,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA139S"
  },
  {
    id: "samsung-top-load-washer-44",
    name: "Samsung Top Load Washer 10kg SA124",
    nameFa: "لباسشویی درب از بالا سامسونگ 10kg مدل SA124",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 107079000,
    description: "Top Load Washer from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی درب از بالا از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "EcoSilence Drive Motor",
      "Vibration Reduction Technology",
      "WiFi App Control",
      "Child Lock Safety",
      "Steam Sanitize+ Cycle",
      "Quick Wash Program"
    ],
    featuresFa: [
      "موتور کم‌صدا",
      "کاهش لرزش",
      "کنترل اپلیکیشن WiFi",
      "قفل کودک",
      "چرخه ضدعفونی با بخار",
      "برنامه شستشوی سریع"
    ],
    specs: {
      "Wash Capacity": "11 kg",
      "Spin Speed": "1200 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.1,
    reviews: 1148,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA124"
  },
  {
    id: "samsung-compact-washer-45",
    name: "Samsung Compact Washer 8kg SA467Neo",
    nameFa: "لباسشویی جمع‌وجور سامسونگ 8kg مدل SA467Neo",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 174571491,
    description: "Compact Washer from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی جمع‌وجور از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Vibration Reduction Technology",
      "Quick Wash Program",
      "Steam Sanitize+ Cycle",
      "Auto Dosing System",
      "Anti-Stain Removal",
      "WiFi App Control"
    ],
    featuresFa: [
      "کاهش لرزش",
      "برنامه شستشوی سریع",
      "چرخه ضدعفونی با بخار",
      "سیستم دوزینگ خودکار",
      "سیستم ضد لک",
      "کنترل اپلیکیشن WiFi"
    ],
    specs: {
      "Wash Capacity": "12 kg",
      "Spin Speed": "1200 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80",
      "https://images.unsplash.com/photo-1610557892470-55d587c8b6d0?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.3,
    reviews: 191,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA467Neo"
  },
  {
    id: "samsung-top-load-washer-46",
    name: "Samsung Top Load Washer 9kg SA371",
    nameFa: "لباسشویی درب از بالا سامسونگ 9kg مدل SA371",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 153059330,
    description: "Top Load Washer from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی درب از بالا از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Vibration Reduction Technology",
      "Steam Sanitize+ Cycle",
      "Quick Wash Program",
      "Auto Dosing System",
      "Child Lock Safety",
      "Anti-Stain Removal"
    ],
    featuresFa: [
      "کاهش لرزش",
      "چرخه ضدعفونی با بخار",
      "برنامه شستشوی سریع",
      "سیستم دوزینگ خودکار",
      "قفل کودک",
      "سیستم ضد لک"
    ],
    specs: {
      "Wash Capacity": "12 kg",
      "Spin Speed": "1600 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1610557892470-55d587c8b6d0?w=800&q=80",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.2,
    reviews: 1994,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA371"
  },
  {
    id: "samsung-front-load-washer-47",
    name: "Samsung Front Load Washer 11kg SA402S",
    nameFa: "ماشین لباسشویی درب از جلو سامسونگ 11kg مدل SA402S",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 136556252,
    description: "Front Load Washer from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "ماشین لباسشویی درب از جلو از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Auto Dosing System",
      "Anti-Stain Removal",
      "WiFi App Control",
      "Quick Wash Program",
      "Vibration Reduction Technology",
      "Steam Sanitize+ Cycle"
    ],
    featuresFa: [
      "سیستم دوزینگ خودکار",
      "سیستم ضد لک",
      "کنترل اپلیکیشن WiFi",
      "برنامه شستشوی سریع",
      "کاهش لرزش",
      "چرخه ضدعفونی با بخار"
    ],
    specs: {
      "Wash Capacity": "10 kg",
      "Spin Speed": "1200 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80",
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4,
    reviews: 2551,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA402S"
  },
  {
    id: "samsung-washer-dryer-combo-48",
    name: "Samsung Washer-Dryer Combo 9kg SA432X",
    nameFa: "لباسشویی-خشک‌کن سامسونگ 9kg مدل SA432X",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 90325712,
    description: "Washer-Dryer Combo from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی-خشک‌کن از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Child Lock Safety",
      "Anti-Stain Removal",
      "Vibration Reduction Technology",
      "WiFi App Control",
      "Steam Sanitize+ Cycle",
      "Quick Wash Program"
    ],
    featuresFa: [
      "قفل کودک",
      "سیستم ضد لک",
      "کاهش لرزش",
      "کنترل اپلیکیشن WiFi",
      "چرخه ضدعفونی با بخار",
      "برنامه شستشوی سریع"
    ],
    specs: {
      "Wash Capacity": "7 kg",
      "Spin Speed": "1600 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.7,
    reviews: 614,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA432X"
  },
  {
    id: "samsung-washer-dryer-combo-49",
    name: "Samsung Washer-Dryer Combo 8kg SA200Pro",
    nameFa: "لباسشویی-خشک‌کن سامسونگ 8kg مدل SA200Pro",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 71033616,
    originalPrice: 88700000,
    description: "Washer-Dryer Combo from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی-خشک‌کن از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Quick Wash Program",
      "Vibration Reduction Technology",
      "Steam Sanitize+ Cycle",
      "Auto Dosing System",
      "Anti-Stain Removal",
      "Child Lock Safety"
    ],
    featuresFa: [
      "برنامه شستشوی سریع",
      "کاهش لرزش",
      "چرخه ضدعفونی با بخار",
      "سیستم دوزینگ خودکار",
      "سیستم ضد لک",
      "قفل کودک"
    ],
    specs: {
      "Wash Capacity": "7 kg",
      "Spin Speed": "1400 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1610557892470-55d587c8b6d0?w=800&q=80",
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.6,
    reviews: 1277,
    badge: "Premium",
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA200Pro"
  },
  {
    id: "samsung-compact-washer-50",
    name: "Samsung Compact Washer 12kg SA853Neo",
    nameFa: "لباسشویی جمع‌وجور سامسونگ 12kg مدل SA853Neo",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 145861311,
    originalPrice: 164800000,
    description: "Compact Washer from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی جمع‌وجور از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "WiFi App Control",
      "EcoSilence Drive Motor",
      "Quick Wash Program",
      "Vibration Reduction Technology",
      "Anti-Stain Removal",
      "Auto Dosing System"
    ],
    featuresFa: [
      "کنترل اپلیکیشن WiFi",
      "موتور کم‌صدا",
      "برنامه شستشوی سریع",
      "کاهش لرزش",
      "سیستم ضد لک",
      "سیستم دوزینگ خودکار"
    ],
    specs: {
      "Wash Capacity": "12 kg",
      "Spin Speed": "1600 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80",
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.6,
    reviews: 999,
    badge: "Top Rated",
    isBestseller: true,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA853Neo"
  },
  {
    id: "samsung-washer-dryer-combo-51",
    name: "Samsung Washer-Dryer Combo 7kg SA490Pro",
    nameFa: "لباسشویی-خشک‌کن سامسونگ 7kg مدل SA490Pro",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 134905796,
    originalPrice: 163200000,
    description: "Washer-Dryer Combo from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی-خشک‌کن از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Quick Wash Program",
      "Steam Sanitize+ Cycle",
      "WiFi App Control",
      "EcoSilence Drive Motor",
      "Auto Dosing System",
      "Vibration Reduction Technology"
    ],
    featuresFa: [
      "برنامه شستشوی سریع",
      "چرخه ضدعفونی با بخار",
      "کنترل اپلیکیشن WiFi",
      "موتور کم‌صدا",
      "سیستم دوزینگ خودکار",
      "کاهش لرزش"
    ],
    specs: {
      "Wash Capacity": "8 kg",
      "Spin Speed": "1600 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.6,
    reviews: 1523,
    badge: "Best Seller",
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA490Pro"
  },
  {
    id: "samsung-top-load-washer-52",
    name: "Samsung Top Load Washer 9kg SA395Neo",
    nameFa: "لباسشویی درب از بالا سامسونگ 9kg مدل SA395Neo",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 93286009,
    originalPrice: 105600000,
    description: "Top Load Washer from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی درب از بالا از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Anti-Stain Removal",
      "Quick Wash Program",
      "Steam Sanitize+ Cycle",
      "EcoSilence Drive Motor",
      "Child Lock Safety",
      "Vibration Reduction Technology"
    ],
    featuresFa: [
      "سیستم ضد لک",
      "برنامه شستشوی سریع",
      "چرخه ضدعفونی با بخار",
      "موتور کم‌صدا",
      "قفل کودک",
      "کاهش لرزش"
    ],
    specs: {
      "Wash Capacity": "11 kg",
      "Spin Speed": "1600 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1610557892470-55d587c8b6d0?w=800&q=80",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.3,
    reviews: 2776,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA395Neo"
  },
  {
    id: "samsung-top-load-washer-53",
    name: "Samsung Top Load Washer 11kg SA859Plus",
    nameFa: "لباسشویی درب از بالا سامسونگ 11kg مدل SA859Plus",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 136455097,
    originalPrice: 151500000,
    description: "Top Load Washer from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی درب از بالا از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Child Lock Safety",
      "Steam Sanitize+ Cycle",
      "WiFi App Control",
      "Anti-Stain Removal",
      "Auto Dosing System",
      "EcoSilence Drive Motor"
    ],
    featuresFa: [
      "قفل کودک",
      "چرخه ضدعفونی با بخار",
      "کنترل اپلیکیشن WiFi",
      "سیستم ضد لک",
      "سیستم دوزینگ خودکار",
      "موتور کم‌صدا"
    ],
    specs: {
      "Wash Capacity": "11 kg",
      "Spin Speed": "1400 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80",
      "https://images.unsplash.com/photo-1610557892470-55d587c8b6d0?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.1,
    reviews: 1772,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA859Plus"
  },
  {
    id: "samsung-washer-dryer-combo-54",
    name: "Samsung Washer-Dryer Combo 9kg SA566X",
    nameFa: "لباسشویی-خشک‌کن سامسونگ 9kg مدل SA566X",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 85363324,
    description: "Washer-Dryer Combo from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی-خشک‌کن از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "EcoSilence Drive Motor",
      "Quick Wash Program",
      "Auto Dosing System",
      "WiFi App Control",
      "Vibration Reduction Technology",
      "Anti-Stain Removal"
    ],
    featuresFa: [
      "موتور کم‌صدا",
      "برنامه شستشوی سریع",
      "سیستم دوزینگ خودکار",
      "کنترل اپلیکیشن WiFi",
      "کاهش لرزش",
      "سیستم ضد لک"
    ],
    specs: {
      "Wash Capacity": "12 kg",
      "Spin Speed": "1400 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.3,
    reviews: 2295,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA566X"
  },
  {
    id: "samsung-washer-dryer-combo-55",
    name: "Samsung Washer-Dryer Combo 11kg SA799S",
    nameFa: "لباسشویی-خشک‌کن سامسونگ 11kg مدل SA799S",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 121458016,
    description: "Washer-Dryer Combo from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی-خشک‌کن از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Auto Dosing System",
      "Vibration Reduction Technology",
      "Child Lock Safety",
      "Steam Sanitize+ Cycle",
      "WiFi App Control",
      "EcoSilence Drive Motor"
    ],
    featuresFa: [
      "سیستم دوزینگ خودکار",
      "کاهش لرزش",
      "قفل کودک",
      "چرخه ضدعفونی با بخار",
      "کنترل اپلیکیشن WiFi",
      "موتور کم‌صدا"
    ],
    specs: {
      "Wash Capacity": "8 kg",
      "Spin Speed": "1400 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.9,
    reviews: 248,
    isNew: true,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA799S"
  },
  {
    id: "samsung-compact-washer-56",
    name: "Samsung Compact Washer 11kg SA391",
    nameFa: "لباسشویی جمع‌وجور سامسونگ 11kg مدل SA391",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 152760167,
    originalPrice: 179500000,
    description: "Compact Washer from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی جمع‌وجور از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Vibration Reduction Technology",
      "EcoSilence Drive Motor",
      "Steam Sanitize+ Cycle",
      "WiFi App Control",
      "Quick Wash Program",
      "Anti-Stain Removal"
    ],
    featuresFa: [
      "کاهش لرزش",
      "موتور کم‌صدا",
      "چرخه ضدعفونی با بخار",
      "کنترل اپلیکیشن WiFi",
      "برنامه شستشوی سریع",
      "سیستم ضد لک"
    ],
    specs: {
      "Wash Capacity": "11 kg",
      "Spin Speed": "1200 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80",
      "https://images.unsplash.com/photo-1610557892470-55d587c8b6d0?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.2,
    reviews: 3063,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA391"
  },
  {
    id: "samsung-compact-washer-57",
    name: "Samsung Compact Washer 12kg SA689",
    nameFa: "لباسشویی جمع‌وجور سامسونگ 12kg مدل SA689",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 88781872,
    description: "Compact Washer from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی جمع‌وجور از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Steam Sanitize+ Cycle",
      "Vibration Reduction Technology",
      "WiFi App Control",
      "Child Lock Safety",
      "EcoSilence Drive Motor",
      "Quick Wash Program"
    ],
    featuresFa: [
      "چرخه ضدعفونی با بخار",
      "کاهش لرزش",
      "کنترل اپلیکیشن WiFi",
      "قفل کودک",
      "موتور کم‌صدا",
      "برنامه شستشوی سریع"
    ],
    specs: {
      "Wash Capacity": "7 kg",
      "Spin Speed": "1400 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1610557892470-55d587c8b6d0?w=800&q=80",
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.1,
    reviews: 2254,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA689"
  },
  {
    id: "samsung-portable-ac-58",
    name: "Samsung Portable AC 12000 BTU SA351Plus",
    nameFa: "کولر گازی پرتابل سامسونگ 12000 BTU مدل SA351Plus",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 107264750,
    originalPrice: 139000000,
    description: "Portable AC from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پرتابل از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Ultra-Quiet Operation",
      "Streamer Air Purification",
      "R32 Eco Refrigerant",
      "Rapid Cooling Mode",
      "Inverter Technology",
      "WiFi Smart Control"
    ],
    featuresFa: [
      "عملکرد فوق‌العاده کم‌صدا",
      "تصفیه هوای استریمر",
      "گاز سردکننده R32",
      "حالت سرمایش سریع",
      "فناوری اینورتر",
      "کنترل هوشمند WiFi"
    ],
    specs: {
      Capacity: "12000 BTU",
      SEER: "8.2 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80",
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.9,
    reviews: 1571,
    badge: "Popular",
    isNew: true,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA351Plus"
  },
  {
    id: "samsung-window-ac-59",
    name: "Samsung Window AC 9000 BTU SA158Plus",
    nameFa: "کولر گازی پنجره‌ای سامسونگ 9000 BTU مدل SA158Plus",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 74535313,
    originalPrice: 96400000,
    description: "Window AC from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پنجره‌ای از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Inverter Technology",
      "Intelligent Eye Sensor",
      "Ultra-Quiet Operation",
      "R32 Eco Refrigerant",
      "Rapid Cooling Mode",
      "WiFi Smart Control"
    ],
    featuresFa: [
      "فناوری اینورتر",
      "سنسور هوشمند چشمی",
      "عملکرد فوق‌العاده کم‌صدا",
      "گاز سردکننده R32",
      "حالت سرمایش سریع",
      "کنترل هوشمند WiFi"
    ],
    specs: {
      Capacity: "12000 BTU",
      SEER: "8.1 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80",
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.5,
    reviews: 2484,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA158Plus"
  },
  {
    id: "samsung-window-ac-60",
    name: "Samsung Window AC 12000 BTU SA873Pro",
    nameFa: "کولر گازی پنجره‌ای سامسونگ 12000 BTU مدل SA873Pro",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 83351812,
    description: "Window AC from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پنجره‌ای از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Streamer Air Purification",
      "Rapid Cooling Mode",
      "Ultra-Quiet Operation",
      "Intelligent Eye Sensor",
      "Inverter Technology",
      "Self-Cleaning Function"
    ],
    featuresFa: [
      "تصفیه هوای استریمر",
      "حالت سرمایش سریع",
      "عملکرد فوق‌العاده کم‌صدا",
      "سنسور هوشمند چشمی",
      "فناوری اینورتر",
      "قابلیت خودتمیزکنی"
    ],
    specs: {
      Capacity: "18000 BTU",
      SEER: "8.5 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.2,
    reviews: 1118,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA873Pro"
  },
  {
    id: "samsung-portable-ac-61",
    name: "Samsung Portable AC 18000 BTU SA846S",
    nameFa: "کولر گازی پرتابل سامسونگ 18000 BTU مدل SA846S",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 125724533,
    description: "Portable AC from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پرتابل از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Ultra-Quiet Operation",
      "Inverter Technology",
      "Rapid Cooling Mode",
      "R32 Eco Refrigerant",
      "Streamer Air Purification",
      "Intelligent Eye Sensor"
    ],
    featuresFa: [
      "عملکرد فوق‌العاده کم‌صدا",
      "فناوری اینورتر",
      "حالت سرمایش سریع",
      "گاز سردکننده R32",
      "تصفیه هوای استریمر",
      "سنسور هوشمند چشمی"
    ],
    specs: {
      Capacity: "24000 BTU",
      SEER: "7.6 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80",
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.6,
    reviews: 1904,
    badge: "Top Rated",
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA846S"
  },
  {
    id: "samsung-split-inverter-ac-62",
    name: "Samsung Split Inverter AC 30000 BTU SA532X",
    nameFa: "کولر گازی اسپلیت اینورتر سامسونگ 30000 BTU مدل SA532X",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 77410512,
    originalPrice: 90400000,
    description: "Split Inverter AC from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی اسپلیت اینورتر از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Inverter Technology",
      "R32 Eco Refrigerant",
      "Rapid Cooling Mode",
      "WiFi Smart Control",
      "Intelligent Eye Sensor",
      "Ultra-Quiet Operation"
    ],
    featuresFa: [
      "فناوری اینورتر",
      "گاز سردکننده R32",
      "حالت سرمایش سریع",
      "کنترل هوشمند WiFi",
      "سنسور هوشمند چشمی",
      "عملکرد فوق‌العاده کم‌صدا"
    ],
    specs: {
      Capacity: "9000 BTU",
      SEER: "8.8 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80",
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.4,
    reviews: 2190,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA532X"
  },
  {
    id: "samsung-portable-ac-63",
    name: "Samsung Portable AC 24000 BTU SA263Neo",
    nameFa: "کولر گازی پرتابل سامسونگ 24000 BTU مدل SA263Neo",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 72748529,
    description: "Portable AC from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پرتابل از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Inverter Technology",
      "Ultra-Quiet Operation",
      "Streamer Air Purification",
      "Self-Cleaning Function",
      "Intelligent Eye Sensor",
      "R32 Eco Refrigerant"
    ],
    featuresFa: [
      "فناوری اینورتر",
      "عملکرد فوق‌العاده کم‌صدا",
      "تصفیه هوای استریمر",
      "قابلیت خودتمیزکنی",
      "سنسور هوشمند چشمی",
      "گاز سردکننده R32"
    ],
    specs: {
      Capacity: "30000 BTU",
      SEER: "7.7 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80",
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.8,
    reviews: 2318,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA263Neo"
  },
  {
    id: "samsung-portable-ac-64",
    name: "Samsung Portable AC 12000 BTU SA883Pro",
    nameFa: "کولر گازی پرتابل سامسونگ 12000 BTU مدل SA883Pro",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 45459475,
    description: "Portable AC from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پرتابل از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Intelligent Eye Sensor",
      "Streamer Air Purification",
      "R32 Eco Refrigerant",
      "Ultra-Quiet Operation",
      "Self-Cleaning Function",
      "Inverter Technology"
    ],
    featuresFa: [
      "سنسور هوشمند چشمی",
      "تصفیه هوای استریمر",
      "گاز سردکننده R32",
      "عملکرد فوق‌العاده کم‌صدا",
      "قابلیت خودتمیزکنی",
      "فناوری اینورتر"
    ],
    specs: {
      Capacity: "9000 BTU",
      SEER: "8.6 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80",
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.2,
    reviews: 171,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA883Pro"
  },
  {
    id: "samsung-multi-split-system-65",
    name: "Samsung Multi-Split System 24000 BTU SA569Plus",
    nameFa: "سیستم مولتی‌اسپلیت سامسونگ 24000 BTU مدل SA569Plus",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 131521966,
    originalPrice: 159200000,
    description: "Multi-Split System from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سیستم مولتی‌اسپلیت از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Ultra-Quiet Operation",
      "Self-Cleaning Function",
      "R32 Eco Refrigerant",
      "WiFi Smart Control",
      "Intelligent Eye Sensor",
      "Streamer Air Purification"
    ],
    featuresFa: [
      "عملکرد فوق‌العاده کم‌صدا",
      "قابلیت خودتمیزکنی",
      "گاز سردکننده R32",
      "کنترل هوشمند WiFi",
      "سنسور هوشمند چشمی",
      "تصفیه هوای استریمر"
    ],
    specs: {
      Capacity: "12000 BTU",
      SEER: "7.2 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.8,
    reviews: 981,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA569Plus"
  },
  {
    id: "samsung-cordless-stick-vacuum-66",
    name: "Samsung Cordless Stick Vacuum SA212Plus",
    nameFa: "جاروبرقی شارژی سامسونگ مدل SA212Plus",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 28632409,
    originalPrice: 33200000,
    description: "Cordless Stick Vacuum from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی شارژی از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Auto-Empty Base",
      "Laser Dust Detection",
      "HEPA H13 Filtration",
      "Multi-Surface Sensors",
      "Smart Mapping Navigation",
      "App & Voice Control"
    ],
    featuresFa: [
      "پایه تخلیه خودکار",
      "تشخیص گرد و غبار با لیزر",
      "فیلتراسیون HEPA H13",
      "سنسورهای چندسطحی",
      "ناوبری نقشه‌برداری هوشمند",
      "کنترل اپلیکیشن و صدا"
    ],
    specs: {
      "Suction Power": "222 AW",
      Runtime: "50 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.9,
    reviews: 2390,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA212Plus"
  },
  {
    id: "samsung-canister-vacuum-67",
    name: "Samsung Canister Vacuum SA262S",
    nameFa: "جاروبرقی سطلی سامسونگ مدل SA262S",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 34359095,
    originalPrice: 43200000,
    description: "Canister Vacuum from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Mapping Navigation",
      "HEPA H13 Filtration",
      "Multi-Surface Sensors",
      "App & Voice Control",
      "Auto-Empty Base",
      "Laser Dust Detection"
    ],
    featuresFa: [
      "ناوبری نقشه‌برداری هوشمند",
      "فیلتراسیون HEPA H13",
      "سنسورهای چندسطحی",
      "کنترل اپلیکیشن و صدا",
      "پایه تخلیه خودکار",
      "تشخیص گرد و غبار با لیزر"
    ],
    specs: {
      "Suction Power": "213 AW",
      Runtime: "90 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.7,
    reviews: 1983,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA262S"
  },
  {
    id: "samsung-canister-vacuum-68",
    name: "Samsung Canister Vacuum SA234S",
    nameFa: "جاروبرقی سطلی سامسونگ مدل SA234S",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 46689906,
    originalPrice: 57200000,
    description: "Canister Vacuum from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Pet Hair Optimized Brush",
      "Laser Dust Detection",
      "60-Minute Runtime",
      "Smart Mapping Navigation",
      "Auto-Empty Base",
      "Multi-Surface Sensors"
    ],
    featuresFa: [
      "برس مخصوص موی حیوانات",
      "تشخیص گرد و غبار با لیزر",
      "شارژدهی تا ۶۰ دقیقه",
      "ناوبری نقشه‌برداری هوشمند",
      "پایه تخلیه خودکار",
      "سنسورهای چندسطحی"
    ],
    specs: {
      "Suction Power": "172 AW",
      Runtime: "120 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.1,
    reviews: 357,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA234S"
  },
  {
    id: "samsung-cordless-stick-vacuum-69",
    name: "Samsung Cordless Stick Vacuum SA933",
    nameFa: "جاروبرقی شارژی سامسونگ مدل SA933",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 48591584,
    originalPrice: 56900000,
    description: "Cordless Stick Vacuum from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی شارژی از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "App & Voice Control",
      "Pet Hair Optimized Brush",
      "Auto-Empty Base",
      "HEPA H13 Filtration",
      "Multi-Surface Sensors",
      "60-Minute Runtime"
    ],
    featuresFa: [
      "کنترل اپلیکیشن و صدا",
      "برس مخصوص موی حیوانات",
      "پایه تخلیه خودکار",
      "فیلتراسیون HEPA H13",
      "سنسورهای چندسطحی",
      "شارژدهی تا ۶۰ دقیقه"
    ],
    specs: {
      "Suction Power": "160 AW",
      Runtime: "60 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.3,
    reviews: 139,
    isNew: true,
    isBestseller: true,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA933"
  },
  {
    id: "samsung-robot-vacuum-70",
    name: "Samsung Robot Vacuum SA587S",
    nameFa: "جاروبرقی رباتیک سامسونگ مدل SA587S",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 38313692,
    description: "Robot Vacuum from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی رباتیک از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Pet Hair Optimized Brush",
      "App & Voice Control",
      "Laser Dust Detection",
      "Multi-Surface Sensors",
      "60-Minute Runtime",
      "HEPA H13 Filtration"
    ],
    featuresFa: [
      "برس مخصوص موی حیوانات",
      "کنترل اپلیکیشن و صدا",
      "تشخیص گرد و غبار با لیزر",
      "سنسورهای چندسطحی",
      "شارژدهی تا ۶۰ دقیقه",
      "فیلتراسیون HEPA H13"
    ],
    specs: {
      "Suction Power": "250 AW",
      Runtime: "90 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4,
    reviews: 203,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA587S"
  },
  {
    id: "samsung-microwave-oven-71",
    name: "Samsung Microwave Oven SA931S",
    nameFa: "مایکروویو سامسونگ مدل SA931S",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 31412915,
    description: "Microwave Oven from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مایکروویو از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Dishwasher Safe Parts",
      "10-Speed Control",
      "Keep Warm Function",
      "Compact Footprint Design",
      "Smart Preset Programs",
      "Companion App with Recipes"
    ],
    featuresFa: [
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "کنترل ۱۰ سرعته",
      "قابلیت Keep Warm",
      "طراحی جمع‌وجور",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "اپلیکیشن همراه با دستور غذا"
    ],
    specs: {
      Power: "1788 Watt",
      Capacity: "5.9 L",
      Presets: "7 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.2,
    reviews: 401,
    badge: "Premium",
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA931S"
  },
  {
    id: "samsung-coffee-maker-72",
    name: "Samsung Coffee Maker SA499X",
    nameFa: "قهوه‌ساز سامسونگ مدل SA499X",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 23187021,
    description: "Coffee Maker from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "قهوه‌ساز از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Rapid Air Technology",
      "Dishwasher Safe Parts",
      "10-Speed Control",
      "Keep Warm Function",
      "Compact Footprint Design",
      "Companion App with Recipes"
    ],
    featuresFa: [
      "فناوری هوای سریع",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "کنترل ۱۰ سرعته",
      "قابلیت Keep Warm",
      "طراحی جمع‌وجور",
      "اپلیکیشن همراه با دستور غذا"
    ],
    specs: {
      Power: "458 Watt",
      Capacity: "4.7 L",
      Presets: "5 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4,
    reviews: 1832,
    isNew: true,
    isBestseller: true,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA499X"
  },
  {
    id: "samsung-coffee-maker-73",
    name: "Samsung Coffee Maker SA298Neo",
    nameFa: "قهوه‌ساز سامسونگ مدل SA298Neo",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 36513527,
    originalPrice: 46700000,
    description: "Coffee Maker from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "قهوه‌ساز از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Compact Footprint Design",
      "Rapid Air Technology",
      "Dishwasher Safe Parts",
      "Keep Warm Function",
      "One-Touch Operation",
      "10-Speed Control"
    ],
    featuresFa: [
      "طراحی جمع‌وجور",
      "فناوری هوای سریع",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "قابلیت Keep Warm",
      "عملکرد تک‌لمسی",
      "کنترل ۱۰ سرعته"
    ],
    specs: {
      Power: "1403 Watt",
      Capacity: "5.6 L",
      Presets: "5 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4,
    reviews: 2282,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA298Neo"
  },
  {
    id: "samsung-air-fryer-74",
    name: "Samsung Air Fryer SA885X",
    nameFa: "سرخ‌کن بدون روغن سامسونگ مدل SA885X",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 29833257,
    description: "Air Fryer from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سرخ‌کن بدون روغن از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Compact Footprint Design",
      "10-Speed Control",
      "Companion App with Recipes",
      "One-Touch Operation",
      "Smart Preset Programs",
      "Dishwasher Safe Parts"
    ],
    featuresFa: [
      "طراحی جمع‌وجور",
      "کنترل ۱۰ سرعته",
      "اپلیکیشن همراه با دستور غذا",
      "عملکرد تک‌لمسی",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "قطعات قابل شستشو در ماشین ظرفشویی"
    ],
    specs: {
      Power: "1204 Watt",
      Capacity: "1.2 L",
      Presets: "7 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.2,
    reviews: 2287,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA885X"
  },
  {
    id: "samsung-air-fryer-75",
    name: "Samsung Air Fryer SA822",
    nameFa: "سرخ‌کن بدون روغن سامسونگ مدل SA822",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 11057817,
    description: "Air Fryer from Samsung, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سرخ‌کن بدون روغن از برند سامسونگ، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Preset Programs",
      "Dishwasher Safe Parts",
      "One-Touch Operation",
      "Companion App with Recipes",
      "10-Speed Control",
      "Compact Footprint Design"
    ],
    featuresFa: [
      "برنامه‌های هوشمند پیش‌تنظیم",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "عملکرد تک‌لمسی",
      "اپلیکیشن همراه با دستور غذا",
      "کنترل ۱۰ سرعته",
      "طراحی جمع‌وجور"
    ],
    specs: {
      Power: "592 Watt",
      Capacity: "1.5 L",
      Presets: "4 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.8,
    reviews: 3127,
    isNew: true,
    brand: "Samsung",
    brandFa: "سامسونگ",
    model: "SA822"
  },
  {
    id: "lg-smart-tv-76",
    name: "LG Smart TV 55\" LG983Pro",
    nameFa: "تلویزیون هوشمند ال‌جی 55\" مدل LG983Pro",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 33922534,
    description: "Smart TV from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون هوشمند از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "AI Upscaling Processor",
      "Smart Hub with Voice Assistant",
      "Dolby Vision & Atmos",
      "120Hz High Refresh Rate",
      "4K/8K Ultra HD Resolution",
      "HDR10+ Support"
    ],
    featuresFa: [
      "پردازنده ارتقای هوشمند AI",
      "هاب هوشمند با دستیار صوتی",
      "دالبی ویژن و اتموس",
      "نرخ تازه‌سازی ۱۲۰ هرتز",
      "رزولوشن ۴K/۸K",
      "پشتیبانی از HDR10+"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "120Hz",
      "Smart Platform": "webOS",
      "HDMI Ports": "4 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80",
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.5,
    reviews: 1591,
    badge: "Popular",
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG983Pro"
  },
  {
    id: "lg-qled-tv-77",
    name: "LG QLED TV 70\" LG816Pro",
    nameFa: "تلویزیون کیولد ال‌جی 70\" مدل LG816Pro",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 101760962,
    originalPrice: 122000000,
    description: "QLED TV from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون کیولد از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "HDR10+ Support",
      "Smart Hub with Voice Assistant",
      "Slim Bezel-less Design",
      "4K/8K Ultra HD Resolution",
      "AI Upscaling Processor",
      "Gaming Mode with Low Latency"
    ],
    featuresFa: [
      "پشتیبانی از HDR10+",
      "هاب هوشمند با دستیار صوتی",
      "طراحی بی‌قاب باریک",
      "رزولوشن ۴K/۸K",
      "پردازنده ارتقای هوشمند AI",
      "حالت گیمینگ با تأخیر پایین"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "144Hz",
      "Smart Platform": "Android TV",
      "HDMI Ports": "4 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.3,
    reviews: 522,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG816Pro"
  },
  {
    id: "lg-home-theater-system-78",
    name: "LG Home Theater System 55\" LG359X",
    nameFa: "سیستم سینمای خانگی ال‌جی 55\" مدل LG359X",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 82229742,
    description: "Home Theater System from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سیستم سینمای خانگی از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Slim Bezel-less Design",
      "120Hz High Refresh Rate",
      "HDR10+ Support",
      "Gaming Mode with Low Latency",
      "4K/8K Ultra HD Resolution",
      "AI Upscaling Processor"
    ],
    featuresFa: [
      "طراحی بی‌قاب باریک",
      "نرخ تازه‌سازی ۱۲۰ هرتز",
      "پشتیبانی از HDR10+",
      "حالت گیمینگ با تأخیر پایین",
      "رزولوشن ۴K/۸K",
      "پردازنده ارتقای هوشمند AI"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "60Hz",
      "Smart Platform": "Google TV",
      "HDMI Ports": "4 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.6,
    reviews: 3103,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG359X"
  },
  {
    id: "lg-qled-tv-79",
    name: "LG QLED TV 43\" LG862",
    nameFa: "تلویزیون کیولد ال‌جی 43\" مدل LG862",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 136371604,
    description: "QLED TV from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون کیولد از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Gaming Mode with Low Latency",
      "Smart Hub with Voice Assistant",
      "Dolby Vision & Atmos",
      "AI Upscaling Processor",
      "HDR10+ Support",
      "Slim Bezel-less Design"
    ],
    featuresFa: [
      "حالت گیمینگ با تأخیر پایین",
      "هاب هوشمند با دستیار صوتی",
      "دالبی ویژن و اتموس",
      "پردازنده ارتقای هوشمند AI",
      "پشتیبانی از HDR10+",
      "طراحی بی‌قاب باریک"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "60Hz",
      "Smart Platform": "webOS",
      "HDMI Ports": "2 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.1,
    reviews: 1928,
    isBestseller: true,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG862"
  },
  {
    id: "lg-qled-tv-80",
    name: "LG QLED TV 43\" LG197Pro",
    nameFa: "تلویزیون کیولد ال‌جی 43\" مدل LG197Pro",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 143873588,
    originalPrice: 159300000,
    description: "QLED TV from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون کیولد از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "120Hz High Refresh Rate",
      "Slim Bezel-less Design",
      "Dolby Vision & Atmos",
      "AI Upscaling Processor",
      "Gaming Mode with Low Latency",
      "Smart Hub with Voice Assistant"
    ],
    featuresFa: [
      "نرخ تازه‌سازی ۱۲۰ هرتز",
      "طراحی بی‌قاب باریک",
      "دالبی ویژن و اتموس",
      "پردازنده ارتقای هوشمند AI",
      "حالت گیمینگ با تأخیر پایین",
      "هاب هوشمند با دستیار صوتی"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "120Hz",
      "Smart Platform": "Google TV",
      "HDMI Ports": "3 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.5,
    reviews: 1570,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG197Pro"
  },
  {
    id: "lg-smart-tv-81",
    name: "LG Smart TV 50\" LG378Pro",
    nameFa: "تلویزیون هوشمند ال‌جی 50\" مدل LG378Pro",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 54183166,
    originalPrice: 61000000,
    description: "Smart TV from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون هوشمند از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Slim Bezel-less Design",
      "Smart Hub with Voice Assistant",
      "AI Upscaling Processor",
      "Dolby Vision & Atmos",
      "120Hz High Refresh Rate",
      "Gaming Mode with Low Latency"
    ],
    featuresFa: [
      "طراحی بی‌قاب باریک",
      "هاب هوشمند با دستیار صوتی",
      "پردازنده ارتقای هوشمند AI",
      "دالبی ویژن و اتموس",
      "نرخ تازه‌سازی ۱۲۰ هرتز",
      "حالت گیمینگ با تأخیر پایین"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "144Hz",
      "Smart Platform": "Tizen OS",
      "HDMI Ports": "3 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.3,
    reviews: 443,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG378Pro"
  },
  {
    id: "lg-qled-tv-82",
    name: "LG QLED TV 65\" LG963X",
    nameFa: "تلویزیون کیولد ال‌جی 65\" مدل LG963X",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 34316478,
    description: "QLED TV from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون کیولد از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "4K/8K Ultra HD Resolution",
      "Gaming Mode with Low Latency",
      "Dolby Vision & Atmos",
      "Slim Bezel-less Design",
      "120Hz High Refresh Rate",
      "Smart Hub with Voice Assistant"
    ],
    featuresFa: [
      "رزولوشن ۴K/۸K",
      "حالت گیمینگ با تأخیر پایین",
      "دالبی ویژن و اتموس",
      "طراحی بی‌قاب باریک",
      "نرخ تازه‌سازی ۱۲۰ هرتز",
      "هاب هوشمند با دستیار صوتی"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "144Hz",
      "Smart Platform": "Tizen OS",
      "HDMI Ports": "2 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.2,
    reviews: 2717,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG963X"
  },
  {
    id: "lg-smart-tv-83",
    name: "LG Smart TV 58\" LG595S",
    nameFa: "تلویزیون هوشمند ال‌جی 58\" مدل LG595S",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 132501588,
    description: "Smart TV from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون هوشمند از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Gaming Mode with Low Latency",
      "Slim Bezel-less Design",
      "Dolby Vision & Atmos",
      "120Hz High Refresh Rate",
      "HDR10+ Support",
      "4K/8K Ultra HD Resolution"
    ],
    featuresFa: [
      "حالت گیمینگ با تأخیر پایین",
      "طراحی بی‌قاب باریک",
      "دالبی ویژن و اتموس",
      "نرخ تازه‌سازی ۱۲۰ هرتز",
      "پشتیبانی از HDR10+",
      "رزولوشن ۴K/۸K"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "144Hz",
      "Smart Platform": "Android TV",
      "HDMI Ports": "3 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.2,
    reviews: 2402,
    isNew: true,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG595S"
  },
  {
    id: "lg-qled-tv-84",
    name: "LG QLED TV 50\" LG347S",
    nameFa: "تلویزیون کیولد ال‌جی 50\" مدل LG347S",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 133539120,
    description: "QLED TV from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون کیولد از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "AI Upscaling Processor",
      "Smart Hub with Voice Assistant",
      "Slim Bezel-less Design",
      "HDR10+ Support",
      "Dolby Vision & Atmos",
      "Gaming Mode with Low Latency"
    ],
    featuresFa: [
      "پردازنده ارتقای هوشمند AI",
      "هاب هوشمند با دستیار صوتی",
      "طراحی بی‌قاب باریک",
      "پشتیبانی از HDR10+",
      "دالبی ویژن و اتموس",
      "حالت گیمینگ با تأخیر پایین"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "120Hz",
      "Smart Platform": "Google TV",
      "HDMI Ports": "2 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.8,
    reviews: 813,
    isBestseller: true,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG347S"
  },
  {
    id: "lg-oled-tv-85",
    name: "LG OLED TV 55\" LG106S",
    nameFa: "تلویزیون اولد ال‌جی 55\" مدل LG106S",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 84812393,
    description: "OLED TV from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون اولد از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "4K/8K Ultra HD Resolution",
      "AI Upscaling Processor",
      "Dolby Vision & Atmos",
      "120Hz High Refresh Rate",
      "Gaming Mode with Low Latency",
      "HDR10+ Support"
    ],
    featuresFa: [
      "رزولوشن ۴K/۸K",
      "پردازنده ارتقای هوشمند AI",
      "دالبی ویژن و اتموس",
      "نرخ تازه‌سازی ۱۲۰ هرتز",
      "حالت گیمینگ با تأخیر پایین",
      "پشتیبانی از HDR10+"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "144Hz",
      "Smart Platform": "Tizen OS",
      "HDMI Ports": "3 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.8,
    reviews: 634,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG106S"
  },
  {
    id: "lg-home-theater-system-86",
    name: "LG Home Theater System 85\" LG615",
    nameFa: "سیستم سینمای خانگی ال‌جی 85\" مدل LG615",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 44439079,
    description: "Home Theater System from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سیستم سینمای خانگی از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "AI Upscaling Processor",
      "HDR10+ Support",
      "Slim Bezel-less Design",
      "Gaming Mode with Low Latency",
      "120Hz High Refresh Rate",
      "4K/8K Ultra HD Resolution"
    ],
    featuresFa: [
      "پردازنده ارتقای هوشمند AI",
      "پشتیبانی از HDR10+",
      "طراحی بی‌قاب باریک",
      "حالت گیمینگ با تأخیر پایین",
      "نرخ تازه‌سازی ۱۲۰ هرتز",
      "رزولوشن ۴K/۸K"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "144Hz",
      "Smart Platform": "Google TV",
      "HDMI Ports": "4 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.3,
    reviews: 2010,
    badge: "Editor's Choice",
    isBestseller: true,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG615"
  },
  {
    id: "lg-home-theater-system-87",
    name: "LG Home Theater System 43\" LG279Neo",
    nameFa: "سیستم سینمای خانگی ال‌جی 43\" مدل LG279Neo",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 119542700,
    description: "Home Theater System from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سیستم سینمای خانگی از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Gaming Mode with Low Latency",
      "AI Upscaling Processor",
      "Dolby Vision & Atmos",
      "HDR10+ Support",
      "Slim Bezel-less Design",
      "120Hz High Refresh Rate"
    ],
    featuresFa: [
      "حالت گیمینگ با تأخیر پایین",
      "پردازنده ارتقای هوشمند AI",
      "دالبی ویژن و اتموس",
      "پشتیبانی از HDR10+",
      "طراحی بی‌قاب باریک",
      "نرخ تازه‌سازی ۱۲۰ هرتز"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "60Hz",
      "Smart Platform": "webOS",
      "HDMI Ports": "2 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80",
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4,
    reviews: 1591,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG279Neo"
  },
  {
    id: "lg-soundbar-88",
    name: "LG Soundbar 85\" LG526Pro",
    nameFa: "ساندبار ال‌جی 85\" مدل LG526Pro",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 82161354,
    originalPrice: 93800000,
    description: "Soundbar from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "ساندبار از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Hub with Voice Assistant",
      "Dolby Vision & Atmos",
      "AI Upscaling Processor",
      "120Hz High Refresh Rate",
      "Gaming Mode with Low Latency",
      "4K/8K Ultra HD Resolution"
    ],
    featuresFa: [
      "هاب هوشمند با دستیار صوتی",
      "دالبی ویژن و اتموس",
      "پردازنده ارتقای هوشمند AI",
      "نرخ تازه‌سازی ۱۲۰ هرتز",
      "حالت گیمینگ با تأخیر پایین",
      "رزولوشن ۴K/۸K"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "120Hz",
      "Smart Platform": "webOS",
      "HDMI Ports": "2 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.1,
    reviews: 1711,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG526Pro"
  },
  {
    id: "lg-qled-tv-89",
    name: "LG QLED TV 65\" LG214S",
    nameFa: "تلویزیون کیولد ال‌جی 65\" مدل LG214S",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 30181799,
    description: "QLED TV from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون کیولد از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "AI Upscaling Processor",
      "Slim Bezel-less Design",
      "4K/8K Ultra HD Resolution",
      "Gaming Mode with Low Latency",
      "120Hz High Refresh Rate",
      "Smart Hub with Voice Assistant"
    ],
    featuresFa: [
      "پردازنده ارتقای هوشمند AI",
      "طراحی بی‌قاب باریک",
      "رزولوشن ۴K/۸K",
      "حالت گیمینگ با تأخیر پایین",
      "نرخ تازه‌سازی ۱۲۰ هرتز",
      "هاب هوشمند با دستیار صوتی"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "144Hz",
      "Smart Platform": "webOS",
      "HDMI Ports": "4 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4,
    reviews: 2556,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG214S"
  },
  {
    id: "lg-qled-tv-90",
    name: "LG QLED TV 43\" LG413Pro",
    nameFa: "تلویزیون کیولد ال‌جی 43\" مدل LG413Pro",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 141368690,
    description: "QLED TV from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون کیولد از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Dolby Vision & Atmos",
      "Slim Bezel-less Design",
      "Gaming Mode with Low Latency",
      "Smart Hub with Voice Assistant",
      "AI Upscaling Processor",
      "HDR10+ Support"
    ],
    featuresFa: [
      "دالبی ویژن و اتموس",
      "طراحی بی‌قاب باریک",
      "حالت گیمینگ با تأخیر پایین",
      "هاب هوشمند با دستیار صوتی",
      "پردازنده ارتقای هوشمند AI",
      "پشتیبانی از HDR10+"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "120Hz",
      "Smart Platform": "Tizen OS",
      "HDMI Ports": "3 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80",
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.3,
    reviews: 1918,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG413Pro"
  },
  {
    id: "lg-smart-tv-91",
    name: "LG Smart TV 58\" LG440S",
    nameFa: "تلویزیون هوشمند ال‌جی 58\" مدل LG440S",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 37900132,
    originalPrice: 44400000,
    description: "Smart TV from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون هوشمند از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Dolby Vision & Atmos",
      "Slim Bezel-less Design",
      "4K/8K Ultra HD Resolution",
      "HDR10+ Support",
      "AI Upscaling Processor",
      "Smart Hub with Voice Assistant"
    ],
    featuresFa: [
      "دالبی ویژن و اتموس",
      "طراحی بی‌قاب باریک",
      "رزولوشن ۴K/۸K",
      "پشتیبانی از HDR10+",
      "پردازنده ارتقای هوشمند AI",
      "هاب هوشمند با دستیار صوتی"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "144Hz",
      "Smart Platform": "Google TV",
      "HDMI Ports": "2 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80",
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.4,
    reviews: 1714,
    isBestseller: true,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG440S"
  },
  {
    id: "lg-qled-tv-92",
    name: "LG QLED TV 50\" LG624",
    nameFa: "تلویزیون کیولد ال‌جی 50\" مدل LG624",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 35684439,
    description: "QLED TV from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون کیولد از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Slim Bezel-less Design",
      "Gaming Mode with Low Latency",
      "HDR10+ Support",
      "AI Upscaling Processor",
      "Dolby Vision & Atmos",
      "120Hz High Refresh Rate"
    ],
    featuresFa: [
      "طراحی بی‌قاب باریک",
      "حالت گیمینگ با تأخیر پایین",
      "پشتیبانی از HDR10+",
      "پردازنده ارتقای هوشمند AI",
      "دالبی ویژن و اتموس",
      "نرخ تازه‌سازی ۱۲۰ هرتز"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "120Hz",
      "Smart Platform": "Google TV",
      "HDMI Ports": "3 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80",
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.1,
    reviews: 3026,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG624"
  },
  {
    id: "lg-smart-tv-93",
    name: "LG Smart TV 70\" LG222Pro",
    nameFa: "تلویزیون هوشمند ال‌جی 70\" مدل LG222Pro",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 112088005,
    description: "Smart TV from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون هوشمند از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "HDR10+ Support",
      "Gaming Mode with Low Latency",
      "Smart Hub with Voice Assistant",
      "4K/8K Ultra HD Resolution",
      "Slim Bezel-less Design",
      "Dolby Vision & Atmos"
    ],
    featuresFa: [
      "پشتیبانی از HDR10+",
      "حالت گیمینگ با تأخیر پایین",
      "هاب هوشمند با دستیار صوتی",
      "رزولوشن ۴K/۸K",
      "طراحی بی‌قاب باریک",
      "دالبی ویژن و اتموس"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "60Hz",
      "Smart Platform": "webOS",
      "HDMI Ports": "4 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.8,
    reviews: 2235,
    isBestseller: true,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG222Pro"
  },
  {
    id: "lg-home-theater-system-94",
    name: "LG Home Theater System 85\" LG367Pro",
    nameFa: "سیستم سینمای خانگی ال‌جی 85\" مدل LG367Pro",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 45909692,
    description: "Home Theater System from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سیستم سینمای خانگی از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "4K/8K Ultra HD Resolution",
      "Dolby Vision & Atmos",
      "HDR10+ Support",
      "AI Upscaling Processor",
      "Gaming Mode with Low Latency",
      "Slim Bezel-less Design"
    ],
    featuresFa: [
      "رزولوشن ۴K/۸K",
      "دالبی ویژن و اتموس",
      "پشتیبانی از HDR10+",
      "پردازنده ارتقای هوشمند AI",
      "حالت گیمینگ با تأخیر پایین",
      "طراحی بی‌قاب باریک"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "144Hz",
      "Smart Platform": "Android TV",
      "HDMI Ports": "2 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.6,
    reviews: 2647,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG367Pro"
  },
  {
    id: "lg-qled-tv-95",
    name: "LG QLED TV 50\" LG580Pro",
    nameFa: "تلویزیون کیولد ال‌جی 50\" مدل LG580Pro",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 95489383,
    originalPrice: 115000000,
    description: "QLED TV from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون کیولد از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "120Hz High Refresh Rate",
      "Smart Hub with Voice Assistant",
      "HDR10+ Support",
      "Slim Bezel-less Design",
      "Dolby Vision & Atmos",
      "4K/8K Ultra HD Resolution"
    ],
    featuresFa: [
      "نرخ تازه‌سازی ۱۲۰ هرتز",
      "هاب هوشمند با دستیار صوتی",
      "پشتیبانی از HDR10+",
      "طراحی بی‌قاب باریک",
      "دالبی ویژن و اتموس",
      "رزولوشن ۴K/۸K"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "144Hz",
      "Smart Platform": "Tizen OS",
      "HDMI Ports": "3 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.7,
    reviews: 1473,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG580Pro"
  },
  {
    id: "lg-bottom-freezer-refrigerator-96",
    name: "LG Bottom Freezer Refrigerator 22 cu.ft LG189S",
    nameFa: "یخچال فریزر پایین ال‌جی 22 cu.ft مدل LG189S",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 129304861,
    originalPrice: 144800000,
    description: "Bottom Freezer Refrigerator from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال فریزر پایین از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Digital Touch Display",
      "Smart Connectivity",
      "Twin Cooling System",
      "No-Frost Technology",
      "Dual Auto Ice Maker",
      "Convertible FlexZone"
    ],
    featuresFa: [
      "نمایشگر لمسی دیجیتال",
      "اتصال هوشمند",
      "سیستم خنک‌کننده دوگانه",
      "فناوری بدون یخ‌زدگی",
      "یخ‌ساز خودکار دوگانه",
      "منطقه قابل تبدیل"
    ],
    specs: {
      Capacity: "24 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "Energy Star",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.1,
    reviews: 2069,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG189S"
  },
  {
    id: "lg-smart-fridge-97",
    name: "LG Smart Fridge 29 cu.ft LG848S",
    nameFa: "یخچال هوشمند ال‌جی 29 cu.ft مدل LG848S",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 314258053,
    description: "Smart Fridge from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال هوشمند از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Connectivity",
      "No-Frost Technology",
      "Digital Touch Display",
      "Energy Star Certified",
      "Dual Auto Ice Maker",
      "Convertible FlexZone"
    ],
    featuresFa: [
      "اتصال هوشمند",
      "فناوری بدون یخ‌زدگی",
      "نمایشگر لمسی دیجیتال",
      "دارای گواهی انرژی استار",
      "یخ‌ساز خودکار دوگانه",
      "منطقه قابل تبدیل"
    ],
    specs: {
      Capacity: "32 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "Energy Star",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80",
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.5,
    reviews: 2585,
    badge: "Premium",
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG848S"
  },
  {
    id: "lg-french-door-refrigerator-98",
    name: "LG French Door Refrigerator 18 cu.ft LG426Pro",
    nameFa: "یخچال درب فرانسوی ال‌جی 18 cu.ft مدل LG426Pro",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 116945310,
    originalPrice: 147300000,
    description: "French Door Refrigerator from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال درب فرانسوی از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Door-in-Door Access",
      "Energy Star Certified",
      "Twin Cooling System",
      "Digital Touch Display",
      "Convertible FlexZone",
      "Dual Auto Ice Maker"
    ],
    featuresFa: [
      "دسترسی درون درب",
      "دارای گواهی انرژی استار",
      "سیستم خنک‌کننده دوگانه",
      "نمایشگر لمسی دیجیتال",
      "منطقه قابل تبدیل",
      "یخ‌ساز خودکار دوگانه"
    ],
    specs: {
      Capacity: "24 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A+",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80",
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.7,
    reviews: 3036,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG426Pro"
  },
  {
    id: "lg-side-by-side-refrigerator-99",
    name: "LG Side-by-Side Refrigerator 32 cu.ft LG559",
    nameFa: "یخچال ساید بای ساید ال‌جی 32 cu.ft مدل LG559",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 268835229,
    description: "Side-by-Side Refrigerator from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال ساید بای ساید از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Convertible FlexZone",
      "Door-in-Door Access",
      "Smart Connectivity",
      "No-Frost Technology",
      "Twin Cooling System",
      "Dual Auto Ice Maker"
    ],
    featuresFa: [
      "منطقه قابل تبدیل",
      "دسترسی درون درب",
      "اتصال هوشمند",
      "فناوری بدون یخ‌زدگی",
      "سیستم خنک‌کننده دوگانه",
      "یخ‌ساز خودکار دوگانه"
    ],
    specs: {
      Capacity: "19 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4,
    reviews: 66,
    badge: "Best Seller",
    isNew: true,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG559"
  },
  {
    id: "lg-side-by-side-refrigerator-100",
    name: "LG Side-by-Side Refrigerator 25 cu.ft LG445X",
    nameFa: "یخچال ساید بای ساید ال‌جی 25 cu.ft مدل LG445X",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 78367431,
    description: "Side-by-Side Refrigerator from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال ساید بای ساید از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Energy Star Certified",
      "Convertible FlexZone",
      "Digital Touch Display",
      "Dual Auto Ice Maker",
      "Twin Cooling System",
      "Door-in-Door Access"
    ],
    featuresFa: [
      "دارای گواهی انرژی استار",
      "منطقه قابل تبدیل",
      "نمایشگر لمسی دیجیتال",
      "یخ‌ساز خودکار دوگانه",
      "سیستم خنک‌کننده دوگانه",
      "دسترسی درون درب"
    ],
    specs: {
      Capacity: "21 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "Energy Star",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.5,
    reviews: 2072,
    isNew: true,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG445X"
  },
  {
    id: "lg-bottom-freezer-refrigerator-101",
    name: "LG Bottom Freezer Refrigerator 25 cu.ft LG721Neo",
    nameFa: "یخچال فریزر پایین ال‌جی 25 cu.ft مدل LG721Neo",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 255245243,
    description: "Bottom Freezer Refrigerator from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال فریزر پایین از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "No-Frost Technology",
      "Convertible FlexZone",
      "Smart Connectivity",
      "Energy Star Certified",
      "Twin Cooling System",
      "Door-in-Door Access"
    ],
    featuresFa: [
      "فناوری بدون یخ‌زدگی",
      "منطقه قابل تبدیل",
      "اتصال هوشمند",
      "دارای گواهی انرژی استار",
      "سیستم خنک‌کننده دوگانه",
      "دسترسی درون درب"
    ],
    specs: {
      Capacity: "18 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.4,
    reviews: 2272,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG721Neo"
  },
  {
    id: "lg-french-door-refrigerator-102",
    name: "LG French Door Refrigerator 18 cu.ft LG908Pro",
    nameFa: "یخچال درب فرانسوی ال‌جی 18 cu.ft مدل LG908Pro",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 111552031,
    originalPrice: 134000000,
    description: "French Door Refrigerator from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال درب فرانسوی از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Convertible FlexZone",
      "Smart Connectivity",
      "No-Frost Technology",
      "Dual Auto Ice Maker",
      "Twin Cooling System",
      "Energy Star Certified"
    ],
    featuresFa: [
      "منطقه قابل تبدیل",
      "اتصال هوشمند",
      "فناوری بدون یخ‌زدگی",
      "یخ‌ساز خودکار دوگانه",
      "سیستم خنک‌کننده دوگانه",
      "دارای گواهی انرژی استار"
    ],
    specs: {
      Capacity: "20 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A+",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.8,
    reviews: 1434,
    badge: "Best Seller",
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG908Pro"
  },
  {
    id: "lg-french-door-refrigerator-103",
    name: "LG French Door Refrigerator 22 cu.ft LG808Neo",
    nameFa: "یخچال درب فرانسوی ال‌جی 22 cu.ft مدل LG808Neo",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 109478559,
    description: "French Door Refrigerator from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال درب فرانسوی از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "No-Frost Technology",
      "Energy Star Certified",
      "Smart Connectivity",
      "Digital Touch Display",
      "Door-in-Door Access",
      "Dual Auto Ice Maker"
    ],
    featuresFa: [
      "فناوری بدون یخ‌زدگی",
      "دارای گواهی انرژی استار",
      "اتصال هوشمند",
      "نمایشگر لمسی دیجیتال",
      "دسترسی درون درب",
      "یخ‌ساز خودکار دوگانه"
    ],
    specs: {
      Capacity: "17 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80",
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.7,
    reviews: 474,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG808Neo"
  },
  {
    id: "lg-side-by-side-refrigerator-104",
    name: "LG Side-by-Side Refrigerator 18 cu.ft LG837S",
    nameFa: "یخچال ساید بای ساید ال‌جی 18 cu.ft مدل LG837S",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 164955255,
    originalPrice: 210600000,
    description: "Side-by-Side Refrigerator from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال ساید بای ساید از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "No-Frost Technology",
      "Digital Touch Display",
      "Door-in-Door Access",
      "Twin Cooling System",
      "Convertible FlexZone",
      "Energy Star Certified"
    ],
    featuresFa: [
      "فناوری بدون یخ‌زدگی",
      "نمایشگر لمسی دیجیتال",
      "دسترسی درون درب",
      "سیستم خنک‌کننده دوگانه",
      "منطقه قابل تبدیل",
      "دارای گواهی انرژی استار"
    ],
    specs: {
      Capacity: "26 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A+",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.3,
    reviews: 370,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG837S"
  },
  {
    id: "lg-french-door-refrigerator-105",
    name: "LG French Door Refrigerator 29 cu.ft LG162S",
    nameFa: "یخچال درب فرانسوی ال‌جی 29 cu.ft مدل LG162S",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 67943580,
    originalPrice: 80500000,
    description: "French Door Refrigerator from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال درب فرانسوی از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Twin Cooling System",
      "Smart Connectivity",
      "Convertible FlexZone",
      "Dual Auto Ice Maker",
      "Door-in-Door Access",
      "Energy Star Certified"
    ],
    featuresFa: [
      "سیستم خنک‌کننده دوگانه",
      "اتصال هوشمند",
      "منطقه قابل تبدیل",
      "یخ‌ساز خودکار دوگانه",
      "دسترسی درون درب",
      "دارای گواهی انرژی استار"
    ],
    specs: {
      Capacity: "30 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A+",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.2,
    reviews: 1931,
    isBestseller: true,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG162S"
  },
  {
    id: "lg-bottom-freezer-refrigerator-106",
    name: "LG Bottom Freezer Refrigerator 22 cu.ft LG702",
    nameFa: "یخچال فریزر پایین ال‌جی 22 cu.ft مدل LG702",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 250650803,
    description: "Bottom Freezer Refrigerator from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال فریزر پایین از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Energy Star Certified",
      "Convertible FlexZone",
      "Door-in-Door Access",
      "Twin Cooling System",
      "Dual Auto Ice Maker",
      "Smart Connectivity"
    ],
    featuresFa: [
      "دارای گواهی انرژی استار",
      "منطقه قابل تبدیل",
      "دسترسی درون درب",
      "سیستم خنک‌کننده دوگانه",
      "یخ‌ساز خودکار دوگانه",
      "اتصال هوشمند"
    ],
    specs: {
      Capacity: "15 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.8,
    reviews: 1250,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG702"
  },
  {
    id: "lg-side-by-side-refrigerator-107",
    name: "LG Side-by-Side Refrigerator 18 cu.ft LG852X",
    nameFa: "یخچال ساید بای ساید ال‌جی 18 cu.ft مدل LG852X",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 141612591,
    originalPrice: 188200000,
    description: "Side-by-Side Refrigerator from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال ساید بای ساید از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Twin Cooling System",
      "No-Frost Technology",
      "Door-in-Door Access",
      "Digital Touch Display",
      "Smart Connectivity",
      "Dual Auto Ice Maker"
    ],
    featuresFa: [
      "سیستم خنک‌کننده دوگانه",
      "فناوری بدون یخ‌زدگی",
      "دسترسی درون درب",
      "نمایشگر لمسی دیجیتال",
      "اتصال هوشمند",
      "یخ‌ساز خودکار دوگانه"
    ],
    specs: {
      Capacity: "16 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80",
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.5,
    reviews: 1733,
    badge: "Popular",
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG852X"
  },
  {
    id: "lg-smart-fridge-108",
    name: "LG Smart Fridge 18 cu.ft LG200S",
    nameFa: "یخچال هوشمند ال‌جی 18 cu.ft مدل LG200S",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 235174249,
    description: "Smart Fridge from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال هوشمند از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Energy Star Certified",
      "Dual Auto Ice Maker",
      "Door-in-Door Access",
      "Convertible FlexZone",
      "No-Frost Technology",
      "Digital Touch Display"
    ],
    featuresFa: [
      "دارای گواهی انرژی استار",
      "یخ‌ساز خودکار دوگانه",
      "دسترسی درون درب",
      "منطقه قابل تبدیل",
      "فناوری بدون یخ‌زدگی",
      "نمایشگر لمسی دیجیتال"
    ],
    specs: {
      Capacity: "27 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80",
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.9,
    reviews: 1639,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG200S"
  },
  {
    id: "lg-smart-fridge-109",
    name: "LG Smart Fridge 32 cu.ft LG555Neo",
    nameFa: "یخچال هوشمند ال‌جی 32 cu.ft مدل LG555Neo",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 69733816,
    description: "Smart Fridge from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال هوشمند از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "No-Frost Technology",
      "Twin Cooling System",
      "Convertible FlexZone",
      "Dual Auto Ice Maker",
      "Digital Touch Display",
      "Energy Star Certified"
    ],
    featuresFa: [
      "فناوری بدون یخ‌زدگی",
      "سیستم خنک‌کننده دوگانه",
      "منطقه قابل تبدیل",
      "یخ‌ساز خودکار دوگانه",
      "نمایشگر لمسی دیجیتال",
      "دارای گواهی انرژی استار"
    ],
    specs: {
      Capacity: "32 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "Energy Star",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80",
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.5,
    reviews: 1210,
    isBestseller: true,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG555Neo"
  },
  {
    id: "lg-side-by-side-refrigerator-110",
    name: "LG Side-by-Side Refrigerator 27 cu.ft LG492Neo",
    nameFa: "یخچال ساید بای ساید ال‌جی 27 cu.ft مدل LG492Neo",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 144590286,
    description: "Side-by-Side Refrigerator from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال ساید بای ساید از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "No-Frost Technology",
      "Convertible FlexZone",
      "Twin Cooling System",
      "Smart Connectivity",
      "Door-in-Door Access",
      "Dual Auto Ice Maker"
    ],
    featuresFa: [
      "فناوری بدون یخ‌زدگی",
      "منطقه قابل تبدیل",
      "سیستم خنک‌کننده دوگانه",
      "اتصال هوشمند",
      "دسترسی درون درب",
      "یخ‌ساز خودکار دوگانه"
    ],
    specs: {
      Capacity: "24 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "Energy Star",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.9,
    reviews: 1295,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG492Neo"
  },
  {
    id: "lg-top-load-washer-111",
    name: "LG Top Load Washer 7kg LG334Pro",
    nameFa: "لباسشویی درب از بالا ال‌جی 7kg مدل LG334Pro",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 138204599,
    originalPrice: 152500000,
    description: "Top Load Washer from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی درب از بالا از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Child Lock Safety",
      "Auto Dosing System",
      "Anti-Stain Removal",
      "WiFi App Control",
      "Steam Sanitize+ Cycle",
      "Vibration Reduction Technology"
    ],
    featuresFa: [
      "قفل کودک",
      "سیستم دوزینگ خودکار",
      "سیستم ضد لک",
      "کنترل اپلیکیشن WiFi",
      "چرخه ضدعفونی با بخار",
      "کاهش لرزش"
    ],
    specs: {
      "Wash Capacity": "8 kg",
      "Spin Speed": "1600 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.1,
    reviews: 2972,
    isBestseller: true,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG334Pro"
  },
  {
    id: "lg-top-load-washer-112",
    name: "LG Top Load Washer 7kg LG991X",
    nameFa: "لباسشویی درب از بالا ال‌جی 7kg مدل LG991X",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 143761696,
    description: "Top Load Washer from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی درب از بالا از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Auto Dosing System",
      "EcoSilence Drive Motor",
      "WiFi App Control",
      "Vibration Reduction Technology",
      "Child Lock Safety",
      "Quick Wash Program"
    ],
    featuresFa: [
      "سیستم دوزینگ خودکار",
      "موتور کم‌صدا",
      "کنترل اپلیکیشن WiFi",
      "کاهش لرزش",
      "قفل کودک",
      "برنامه شستشوی سریع"
    ],
    specs: {
      "Wash Capacity": "7 kg",
      "Spin Speed": "1200 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80",
      "https://images.unsplash.com/photo-1610557892470-55d587c8b6d0?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.2,
    reviews: 659,
    isBestseller: true,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG991X"
  },
  {
    id: "lg-top-load-washer-113",
    name: "LG Top Load Washer 7kg LG642Neo",
    nameFa: "لباسشویی درب از بالا ال‌جی 7kg مدل LG642Neo",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 142644162,
    description: "Top Load Washer from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی درب از بالا از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Quick Wash Program",
      "Anti-Stain Removal",
      "Auto Dosing System",
      "Vibration Reduction Technology",
      "EcoSilence Drive Motor",
      "Steam Sanitize+ Cycle"
    ],
    featuresFa: [
      "برنامه شستشوی سریع",
      "سیستم ضد لک",
      "سیستم دوزینگ خودکار",
      "کاهش لرزش",
      "موتور کم‌صدا",
      "چرخه ضدعفونی با بخار"
    ],
    specs: {
      "Wash Capacity": "11 kg",
      "Spin Speed": "1600 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.2,
    reviews: 544,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG642Neo"
  },
  {
    id: "lg-front-load-washer-114",
    name: "LG Front Load Washer 8kg LG350S",
    nameFa: "ماشین لباسشویی درب از جلو ال‌جی 8kg مدل LG350S",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 120275519,
    originalPrice: 150000000,
    description: "Front Load Washer from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "ماشین لباسشویی درب از جلو از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Steam Sanitize+ Cycle",
      "Vibration Reduction Technology",
      "Anti-Stain Removal",
      "EcoSilence Drive Motor",
      "WiFi App Control",
      "Auto Dosing System"
    ],
    featuresFa: [
      "چرخه ضدعفونی با بخار",
      "کاهش لرزش",
      "سیستم ضد لک",
      "موتور کم‌صدا",
      "کنترل اپلیکیشن WiFi",
      "سیستم دوزینگ خودکار"
    ],
    specs: {
      "Wash Capacity": "8 kg",
      "Spin Speed": "1200 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80",
      "https://images.unsplash.com/photo-1610557892470-55d587c8b6d0?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.8,
    reviews: 464,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG350S"
  },
  {
    id: "lg-top-load-washer-115",
    name: "LG Top Load Washer 7kg LG962X",
    nameFa: "لباسشویی درب از بالا ال‌جی 7kg مدل LG962X",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 94317583,
    description: "Top Load Washer from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی درب از بالا از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Auto Dosing System",
      "WiFi App Control",
      "Anti-Stain Removal",
      "Child Lock Safety",
      "Quick Wash Program",
      "Steam Sanitize+ Cycle"
    ],
    featuresFa: [
      "سیستم دوزینگ خودکار",
      "کنترل اپلیکیشن WiFi",
      "سیستم ضد لک",
      "قفل کودک",
      "برنامه شستشوی سریع",
      "چرخه ضدعفونی با بخار"
    ],
    specs: {
      "Wash Capacity": "11 kg",
      "Spin Speed": "1400 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
      "https://images.unsplash.com/photo-1610557892470-55d587c8b6d0?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.3,
    reviews: 252,
    badge: "Premium",
    isNew: true,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG962X"
  },
  {
    id: "lg-top-load-washer-116",
    name: "LG Top Load Washer 11kg LG295Pro",
    nameFa: "لباسشویی درب از بالا ال‌جی 11kg مدل LG295Pro",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 96365042,
    description: "Top Load Washer from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی درب از بالا از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "WiFi App Control",
      "Anti-Stain Removal",
      "Child Lock Safety",
      "Vibration Reduction Technology",
      "Auto Dosing System",
      "Steam Sanitize+ Cycle"
    ],
    featuresFa: [
      "کنترل اپلیکیشن WiFi",
      "سیستم ضد لک",
      "قفل کودک",
      "کاهش لرزش",
      "سیستم دوزینگ خودکار",
      "چرخه ضدعفونی با بخار"
    ],
    specs: {
      "Wash Capacity": "10 kg",
      "Spin Speed": "1400 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.2,
    reviews: 647,
    isBestseller: true,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG295Pro"
  },
  {
    id: "lg-washer-dryer-combo-117",
    name: "LG Washer-Dryer Combo 9kg LG299Neo",
    nameFa: "لباسشویی-خشک‌کن ال‌جی 9kg مدل LG299Neo",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 155059042,
    originalPrice: 182300000,
    description: "Washer-Dryer Combo from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی-خشک‌کن از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Vibration Reduction Technology",
      "Child Lock Safety",
      "Steam Sanitize+ Cycle",
      "Anti-Stain Removal",
      "Auto Dosing System",
      "WiFi App Control"
    ],
    featuresFa: [
      "کاهش لرزش",
      "قفل کودک",
      "چرخه ضدعفونی با بخار",
      "سیستم ضد لک",
      "سیستم دوزینگ خودکار",
      "کنترل اپلیکیشن WiFi"
    ],
    specs: {
      "Wash Capacity": "12 kg",
      "Spin Speed": "1400 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80",
      "https://images.unsplash.com/photo-1610557892470-55d587c8b6d0?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4,
    reviews: 2834,
    isBestseller: true,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG299Neo"
  },
  {
    id: "lg-top-load-washer-118",
    name: "LG Top Load Washer 10kg LG715Neo",
    nameFa: "لباسشویی درب از بالا ال‌جی 10kg مدل LG715Neo",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 115210071,
    description: "Top Load Washer from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی درب از بالا از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Vibration Reduction Technology",
      "Steam Sanitize+ Cycle",
      "EcoSilence Drive Motor",
      "Quick Wash Program",
      "WiFi App Control",
      "Child Lock Safety"
    ],
    featuresFa: [
      "کاهش لرزش",
      "چرخه ضدعفونی با بخار",
      "موتور کم‌صدا",
      "برنامه شستشوی سریع",
      "کنترل اپلیکیشن WiFi",
      "قفل کودک"
    ],
    specs: {
      "Wash Capacity": "10 kg",
      "Spin Speed": "1400 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.8,
    reviews: 1365,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG715Neo"
  },
  {
    id: "lg-washer-dryer-combo-119",
    name: "LG Washer-Dryer Combo 9kg LG450",
    nameFa: "لباسشویی-خشک‌کن ال‌جی 9kg مدل LG450",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 96325617,
    description: "Washer-Dryer Combo from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی-خشک‌کن از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Anti-Stain Removal",
      "Auto Dosing System",
      "WiFi App Control",
      "Steam Sanitize+ Cycle",
      "Child Lock Safety",
      "Quick Wash Program"
    ],
    featuresFa: [
      "سیستم ضد لک",
      "سیستم دوزینگ خودکار",
      "کنترل اپلیکیشن WiFi",
      "چرخه ضدعفونی با بخار",
      "قفل کودک",
      "برنامه شستشوی سریع"
    ],
    specs: {
      "Wash Capacity": "11 kg",
      "Spin Speed": "1600 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1610557892470-55d587c8b6d0?w=800&q=80",
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.2,
    reviews: 277,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG450"
  },
  {
    id: "lg-top-load-washer-120",
    name: "LG Top Load Washer 8kg LG416Pro",
    nameFa: "لباسشویی درب از بالا ال‌جی 8kg مدل LG416Pro",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 153258515,
    description: "Top Load Washer from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی درب از بالا از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Auto Dosing System",
      "EcoSilence Drive Motor",
      "Quick Wash Program",
      "Steam Sanitize+ Cycle",
      "Anti-Stain Removal",
      "Child Lock Safety"
    ],
    featuresFa: [
      "سیستم دوزینگ خودکار",
      "موتور کم‌صدا",
      "برنامه شستشوی سریع",
      "چرخه ضدعفونی با بخار",
      "سیستم ضد لک",
      "قفل کودک"
    ],
    specs: {
      "Wash Capacity": "7 kg",
      "Spin Speed": "1600 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.4,
    reviews: 1083,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG416Pro"
  },
  {
    id: "lg-front-load-washer-121",
    name: "LG Front Load Washer 11kg LG171Plus",
    nameFa: "ماشین لباسشویی درب از جلو ال‌جی 11kg مدل LG171Plus",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 57246661,
    originalPrice: 68900000,
    description: "Front Load Washer from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "ماشین لباسشویی درب از جلو از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "WiFi App Control",
      "Anti-Stain Removal",
      "Quick Wash Program",
      "EcoSilence Drive Motor",
      "Auto Dosing System",
      "Steam Sanitize+ Cycle"
    ],
    featuresFa: [
      "کنترل اپلیکیشن WiFi",
      "سیستم ضد لک",
      "برنامه شستشوی سریع",
      "موتور کم‌صدا",
      "سیستم دوزینگ خودکار",
      "چرخه ضدعفونی با بخار"
    ],
    specs: {
      "Wash Capacity": "12 kg",
      "Spin Speed": "1600 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80",
      "https://images.unsplash.com/photo-1610557892470-55d587c8b6d0?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.1,
    reviews: 2462,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG171Plus"
  },
  {
    id: "lg-top-load-washer-122",
    name: "LG Top Load Washer 9kg LG111S",
    nameFa: "لباسشویی درب از بالا ال‌جی 9kg مدل LG111S",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 170841761,
    description: "Top Load Washer from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی درب از بالا از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Steam Sanitize+ Cycle",
      "Anti-Stain Removal",
      "Vibration Reduction Technology",
      "Child Lock Safety",
      "Auto Dosing System",
      "WiFi App Control"
    ],
    featuresFa: [
      "چرخه ضدعفونی با بخار",
      "سیستم ضد لک",
      "کاهش لرزش",
      "قفل کودک",
      "سیستم دوزینگ خودکار",
      "کنترل اپلیکیشن WiFi"
    ],
    specs: {
      "Wash Capacity": "12 kg",
      "Spin Speed": "1200 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80",
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.5,
    reviews: 2240,
    isBestseller: true,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG111S"
  },
  {
    id: "lg-washer-dryer-combo-123",
    name: "LG Washer-Dryer Combo 11kg LG472X",
    nameFa: "لباسشویی-خشک‌کن ال‌جی 11kg مدل LG472X",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 84839614,
    description: "Washer-Dryer Combo from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی-خشک‌کن از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Auto Dosing System",
      "Quick Wash Program",
      "Steam Sanitize+ Cycle",
      "Anti-Stain Removal",
      "Child Lock Safety",
      "EcoSilence Drive Motor"
    ],
    featuresFa: [
      "سیستم دوزینگ خودکار",
      "برنامه شستشوی سریع",
      "چرخه ضدعفونی با بخار",
      "سیستم ضد لک",
      "قفل کودک",
      "موتور کم‌صدا"
    ],
    specs: {
      "Wash Capacity": "12 kg",
      "Spin Speed": "1600 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.5,
    reviews: 320,
    isNew: true,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG472X"
  },
  {
    id: "lg-washer-dryer-combo-124",
    name: "LG Washer-Dryer Combo 11kg LG767X",
    nameFa: "لباسشویی-خشک‌کن ال‌جی 11kg مدل LG767X",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 85793465,
    description: "Washer-Dryer Combo from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی-خشک‌کن از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Vibration Reduction Technology",
      "Child Lock Safety",
      "WiFi App Control",
      "EcoSilence Drive Motor",
      "Auto Dosing System",
      "Anti-Stain Removal"
    ],
    featuresFa: [
      "کاهش لرزش",
      "قفل کودک",
      "کنترل اپلیکیشن WiFi",
      "موتور کم‌صدا",
      "سیستم دوزینگ خودکار",
      "سیستم ضد لک"
    ],
    specs: {
      "Wash Capacity": "8 kg",
      "Spin Speed": "1400 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.6,
    reviews: 3061,
    badge: "Premium",
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG767X"
  },
  {
    id: "lg-compact-washer-125",
    name: "LG Compact Washer 9kg LG499S",
    nameFa: "لباسشویی جمع‌وجور ال‌جی 9kg مدل LG499S",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 158585210,
    originalPrice: 198900000,
    description: "Compact Washer from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی جمع‌وجور از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Auto Dosing System",
      "EcoSilence Drive Motor",
      "Steam Sanitize+ Cycle",
      "Vibration Reduction Technology",
      "WiFi App Control",
      "Child Lock Safety"
    ],
    featuresFa: [
      "سیستم دوزینگ خودکار",
      "موتور کم‌صدا",
      "چرخه ضدعفونی با بخار",
      "کاهش لرزش",
      "کنترل اپلیکیشن WiFi",
      "قفل کودک"
    ],
    specs: {
      "Wash Capacity": "10 kg",
      "Spin Speed": "1400 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
      "https://images.unsplash.com/photo-1610557892470-55d587c8b6d0?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.8,
    reviews: 812,
    badge: "Popular",
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG499S"
  },
  {
    id: "lg-window-ac-126",
    name: "LG Window AC 12000 BTU LG407S",
    nameFa: "کولر گازی پنجره‌ای ال‌جی 12000 BTU مدل LG407S",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 124055964,
    originalPrice: 141500000,
    description: "Window AC from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پنجره‌ای از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Intelligent Eye Sensor",
      "Rapid Cooling Mode",
      "Inverter Technology",
      "R32 Eco Refrigerant",
      "Streamer Air Purification",
      "Ultra-Quiet Operation"
    ],
    featuresFa: [
      "سنسور هوشمند چشمی",
      "حالت سرمایش سریع",
      "فناوری اینورتر",
      "گاز سردکننده R32",
      "تصفیه هوای استریمر",
      "عملکرد فوق‌العاده کم‌صدا"
    ],
    specs: {
      Capacity: "18000 BTU",
      SEER: "7.9 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.2,
    reviews: 2092,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG407S"
  },
  {
    id: "lg-window-ac-127",
    name: "LG Window AC 12000 BTU LG292Plus",
    nameFa: "کولر گازی پنجره‌ای ال‌جی 12000 BTU مدل LG292Plus",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 85432209,
    description: "Window AC from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پنجره‌ای از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "WiFi Smart Control",
      "Self-Cleaning Function",
      "Rapid Cooling Mode",
      "Inverter Technology",
      "Streamer Air Purification",
      "Ultra-Quiet Operation"
    ],
    featuresFa: [
      "کنترل هوشمند WiFi",
      "قابلیت خودتمیزکنی",
      "حالت سرمایش سریع",
      "فناوری اینورتر",
      "تصفیه هوای استریمر",
      "عملکرد فوق‌العاده کم‌صدا"
    ],
    specs: {
      Capacity: "18000 BTU",
      SEER: "8.2 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.1,
    reviews: 2385,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG292Plus"
  },
  {
    id: "lg-portable-ac-128",
    name: "LG Portable AC 9000 BTU LG329Pro",
    nameFa: "کولر گازی پرتابل ال‌جی 9000 BTU مدل LG329Pro",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 130161978,
    description: "Portable AC from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پرتابل از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Rapid Cooling Mode",
      "Inverter Technology",
      "WiFi Smart Control",
      "Ultra-Quiet Operation",
      "Streamer Air Purification",
      "Self-Cleaning Function"
    ],
    featuresFa: [
      "حالت سرمایش سریع",
      "فناوری اینورتر",
      "کنترل هوشمند WiFi",
      "عملکرد فوق‌العاده کم‌صدا",
      "تصفیه هوای استریمر",
      "قابلیت خودتمیزکنی"
    ],
    specs: {
      Capacity: "12000 BTU",
      SEER: "9 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.9,
    reviews: 2973,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG329Pro"
  },
  {
    id: "lg-portable-ac-129",
    name: "LG Portable AC 9000 BTU LG693Pro",
    nameFa: "کولر گازی پرتابل ال‌جی 9000 BTU مدل LG693Pro",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 58141126,
    description: "Portable AC from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پرتابل از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "R32 Eco Refrigerant",
      "Rapid Cooling Mode",
      "Ultra-Quiet Operation",
      "Intelligent Eye Sensor",
      "Streamer Air Purification",
      "Self-Cleaning Function"
    ],
    featuresFa: [
      "گاز سردکننده R32",
      "حالت سرمایش سریع",
      "عملکرد فوق‌العاده کم‌صدا",
      "سنسور هوشمند چشمی",
      "تصفیه هوای استریمر",
      "قابلیت خودتمیزکنی"
    ],
    specs: {
      Capacity: "12000 BTU",
      SEER: "6.9 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.5,
    reviews: 163,
    isBestseller: true,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG693Pro"
  },
  {
    id: "lg-multi-split-system-130",
    name: "LG Multi-Split System 9000 BTU LG262X",
    nameFa: "سیستم مولتی‌اسپلیت ال‌جی 9000 BTU مدل LG262X",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 74531574,
    originalPrice: 86400000,
    description: "Multi-Split System from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سیستم مولتی‌اسپلیت از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Streamer Air Purification",
      "Inverter Technology",
      "R32 Eco Refrigerant",
      "Ultra-Quiet Operation",
      "Self-Cleaning Function",
      "Rapid Cooling Mode"
    ],
    featuresFa: [
      "تصفیه هوای استریمر",
      "فناوری اینورتر",
      "گاز سردکننده R32",
      "عملکرد فوق‌العاده کم‌صدا",
      "قابلیت خودتمیزکنی",
      "حالت سرمایش سریع"
    ],
    specs: {
      Capacity: "12000 BTU",
      SEER: "6.3 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80",
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.1,
    reviews: 673,
    isBestseller: true,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG262X"
  },
  {
    id: "lg-window-ac-131",
    name: "LG Window AC 18000 BTU LG681Plus",
    nameFa: "کولر گازی پنجره‌ای ال‌جی 18000 BTU مدل LG681Plus",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 86004503,
    description: "Window AC from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پنجره‌ای از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "R32 Eco Refrigerant",
      "Streamer Air Purification",
      "Self-Cleaning Function",
      "Inverter Technology",
      "Intelligent Eye Sensor",
      "Rapid Cooling Mode"
    ],
    featuresFa: [
      "گاز سردکننده R32",
      "تصفیه هوای استریمر",
      "قابلیت خودتمیزکنی",
      "فناوری اینورتر",
      "سنسور هوشمند چشمی",
      "حالت سرمایش سریع"
    ],
    specs: {
      Capacity: "24000 BTU",
      SEER: "8.4 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.5,
    reviews: 2211,
    isBestseller: true,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG681Plus"
  },
  {
    id: "lg-portable-ac-132",
    name: "LG Portable AC 24000 BTU LG136X",
    nameFa: "کولر گازی پرتابل ال‌جی 24000 BTU مدل LG136X",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 86355240,
    description: "Portable AC from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پرتابل از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "R32 Eco Refrigerant",
      "Intelligent Eye Sensor",
      "Self-Cleaning Function",
      "Streamer Air Purification",
      "WiFi Smart Control",
      "Ultra-Quiet Operation"
    ],
    featuresFa: [
      "گاز سردکننده R32",
      "سنسور هوشمند چشمی",
      "قابلیت خودتمیزکنی",
      "تصفیه هوای استریمر",
      "کنترل هوشمند WiFi",
      "عملکرد فوق‌العاده کم‌صدا"
    ],
    specs: {
      Capacity: "12000 BTU",
      SEER: "7.2 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.7,
    reviews: 2849,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG136X"
  },
  {
    id: "lg-multi-split-system-133",
    name: "LG Multi-Split System 24000 BTU LG197Pro",
    nameFa: "سیستم مولتی‌اسپلیت ال‌جی 24000 BTU مدل LG197Pro",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 128982822,
    description: "Multi-Split System from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سیستم مولتی‌اسپلیت از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Self-Cleaning Function",
      "WiFi Smart Control",
      "Intelligent Eye Sensor",
      "R32 Eco Refrigerant",
      "Ultra-Quiet Operation",
      "Rapid Cooling Mode"
    ],
    featuresFa: [
      "قابلیت خودتمیزکنی",
      "کنترل هوشمند WiFi",
      "سنسور هوشمند چشمی",
      "گاز سردکننده R32",
      "عملکرد فوق‌العاده کم‌صدا",
      "حالت سرمایش سریع"
    ],
    specs: {
      Capacity: "24000 BTU",
      SEER: "7.8 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80",
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.3,
    reviews: 1557,
    badge: "Editor's Choice",
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG197Pro"
  },
  {
    id: "lg-cordless-stick-vacuum-134",
    name: "LG Cordless Stick Vacuum LG558",
    nameFa: "جاروبرقی شارژی ال‌جی مدل LG558",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 46154106,
    description: "Cordless Stick Vacuum from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی شارژی از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Laser Dust Detection",
      "HEPA H13 Filtration",
      "60-Minute Runtime",
      "App & Voice Control",
      "Smart Mapping Navigation",
      "Multi-Surface Sensors"
    ],
    featuresFa: [
      "تشخیص گرد و غبار با لیزر",
      "فیلتراسیون HEPA H13",
      "شارژدهی تا ۶۰ دقیقه",
      "کنترل اپلیکیشن و صدا",
      "ناوبری نقشه‌برداری هوشمند",
      "سنسورهای چندسطحی"
    ],
    specs: {
      "Suction Power": "179 AW",
      Runtime: "90 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.2,
    reviews: 2170,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG558"
  },
  {
    id: "lg-wet-dry-vacuum-135",
    name: "LG Wet & Dry Vacuum LG370Plus",
    nameFa: "جاروبرقی خشک و تر ال‌جی مدل LG370Plus",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 47847933,
    originalPrice: 53100000,
    description: "Wet & Dry Vacuum from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی خشک و تر از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Mapping Navigation",
      "Pet Hair Optimized Brush",
      "60-Minute Runtime",
      "Multi-Surface Sensors",
      "HEPA H13 Filtration",
      "Auto-Empty Base"
    ],
    featuresFa: [
      "ناوبری نقشه‌برداری هوشمند",
      "برس مخصوص موی حیوانات",
      "شارژدهی تا ۶۰ دقیقه",
      "سنسورهای چندسطحی",
      "فیلتراسیون HEPA H13",
      "پایه تخلیه خودکار"
    ],
    specs: {
      "Suction Power": "239 AW",
      Runtime: "90 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.6,
    reviews: 358,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG370Plus"
  },
  {
    id: "lg-wet-dry-vacuum-136",
    name: "LG Wet & Dry Vacuum LG242",
    nameFa: "جاروبرقی خشک و تر ال‌جی مدل LG242",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 61024371,
    originalPrice: 82000000,
    description: "Wet & Dry Vacuum from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی خشک و تر از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Multi-Surface Sensors",
      "HEPA H13 Filtration",
      "60-Minute Runtime",
      "Laser Dust Detection",
      "Pet Hair Optimized Brush",
      "App & Voice Control"
    ],
    featuresFa: [
      "سنسورهای چندسطحی",
      "فیلتراسیون HEPA H13",
      "شارژدهی تا ۶۰ دقیقه",
      "تشخیص گرد و غبار با لیزر",
      "برس مخصوص موی حیوانات",
      "کنترل اپلیکیشن و صدا"
    ],
    specs: {
      "Suction Power": "223 AW",
      Runtime: "90 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.6,
    reviews: 691,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG242"
  },
  {
    id: "lg-wet-dry-vacuum-137",
    name: "LG Wet & Dry Vacuum LG169Plus",
    nameFa: "جاروبرقی خشک و تر ال‌جی مدل LG169Plus",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 40422767,
    originalPrice: 54100000,
    description: "Wet & Dry Vacuum from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی خشک و تر از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Mapping Navigation",
      "HEPA H13 Filtration",
      "App & Voice Control",
      "Pet Hair Optimized Brush",
      "Auto-Empty Base",
      "Laser Dust Detection"
    ],
    featuresFa: [
      "ناوبری نقشه‌برداری هوشمند",
      "فیلتراسیون HEPA H13",
      "کنترل اپلیکیشن و صدا",
      "برس مخصوص موی حیوانات",
      "پایه تخلیه خودکار",
      "تشخیص گرد و غبار با لیزر"
    ],
    specs: {
      "Suction Power": "235 AW",
      Runtime: "50 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.5,
    reviews: 655,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG169Plus"
  },
  {
    id: "lg-microwave-oven-138",
    name: "LG Microwave Oven LG900Pro",
    nameFa: "مایکروویو ال‌جی مدل LG900Pro",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 36348876,
    description: "Microwave Oven from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مایکروویو از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Companion App with Recipes",
      "Keep Warm Function",
      "Dishwasher Safe Parts",
      "Compact Footprint Design",
      "Rapid Air Technology",
      "10-Speed Control"
    ],
    featuresFa: [
      "اپلیکیشن همراه با دستور غذا",
      "قابلیت Keep Warm",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "طراحی جمع‌وجور",
      "فناوری هوای سریع",
      "کنترل ۱۰ سرعته"
    ],
    specs: {
      Power: "662 Watt",
      Capacity: "3.5 L",
      Presets: "7 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.2,
    reviews: 681,
    isNew: true,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG900Pro"
  },
  {
    id: "lg-food-processor-139",
    name: "LG Food Processor LG901Pro",
    nameFa: "غذاساز ال‌جی مدل LG901Pro",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 24970097,
    description: "Food Processor from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "غذاساز از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Compact Footprint Design",
      "Dishwasher Safe Parts",
      "Companion App with Recipes",
      "One-Touch Operation",
      "Smart Preset Programs",
      "Keep Warm Function"
    ],
    featuresFa: [
      "طراحی جمع‌وجور",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "اپلیکیشن همراه با دستور غذا",
      "عملکرد تک‌لمسی",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "قابلیت Keep Warm"
    ],
    specs: {
      Power: "423 Watt",
      Capacity: "2.5 L",
      Presets: "4 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.4,
    reviews: 2700,
    isNew: true,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG901Pro"
  },
  {
    id: "lg-microwave-oven-140",
    name: "LG Microwave Oven LG193",
    nameFa: "مایکروویو ال‌جی مدل LG193",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 19679995,
    description: "Microwave Oven from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مایکروویو از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "One-Touch Operation",
      "Companion App with Recipes",
      "Rapid Air Technology",
      "Smart Preset Programs",
      "Compact Footprint Design",
      "Keep Warm Function"
    ],
    featuresFa: [
      "عملکرد تک‌لمسی",
      "اپلیکیشن همراه با دستور غذا",
      "فناوری هوای سریع",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "طراحی جمع‌وجور",
      "قابلیت Keep Warm"
    ],
    specs: {
      Power: "1554 Watt",
      Capacity: "6.6 L",
      Presets: "5 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.7,
    reviews: 3136,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG193"
  },
  {
    id: "lg-coffee-maker-141",
    name: "LG Coffee Maker LG995Plus",
    nameFa: "قهوه‌ساز ال‌جی مدل LG995Plus",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 27437402,
    description: "Coffee Maker from LG, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "قهوه‌ساز از برند ال‌جی، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "One-Touch Operation",
      "Dishwasher Safe Parts",
      "Keep Warm Function",
      "10-Speed Control",
      "Compact Footprint Design",
      "Companion App with Recipes"
    ],
    featuresFa: [
      "عملکرد تک‌لمسی",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "قابلیت Keep Warm",
      "کنترل ۱۰ سرعته",
      "طراحی جمع‌وجور",
      "اپلیکیشن همراه با دستور غذا"
    ],
    specs: {
      Power: "1336 Watt",
      Capacity: "6.6 L",
      Presets: "6 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.6,
    reviews: 1813,
    brand: "LG",
    brandFa: "ال‌جی",
    model: "LG995Plus"
  },
  {
    id: "bosch-compact-washer-142",
    name: "Bosch Compact Washer 11kg BO574Neo",
    nameFa: "لباسشویی جمع‌وجور بوش 11kg مدل BO574Neo",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 165506268,
    description: "Compact Washer from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی جمع‌وجور از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "EcoSilence Drive Motor",
      "Child Lock Safety",
      "Auto Dosing System",
      "Quick Wash Program",
      "WiFi App Control",
      "Anti-Stain Removal"
    ],
    featuresFa: [
      "موتور کم‌صدا",
      "قفل کودک",
      "سیستم دوزینگ خودکار",
      "برنامه شستشوی سریع",
      "کنترل اپلیکیشن WiFi",
      "سیستم ضد لک"
    ],
    specs: {
      "Wash Capacity": "10 kg",
      "Spin Speed": "1400 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
      "https://images.unsplash.com/photo-1610557892470-55d587c8b6d0?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.1,
    reviews: 1687,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO574Neo"
  },
  {
    id: "bosch-top-load-washer-143",
    name: "Bosch Top Load Washer 9kg BO489Neo",
    nameFa: "لباسشویی درب از بالا بوش 9kg مدل BO489Neo",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 100676460,
    description: "Top Load Washer from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی درب از بالا از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Anti-Stain Removal",
      "Steam Sanitize+ Cycle",
      "Vibration Reduction Technology",
      "Auto Dosing System",
      "Child Lock Safety",
      "EcoSilence Drive Motor"
    ],
    featuresFa: [
      "سیستم ضد لک",
      "چرخه ضدعفونی با بخار",
      "کاهش لرزش",
      "سیستم دوزینگ خودکار",
      "قفل کودک",
      "موتور کم‌صدا"
    ],
    specs: {
      "Wash Capacity": "10 kg",
      "Spin Speed": "1400 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.9,
    reviews: 385,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO489Neo"
  },
  {
    id: "bosch-top-load-washer-144",
    name: "Bosch Top Load Washer 7kg BO179Pro",
    nameFa: "لباسشویی درب از بالا بوش 7kg مدل BO179Pro",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 132884963,
    description: "Top Load Washer from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی درب از بالا از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Auto Dosing System",
      "EcoSilence Drive Motor",
      "Child Lock Safety",
      "WiFi App Control",
      "Anti-Stain Removal",
      "Vibration Reduction Technology"
    ],
    featuresFa: [
      "سیستم دوزینگ خودکار",
      "موتور کم‌صدا",
      "قفل کودک",
      "کنترل اپلیکیشن WiFi",
      "سیستم ضد لک",
      "کاهش لرزش"
    ],
    specs: {
      "Wash Capacity": "12 kg",
      "Spin Speed": "1200 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.5,
    reviews: 1440,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO179Pro"
  },
  {
    id: "bosch-compact-washer-145",
    name: "Bosch Compact Washer 7kg BO774Plus",
    nameFa: "لباسشویی جمع‌وجور بوش 7kg مدل BO774Plus",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 153951712,
    description: "Compact Washer from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی جمع‌وجور از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Auto Dosing System",
      "EcoSilence Drive Motor",
      "Quick Wash Program",
      "Child Lock Safety",
      "Vibration Reduction Technology",
      "WiFi App Control"
    ],
    featuresFa: [
      "سیستم دوزینگ خودکار",
      "موتور کم‌صدا",
      "برنامه شستشوی سریع",
      "قفل کودک",
      "کاهش لرزش",
      "کنترل اپلیکیشن WiFi"
    ],
    specs: {
      "Wash Capacity": "11 kg",
      "Spin Speed": "1400 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
      "https://images.unsplash.com/photo-1610557892470-55d587c8b6d0?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.9,
    reviews: 2399,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO774Plus"
  },
  {
    id: "bosch-top-load-washer-146",
    name: "Bosch Top Load Washer 11kg BO166Neo",
    nameFa: "لباسشویی درب از بالا بوش 11kg مدل BO166Neo",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 55902795,
    description: "Top Load Washer from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی درب از بالا از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Auto Dosing System",
      "EcoSilence Drive Motor",
      "Anti-Stain Removal",
      "WiFi App Control",
      "Child Lock Safety",
      "Vibration Reduction Technology"
    ],
    featuresFa: [
      "سیستم دوزینگ خودکار",
      "موتور کم‌صدا",
      "سیستم ضد لک",
      "کنترل اپلیکیشن WiFi",
      "قفل کودک",
      "کاهش لرزش"
    ],
    specs: {
      "Wash Capacity": "8 kg",
      "Spin Speed": "1400 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1610557892470-55d587c8b6d0?w=800&q=80",
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.5,
    reviews: 1787,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO166Neo"
  },
  {
    id: "bosch-compact-washer-147",
    name: "Bosch Compact Washer 10kg BO514S",
    nameFa: "لباسشویی جمع‌وجور بوش 10kg مدل BO514S",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 162247477,
    description: "Compact Washer from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی جمع‌وجور از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Child Lock Safety",
      "Steam Sanitize+ Cycle",
      "Anti-Stain Removal",
      "Auto Dosing System",
      "EcoSilence Drive Motor",
      "WiFi App Control"
    ],
    featuresFa: [
      "قفل کودک",
      "چرخه ضدعفونی با بخار",
      "سیستم ضد لک",
      "سیستم دوزینگ خودکار",
      "موتور کم‌صدا",
      "کنترل اپلیکیشن WiFi"
    ],
    specs: {
      "Wash Capacity": "9 kg",
      "Spin Speed": "1200 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
      "https://images.unsplash.com/photo-1610557892470-55d587c8b6d0?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.2,
    reviews: 1196,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO514S"
  },
  {
    id: "bosch-compact-washer-148",
    name: "Bosch Compact Washer 12kg BO387Plus",
    nameFa: "لباسشویی جمع‌وجور بوش 12kg مدل BO387Plus",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 150950113,
    originalPrice: 203400000,
    description: "Compact Washer from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی جمع‌وجور از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Quick Wash Program",
      "Child Lock Safety",
      "Vibration Reduction Technology",
      "Anti-Stain Removal",
      "WiFi App Control",
      "Auto Dosing System"
    ],
    featuresFa: [
      "برنامه شستشوی سریع",
      "قفل کودک",
      "کاهش لرزش",
      "سیستم ضد لک",
      "کنترل اپلیکیشن WiFi",
      "سیستم دوزینگ خودکار"
    ],
    specs: {
      "Wash Capacity": "11 kg",
      "Spin Speed": "1200 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1610557892470-55d587c8b6d0?w=800&q=80",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.9,
    reviews: 1989,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO387Plus"
  },
  {
    id: "bosch-washer-dryer-combo-149",
    name: "Bosch Washer-Dryer Combo 12kg BO849S",
    nameFa: "لباسشویی-خشک‌کن بوش 12kg مدل BO849S",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 97580032,
    originalPrice: 115400000,
    description: "Washer-Dryer Combo from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی-خشک‌کن از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Vibration Reduction Technology",
      "Auto Dosing System",
      "Steam Sanitize+ Cycle",
      "Anti-Stain Removal",
      "Quick Wash Program",
      "EcoSilence Drive Motor"
    ],
    featuresFa: [
      "کاهش لرزش",
      "سیستم دوزینگ خودکار",
      "چرخه ضدعفونی با بخار",
      "سیستم ضد لک",
      "برنامه شستشوی سریع",
      "موتور کم‌صدا"
    ],
    specs: {
      "Wash Capacity": "12 kg",
      "Spin Speed": "1200 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.5,
    reviews: 1536,
    isNew: true,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO849S"
  },
  {
    id: "bosch-top-load-washer-150",
    name: "Bosch Top Load Washer 7kg BO708S",
    nameFa: "لباسشویی درب از بالا بوش 7kg مدل BO708S",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 77571954,
    originalPrice: 99600000,
    description: "Top Load Washer from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی درب از بالا از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Vibration Reduction Technology",
      "Child Lock Safety",
      "Auto Dosing System",
      "Quick Wash Program",
      "EcoSilence Drive Motor",
      "Anti-Stain Removal"
    ],
    featuresFa: [
      "کاهش لرزش",
      "قفل کودک",
      "سیستم دوزینگ خودکار",
      "برنامه شستشوی سریع",
      "موتور کم‌صدا",
      "سیستم ضد لک"
    ],
    specs: {
      "Wash Capacity": "11 kg",
      "Spin Speed": "1600 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80",
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.5,
    reviews: 2770,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO708S"
  },
  {
    id: "bosch-front-load-washer-151",
    name: "Bosch Front Load Washer 8kg BO423Plus",
    nameFa: "ماشین لباسشویی درب از جلو بوش 8kg مدل BO423Plus",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 149944921,
    originalPrice: 200000000,
    description: "Front Load Washer from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "ماشین لباسشویی درب از جلو از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Child Lock Safety",
      "Quick Wash Program",
      "Vibration Reduction Technology",
      "Anti-Stain Removal",
      "Steam Sanitize+ Cycle",
      "Auto Dosing System"
    ],
    featuresFa: [
      "قفل کودک",
      "برنامه شستشوی سریع",
      "کاهش لرزش",
      "سیستم ضد لک",
      "چرخه ضدعفونی با بخار",
      "سیستم دوزینگ خودکار"
    ],
    specs: {
      "Wash Capacity": "12 kg",
      "Spin Speed": "1200 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80",
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.6,
    reviews: 2698,
    isBestseller: true,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO423Plus"
  },
  {
    id: "bosch-front-load-washer-152",
    name: "Bosch Front Load Washer 11kg BO129",
    nameFa: "ماشین لباسشویی درب از جلو بوش 11kg مدل BO129",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 159818755,
    originalPrice: 178500000,
    description: "Front Load Washer from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "ماشین لباسشویی درب از جلو از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "WiFi App Control",
      "Steam Sanitize+ Cycle",
      "EcoSilence Drive Motor",
      "Vibration Reduction Technology",
      "Child Lock Safety",
      "Anti-Stain Removal"
    ],
    featuresFa: [
      "کنترل اپلیکیشن WiFi",
      "چرخه ضدعفونی با بخار",
      "موتور کم‌صدا",
      "کاهش لرزش",
      "قفل کودک",
      "سیستم ضد لک"
    ],
    specs: {
      "Wash Capacity": "8 kg",
      "Spin Speed": "1400 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.9,
    reviews: 630,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO129"
  },
  {
    id: "bosch-front-load-washer-153",
    name: "Bosch Front Load Washer 9kg BO210",
    nameFa: "ماشین لباسشویی درب از جلو بوش 9kg مدل BO210",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 115939903,
    description: "Front Load Washer from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "ماشین لباسشویی درب از جلو از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Auto Dosing System",
      "EcoSilence Drive Motor",
      "WiFi App Control",
      "Child Lock Safety",
      "Vibration Reduction Technology",
      "Steam Sanitize+ Cycle"
    ],
    featuresFa: [
      "سیستم دوزینگ خودکار",
      "موتور کم‌صدا",
      "کنترل اپلیکیشن WiFi",
      "قفل کودک",
      "کاهش لرزش",
      "چرخه ضدعفونی با بخار"
    ],
    specs: {
      "Wash Capacity": "9 kg",
      "Spin Speed": "1400 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
      "https://images.unsplash.com/photo-1610557892470-55d587c8b6d0?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.9,
    reviews: 1560,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO210"
  },
  {
    id: "bosch-compact-washer-154",
    name: "Bosch Compact Washer 11kg BO301X",
    nameFa: "لباسشویی جمع‌وجور بوش 11kg مدل BO301X",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 102917821,
    description: "Compact Washer from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی جمع‌وجور از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Auto Dosing System",
      "Steam Sanitize+ Cycle",
      "Quick Wash Program",
      "WiFi App Control",
      "Vibration Reduction Technology",
      "EcoSilence Drive Motor"
    ],
    featuresFa: [
      "سیستم دوزینگ خودکار",
      "چرخه ضدعفونی با بخار",
      "برنامه شستشوی سریع",
      "کنترل اپلیکیشن WiFi",
      "کاهش لرزش",
      "موتور کم‌صدا"
    ],
    specs: {
      "Wash Capacity": "12 kg",
      "Spin Speed": "1200 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
      "https://images.unsplash.com/photo-1610557892470-55d587c8b6d0?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4,
    reviews: 2601,
    isBestseller: true,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO301X"
  },
  {
    id: "bosch-front-load-washer-155",
    name: "Bosch Front Load Washer 9kg BO421Neo",
    nameFa: "ماشین لباسشویی درب از جلو بوش 9kg مدل BO421Neo",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 135576806,
    description: "Front Load Washer from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "ماشین لباسشویی درب از جلو از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Steam Sanitize+ Cycle",
      "WiFi App Control",
      "Vibration Reduction Technology",
      "EcoSilence Drive Motor",
      "Auto Dosing System",
      "Quick Wash Program"
    ],
    featuresFa: [
      "چرخه ضدعفونی با بخار",
      "کنترل اپلیکیشن WiFi",
      "کاهش لرزش",
      "موتور کم‌صدا",
      "سیستم دوزینگ خودکار",
      "برنامه شستشوی سریع"
    ],
    specs: {
      "Wash Capacity": "8 kg",
      "Spin Speed": "1400 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80",
      "https://images.unsplash.com/photo-1610557892470-55d587c8b6d0?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.1,
    reviews: 2854,
    badge: "Top Rated",
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO421Neo"
  },
  {
    id: "bosch-washer-dryer-combo-156",
    name: "Bosch Washer-Dryer Combo 12kg BO322Neo",
    nameFa: "لباسشویی-خشک‌کن بوش 12kg مدل BO322Neo",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 89399094,
    description: "Washer-Dryer Combo from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی-خشک‌کن از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Anti-Stain Removal",
      "Auto Dosing System",
      "Steam Sanitize+ Cycle",
      "Quick Wash Program",
      "WiFi App Control",
      "Vibration Reduction Technology"
    ],
    featuresFa: [
      "سیستم ضد لک",
      "سیستم دوزینگ خودکار",
      "چرخه ضدعفونی با بخار",
      "برنامه شستشوی سریع",
      "کنترل اپلیکیشن WiFi",
      "کاهش لرزش"
    ],
    specs: {
      "Wash Capacity": "11 kg",
      "Spin Speed": "1400 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1610557892470-55d587c8b6d0?w=800&q=80",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.8,
    reviews: 3180,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO322Neo"
  },
  {
    id: "bosch-compact-washer-157",
    name: "Bosch Compact Washer 12kg BO637S",
    nameFa: "لباسشویی جمع‌وجور بوش 12kg مدل BO637S",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 163526254,
    description: "Compact Washer from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی جمع‌وجور از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Steam Sanitize+ Cycle",
      "Child Lock Safety",
      "Quick Wash Program",
      "Auto Dosing System",
      "EcoSilence Drive Motor",
      "WiFi App Control"
    ],
    featuresFa: [
      "چرخه ضدعفونی با بخار",
      "قفل کودک",
      "برنامه شستشوی سریع",
      "سیستم دوزینگ خودکار",
      "موتور کم‌صدا",
      "کنترل اپلیکیشن WiFi"
    ],
    specs: {
      "Wash Capacity": "8 kg",
      "Spin Speed": "1400 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1610557892470-55d587c8b6d0?w=800&q=80",
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.2,
    reviews: 1236,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO637S"
  },
  {
    id: "bosch-washer-dryer-combo-158",
    name: "Bosch Washer-Dryer Combo 9kg BO389Pro",
    nameFa: "لباسشویی-خشک‌کن بوش 9kg مدل BO389Pro",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 167458001,
    description: "Washer-Dryer Combo from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی-خشک‌کن از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Auto Dosing System",
      "Child Lock Safety",
      "EcoSilence Drive Motor",
      "Steam Sanitize+ Cycle",
      "Quick Wash Program",
      "Vibration Reduction Technology"
    ],
    featuresFa: [
      "سیستم دوزینگ خودکار",
      "قفل کودک",
      "موتور کم‌صدا",
      "چرخه ضدعفونی با بخار",
      "برنامه شستشوی سریع",
      "کاهش لرزش"
    ],
    specs: {
      "Wash Capacity": "7 kg",
      "Spin Speed": "1600 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.6,
    reviews: 864,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO389Pro"
  },
  {
    id: "bosch-top-load-washer-159",
    name: "Bosch Top Load Washer 8kg BO281S",
    nameFa: "لباسشویی درب از بالا بوش 8kg مدل BO281S",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 59785461,
    description: "Top Load Washer from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی درب از بالا از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "WiFi App Control",
      "Vibration Reduction Technology",
      "Quick Wash Program",
      "EcoSilence Drive Motor",
      "Steam Sanitize+ Cycle",
      "Auto Dosing System"
    ],
    featuresFa: [
      "کنترل اپلیکیشن WiFi",
      "کاهش لرزش",
      "برنامه شستشوی سریع",
      "موتور کم‌صدا",
      "چرخه ضدعفونی با بخار",
      "سیستم دوزینگ خودکار"
    ],
    specs: {
      "Wash Capacity": "7 kg",
      "Spin Speed": "1400 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1610557892470-55d587c8b6d0?w=800&q=80",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.3,
    reviews: 2042,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO281S"
  },
  {
    id: "bosch-compact-washer-160",
    name: "Bosch Compact Washer 8kg BO175Pro",
    nameFa: "لباسشویی جمع‌وجور بوش 8kg مدل BO175Pro",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 115520241,
    description: "Compact Washer from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی جمع‌وجور از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Quick Wash Program",
      "Auto Dosing System",
      "Steam Sanitize+ Cycle",
      "EcoSilence Drive Motor",
      "Anti-Stain Removal",
      "Child Lock Safety"
    ],
    featuresFa: [
      "برنامه شستشوی سریع",
      "سیستم دوزینگ خودکار",
      "چرخه ضدعفونی با بخار",
      "موتور کم‌صدا",
      "سیستم ضد لک",
      "قفل کودک"
    ],
    specs: {
      "Wash Capacity": "8 kg",
      "Spin Speed": "1600 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.5,
    reviews: 1445,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO175Pro"
  },
  {
    id: "bosch-top-load-washer-161",
    name: "Bosch Top Load Washer 11kg BO119Plus",
    nameFa: "لباسشویی درب از بالا بوش 11kg مدل BO119Plus",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 57972860,
    description: "Top Load Washer from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی درب از بالا از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Auto Dosing System",
      "Vibration Reduction Technology",
      "Quick Wash Program",
      "EcoSilence Drive Motor",
      "Anti-Stain Removal",
      "Child Lock Safety"
    ],
    featuresFa: [
      "سیستم دوزینگ خودکار",
      "کاهش لرزش",
      "برنامه شستشوی سریع",
      "موتور کم‌صدا",
      "سیستم ضد لک",
      "قفل کودک"
    ],
    specs: {
      "Wash Capacity": "12 kg",
      "Spin Speed": "1600 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1610557892470-55d587c8b6d0?w=800&q=80",
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.3,
    reviews: 657,
    isNew: true,
    isBestseller: true,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO119Plus"
  },
  {
    id: "bosch-washer-dryer-combo-162",
    name: "Bosch Washer-Dryer Combo 12kg BO100Plus",
    nameFa: "لباسشویی-خشک‌کن بوش 12kg مدل BO100Plus",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 167373858,
    description: "Washer-Dryer Combo from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی-خشک‌کن از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Child Lock Safety",
      "EcoSilence Drive Motor",
      "Steam Sanitize+ Cycle",
      "Anti-Stain Removal",
      "WiFi App Control",
      "Quick Wash Program"
    ],
    featuresFa: [
      "قفل کودک",
      "موتور کم‌صدا",
      "چرخه ضدعفونی با بخار",
      "سیستم ضد لک",
      "کنترل اپلیکیشن WiFi",
      "برنامه شستشوی سریع"
    ],
    specs: {
      "Wash Capacity": "7 kg",
      "Spin Speed": "1600 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80",
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.6,
    reviews: 2641,
    isNew: true,
    isBestseller: true,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO100Plus"
  },
  {
    id: "bosch-front-load-washer-163",
    name: "Bosch Front Load Washer 8kg BO575Plus",
    nameFa: "ماشین لباسشویی درب از جلو بوش 8kg مدل BO575Plus",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 124230490,
    originalPrice: 140400000,
    description: "Front Load Washer from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "ماشین لباسشویی درب از جلو از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "WiFi App Control",
      "Child Lock Safety",
      "EcoSilence Drive Motor",
      "Steam Sanitize+ Cycle",
      "Anti-Stain Removal",
      "Quick Wash Program"
    ],
    featuresFa: [
      "کنترل اپلیکیشن WiFi",
      "قفل کودک",
      "موتور کم‌صدا",
      "چرخه ضدعفونی با بخار",
      "سیستم ضد لک",
      "برنامه شستشوی سریع"
    ],
    specs: {
      "Wash Capacity": "10 kg",
      "Spin Speed": "1600 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1610557892470-55d587c8b6d0?w=800&q=80",
      "https://images.unsplash.com/photo-1610557892470-55d587c8b6d0?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.3,
    reviews: 1398,
    isBestseller: true,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO575Plus"
  },
  {
    id: "bosch-top-load-washer-164",
    name: "Bosch Top Load Washer 11kg BO639",
    nameFa: "لباسشویی درب از بالا بوش 11kg مدل BO639",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 61164388,
    description: "Top Load Washer from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی درب از بالا از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "WiFi App Control",
      "Quick Wash Program",
      "Child Lock Safety",
      "Vibration Reduction Technology",
      "EcoSilence Drive Motor",
      "Auto Dosing System"
    ],
    featuresFa: [
      "کنترل اپلیکیشن WiFi",
      "برنامه شستشوی سریع",
      "قفل کودک",
      "کاهش لرزش",
      "موتور کم‌صدا",
      "سیستم دوزینگ خودکار"
    ],
    specs: {
      "Wash Capacity": "9 kg",
      "Spin Speed": "1600 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.4,
    reviews: 2980,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO639"
  },
  {
    id: "bosch-top-load-washer-165",
    name: "Bosch Top Load Washer 9kg BO934S",
    nameFa: "لباسشویی درب از بالا بوش 9kg مدل BO934S",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 71122207,
    description: "Top Load Washer from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی درب از بالا از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Vibration Reduction Technology",
      "WiFi App Control",
      "Child Lock Safety",
      "Steam Sanitize+ Cycle",
      "Auto Dosing System",
      "EcoSilence Drive Motor"
    ],
    featuresFa: [
      "کاهش لرزش",
      "کنترل اپلیکیشن WiFi",
      "قفل کودک",
      "چرخه ضدعفونی با بخار",
      "سیستم دوزینگ خودکار",
      "موتور کم‌صدا"
    ],
    specs: {
      "Wash Capacity": "10 kg",
      "Spin Speed": "1200 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80",
      "https://images.unsplash.com/photo-1626806775351-538068a21838?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.1,
    reviews: 1448,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO934S"
  },
  {
    id: "bosch-compact-washer-166",
    name: "Bosch Compact Washer 7kg BO802",
    nameFa: "لباسشویی جمع‌وجور بوش 7kg مدل BO802",
    category: "Washing Machines",
    categoryFa: "ماشین لباسشویی",
    price: 98492455,
    originalPrice: 114500000,
    description: "Compact Washer from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "لباسشویی جمع‌وجور از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Steam Sanitize+ Cycle",
      "Quick Wash Program",
      "WiFi App Control",
      "Child Lock Safety",
      "Auto Dosing System",
      "Vibration Reduction Technology"
    ],
    featuresFa: [
      "چرخه ضدعفونی با بخار",
      "برنامه شستشوی سریع",
      "کنترل اپلیکیشن WiFi",
      "قفل کودک",
      "سیستم دوزینگ خودکار",
      "کاهش لرزش"
    ],
    specs: {
      "Wash Capacity": "12 kg",
      "Spin Speed": "1600 RPM",
      "Energy Rating": "A",
      Warranty: "5 years motor warranty"
    },
    specsFa: {
      "ظرفیت شستشو": "کیلوگرم",
      "سرعت چرخش": "دور در دقیقه",
      "رتبه انرژی": "A",
      "گارانتی": "۵ سال گارانتی موتور"
    },
    images: [
      "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80",
      "https://images.unsplash.com/photo-1610557892470-55d587c8b6d0?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#a0a0a0"
      }
    ],
    rating: 4.3,
    reviews: 85,
    isBestseller: true,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO802"
  },
  {
    id: "bosch-french-door-refrigerator-167",
    name: "Bosch French Door Refrigerator 32 cu.ft BO894",
    nameFa: "یخچال درب فرانسوی بوش 32 cu.ft مدل BO894",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 140135770,
    description: "French Door Refrigerator from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال درب فرانسوی از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Door-in-Door Access",
      "Twin Cooling System",
      "Smart Connectivity",
      "Digital Touch Display",
      "Dual Auto Ice Maker",
      "Energy Star Certified"
    ],
    featuresFa: [
      "دسترسی درون درب",
      "سیستم خنک‌کننده دوگانه",
      "اتصال هوشمند",
      "نمایشگر لمسی دیجیتال",
      "یخ‌ساز خودکار دوگانه",
      "دارای گواهی انرژی استار"
    ],
    specs: {
      Capacity: "24 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.7,
    reviews: 915,
    isNew: true,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO894"
  },
  {
    id: "bosch-smart-fridge-168",
    name: "Bosch Smart Fridge 32 cu.ft BO744Pro",
    nameFa: "یخچال هوشمند بوش 32 cu.ft مدل BO744Pro",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 196138806,
    originalPrice: 231000000,
    description: "Smart Fridge from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال هوشمند از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Energy Star Certified",
      "No-Frost Technology",
      "Convertible FlexZone",
      "Smart Connectivity",
      "Dual Auto Ice Maker",
      "Twin Cooling System"
    ],
    featuresFa: [
      "دارای گواهی انرژی استار",
      "فناوری بدون یخ‌زدگی",
      "منطقه قابل تبدیل",
      "اتصال هوشمند",
      "یخ‌ساز خودکار دوگانه",
      "سیستم خنک‌کننده دوگانه"
    ],
    specs: {
      Capacity: "17 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "Energy Star",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.2,
    reviews: 1498,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO744Pro"
  },
  {
    id: "bosch-side-by-side-refrigerator-169",
    name: "Bosch Side-by-Side Refrigerator 27 cu.ft BO685S",
    nameFa: "یخچال ساید بای ساید بوش 27 cu.ft مدل BO685S",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 219478765,
    originalPrice: 243800000,
    description: "Side-by-Side Refrigerator from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال ساید بای ساید از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "No-Frost Technology",
      "Energy Star Certified",
      "Convertible FlexZone",
      "Digital Touch Display",
      "Door-in-Door Access",
      "Smart Connectivity"
    ],
    featuresFa: [
      "فناوری بدون یخ‌زدگی",
      "دارای گواهی انرژی استار",
      "منطقه قابل تبدیل",
      "نمایشگر لمسی دیجیتال",
      "دسترسی درون درب",
      "اتصال هوشمند"
    ],
    specs: {
      Capacity: "18 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "Energy Star",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.2,
    reviews: 1145,
    badge: "Top Rated",
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO685S"
  },
  {
    id: "bosch-smart-fridge-170",
    name: "Bosch Smart Fridge 25 cu.ft BO462Plus",
    nameFa: "یخچال هوشمند بوش 25 cu.ft مدل BO462Plus",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 301738606,
    description: "Smart Fridge from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال هوشمند از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Twin Cooling System",
      "Energy Star Certified",
      "Smart Connectivity",
      "Digital Touch Display",
      "Door-in-Door Access",
      "Convertible FlexZone"
    ],
    featuresFa: [
      "سیستم خنک‌کننده دوگانه",
      "دارای گواهی انرژی استار",
      "اتصال هوشمند",
      "نمایشگر لمسی دیجیتال",
      "دسترسی درون درب",
      "منطقه قابل تبدیل"
    ],
    specs: {
      Capacity: "28 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "Energy Star",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80",
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.6,
    reviews: 3004,
    isNew: true,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO462Plus"
  },
  {
    id: "bosch-french-door-refrigerator-171",
    name: "Bosch French Door Refrigerator 32 cu.ft BO450X",
    nameFa: "یخچال درب فرانسوی بوش 32 cu.ft مدل BO450X",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 294069531,
    description: "French Door Refrigerator from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال درب فرانسوی از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Dual Auto Ice Maker",
      "Energy Star Certified",
      "Door-in-Door Access",
      "Digital Touch Display",
      "Twin Cooling System",
      "No-Frost Technology"
    ],
    featuresFa: [
      "یخ‌ساز خودکار دوگانه",
      "دارای گواهی انرژی استار",
      "دسترسی درون درب",
      "نمایشگر لمسی دیجیتال",
      "سیستم خنک‌کننده دوگانه",
      "فناوری بدون یخ‌زدگی"
    ],
    specs: {
      Capacity: "31 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A+",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.4,
    reviews: 1944,
    badge: "Best Seller",
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO450X"
  },
  {
    id: "bosch-side-by-side-refrigerator-172",
    name: "Bosch Side-by-Side Refrigerator 32 cu.ft BO338Plus",
    nameFa: "یخچال ساید بای ساید بوش 32 cu.ft مدل BO338Plus",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 164996589,
    originalPrice: 220100000,
    description: "Side-by-Side Refrigerator from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال ساید بای ساید از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "No-Frost Technology",
      "Twin Cooling System",
      "Digital Touch Display",
      "Door-in-Door Access",
      "Energy Star Certified",
      "Smart Connectivity"
    ],
    featuresFa: [
      "فناوری بدون یخ‌زدگی",
      "سیستم خنک‌کننده دوگانه",
      "نمایشگر لمسی دیجیتال",
      "دسترسی درون درب",
      "دارای گواهی انرژی استار",
      "اتصال هوشمند"
    ],
    specs: {
      Capacity: "21 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A+",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80",
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.7,
    reviews: 580,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO338Plus"
  },
  {
    id: "bosch-smart-fridge-173",
    name: "Bosch Smart Fridge 29 cu.ft BO808Plus",
    nameFa: "یخچال هوشمند بوش 29 cu.ft مدل BO808Plus",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 165649638,
    originalPrice: 206700000,
    description: "Smart Fridge from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال هوشمند از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Door-in-Door Access",
      "Smart Connectivity",
      "No-Frost Technology",
      "Dual Auto Ice Maker",
      "Digital Touch Display",
      "Convertible FlexZone"
    ],
    featuresFa: [
      "دسترسی درون درب",
      "اتصال هوشمند",
      "فناوری بدون یخ‌زدگی",
      "یخ‌ساز خودکار دوگانه",
      "نمایشگر لمسی دیجیتال",
      "منطقه قابل تبدیل"
    ],
    specs: {
      Capacity: "16 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "Energy Star",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.8,
    reviews: 107,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO808Plus"
  },
  {
    id: "bosch-bottom-freezer-refrigerator-174",
    name: "Bosch Bottom Freezer Refrigerator 27 cu.ft BO103S",
    nameFa: "یخچال فریزر پایین بوش 27 cu.ft مدل BO103S",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 164295725,
    originalPrice: 182400000,
    description: "Bottom Freezer Refrigerator from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال فریزر پایین از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Connectivity",
      "No-Frost Technology",
      "Convertible FlexZone",
      "Door-in-Door Access",
      "Twin Cooling System",
      "Dual Auto Ice Maker"
    ],
    featuresFa: [
      "اتصال هوشمند",
      "فناوری بدون یخ‌زدگی",
      "منطقه قابل تبدیل",
      "دسترسی درون درب",
      "سیستم خنک‌کننده دوگانه",
      "یخ‌ساز خودکار دوگانه"
    ],
    specs: {
      Capacity: "19 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "Energy Star",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.5,
    reviews: 1829,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO103S"
  },
  {
    id: "bosch-bottom-freezer-refrigerator-175",
    name: "Bosch Bottom Freezer Refrigerator 18 cu.ft BO381Plus",
    nameFa: "یخچال فریزر پایین بوش 18 cu.ft مدل BO381Plus",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 244264045,
    description: "Bottom Freezer Refrigerator from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال فریزر پایین از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Dual Auto Ice Maker",
      "No-Frost Technology",
      "Energy Star Certified",
      "Convertible FlexZone",
      "Smart Connectivity",
      "Door-in-Door Access"
    ],
    featuresFa: [
      "یخ‌ساز خودکار دوگانه",
      "فناوری بدون یخ‌زدگی",
      "دارای گواهی انرژی استار",
      "منطقه قابل تبدیل",
      "اتصال هوشمند",
      "دسترسی درون درب"
    ],
    specs: {
      Capacity: "21 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A+",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.6,
    reviews: 633,
    isBestseller: true,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO381Plus"
  },
  {
    id: "bosch-bottom-freezer-refrigerator-176",
    name: "Bosch Bottom Freezer Refrigerator 29 cu.ft BO857X",
    nameFa: "یخچال فریزر پایین بوش 29 cu.ft مدل BO857X",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 203177769,
    description: "Bottom Freezer Refrigerator from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال فریزر پایین از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Dual Auto Ice Maker",
      "Door-in-Door Access",
      "Twin Cooling System",
      "Energy Star Certified",
      "No-Frost Technology",
      "Smart Connectivity"
    ],
    featuresFa: [
      "یخ‌ساز خودکار دوگانه",
      "دسترسی درون درب",
      "سیستم خنک‌کننده دوگانه",
      "دارای گواهی انرژی استار",
      "فناوری بدون یخ‌زدگی",
      "اتصال هوشمند"
    ],
    specs: {
      Capacity: "30 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A+",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.5,
    reviews: 2098,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO857X"
  },
  {
    id: "bosch-side-by-side-refrigerator-177",
    name: "Bosch Side-by-Side Refrigerator 25 cu.ft BO691Neo",
    nameFa: "یخچال ساید بای ساید بوش 25 cu.ft مدل BO691Neo",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 120429997,
    originalPrice: 146800000,
    description: "Side-by-Side Refrigerator from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال ساید بای ساید از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Convertible FlexZone",
      "Smart Connectivity",
      "Twin Cooling System",
      "Energy Star Certified",
      "Door-in-Door Access",
      "Dual Auto Ice Maker"
    ],
    featuresFa: [
      "منطقه قابل تبدیل",
      "اتصال هوشمند",
      "سیستم خنک‌کننده دوگانه",
      "دارای گواهی انرژی استار",
      "دسترسی درون درب",
      "یخ‌ساز خودکار دوگانه"
    ],
    specs: {
      Capacity: "30 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A+",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.1,
    reviews: 124,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO691Neo"
  },
  {
    id: "bosch-side-by-side-refrigerator-178",
    name: "Bosch Side-by-Side Refrigerator 27 cu.ft BO148",
    nameFa: "یخچال ساید بای ساید بوش 27 cu.ft مدل BO148",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 294297632,
    description: "Side-by-Side Refrigerator from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال ساید بای ساید از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Convertible FlexZone",
      "Door-in-Door Access",
      "Twin Cooling System",
      "Digital Touch Display",
      "Smart Connectivity",
      "Dual Auto Ice Maker"
    ],
    featuresFa: [
      "منطقه قابل تبدیل",
      "دسترسی درون درب",
      "سیستم خنک‌کننده دوگانه",
      "نمایشگر لمسی دیجیتال",
      "اتصال هوشمند",
      "یخ‌ساز خودکار دوگانه"
    ],
    specs: {
      Capacity: "29 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.1,
    reviews: 793,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO148"
  },
  {
    id: "bosch-bottom-freezer-refrigerator-179",
    name: "Bosch Bottom Freezer Refrigerator 29 cu.ft BO465S",
    nameFa: "یخچال فریزر پایین بوش 29 cu.ft مدل BO465S",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 184074879,
    description: "Bottom Freezer Refrigerator from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال فریزر پایین از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Twin Cooling System",
      "Energy Star Certified",
      "Smart Connectivity",
      "Digital Touch Display",
      "Convertible FlexZone",
      "Door-in-Door Access"
    ],
    featuresFa: [
      "سیستم خنک‌کننده دوگانه",
      "دارای گواهی انرژی استار",
      "اتصال هوشمند",
      "نمایشگر لمسی دیجیتال",
      "منطقه قابل تبدیل",
      "دسترسی درون درب"
    ],
    specs: {
      Capacity: "29 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.2,
    reviews: 2373,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO465S"
  },
  {
    id: "bosch-bottom-freezer-refrigerator-180",
    name: "Bosch Bottom Freezer Refrigerator 22 cu.ft BO347S",
    nameFa: "یخچال فریزر پایین بوش 22 cu.ft مدل BO347S",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 76464076,
    description: "Bottom Freezer Refrigerator from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال فریزر پایین از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Door-in-Door Access",
      "No-Frost Technology",
      "Smart Connectivity",
      "Convertible FlexZone",
      "Dual Auto Ice Maker",
      "Twin Cooling System"
    ],
    featuresFa: [
      "دسترسی درون درب",
      "فناوری بدون یخ‌زدگی",
      "اتصال هوشمند",
      "منطقه قابل تبدیل",
      "یخ‌ساز خودکار دوگانه",
      "سیستم خنک‌کننده دوگانه"
    ],
    specs: {
      Capacity: "28 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "Energy Star",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.5,
    reviews: 1075,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO347S"
  },
  {
    id: "bosch-bottom-freezer-refrigerator-181",
    name: "Bosch Bottom Freezer Refrigerator 29 cu.ft BO231Pro",
    nameFa: "یخچال فریزر پایین بوش 29 cu.ft مدل BO231Pro",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 237841873,
    originalPrice: 314800000,
    description: "Bottom Freezer Refrigerator from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال فریزر پایین از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Convertible FlexZone",
      "No-Frost Technology",
      "Door-in-Door Access",
      "Digital Touch Display",
      "Twin Cooling System",
      "Smart Connectivity"
    ],
    featuresFa: [
      "منطقه قابل تبدیل",
      "فناوری بدون یخ‌زدگی",
      "دسترسی درون درب",
      "نمایشگر لمسی دیجیتال",
      "سیستم خنک‌کننده دوگانه",
      "اتصال هوشمند"
    ],
    specs: {
      Capacity: "32 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80",
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4,
    reviews: 476,
    isNew: true,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO231Pro"
  },
  {
    id: "bosch-french-door-refrigerator-182",
    name: "Bosch French Door Refrigerator 25 cu.ft BO780Neo",
    nameFa: "یخچال درب فرانسوی بوش 25 cu.ft مدل BO780Neo",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 150130297,
    originalPrice: 194700000,
    description: "French Door Refrigerator from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال درب فرانسوی از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Connectivity",
      "No-Frost Technology",
      "Digital Touch Display",
      "Dual Auto Ice Maker",
      "Energy Star Certified",
      "Door-in-Door Access"
    ],
    featuresFa: [
      "اتصال هوشمند",
      "فناوری بدون یخ‌زدگی",
      "نمایشگر لمسی دیجیتال",
      "یخ‌ساز خودکار دوگانه",
      "دارای گواهی انرژی استار",
      "دسترسی درون درب"
    ],
    specs: {
      Capacity: "22 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A+",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4,
    reviews: 1113,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO780Neo"
  },
  {
    id: "bosch-smart-fridge-183",
    name: "Bosch Smart Fridge 22 cu.ft BO851Plus",
    nameFa: "یخچال هوشمند بوش 22 cu.ft مدل BO851Plus",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 180027610,
    description: "Smart Fridge from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال هوشمند از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Twin Cooling System",
      "Smart Connectivity",
      "Convertible FlexZone",
      "Energy Star Certified",
      "Dual Auto Ice Maker",
      "Digital Touch Display"
    ],
    featuresFa: [
      "سیستم خنک‌کننده دوگانه",
      "اتصال هوشمند",
      "منطقه قابل تبدیل",
      "دارای گواهی انرژی استار",
      "یخ‌ساز خودکار دوگانه",
      "نمایشگر لمسی دیجیتال"
    ],
    specs: {
      Capacity: "25 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80",
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4,
    reviews: 1703,
    isBestseller: true,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO851Plus"
  },
  {
    id: "bosch-side-by-side-refrigerator-184",
    name: "Bosch Side-by-Side Refrigerator 22 cu.ft BO515Neo",
    nameFa: "یخچال ساید بای ساید بوش 22 cu.ft مدل BO515Neo",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 274546870,
    originalPrice: 363800000,
    description: "Side-by-Side Refrigerator from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال ساید بای ساید از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Twin Cooling System",
      "Dual Auto Ice Maker",
      "No-Frost Technology",
      "Smart Connectivity",
      "Convertible FlexZone",
      "Door-in-Door Access"
    ],
    featuresFa: [
      "سیستم خنک‌کننده دوگانه",
      "یخ‌ساز خودکار دوگانه",
      "فناوری بدون یخ‌زدگی",
      "اتصال هوشمند",
      "منطقه قابل تبدیل",
      "دسترسی درون درب"
    ],
    specs: {
      Capacity: "27 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A+",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1571175443880-49e1d58b794a?w=800&q=80",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.6,
    reviews: 2883,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO515Neo"
  },
  {
    id: "bosch-smart-fridge-185",
    name: "Bosch Smart Fridge 22 cu.ft BO238Plus",
    nameFa: "یخچال هوشمند بوش 22 cu.ft مدل BO238Plus",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 120928743,
    description: "Smart Fridge from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال هوشمند از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Door-in-Door Access",
      "Energy Star Certified",
      "Convertible FlexZone",
      "No-Frost Technology",
      "Twin Cooling System",
      "Dual Auto Ice Maker"
    ],
    featuresFa: [
      "دسترسی درون درب",
      "دارای گواهی انرژی استار",
      "منطقه قابل تبدیل",
      "فناوری بدون یخ‌زدگی",
      "سیستم خنک‌کننده دوگانه",
      "یخ‌ساز خودکار دوگانه"
    ],
    specs: {
      Capacity: "28 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A+",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.6,
    reviews: 718,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO238Plus"
  },
  {
    id: "bosch-bottom-freezer-refrigerator-186",
    name: "Bosch Bottom Freezer Refrigerator 18 cu.ft BO224X",
    nameFa: "یخچال فریزر پایین بوش 18 cu.ft مدل BO224X",
    category: "Refrigerators",
    categoryFa: "یخچال و فریزر",
    price: 300336990,
    originalPrice: 399700000,
    description: "Bottom Freezer Refrigerator from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "یخچال فریزر پایین از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Energy Star Certified",
      "Twin Cooling System",
      "Dual Auto Ice Maker",
      "Door-in-Door Access",
      "Convertible FlexZone",
      "Digital Touch Display"
    ],
    featuresFa: [
      "دارای گواهی انرژی استار",
      "سیستم خنک‌کننده دوگانه",
      "یخ‌ساز خودکار دوگانه",
      "دسترسی درون درب",
      "منطقه قابل تبدیل",
      "نمایشگر لمسی دیجیتال"
    ],
    specs: {
      Capacity: "20 cu. ft.",
      Cooling: "Twin Cooling Plus",
      "Energy Rating": "A",
      Warranty: "2 years official"
    },
    specsFa: {
      "ظرفیت": "فوت مکعب",
      "سیستم خنک‌کننده": "تویین کولینگ پلاس",
      "رتبه انرژی": "A",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=800&q=80",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=800&q=80"
    ],
    colors: [
      {
        name: "White Glass",
        nameFa: "شیشه سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Navy Steel",
        nameFa: "استیل سرمه‌ای",
        hex: "#2c3e50"
      }
    ],
    rating: 4.2,
    reviews: 1271,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO224X"
  },
  {
    id: "bosch-food-processor-187",
    name: "Bosch Food Processor BO946Plus",
    nameFa: "غذاساز بوش مدل BO946Plus",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 18654495,
    description: "Food Processor from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "غذاساز از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Keep Warm Function",
      "Compact Footprint Design",
      "Companion App with Recipes",
      "Dishwasher Safe Parts",
      "Smart Preset Programs",
      "10-Speed Control"
    ],
    featuresFa: [
      "قابلیت Keep Warm",
      "طراحی جمع‌وجور",
      "اپلیکیشن همراه با دستور غذا",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "کنترل ۱۰ سرعته"
    ],
    specs: {
      Power: "1723 Watt",
      Capacity: "1.1 L",
      Presets: "6 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.1,
    reviews: 1970,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO946Plus"
  },
  {
    id: "bosch-food-processor-188",
    name: "Bosch Food Processor BO829X",
    nameFa: "غذاساز بوش مدل BO829X",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 16082393,
    description: "Food Processor from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "غذاساز از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "One-Touch Operation",
      "Companion App with Recipes",
      "10-Speed Control",
      "Keep Warm Function",
      "Rapid Air Technology",
      "Compact Footprint Design"
    ],
    featuresFa: [
      "عملکرد تک‌لمسی",
      "اپلیکیشن همراه با دستور غذا",
      "کنترل ۱۰ سرعته",
      "قابلیت Keep Warm",
      "فناوری هوای سریع",
      "طراحی جمع‌وجور"
    ],
    specs: {
      Power: "616 Watt",
      Capacity: "2.2 L",
      Presets: "4 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.3,
    reviews: 790,
    isNew: true,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO829X"
  },
  {
    id: "bosch-microwave-oven-189",
    name: "Bosch Microwave Oven BO380Plus",
    nameFa: "مایکروویو بوش مدل BO380Plus",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 35610216,
    originalPrice: 44000000,
    description: "Microwave Oven from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مایکروویو از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "One-Touch Operation",
      "Rapid Air Technology",
      "Smart Preset Programs",
      "Companion App with Recipes",
      "10-Speed Control",
      "Dishwasher Safe Parts"
    ],
    featuresFa: [
      "عملکرد تک‌لمسی",
      "فناوری هوای سریع",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "اپلیکیشن همراه با دستور غذا",
      "کنترل ۱۰ سرعته",
      "قطعات قابل شستشو در ماشین ظرفشویی"
    ],
    specs: {
      Power: "2000 Watt",
      Capacity: "4.2 L",
      Presets: "4 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.5,
    reviews: 2717,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO380Plus"
  },
  {
    id: "bosch-blender-190",
    name: "Bosch Blender BO896",
    nameFa: "مخلوط‌کن بوش مدل BO896",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 13242495,
    originalPrice: 14600000,
    description: "Blender from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مخلوط‌کن از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Companion App with Recipes",
      "10-Speed Control",
      "Dishwasher Safe Parts",
      "Rapid Air Technology",
      "Keep Warm Function",
      "Compact Footprint Design"
    ],
    featuresFa: [
      "اپلیکیشن همراه با دستور غذا",
      "کنترل ۱۰ سرعته",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "فناوری هوای سریع",
      "قابلیت Keep Warm",
      "طراحی جمع‌وجور"
    ],
    specs: {
      Power: "1828 Watt",
      Capacity: "7.1 L",
      Presets: "5 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.3,
    reviews: 2217,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO896"
  },
  {
    id: "bosch-food-processor-191",
    name: "Bosch Food Processor BO560X",
    nameFa: "غذاساز بوش مدل BO560X",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 33896718,
    originalPrice: 38600000,
    description: "Food Processor from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "غذاساز از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Keep Warm Function",
      "Companion App with Recipes",
      "Smart Preset Programs",
      "Dishwasher Safe Parts",
      "One-Touch Operation",
      "Compact Footprint Design"
    ],
    featuresFa: [
      "قابلیت Keep Warm",
      "اپلیکیشن همراه با دستور غذا",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "عملکرد تک‌لمسی",
      "طراحی جمع‌وجور"
    ],
    specs: {
      Power: "2292 Watt",
      Capacity: "1.3 L",
      Presets: "7 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.1,
    reviews: 2979,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO560X"
  },
  {
    id: "bosch-air-fryer-192",
    name: "Bosch Air Fryer BO589Pro",
    nameFa: "سرخ‌کن بدون روغن بوش مدل BO589Pro",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 36081187,
    originalPrice: 43800000,
    description: "Air Fryer from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سرخ‌کن بدون روغن از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Preset Programs",
      "Companion App with Recipes",
      "One-Touch Operation",
      "Compact Footprint Design",
      "Rapid Air Technology",
      "Keep Warm Function"
    ],
    featuresFa: [
      "برنامه‌های هوشمند پیش‌تنظیم",
      "اپلیکیشن همراه با دستور غذا",
      "عملکرد تک‌لمسی",
      "طراحی جمع‌وجور",
      "فناوری هوای سریع",
      "قابلیت Keep Warm"
    ],
    specs: {
      Power: "1797 Watt",
      Capacity: "7.7 L",
      Presets: "4 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.8,
    reviews: 831,
    isBestseller: true,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO589Pro"
  },
  {
    id: "bosch-microwave-oven-193",
    name: "Bosch Microwave Oven BO461X",
    nameFa: "مایکروویو بوش مدل BO461X",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 26789945,
    originalPrice: 31700000,
    description: "Microwave Oven from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مایکروویو از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "10-Speed Control",
      "Smart Preset Programs",
      "Keep Warm Function",
      "One-Touch Operation",
      "Compact Footprint Design",
      "Companion App with Recipes"
    ],
    featuresFa: [
      "کنترل ۱۰ سرعته",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "قابلیت Keep Warm",
      "عملکرد تک‌لمسی",
      "طراحی جمع‌وجور",
      "اپلیکیشن همراه با دستور غذا"
    ],
    specs: {
      Power: "1713 Watt",
      Capacity: "3.6 L",
      Presets: "5 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.1,
    reviews: 1473,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO461X"
  },
  {
    id: "bosch-air-fryer-194",
    name: "Bosch Air Fryer BO418",
    nameFa: "سرخ‌کن بدون روغن بوش مدل BO418",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 21974938,
    description: "Air Fryer from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سرخ‌کن بدون روغن از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Rapid Air Technology",
      "Keep Warm Function",
      "10-Speed Control",
      "One-Touch Operation",
      "Compact Footprint Design",
      "Companion App with Recipes"
    ],
    featuresFa: [
      "فناوری هوای سریع",
      "قابلیت Keep Warm",
      "کنترل ۱۰ سرعته",
      "عملکرد تک‌لمسی",
      "طراحی جمع‌وجور",
      "اپلیکیشن همراه با دستور غذا"
    ],
    specs: {
      Power: "1915 Watt",
      Capacity: "7.8 L",
      Presets: "5 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.1,
    reviews: 289,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO418"
  },
  {
    id: "bosch-coffee-maker-195",
    name: "Bosch Coffee Maker BO541Neo",
    nameFa: "قهوه‌ساز بوش مدل BO541Neo",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 27084279,
    description: "Coffee Maker from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "قهوه‌ساز از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Preset Programs",
      "Companion App with Recipes",
      "Dishwasher Safe Parts",
      "Keep Warm Function",
      "Rapid Air Technology",
      "10-Speed Control"
    ],
    featuresFa: [
      "برنامه‌های هوشمند پیش‌تنظیم",
      "اپلیکیشن همراه با دستور غذا",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "قابلیت Keep Warm",
      "فناوری هوای سریع",
      "کنترل ۱۰ سرعته"
    ],
    specs: {
      Power: "972 Watt",
      Capacity: "4.8 L",
      Presets: "6 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.9,
    reviews: 1415,
    badge: "Top Rated",
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO541Neo"
  },
  {
    id: "bosch-microwave-oven-196",
    name: "Bosch Microwave Oven BO104Pro",
    nameFa: "مایکروویو بوش مدل BO104Pro",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 21972160,
    originalPrice: 27000000,
    description: "Microwave Oven from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مایکروویو از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Companion App with Recipes",
      "Rapid Air Technology",
      "Compact Footprint Design",
      "Smart Preset Programs",
      "One-Touch Operation",
      "Keep Warm Function"
    ],
    featuresFa: [
      "اپلیکیشن همراه با دستور غذا",
      "فناوری هوای سریع",
      "طراحی جمع‌وجور",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "عملکرد تک‌لمسی",
      "قابلیت Keep Warm"
    ],
    specs: {
      Power: "1006 Watt",
      Capacity: "3.6 L",
      Presets: "8 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.5,
    reviews: 788,
    isBestseller: true,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO104Pro"
  },
  {
    id: "bosch-canister-vacuum-197",
    name: "Bosch Canister Vacuum BO290X",
    nameFa: "جاروبرقی سطلی بوش مدل BO290X",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 56236443,
    originalPrice: 66200000,
    description: "Canister Vacuum from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "App & Voice Control",
      "Laser Dust Detection",
      "Pet Hair Optimized Brush",
      "HEPA H13 Filtration",
      "60-Minute Runtime",
      "Smart Mapping Navigation"
    ],
    featuresFa: [
      "کنترل اپلیکیشن و صدا",
      "تشخیص گرد و غبار با لیزر",
      "برس مخصوص موی حیوانات",
      "فیلتراسیون HEPA H13",
      "شارژدهی تا ۶۰ دقیقه",
      "ناوبری نقشه‌برداری هوشمند"
    ],
    specs: {
      "Suction Power": "177 AW",
      Runtime: "40 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.4,
    reviews: 2394,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO290X"
  },
  {
    id: "bosch-robot-vacuum-198",
    name: "Bosch Robot Vacuum BO962Plus",
    nameFa: "جاروبرقی رباتیک بوش مدل BO962Plus",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 33071158,
    originalPrice: 36800000,
    description: "Robot Vacuum from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی رباتیک از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "60-Minute Runtime",
      "Auto-Empty Base",
      "Laser Dust Detection",
      "Smart Mapping Navigation",
      "Multi-Surface Sensors",
      "HEPA H13 Filtration"
    ],
    featuresFa: [
      "شارژدهی تا ۶۰ دقیقه",
      "پایه تخلیه خودکار",
      "تشخیص گرد و غبار با لیزر",
      "ناوبری نقشه‌برداری هوشمند",
      "سنسورهای چندسطحی",
      "فیلتراسیون HEPA H13"
    ],
    specs: {
      "Suction Power": "170 AW",
      Runtime: "90 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.9,
    reviews: 2307,
    badge: "Premium",
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO962Plus"
  },
  {
    id: "bosch-robot-vacuum-199",
    name: "Bosch Robot Vacuum BO264X",
    nameFa: "جاروبرقی رباتیک بوش مدل BO264X",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 50943138,
    originalPrice: 57400000,
    description: "Robot Vacuum from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی رباتیک از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Pet Hair Optimized Brush",
      "Laser Dust Detection",
      "Smart Mapping Navigation",
      "App & Voice Control",
      "HEPA H13 Filtration",
      "Multi-Surface Sensors"
    ],
    featuresFa: [
      "برس مخصوص موی حیوانات",
      "تشخیص گرد و غبار با لیزر",
      "ناوبری نقشه‌برداری هوشمند",
      "کنترل اپلیکیشن و صدا",
      "فیلتراسیون HEPA H13",
      "سنسورهای چندسطحی"
    ],
    specs: {
      "Suction Power": "244 AW",
      Runtime: "50 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.4,
    reviews: 2485,
    badge: "Top Rated",
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO264X"
  },
  {
    id: "bosch-wet-dry-vacuum-200",
    name: "Bosch Wet & Dry Vacuum BO407Pro",
    nameFa: "جاروبرقی خشک و تر بوش مدل BO407Pro",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 50764203,
    description: "Wet & Dry Vacuum from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی خشک و تر از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "HEPA H13 Filtration",
      "Pet Hair Optimized Brush",
      "Auto-Empty Base",
      "Multi-Surface Sensors",
      "Smart Mapping Navigation",
      "60-Minute Runtime"
    ],
    featuresFa: [
      "فیلتراسیون HEPA H13",
      "برس مخصوص موی حیوانات",
      "پایه تخلیه خودکار",
      "سنسورهای چندسطحی",
      "ناوبری نقشه‌برداری هوشمند",
      "شارژدهی تا ۶۰ دقیقه"
    ],
    specs: {
      "Suction Power": "227 AW",
      Runtime: "60 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.1,
    reviews: 369,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO407Pro"
  },
  {
    id: "bosch-wet-dry-vacuum-201",
    name: "Bosch Wet & Dry Vacuum BO828S",
    nameFa: "جاروبرقی خشک و تر بوش مدل BO828S",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 36678491,
    description: "Wet & Dry Vacuum from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی خشک و تر از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Multi-Surface Sensors",
      "Auto-Empty Base",
      "HEPA H13 Filtration",
      "Smart Mapping Navigation",
      "60-Minute Runtime",
      "App & Voice Control"
    ],
    featuresFa: [
      "سنسورهای چندسطحی",
      "پایه تخلیه خودکار",
      "فیلتراسیون HEPA H13",
      "ناوبری نقشه‌برداری هوشمند",
      "شارژدهی تا ۶۰ دقیقه",
      "کنترل اپلیکیشن و صدا"
    ],
    specs: {
      "Suction Power": "174 AW",
      Runtime: "40 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.3,
    reviews: 1861,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO828S"
  },
  {
    id: "bosch-canister-vacuum-202",
    name: "Bosch Canister Vacuum BO621Neo",
    nameFa: "جاروبرقی سطلی بوش مدل BO621Neo",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 22269377,
    originalPrice: 25500000,
    description: "Canister Vacuum from Bosch, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند بوش، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "60-Minute Runtime",
      "Pet Hair Optimized Brush",
      "Multi-Surface Sensors",
      "Laser Dust Detection",
      "HEPA H13 Filtration",
      "Auto-Empty Base"
    ],
    featuresFa: [
      "شارژدهی تا ۶۰ دقیقه",
      "برس مخصوص موی حیوانات",
      "سنسورهای چندسطحی",
      "تشخیص گرد و غبار با لیزر",
      "فیلتراسیون HEPA H13",
      "پایه تخلیه خودکار"
    ],
    specs: {
      "Suction Power": "207 AW",
      Runtime: "60 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4,
    reviews: 2786,
    brand: "Bosch",
    brandFa: "بوش",
    model: "BO621Neo"
  },
  {
    id: "dyson-canister-vacuum-203",
    name: "Dyson Canister Vacuum DY881",
    nameFa: "جاروبرقی سطلی دایسون مدل DY881",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 42285977,
    originalPrice: 49900000,
    description: "Canister Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Mapping Navigation",
      "60-Minute Runtime",
      "Pet Hair Optimized Brush",
      "Laser Dust Detection",
      "Multi-Surface Sensors",
      "HEPA H13 Filtration"
    ],
    featuresFa: [
      "ناوبری نقشه‌برداری هوشمند",
      "شارژدهی تا ۶۰ دقیقه",
      "برس مخصوص موی حیوانات",
      "تشخیص گرد و غبار با لیزر",
      "سنسورهای چندسطحی",
      "فیلتراسیون HEPA H13"
    ],
    specs: {
      "Suction Power": "188 AW",
      Runtime: "40 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4,
    reviews: 1377,
    badge: "Premium",
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY881"
  },
  {
    id: "dyson-cordless-stick-vacuum-204",
    name: "Dyson Cordless Stick Vacuum DY422Neo",
    nameFa: "جاروبرقی شارژی دایسون مدل DY422Neo",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 24896791,
    description: "Cordless Stick Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی شارژی از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "HEPA H13 Filtration",
      "App & Voice Control",
      "Laser Dust Detection",
      "60-Minute Runtime",
      "Multi-Surface Sensors",
      "Pet Hair Optimized Brush"
    ],
    featuresFa: [
      "فیلتراسیون HEPA H13",
      "کنترل اپلیکیشن و صدا",
      "تشخیص گرد و غبار با لیزر",
      "شارژدهی تا ۶۰ دقیقه",
      "سنسورهای چندسطحی",
      "برس مخصوص موی حیوانات"
    ],
    specs: {
      "Suction Power": "178 AW",
      Runtime: "60 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.3,
    reviews: 2634,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY422Neo"
  },
  {
    id: "dyson-wet-dry-vacuum-205",
    name: "Dyson Wet & Dry Vacuum DY627Neo",
    nameFa: "جاروبرقی خشک و تر دایسون مدل DY627Neo",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 45641305,
    description: "Wet & Dry Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی خشک و تر از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "60-Minute Runtime",
      "Smart Mapping Navigation",
      "Auto-Empty Base",
      "HEPA H13 Filtration",
      "Multi-Surface Sensors",
      "Laser Dust Detection"
    ],
    featuresFa: [
      "شارژدهی تا ۶۰ دقیقه",
      "ناوبری نقشه‌برداری هوشمند",
      "پایه تخلیه خودکار",
      "فیلتراسیون HEPA H13",
      "سنسورهای چندسطحی",
      "تشخیص گرد و غبار با لیزر"
    ],
    specs: {
      "Suction Power": "246 AW",
      Runtime: "50 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.4,
    reviews: 502,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY627Neo"
  },
  {
    id: "dyson-cordless-stick-vacuum-206",
    name: "Dyson Cordless Stick Vacuum DY413",
    nameFa: "جاروبرقی شارژی دایسون مدل DY413",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 31124635,
    description: "Cordless Stick Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی شارژی از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Auto-Empty Base",
      "Multi-Surface Sensors",
      "Smart Mapping Navigation",
      "Pet Hair Optimized Brush",
      "App & Voice Control",
      "Laser Dust Detection"
    ],
    featuresFa: [
      "پایه تخلیه خودکار",
      "سنسورهای چندسطحی",
      "ناوبری نقشه‌برداری هوشمند",
      "برس مخصوص موی حیوانات",
      "کنترل اپلیکیشن و صدا",
      "تشخیص گرد و غبار با لیزر"
    ],
    specs: {
      "Suction Power": "213 AW",
      Runtime: "50 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.8,
    reviews: 534,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY413"
  },
  {
    id: "dyson-robot-vacuum-207",
    name: "Dyson Robot Vacuum DY192Neo",
    nameFa: "جاروبرقی رباتیک دایسون مدل DY192Neo",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 34708734,
    originalPrice: 46600000,
    description: "Robot Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی رباتیک از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "App & Voice Control",
      "Multi-Surface Sensors",
      "Pet Hair Optimized Brush",
      "60-Minute Runtime",
      "Smart Mapping Navigation",
      "Laser Dust Detection"
    ],
    featuresFa: [
      "کنترل اپلیکیشن و صدا",
      "سنسورهای چندسطحی",
      "برس مخصوص موی حیوانات",
      "شارژدهی تا ۶۰ دقیقه",
      "ناوبری نقشه‌برداری هوشمند",
      "تشخیص گرد و غبار با لیزر"
    ],
    specs: {
      "Suction Power": "221 AW",
      Runtime: "50 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.2,
    reviews: 2285,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY192Neo"
  },
  {
    id: "dyson-wet-dry-vacuum-208",
    name: "Dyson Wet & Dry Vacuum DY922Pro",
    nameFa: "جاروبرقی خشک و تر دایسون مدل DY922Pro",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 52028102,
    description: "Wet & Dry Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی خشک و تر از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Laser Dust Detection",
      "Smart Mapping Navigation",
      "Multi-Surface Sensors",
      "HEPA H13 Filtration",
      "Auto-Empty Base",
      "App & Voice Control"
    ],
    featuresFa: [
      "تشخیص گرد و غبار با لیزر",
      "ناوبری نقشه‌برداری هوشمند",
      "سنسورهای چندسطحی",
      "فیلتراسیون HEPA H13",
      "پایه تخلیه خودکار",
      "کنترل اپلیکیشن و صدا"
    ],
    specs: {
      "Suction Power": "175 AW",
      Runtime: "90 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.7,
    reviews: 1512,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY922Pro"
  },
  {
    id: "dyson-robot-vacuum-209",
    name: "Dyson Robot Vacuum DY673",
    nameFa: "جاروبرقی رباتیک دایسون مدل DY673",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 31932050,
    originalPrice: 36500000,
    description: "Robot Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی رباتیک از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Multi-Surface Sensors",
      "Pet Hair Optimized Brush",
      "Auto-Empty Base",
      "60-Minute Runtime",
      "HEPA H13 Filtration",
      "App & Voice Control"
    ],
    featuresFa: [
      "سنسورهای چندسطحی",
      "برس مخصوص موی حیوانات",
      "پایه تخلیه خودکار",
      "شارژدهی تا ۶۰ دقیقه",
      "فیلتراسیون HEPA H13",
      "کنترل اپلیکیشن و صدا"
    ],
    specs: {
      "Suction Power": "246 AW",
      Runtime: "50 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.6,
    reviews: 1549,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY673"
  },
  {
    id: "dyson-robot-vacuum-210",
    name: "Dyson Robot Vacuum DY773Plus",
    nameFa: "جاروبرقی رباتیک دایسون مدل DY773Plus",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 56926753,
    description: "Robot Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی رباتیک از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "60-Minute Runtime",
      "Smart Mapping Navigation",
      "Multi-Surface Sensors",
      "App & Voice Control",
      "Auto-Empty Base",
      "HEPA H13 Filtration"
    ],
    featuresFa: [
      "شارژدهی تا ۶۰ دقیقه",
      "ناوبری نقشه‌برداری هوشمند",
      "سنسورهای چندسطحی",
      "کنترل اپلیکیشن و صدا",
      "پایه تخلیه خودکار",
      "فیلتراسیون HEPA H13"
    ],
    specs: {
      "Suction Power": "205 AW",
      Runtime: "40 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.1,
    reviews: 2846,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY773Plus"
  },
  {
    id: "dyson-cordless-stick-vacuum-211",
    name: "Dyson Cordless Stick Vacuum DY766Plus",
    nameFa: "جاروبرقی شارژی دایسون مدل DY766Plus",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 64258017,
    description: "Cordless Stick Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی شارژی از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Auto-Empty Base",
      "Laser Dust Detection",
      "HEPA H13 Filtration",
      "Smart Mapping Navigation",
      "App & Voice Control",
      "60-Minute Runtime"
    ],
    featuresFa: [
      "پایه تخلیه خودکار",
      "تشخیص گرد و غبار با لیزر",
      "فیلتراسیون HEPA H13",
      "ناوبری نقشه‌برداری هوشمند",
      "کنترل اپلیکیشن و صدا",
      "شارژدهی تا ۶۰ دقیقه"
    ],
    specs: {
      "Suction Power": "252 AW",
      Runtime: "50 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.3,
    reviews: 1093,
    isBestseller: true,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY766Plus"
  },
  {
    id: "dyson-canister-vacuum-212",
    name: "Dyson Canister Vacuum DY358S",
    nameFa: "جاروبرقی سطلی دایسون مدل DY358S",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 27779913,
    description: "Canister Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Laser Dust Detection",
      "Multi-Surface Sensors",
      "Smart Mapping Navigation",
      "HEPA H13 Filtration",
      "Pet Hair Optimized Brush",
      "60-Minute Runtime"
    ],
    featuresFa: [
      "تشخیص گرد و غبار با لیزر",
      "سنسورهای چندسطحی",
      "ناوبری نقشه‌برداری هوشمند",
      "فیلتراسیون HEPA H13",
      "برس مخصوص موی حیوانات",
      "شارژدهی تا ۶۰ دقیقه"
    ],
    specs: {
      "Suction Power": "237 AW",
      Runtime: "120 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4,
    reviews: 2081,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY358S"
  },
  {
    id: "dyson-canister-vacuum-213",
    name: "Dyson Canister Vacuum DY793X",
    nameFa: "جاروبرقی سطلی دایسون مدل DY793X",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 66144967,
    originalPrice: 81000000,
    description: "Canister Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "60-Minute Runtime",
      "Pet Hair Optimized Brush",
      "Laser Dust Detection",
      "Multi-Surface Sensors",
      "App & Voice Control",
      "Auto-Empty Base"
    ],
    featuresFa: [
      "شارژدهی تا ۶۰ دقیقه",
      "برس مخصوص موی حیوانات",
      "تشخیص گرد و غبار با لیزر",
      "سنسورهای چندسطحی",
      "کنترل اپلیکیشن و صدا",
      "پایه تخلیه خودکار"
    ],
    specs: {
      "Suction Power": "181 AW",
      Runtime: "60 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.8,
    reviews: 1458,
    badge: "Premium",
    isNew: true,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY793X"
  },
  {
    id: "dyson-robot-vacuum-214",
    name: "Dyson Robot Vacuum DY612Pro",
    nameFa: "جاروبرقی رباتیک دایسون مدل DY612Pro",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 61256356,
    description: "Robot Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی رباتیک از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "60-Minute Runtime",
      "Laser Dust Detection",
      "App & Voice Control",
      "Smart Mapping Navigation",
      "HEPA H13 Filtration",
      "Pet Hair Optimized Brush"
    ],
    featuresFa: [
      "شارژدهی تا ۶۰ دقیقه",
      "تشخیص گرد و غبار با لیزر",
      "کنترل اپلیکیشن و صدا",
      "ناوبری نقشه‌برداری هوشمند",
      "فیلتراسیون HEPA H13",
      "برس مخصوص موی حیوانات"
    ],
    specs: {
      "Suction Power": "184 AW",
      Runtime: "120 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.6,
    reviews: 2429,
    isNew: true,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY612Pro"
  },
  {
    id: "dyson-canister-vacuum-215",
    name: "Dyson Canister Vacuum DY126",
    nameFa: "جاروبرقی سطلی دایسون مدل DY126",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 31205546,
    description: "Canister Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Mapping Navigation",
      "Laser Dust Detection",
      "App & Voice Control",
      "Multi-Surface Sensors",
      "Pet Hair Optimized Brush",
      "HEPA H13 Filtration"
    ],
    featuresFa: [
      "ناوبری نقشه‌برداری هوشمند",
      "تشخیص گرد و غبار با لیزر",
      "کنترل اپلیکیشن و صدا",
      "سنسورهای چندسطحی",
      "برس مخصوص موی حیوانات",
      "فیلتراسیون HEPA H13"
    ],
    specs: {
      "Suction Power": "167 AW",
      Runtime: "40 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.6,
    reviews: 3011,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY126"
  },
  {
    id: "dyson-robot-vacuum-216",
    name: "Dyson Robot Vacuum DY310X",
    nameFa: "جاروبرقی رباتیک دایسون مدل DY310X",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 31077230,
    description: "Robot Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی رباتیک از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Pet Hair Optimized Brush",
      "HEPA H13 Filtration",
      "App & Voice Control",
      "Multi-Surface Sensors",
      "Laser Dust Detection",
      "60-Minute Runtime"
    ],
    featuresFa: [
      "برس مخصوص موی حیوانات",
      "فیلتراسیون HEPA H13",
      "کنترل اپلیکیشن و صدا",
      "سنسورهای چندسطحی",
      "تشخیص گرد و غبار با لیزر",
      "شارژدهی تا ۶۰ دقیقه"
    ],
    specs: {
      "Suction Power": "197 AW",
      Runtime: "90 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.8,
    reviews: 826,
    isNew: true,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY310X"
  },
  {
    id: "dyson-wet-dry-vacuum-217",
    name: "Dyson Wet & Dry Vacuum DY904X",
    nameFa: "جاروبرقی خشک و تر دایسون مدل DY904X",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 60844416,
    description: "Wet & Dry Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی خشک و تر از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Laser Dust Detection",
      "HEPA H13 Filtration",
      "Smart Mapping Navigation",
      "Multi-Surface Sensors",
      "60-Minute Runtime",
      "Pet Hair Optimized Brush"
    ],
    featuresFa: [
      "تشخیص گرد و غبار با لیزر",
      "فیلتراسیون HEPA H13",
      "ناوبری نقشه‌برداری هوشمند",
      "سنسورهای چندسطحی",
      "شارژدهی تا ۶۰ دقیقه",
      "برس مخصوص موی حیوانات"
    ],
    specs: {
      "Suction Power": "255 AW",
      Runtime: "120 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.2,
    reviews: 3110,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY904X"
  },
  {
    id: "dyson-robot-vacuum-218",
    name: "Dyson Robot Vacuum DY966X",
    nameFa: "جاروبرقی رباتیک دایسون مدل DY966X",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 67569559,
    description: "Robot Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی رباتیک از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Multi-Surface Sensors",
      "HEPA H13 Filtration",
      "Smart Mapping Navigation",
      "Auto-Empty Base",
      "App & Voice Control",
      "60-Minute Runtime"
    ],
    featuresFa: [
      "سنسورهای چندسطحی",
      "فیلتراسیون HEPA H13",
      "ناوبری نقشه‌برداری هوشمند",
      "پایه تخلیه خودکار",
      "کنترل اپلیکیشن و صدا",
      "شارژدهی تا ۶۰ دقیقه"
    ],
    specs: {
      "Suction Power": "245 AW",
      Runtime: "120 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.2,
    reviews: 1111,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY966X"
  },
  {
    id: "dyson-robot-vacuum-219",
    name: "Dyson Robot Vacuum DY829Neo",
    nameFa: "جاروبرقی رباتیک دایسون مدل DY829Neo",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 46341021,
    originalPrice: 60600000,
    description: "Robot Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی رباتیک از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Auto-Empty Base",
      "Laser Dust Detection",
      "60-Minute Runtime",
      "Smart Mapping Navigation",
      "App & Voice Control",
      "Pet Hair Optimized Brush"
    ],
    featuresFa: [
      "پایه تخلیه خودکار",
      "تشخیص گرد و غبار با لیزر",
      "شارژدهی تا ۶۰ دقیقه",
      "ناوبری نقشه‌برداری هوشمند",
      "کنترل اپلیکیشن و صدا",
      "برس مخصوص موی حیوانات"
    ],
    specs: {
      "Suction Power": "206 AW",
      Runtime: "60 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.1,
    reviews: 660,
    badge: "Popular",
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY829Neo"
  },
  {
    id: "dyson-robot-vacuum-220",
    name: "Dyson Robot Vacuum DY781Neo",
    nameFa: "جاروبرقی رباتیک دایسون مدل DY781Neo",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 27713835,
    originalPrice: 34000000,
    description: "Robot Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی رباتیک از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "App & Voice Control",
      "Pet Hair Optimized Brush",
      "Smart Mapping Navigation",
      "Laser Dust Detection",
      "Multi-Surface Sensors",
      "HEPA H13 Filtration"
    ],
    featuresFa: [
      "کنترل اپلیکیشن و صدا",
      "برس مخصوص موی حیوانات",
      "ناوبری نقشه‌برداری هوشمند",
      "تشخیص گرد و غبار با لیزر",
      "سنسورهای چندسطحی",
      "فیلتراسیون HEPA H13"
    ],
    specs: {
      "Suction Power": "253 AW",
      Runtime: "40 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.5,
    reviews: 2354,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY781Neo"
  },
  {
    id: "dyson-robot-vacuum-221",
    name: "Dyson Robot Vacuum DY580Neo",
    nameFa: "جاروبرقی رباتیک دایسون مدل DY580Neo",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 40032530,
    originalPrice: 50800000,
    description: "Robot Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی رباتیک از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Mapping Navigation",
      "App & Voice Control",
      "Multi-Surface Sensors",
      "Auto-Empty Base",
      "HEPA H13 Filtration",
      "Laser Dust Detection"
    ],
    featuresFa: [
      "ناوبری نقشه‌برداری هوشمند",
      "کنترل اپلیکیشن و صدا",
      "سنسورهای چندسطحی",
      "پایه تخلیه خودکار",
      "فیلتراسیون HEPA H13",
      "تشخیص گرد و غبار با لیزر"
    ],
    specs: {
      "Suction Power": "161 AW",
      Runtime: "40 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.1,
    reviews: 1067,
    isBestseller: true,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY580Neo"
  },
  {
    id: "dyson-robot-vacuum-222",
    name: "Dyson Robot Vacuum DY895S",
    nameFa: "جاروبرقی رباتیک دایسون مدل DY895S",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 33608362,
    description: "Robot Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی رباتیک از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Pet Hair Optimized Brush",
      "HEPA H13 Filtration",
      "Auto-Empty Base",
      "Multi-Surface Sensors",
      "Smart Mapping Navigation",
      "60-Minute Runtime"
    ],
    featuresFa: [
      "برس مخصوص موی حیوانات",
      "فیلتراسیون HEPA H13",
      "پایه تخلیه خودکار",
      "سنسورهای چندسطحی",
      "ناوبری نقشه‌برداری هوشمند",
      "شارژدهی تا ۶۰ دقیقه"
    ],
    specs: {
      "Suction Power": "186 AW",
      Runtime: "60 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.8,
    reviews: 2689,
    badge: "Premium",
    isBestseller: true,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY895S"
  },
  {
    id: "dyson-wet-dry-vacuum-223",
    name: "Dyson Wet & Dry Vacuum DY830",
    nameFa: "جاروبرقی خشک و تر دایسون مدل DY830",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 61507325,
    originalPrice: 69500000,
    description: "Wet & Dry Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی خشک و تر از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Multi-Surface Sensors",
      "App & Voice Control",
      "Pet Hair Optimized Brush",
      "Auto-Empty Base",
      "Laser Dust Detection",
      "HEPA H13 Filtration"
    ],
    featuresFa: [
      "سنسورهای چندسطحی",
      "کنترل اپلیکیشن و صدا",
      "برس مخصوص موی حیوانات",
      "پایه تخلیه خودکار",
      "تشخیص گرد و غبار با لیزر",
      "فیلتراسیون HEPA H13"
    ],
    specs: {
      "Suction Power": "184 AW",
      Runtime: "90 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.5,
    reviews: 3017,
    isBestseller: true,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY830"
  },
  {
    id: "dyson-cordless-stick-vacuum-224",
    name: "Dyson Cordless Stick Vacuum DY637Pro",
    nameFa: "جاروبرقی شارژی دایسون مدل DY637Pro",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 23299493,
    description: "Cordless Stick Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی شارژی از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "App & Voice Control",
      "60-Minute Runtime",
      "Smart Mapping Navigation",
      "Laser Dust Detection",
      "Auto-Empty Base",
      "Pet Hair Optimized Brush"
    ],
    featuresFa: [
      "کنترل اپلیکیشن و صدا",
      "شارژدهی تا ۶۰ دقیقه",
      "ناوبری نقشه‌برداری هوشمند",
      "تشخیص گرد و غبار با لیزر",
      "پایه تخلیه خودکار",
      "برس مخصوص موی حیوانات"
    ],
    specs: {
      "Suction Power": "203 AW",
      Runtime: "90 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.3,
    reviews: 3150,
    badge: "Editor's Choice",
    isBestseller: true,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY637Pro"
  },
  {
    id: "dyson-canister-vacuum-225",
    name: "Dyson Canister Vacuum DY491X",
    nameFa: "جاروبرقی سطلی دایسون مدل DY491X",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 66064972,
    description: "Canister Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "App & Voice Control",
      "60-Minute Runtime",
      "Multi-Surface Sensors",
      "Auto-Empty Base",
      "HEPA H13 Filtration",
      "Smart Mapping Navigation"
    ],
    featuresFa: [
      "کنترل اپلیکیشن و صدا",
      "شارژدهی تا ۶۰ دقیقه",
      "سنسورهای چندسطحی",
      "پایه تخلیه خودکار",
      "فیلتراسیون HEPA H13",
      "ناوبری نقشه‌برداری هوشمند"
    ],
    specs: {
      "Suction Power": "212 AW",
      Runtime: "50 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.4,
    reviews: 1774,
    badge: "Premium",
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY491X"
  },
  {
    id: "dyson-robot-vacuum-226",
    name: "Dyson Robot Vacuum DY985Plus",
    nameFa: "جاروبرقی رباتیک دایسون مدل DY985Plus",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 35274359,
    originalPrice: 45100000,
    description: "Robot Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی رباتیک از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "HEPA H13 Filtration",
      "Auto-Empty Base",
      "Pet Hair Optimized Brush",
      "Smart Mapping Navigation",
      "Laser Dust Detection",
      "Multi-Surface Sensors"
    ],
    featuresFa: [
      "فیلتراسیون HEPA H13",
      "پایه تخلیه خودکار",
      "برس مخصوص موی حیوانات",
      "ناوبری نقشه‌برداری هوشمند",
      "تشخیص گرد و غبار با لیزر",
      "سنسورهای چندسطحی"
    ],
    specs: {
      "Suction Power": "173 AW",
      Runtime: "60 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.4,
    reviews: 78,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY985Plus"
  },
  {
    id: "dyson-wet-dry-vacuum-227",
    name: "Dyson Wet & Dry Vacuum DY716S",
    nameFa: "جاروبرقی خشک و تر دایسون مدل DY716S",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 38504961,
    description: "Wet & Dry Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی خشک و تر از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Laser Dust Detection",
      "HEPA H13 Filtration",
      "60-Minute Runtime",
      "App & Voice Control",
      "Smart Mapping Navigation",
      "Multi-Surface Sensors"
    ],
    featuresFa: [
      "تشخیص گرد و غبار با لیزر",
      "فیلتراسیون HEPA H13",
      "شارژدهی تا ۶۰ دقیقه",
      "کنترل اپلیکیشن و صدا",
      "ناوبری نقشه‌برداری هوشمند",
      "سنسورهای چندسطحی"
    ],
    specs: {
      "Suction Power": "248 AW",
      Runtime: "40 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.1,
    reviews: 673,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY716S"
  },
  {
    id: "dyson-robot-vacuum-228",
    name: "Dyson Robot Vacuum DY177X",
    nameFa: "جاروبرقی رباتیک دایسون مدل DY177X",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 37232727,
    description: "Robot Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی رباتیک از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "HEPA H13 Filtration",
      "Pet Hair Optimized Brush",
      "Smart Mapping Navigation",
      "App & Voice Control",
      "Multi-Surface Sensors",
      "60-Minute Runtime"
    ],
    featuresFa: [
      "فیلتراسیون HEPA H13",
      "برس مخصوص موی حیوانات",
      "ناوبری نقشه‌برداری هوشمند",
      "کنترل اپلیکیشن و صدا",
      "سنسورهای چندسطحی",
      "شارژدهی تا ۶۰ دقیقه"
    ],
    specs: {
      "Suction Power": "191 AW",
      Runtime: "40 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4,
    reviews: 62,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY177X"
  },
  {
    id: "dyson-cordless-stick-vacuum-229",
    name: "Dyson Cordless Stick Vacuum DY325Neo",
    nameFa: "جاروبرقی شارژی دایسون مدل DY325Neo",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 47175158,
    description: "Cordless Stick Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی شارژی از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Multi-Surface Sensors",
      "Smart Mapping Navigation",
      "App & Voice Control",
      "Laser Dust Detection",
      "HEPA H13 Filtration",
      "Pet Hair Optimized Brush"
    ],
    featuresFa: [
      "سنسورهای چندسطحی",
      "ناوبری نقشه‌برداری هوشمند",
      "کنترل اپلیکیشن و صدا",
      "تشخیص گرد و غبار با لیزر",
      "فیلتراسیون HEPA H13",
      "برس مخصوص موی حیوانات"
    ],
    specs: {
      "Suction Power": "205 AW",
      Runtime: "50 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.5,
    reviews: 1499,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY325Neo"
  },
  {
    id: "dyson-cordless-stick-vacuum-230",
    name: "Dyson Cordless Stick Vacuum DY463Plus",
    nameFa: "جاروبرقی شارژی دایسون مدل DY463Plus",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 59883695,
    description: "Cordless Stick Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی شارژی از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "App & Voice Control",
      "Auto-Empty Base",
      "HEPA H13 Filtration",
      "Smart Mapping Navigation",
      "Multi-Surface Sensors",
      "Laser Dust Detection"
    ],
    featuresFa: [
      "کنترل اپلیکیشن و صدا",
      "پایه تخلیه خودکار",
      "فیلتراسیون HEPA H13",
      "ناوبری نقشه‌برداری هوشمند",
      "سنسورهای چندسطحی",
      "تشخیص گرد و غبار با لیزر"
    ],
    specs: {
      "Suction Power": "179 AW",
      Runtime: "90 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.8,
    reviews: 675,
    isNew: true,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY463Plus"
  },
  {
    id: "dyson-robot-vacuum-231",
    name: "Dyson Robot Vacuum DY732X",
    nameFa: "جاروبرقی رباتیک دایسون مدل DY732X",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 56121368,
    description: "Robot Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی رباتیک از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Mapping Navigation",
      "Pet Hair Optimized Brush",
      "App & Voice Control",
      "Multi-Surface Sensors",
      "HEPA H13 Filtration",
      "Auto-Empty Base"
    ],
    featuresFa: [
      "ناوبری نقشه‌برداری هوشمند",
      "برس مخصوص موی حیوانات",
      "کنترل اپلیکیشن و صدا",
      "سنسورهای چندسطحی",
      "فیلتراسیون HEPA H13",
      "پایه تخلیه خودکار"
    ],
    specs: {
      "Suction Power": "160 AW",
      Runtime: "120 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.7,
    reviews: 619,
    isNew: true,
    isBestseller: true,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY732X"
  },
  {
    id: "dyson-canister-vacuum-232",
    name: "Dyson Canister Vacuum DY689",
    nameFa: "جاروبرقی سطلی دایسون مدل DY689",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 66561601,
    description: "Canister Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Pet Hair Optimized Brush",
      "60-Minute Runtime",
      "Auto-Empty Base",
      "Smart Mapping Navigation",
      "HEPA H13 Filtration",
      "App & Voice Control"
    ],
    featuresFa: [
      "برس مخصوص موی حیوانات",
      "شارژدهی تا ۶۰ دقیقه",
      "پایه تخلیه خودکار",
      "ناوبری نقشه‌برداری هوشمند",
      "فیلتراسیون HEPA H13",
      "کنترل اپلیکیشن و صدا"
    ],
    specs: {
      "Suction Power": "194 AW",
      Runtime: "40 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.3,
    reviews: 2064,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY689"
  },
  {
    id: "dyson-robot-vacuum-233",
    name: "Dyson Robot Vacuum DY617",
    nameFa: "جاروبرقی رباتیک دایسون مدل DY617",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 57734255,
    originalPrice: 72400000,
    description: "Robot Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی رباتیک از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "App & Voice Control",
      "Laser Dust Detection",
      "HEPA H13 Filtration",
      "Smart Mapping Navigation",
      "60-Minute Runtime",
      "Pet Hair Optimized Brush"
    ],
    featuresFa: [
      "کنترل اپلیکیشن و صدا",
      "تشخیص گرد و غبار با لیزر",
      "فیلتراسیون HEPA H13",
      "ناوبری نقشه‌برداری هوشمند",
      "شارژدهی تا ۶۰ دقیقه",
      "برس مخصوص موی حیوانات"
    ],
    specs: {
      "Suction Power": "213 AW",
      Runtime: "50 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.7,
    reviews: 298,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY617"
  },
  {
    id: "dyson-robot-vacuum-234",
    name: "Dyson Robot Vacuum DY851",
    nameFa: "جاروبرقی رباتیک دایسون مدل DY851",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 56111628,
    description: "Robot Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی رباتیک از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "App & Voice Control",
      "HEPA H13 Filtration",
      "Pet Hair Optimized Brush",
      "Laser Dust Detection",
      "60-Minute Runtime",
      "Multi-Surface Sensors"
    ],
    featuresFa: [
      "کنترل اپلیکیشن و صدا",
      "فیلتراسیون HEPA H13",
      "برس مخصوص موی حیوانات",
      "تشخیص گرد و غبار با لیزر",
      "شارژدهی تا ۶۰ دقیقه",
      "سنسورهای چندسطحی"
    ],
    specs: {
      "Suction Power": "164 AW",
      Runtime: "90 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.6,
    reviews: 3125,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY851"
  },
  {
    id: "dyson-robot-vacuum-235",
    name: "Dyson Robot Vacuum DY336X",
    nameFa: "جاروبرقی رباتیک دایسون مدل DY336X",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 49103775,
    originalPrice: 59300000,
    description: "Robot Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی رباتیک از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "60-Minute Runtime",
      "Pet Hair Optimized Brush",
      "Smart Mapping Navigation",
      "Auto-Empty Base",
      "Multi-Surface Sensors",
      "HEPA H13 Filtration"
    ],
    featuresFa: [
      "شارژدهی تا ۶۰ دقیقه",
      "برس مخصوص موی حیوانات",
      "ناوبری نقشه‌برداری هوشمند",
      "پایه تخلیه خودکار",
      "سنسورهای چندسطحی",
      "فیلتراسیون HEPA H13"
    ],
    specs: {
      "Suction Power": "234 AW",
      Runtime: "60 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.7,
    reviews: 2711,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY336X"
  },
  {
    id: "dyson-cordless-stick-vacuum-236",
    name: "Dyson Cordless Stick Vacuum DY402",
    nameFa: "جاروبرقی شارژی دایسون مدل DY402",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 67242777,
    description: "Cordless Stick Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی شارژی از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Laser Dust Detection",
      "60-Minute Runtime",
      "HEPA H13 Filtration",
      "Pet Hair Optimized Brush",
      "App & Voice Control",
      "Smart Mapping Navigation"
    ],
    featuresFa: [
      "تشخیص گرد و غبار با لیزر",
      "شارژدهی تا ۶۰ دقیقه",
      "فیلتراسیون HEPA H13",
      "برس مخصوص موی حیوانات",
      "کنترل اپلیکیشن و صدا",
      "ناوبری نقشه‌برداری هوشمند"
    ],
    specs: {
      "Suction Power": "209 AW",
      Runtime: "50 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.3,
    reviews: 504,
    badge: "Popular",
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY402"
  },
  {
    id: "dyson-wet-dry-vacuum-237",
    name: "Dyson Wet & Dry Vacuum DY284X",
    nameFa: "جاروبرقی خشک و تر دایسون مدل DY284X",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 36422798,
    originalPrice: 40700000,
    description: "Wet & Dry Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی خشک و تر از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Mapping Navigation",
      "Laser Dust Detection",
      "HEPA H13 Filtration",
      "60-Minute Runtime",
      "Auto-Empty Base",
      "App & Voice Control"
    ],
    featuresFa: [
      "ناوبری نقشه‌برداری هوشمند",
      "تشخیص گرد و غبار با لیزر",
      "فیلتراسیون HEPA H13",
      "شارژدهی تا ۶۰ دقیقه",
      "پایه تخلیه خودکار",
      "کنترل اپلیکیشن و صدا"
    ],
    specs: {
      "Suction Power": "233 AW",
      Runtime: "50 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.6,
    reviews: 2187,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY284X"
  },
  {
    id: "dyson-cordless-stick-vacuum-238",
    name: "Dyson Cordless Stick Vacuum DY528Neo",
    nameFa: "جاروبرقی شارژی دایسون مدل DY528Neo",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 31288694,
    description: "Cordless Stick Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی شارژی از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Auto-Empty Base",
      "Laser Dust Detection",
      "Smart Mapping Navigation",
      "60-Minute Runtime",
      "Pet Hair Optimized Brush",
      "Multi-Surface Sensors"
    ],
    featuresFa: [
      "پایه تخلیه خودکار",
      "تشخیص گرد و غبار با لیزر",
      "ناوبری نقشه‌برداری هوشمند",
      "شارژدهی تا ۶۰ دقیقه",
      "برس مخصوص موی حیوانات",
      "سنسورهای چندسطحی"
    ],
    specs: {
      "Suction Power": "155 AW",
      Runtime: "60 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.4,
    reviews: 842,
    badge: "Best Seller",
    isBestseller: true,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY528Neo"
  },
  {
    id: "dyson-canister-vacuum-239",
    name: "Dyson Canister Vacuum DY208Pro",
    nameFa: "جاروبرقی سطلی دایسون مدل DY208Pro",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 37264411,
    originalPrice: 43300000,
    description: "Canister Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Auto-Empty Base",
      "Laser Dust Detection",
      "HEPA H13 Filtration",
      "Multi-Surface Sensors",
      "Smart Mapping Navigation",
      "Pet Hair Optimized Brush"
    ],
    featuresFa: [
      "پایه تخلیه خودکار",
      "تشخیص گرد و غبار با لیزر",
      "فیلتراسیون HEPA H13",
      "سنسورهای چندسطحی",
      "ناوبری نقشه‌برداری هوشمند",
      "برس مخصوص موی حیوانات"
    ],
    specs: {
      "Suction Power": "176 AW",
      Runtime: "90 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.6,
    reviews: 787,
    badge: "Popular",
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY208Pro"
  },
  {
    id: "dyson-wet-dry-vacuum-240",
    name: "Dyson Wet & Dry Vacuum DY332X",
    nameFa: "جاروبرقی خشک و تر دایسون مدل DY332X",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 32024966,
    description: "Wet & Dry Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی خشک و تر از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Laser Dust Detection",
      "Pet Hair Optimized Brush",
      "Smart Mapping Navigation",
      "HEPA H13 Filtration",
      "Auto-Empty Base",
      "Multi-Surface Sensors"
    ],
    featuresFa: [
      "تشخیص گرد و غبار با لیزر",
      "برس مخصوص موی حیوانات",
      "ناوبری نقشه‌برداری هوشمند",
      "فیلتراسیون HEPA H13",
      "پایه تخلیه خودکار",
      "سنسورهای چندسطحی"
    ],
    specs: {
      "Suction Power": "201 AW",
      Runtime: "40 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.7,
    reviews: 2750,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY332X"
  },
  {
    id: "dyson-canister-vacuum-241",
    name: "Dyson Canister Vacuum DY184Neo",
    nameFa: "جاروبرقی سطلی دایسون مدل DY184Neo",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 47160950,
    description: "Canister Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Auto-Empty Base",
      "HEPA H13 Filtration",
      "Smart Mapping Navigation",
      "Laser Dust Detection",
      "App & Voice Control",
      "Pet Hair Optimized Brush"
    ],
    featuresFa: [
      "پایه تخلیه خودکار",
      "فیلتراسیون HEPA H13",
      "ناوبری نقشه‌برداری هوشمند",
      "تشخیص گرد و غبار با لیزر",
      "کنترل اپلیکیشن و صدا",
      "برس مخصوص موی حیوانات"
    ],
    specs: {
      "Suction Power": "243 AW",
      Runtime: "40 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.7,
    reviews: 2103,
    isNew: true,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY184Neo"
  },
  {
    id: "dyson-canister-vacuum-242",
    name: "Dyson Canister Vacuum DY944Neo",
    nameFa: "جاروبرقی سطلی دایسون مدل DY944Neo",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 53139129,
    description: "Canister Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "60-Minute Runtime",
      "HEPA H13 Filtration",
      "Smart Mapping Navigation",
      "Laser Dust Detection",
      "Multi-Surface Sensors",
      "Pet Hair Optimized Brush"
    ],
    featuresFa: [
      "شارژدهی تا ۶۰ دقیقه",
      "فیلتراسیون HEPA H13",
      "ناوبری نقشه‌برداری هوشمند",
      "تشخیص گرد و غبار با لیزر",
      "سنسورهای چندسطحی",
      "برس مخصوص موی حیوانات"
    ],
    specs: {
      "Suction Power": "196 AW",
      Runtime: "120 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.7,
    reviews: 1138,
    badge: "Top Rated",
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY944Neo"
  },
  {
    id: "dyson-robot-vacuum-243",
    name: "Dyson Robot Vacuum DY891S",
    nameFa: "جاروبرقی رباتیک دایسون مدل DY891S",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 63314944,
    description: "Robot Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی رباتیک از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "HEPA H13 Filtration",
      "Auto-Empty Base",
      "Multi-Surface Sensors",
      "App & Voice Control",
      "Pet Hair Optimized Brush",
      "60-Minute Runtime"
    ],
    featuresFa: [
      "فیلتراسیون HEPA H13",
      "پایه تخلیه خودکار",
      "سنسورهای چندسطحی",
      "کنترل اپلیکیشن و صدا",
      "برس مخصوص موی حیوانات",
      "شارژدهی تا ۶۰ دقیقه"
    ],
    specs: {
      "Suction Power": "254 AW",
      Runtime: "40 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.5,
    reviews: 85,
    isNew: true,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY891S"
  },
  {
    id: "dyson-robot-vacuum-244",
    name: "Dyson Robot Vacuum DY498Plus",
    nameFa: "جاروبرقی رباتیک دایسون مدل DY498Plus",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 51180662,
    description: "Robot Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی رباتیک از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "HEPA H13 Filtration",
      "Laser Dust Detection",
      "Multi-Surface Sensors",
      "App & Voice Control",
      "Smart Mapping Navigation",
      "60-Minute Runtime"
    ],
    featuresFa: [
      "فیلتراسیون HEPA H13",
      "تشخیص گرد و غبار با لیزر",
      "سنسورهای چندسطحی",
      "کنترل اپلیکیشن و صدا",
      "ناوبری نقشه‌برداری هوشمند",
      "شارژدهی تا ۶۰ دقیقه"
    ],
    specs: {
      "Suction Power": "239 AW",
      Runtime: "120 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.3,
    reviews: 1370,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY498Plus"
  },
  {
    id: "dyson-wet-dry-vacuum-245",
    name: "Dyson Wet & Dry Vacuum DY676Neo",
    nameFa: "جاروبرقی خشک و تر دایسون مدل DY676Neo",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 30370466,
    originalPrice: 38700000,
    description: "Wet & Dry Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی خشک و تر از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Laser Dust Detection",
      "Pet Hair Optimized Brush",
      "Auto-Empty Base",
      "Smart Mapping Navigation",
      "Multi-Surface Sensors",
      "60-Minute Runtime"
    ],
    featuresFa: [
      "تشخیص گرد و غبار با لیزر",
      "برس مخصوص موی حیوانات",
      "پایه تخلیه خودکار",
      "ناوبری نقشه‌برداری هوشمند",
      "سنسورهای چندسطحی",
      "شارژدهی تا ۶۰ دقیقه"
    ],
    specs: {
      "Suction Power": "206 AW",
      Runtime: "90 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.5,
    reviews: 24,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY676Neo"
  },
  {
    id: "dyson-canister-vacuum-246",
    name: "Dyson Canister Vacuum DY545Neo",
    nameFa: "جاروبرقی سطلی دایسون مدل DY545Neo",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 56289473,
    originalPrice: 66500000,
    description: "Canister Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Pet Hair Optimized Brush",
      "HEPA H13 Filtration",
      "Laser Dust Detection",
      "Auto-Empty Base",
      "App & Voice Control",
      "Smart Mapping Navigation"
    ],
    featuresFa: [
      "برس مخصوص موی حیوانات",
      "فیلتراسیون HEPA H13",
      "تشخیص گرد و غبار با لیزر",
      "پایه تخلیه خودکار",
      "کنترل اپلیکیشن و صدا",
      "ناوبری نقشه‌برداری هوشمند"
    ],
    specs: {
      "Suction Power": "179 AW",
      Runtime: "40 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.3,
    reviews: 196,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY545Neo"
  },
  {
    id: "dyson-canister-vacuum-247",
    name: "Dyson Canister Vacuum DY749X",
    nameFa: "جاروبرقی سطلی دایسون مدل DY749X",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 34522456,
    description: "Canister Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Laser Dust Detection",
      "HEPA H13 Filtration",
      "60-Minute Runtime",
      "Multi-Surface Sensors",
      "Auto-Empty Base",
      "App & Voice Control"
    ],
    featuresFa: [
      "تشخیص گرد و غبار با لیزر",
      "فیلتراسیون HEPA H13",
      "شارژدهی تا ۶۰ دقیقه",
      "سنسورهای چندسطحی",
      "پایه تخلیه خودکار",
      "کنترل اپلیکیشن و صدا"
    ],
    specs: {
      "Suction Power": "160 AW",
      Runtime: "120 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.8,
    reviews: 1447,
    badge: "Popular",
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY749X"
  },
  {
    id: "dyson-cordless-stick-vacuum-248",
    name: "Dyson Cordless Stick Vacuum DY257Pro",
    nameFa: "جاروبرقی شارژی دایسون مدل DY257Pro",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 48294679,
    description: "Cordless Stick Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی شارژی از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "HEPA H13 Filtration",
      "Smart Mapping Navigation",
      "Auto-Empty Base",
      "Pet Hair Optimized Brush",
      "Multi-Surface Sensors",
      "Laser Dust Detection"
    ],
    featuresFa: [
      "فیلتراسیون HEPA H13",
      "ناوبری نقشه‌برداری هوشمند",
      "پایه تخلیه خودکار",
      "برس مخصوص موی حیوانات",
      "سنسورهای چندسطحی",
      "تشخیص گرد و غبار با لیزر"
    ],
    specs: {
      "Suction Power": "215 AW",
      Runtime: "40 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.6,
    reviews: 379,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY257Pro"
  },
  {
    id: "dyson-canister-vacuum-249",
    name: "Dyson Canister Vacuum DY908Neo",
    nameFa: "جاروبرقی سطلی دایسون مدل DY908Neo",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 31260009,
    originalPrice: 36400000,
    description: "Canister Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "60-Minute Runtime",
      "App & Voice Control",
      "Smart Mapping Navigation",
      "Laser Dust Detection",
      "HEPA H13 Filtration",
      "Auto-Empty Base"
    ],
    featuresFa: [
      "شارژدهی تا ۶۰ دقیقه",
      "کنترل اپلیکیشن و صدا",
      "ناوبری نقشه‌برداری هوشمند",
      "تشخیص گرد و غبار با لیزر",
      "فیلتراسیون HEPA H13",
      "پایه تخلیه خودکار"
    ],
    specs: {
      "Suction Power": "151 AW",
      Runtime: "40 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.7,
    reviews: 435,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY908Neo"
  },
  {
    id: "dyson-wet-dry-vacuum-250",
    name: "Dyson Wet & Dry Vacuum DY856Plus",
    nameFa: "جاروبرقی خشک و تر دایسون مدل DY856Plus",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 25370166,
    originalPrice: 34200000,
    description: "Wet & Dry Vacuum from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی خشک و تر از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Auto-Empty Base",
      "Smart Mapping Navigation",
      "Pet Hair Optimized Brush",
      "HEPA H13 Filtration",
      "App & Voice Control",
      "Multi-Surface Sensors"
    ],
    featuresFa: [
      "پایه تخلیه خودکار",
      "ناوبری نقشه‌برداری هوشمند",
      "برس مخصوص موی حیوانات",
      "فیلتراسیون HEPA H13",
      "کنترل اپلیکیشن و صدا",
      "سنسورهای چندسطحی"
    ],
    specs: {
      "Suction Power": "203 AW",
      Runtime: "40 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.4,
    reviews: 825,
    badge: "Premium",
    isBestseller: true,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY856Plus"
  },
  {
    id: "dyson-coffee-maker-251",
    name: "Dyson Coffee Maker DY881Neo",
    nameFa: "قهوه‌ساز دایسون مدل DY881Neo",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 12933435,
    originalPrice: 16400000,
    description: "Coffee Maker from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "قهوه‌ساز از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Preset Programs",
      "Keep Warm Function",
      "Compact Footprint Design",
      "10-Speed Control",
      "Companion App with Recipes",
      "Dishwasher Safe Parts"
    ],
    featuresFa: [
      "برنامه‌های هوشمند پیش‌تنظیم",
      "قابلیت Keep Warm",
      "طراحی جمع‌وجور",
      "کنترل ۱۰ سرعته",
      "اپلیکیشن همراه با دستور غذا",
      "قطعات قابل شستشو در ماشین ظرفشویی"
    ],
    specs: {
      Power: "718 Watt",
      Capacity: "5.1 L",
      Presets: "6 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.2,
    reviews: 488,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY881Neo"
  },
  {
    id: "dyson-microwave-oven-252",
    name: "Dyson Microwave Oven DY132X",
    nameFa: "مایکروویو دایسون مدل DY132X",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 27138286,
    description: "Microwave Oven from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مایکروویو از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Preset Programs",
      "10-Speed Control",
      "Keep Warm Function",
      "One-Touch Operation",
      "Rapid Air Technology",
      "Dishwasher Safe Parts"
    ],
    featuresFa: [
      "برنامه‌های هوشمند پیش‌تنظیم",
      "کنترل ۱۰ سرعته",
      "قابلیت Keep Warm",
      "عملکرد تک‌لمسی",
      "فناوری هوای سریع",
      "قطعات قابل شستشو در ماشین ظرفشویی"
    ],
    specs: {
      Power: "1200 Watt",
      Capacity: "3.2 L",
      Presets: "7 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.5,
    reviews: 765,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY132X"
  },
  {
    id: "dyson-blender-253",
    name: "Dyson Blender DY894Plus",
    nameFa: "مخلوط‌کن دایسون مدل DY894Plus",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 29573001,
    originalPrice: 38600000,
    description: "Blender from Dyson, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مخلوط‌کن از برند دایسون، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Companion App with Recipes",
      "Compact Footprint Design",
      "Keep Warm Function",
      "Rapid Air Technology",
      "One-Touch Operation",
      "Dishwasher Safe Parts"
    ],
    featuresFa: [
      "اپلیکیشن همراه با دستور غذا",
      "طراحی جمع‌وجور",
      "قابلیت Keep Warm",
      "فناوری هوای سریع",
      "عملکرد تک‌لمسی",
      "قطعات قابل شستشو در ماشین ظرفشویی"
    ],
    specs: {
      Power: "606 Watt",
      Capacity: "5.5 L",
      Presets: "7 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.7,
    reviews: 182,
    brand: "Dyson",
    brandFa: "دایسون",
    model: "DY894Plus"
  },
  {
    id: "daikin-multi-split-system-254",
    name: "Daikin Multi-Split System 18000 BTU DA493S",
    nameFa: "سیستم مولتی‌اسپلیت دایکین 18000 BTU مدل DA493S",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 87556786,
    description: "Multi-Split System from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سیستم مولتی‌اسپلیت از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Inverter Technology",
      "Rapid Cooling Mode",
      "Streamer Air Purification",
      "R32 Eco Refrigerant",
      "WiFi Smart Control",
      "Self-Cleaning Function"
    ],
    featuresFa: [
      "فناوری اینورتر",
      "حالت سرمایش سریع",
      "تصفیه هوای استریمر",
      "گاز سردکننده R32",
      "کنترل هوشمند WiFi",
      "قابلیت خودتمیزکنی"
    ],
    specs: {
      Capacity: "24000 BTU",
      SEER: "8.6 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80",
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.5,
    reviews: 693,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA493S"
  },
  {
    id: "daikin-multi-split-system-255",
    name: "Daikin Multi-Split System 18000 BTU DA508Pro",
    nameFa: "سیستم مولتی‌اسپلیت دایکین 18000 BTU مدل DA508Pro",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 67267016,
    description: "Multi-Split System from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سیستم مولتی‌اسپلیت از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "WiFi Smart Control",
      "Streamer Air Purification",
      "Ultra-Quiet Operation",
      "R32 Eco Refrigerant",
      "Inverter Technology",
      "Intelligent Eye Sensor"
    ],
    featuresFa: [
      "کنترل هوشمند WiFi",
      "تصفیه هوای استریمر",
      "عملکرد فوق‌العاده کم‌صدا",
      "گاز سردکننده R32",
      "فناوری اینورتر",
      "سنسور هوشمند چشمی"
    ],
    specs: {
      Capacity: "9000 BTU",
      SEER: "6.6 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80",
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.4,
    reviews: 183,
    badge: "Premium",
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA508Pro"
  },
  {
    id: "daikin-split-inverter-ac-256",
    name: "Daikin Split Inverter AC 30000 BTU DA400S",
    nameFa: "کولر گازی اسپلیت اینورتر دایکین 30000 BTU مدل DA400S",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 126763068,
    description: "Split Inverter AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی اسپلیت اینورتر از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "WiFi Smart Control",
      "Inverter Technology",
      "R32 Eco Refrigerant",
      "Self-Cleaning Function",
      "Rapid Cooling Mode",
      "Intelligent Eye Sensor"
    ],
    featuresFa: [
      "کنترل هوشمند WiFi",
      "فناوری اینورتر",
      "گاز سردکننده R32",
      "قابلیت خودتمیزکنی",
      "حالت سرمایش سریع",
      "سنسور هوشمند چشمی"
    ],
    specs: {
      Capacity: "30000 BTU",
      SEER: "6.1 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.4,
    reviews: 120,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA400S"
  },
  {
    id: "daikin-portable-ac-257",
    name: "Daikin Portable AC 24000 BTU DA350Neo",
    nameFa: "کولر گازی پرتابل دایکین 24000 BTU مدل DA350Neo",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 75031288,
    description: "Portable AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پرتابل از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Self-Cleaning Function",
      "Streamer Air Purification",
      "R32 Eco Refrigerant",
      "Inverter Technology",
      "WiFi Smart Control",
      "Intelligent Eye Sensor"
    ],
    featuresFa: [
      "قابلیت خودتمیزکنی",
      "تصفیه هوای استریمر",
      "گاز سردکننده R32",
      "فناوری اینورتر",
      "کنترل هوشمند WiFi",
      "سنسور هوشمند چشمی"
    ],
    specs: {
      Capacity: "9000 BTU",
      SEER: "6.5 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.8,
    reviews: 2256,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA350Neo"
  },
  {
    id: "daikin-portable-ac-258",
    name: "Daikin Portable AC 12000 BTU DA968",
    nameFa: "کولر گازی پرتابل دایکین 12000 BTU مدل DA968",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 44712070,
    description: "Portable AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پرتابل از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "WiFi Smart Control",
      "Ultra-Quiet Operation",
      "Streamer Air Purification",
      "Rapid Cooling Mode",
      "R32 Eco Refrigerant",
      "Inverter Technology"
    ],
    featuresFa: [
      "کنترل هوشمند WiFi",
      "عملکرد فوق‌العاده کم‌صدا",
      "تصفیه هوای استریمر",
      "حالت سرمایش سریع",
      "گاز سردکننده R32",
      "فناوری اینورتر"
    ],
    specs: {
      Capacity: "18000 BTU",
      SEER: "8.6 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80",
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.7,
    reviews: 3172,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA968"
  },
  {
    id: "daikin-portable-ac-259",
    name: "Daikin Portable AC 12000 BTU DA149",
    nameFa: "کولر گازی پرتابل دایکین 12000 BTU مدل DA149",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 82939983,
    description: "Portable AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پرتابل از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Rapid Cooling Mode",
      "Self-Cleaning Function",
      "Streamer Air Purification",
      "Ultra-Quiet Operation",
      "WiFi Smart Control",
      "R32 Eco Refrigerant"
    ],
    featuresFa: [
      "حالت سرمایش سریع",
      "قابلیت خودتمیزکنی",
      "تصفیه هوای استریمر",
      "عملکرد فوق‌العاده کم‌صدا",
      "کنترل هوشمند WiFi",
      "گاز سردکننده R32"
    ],
    specs: {
      Capacity: "9000 BTU",
      SEER: "7.9 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80",
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.8,
    reviews: 845,
    isBestseller: true,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA149"
  },
  {
    id: "daikin-window-ac-260",
    name: "Daikin Window AC 12000 BTU DA539",
    nameFa: "کولر گازی پنجره‌ای دایکین 12000 BTU مدل DA539",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 61560957,
    originalPrice: 71600000,
    description: "Window AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پنجره‌ای از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "WiFi Smart Control",
      "Streamer Air Purification",
      "R32 Eco Refrigerant",
      "Inverter Technology",
      "Rapid Cooling Mode",
      "Ultra-Quiet Operation"
    ],
    featuresFa: [
      "کنترل هوشمند WiFi",
      "تصفیه هوای استریمر",
      "گاز سردکننده R32",
      "فناوری اینورتر",
      "حالت سرمایش سریع",
      "عملکرد فوق‌العاده کم‌صدا"
    ],
    specs: {
      Capacity: "18000 BTU",
      SEER: "6.4 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80",
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.4,
    reviews: 1649,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA539"
  },
  {
    id: "daikin-portable-ac-261",
    name: "Daikin Portable AC 18000 BTU DA601Pro",
    nameFa: "کولر گازی پرتابل دایکین 18000 BTU مدل DA601Pro",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 72212233,
    description: "Portable AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پرتابل از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Self-Cleaning Function",
      "R32 Eco Refrigerant",
      "Streamer Air Purification",
      "Ultra-Quiet Operation",
      "Rapid Cooling Mode",
      "Inverter Technology"
    ],
    featuresFa: [
      "قابلیت خودتمیزکنی",
      "گاز سردکننده R32",
      "تصفیه هوای استریمر",
      "عملکرد فوق‌العاده کم‌صدا",
      "حالت سرمایش سریع",
      "فناوری اینورتر"
    ],
    specs: {
      Capacity: "18000 BTU",
      SEER: "9 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.2,
    reviews: 103,
    badge: "Best Seller",
    isBestseller: true,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA601Pro"
  },
  {
    id: "daikin-portable-ac-262",
    name: "Daikin Portable AC 30000 BTU DA479Pro",
    nameFa: "کولر گازی پرتابل دایکین 30000 BTU مدل DA479Pro",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 58686680,
    description: "Portable AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پرتابل از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "R32 Eco Refrigerant",
      "Rapid Cooling Mode",
      "WiFi Smart Control",
      "Ultra-Quiet Operation",
      "Intelligent Eye Sensor",
      "Inverter Technology"
    ],
    featuresFa: [
      "گاز سردکننده R32",
      "حالت سرمایش سریع",
      "کنترل هوشمند WiFi",
      "عملکرد فوق‌العاده کم‌صدا",
      "سنسور هوشمند چشمی",
      "فناوری اینورتر"
    ],
    specs: {
      Capacity: "18000 BTU",
      SEER: "6.8 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80",
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.6,
    reviews: 1137,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA479Pro"
  },
  {
    id: "daikin-split-inverter-ac-263",
    name: "Daikin Split Inverter AC 24000 BTU DA227Pro",
    nameFa: "کولر گازی اسپلیت اینورتر دایکین 24000 BTU مدل DA227Pro",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 86956487,
    description: "Split Inverter AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی اسپلیت اینورتر از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Streamer Air Purification",
      "Self-Cleaning Function",
      "Rapid Cooling Mode",
      "R32 Eco Refrigerant",
      "Intelligent Eye Sensor",
      "WiFi Smart Control"
    ],
    featuresFa: [
      "تصفیه هوای استریمر",
      "قابلیت خودتمیزکنی",
      "حالت سرمایش سریع",
      "گاز سردکننده R32",
      "سنسور هوشمند چشمی",
      "کنترل هوشمند WiFi"
    ],
    specs: {
      Capacity: "18000 BTU",
      SEER: "6.7 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.2,
    reviews: 1366,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA227Pro"
  },
  {
    id: "daikin-split-inverter-ac-264",
    name: "Daikin Split Inverter AC 9000 BTU DA169X",
    nameFa: "کولر گازی اسپلیت اینورتر دایکین 9000 BTU مدل DA169X",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 69700472,
    description: "Split Inverter AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی اسپلیت اینورتر از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Rapid Cooling Mode",
      "Self-Cleaning Function",
      "R32 Eco Refrigerant",
      "Ultra-Quiet Operation",
      "Intelligent Eye Sensor",
      "Streamer Air Purification"
    ],
    featuresFa: [
      "حالت سرمایش سریع",
      "قابلیت خودتمیزکنی",
      "گاز سردکننده R32",
      "عملکرد فوق‌العاده کم‌صدا",
      "سنسور هوشمند چشمی",
      "تصفیه هوای استریمر"
    ],
    specs: {
      Capacity: "30000 BTU",
      SEER: "7.6 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4,
    reviews: 1605,
    isNew: true,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA169X"
  },
  {
    id: "daikin-multi-split-system-265",
    name: "Daikin Multi-Split System 30000 BTU DA830S",
    nameFa: "سیستم مولتی‌اسپلیت دایکین 30000 BTU مدل DA830S",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 96040980,
    originalPrice: 116100000,
    description: "Multi-Split System from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سیستم مولتی‌اسپلیت از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Self-Cleaning Function",
      "Ultra-Quiet Operation",
      "Streamer Air Purification",
      "WiFi Smart Control",
      "R32 Eco Refrigerant",
      "Inverter Technology"
    ],
    featuresFa: [
      "قابلیت خودتمیزکنی",
      "عملکرد فوق‌العاده کم‌صدا",
      "تصفیه هوای استریمر",
      "کنترل هوشمند WiFi",
      "گاز سردکننده R32",
      "فناوری اینورتر"
    ],
    specs: {
      Capacity: "9000 BTU",
      SEER: "8.4 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80",
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.7,
    reviews: 213,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA830S"
  },
  {
    id: "daikin-window-ac-266",
    name: "Daikin Window AC 24000 BTU DA639S",
    nameFa: "کولر گازی پنجره‌ای دایکین 24000 BTU مدل DA639S",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 134999413,
    description: "Window AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پنجره‌ای از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "R32 Eco Refrigerant",
      "Self-Cleaning Function",
      "Streamer Air Purification",
      "WiFi Smart Control",
      "Inverter Technology",
      "Ultra-Quiet Operation"
    ],
    featuresFa: [
      "گاز سردکننده R32",
      "قابلیت خودتمیزکنی",
      "تصفیه هوای استریمر",
      "کنترل هوشمند WiFi",
      "فناوری اینورتر",
      "عملکرد فوق‌العاده کم‌صدا"
    ],
    specs: {
      Capacity: "30000 BTU",
      SEER: "7.7 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80",
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.7,
    reviews: 3022,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA639S"
  },
  {
    id: "daikin-window-ac-267",
    name: "Daikin Window AC 12000 BTU DA373Neo",
    nameFa: "کولر گازی پنجره‌ای دایکین 12000 BTU مدل DA373Neo",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 103122325,
    description: "Window AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پنجره‌ای از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Inverter Technology",
      "Rapid Cooling Mode",
      "WiFi Smart Control",
      "Ultra-Quiet Operation",
      "Streamer Air Purification",
      "R32 Eco Refrigerant"
    ],
    featuresFa: [
      "فناوری اینورتر",
      "حالت سرمایش سریع",
      "کنترل هوشمند WiFi",
      "عملکرد فوق‌العاده کم‌صدا",
      "تصفیه هوای استریمر",
      "گاز سردکننده R32"
    ],
    specs: {
      Capacity: "12000 BTU",
      SEER: "6.7 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80",
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.2,
    reviews: 1870,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA373Neo"
  },
  {
    id: "daikin-split-inverter-ac-268",
    name: "Daikin Split Inverter AC 30000 BTU DA467Neo",
    nameFa: "کولر گازی اسپلیت اینورتر دایکین 30000 BTU مدل DA467Neo",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 61269627,
    description: "Split Inverter AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی اسپلیت اینورتر از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Ultra-Quiet Operation",
      "Streamer Air Purification",
      "Rapid Cooling Mode",
      "Self-Cleaning Function",
      "Inverter Technology",
      "Intelligent Eye Sensor"
    ],
    featuresFa: [
      "عملکرد فوق‌العاده کم‌صدا",
      "تصفیه هوای استریمر",
      "حالت سرمایش سریع",
      "قابلیت خودتمیزکنی",
      "فناوری اینورتر",
      "سنسور هوشمند چشمی"
    ],
    specs: {
      Capacity: "18000 BTU",
      SEER: "8.8 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.6,
    reviews: 1563,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA467Neo"
  },
  {
    id: "daikin-window-ac-269",
    name: "Daikin Window AC 18000 BTU DA415X",
    nameFa: "کولر گازی پنجره‌ای دایکین 18000 BTU مدل DA415X",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 112724835,
    description: "Window AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پنجره‌ای از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "R32 Eco Refrigerant",
      "Intelligent Eye Sensor",
      "Streamer Air Purification",
      "WiFi Smart Control",
      "Inverter Technology",
      "Self-Cleaning Function"
    ],
    featuresFa: [
      "گاز سردکننده R32",
      "سنسور هوشمند چشمی",
      "تصفیه هوای استریمر",
      "کنترل هوشمند WiFi",
      "فناوری اینورتر",
      "قابلیت خودتمیزکنی"
    ],
    specs: {
      Capacity: "30000 BTU",
      SEER: "7.3 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80",
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.4,
    reviews: 477,
    isBestseller: true,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA415X"
  },
  {
    id: "daikin-window-ac-270",
    name: "Daikin Window AC 9000 BTU DA309Pro",
    nameFa: "کولر گازی پنجره‌ای دایکین 9000 BTU مدل DA309Pro",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 74905728,
    description: "Window AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پنجره‌ای از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Intelligent Eye Sensor",
      "Ultra-Quiet Operation",
      "Rapid Cooling Mode",
      "Streamer Air Purification",
      "Inverter Technology",
      "R32 Eco Refrigerant"
    ],
    featuresFa: [
      "سنسور هوشمند چشمی",
      "عملکرد فوق‌العاده کم‌صدا",
      "حالت سرمایش سریع",
      "تصفیه هوای استریمر",
      "فناوری اینورتر",
      "گاز سردکننده R32"
    ],
    specs: {
      Capacity: "12000 BTU",
      SEER: "6.4 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.7,
    reviews: 1267,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA309Pro"
  },
  {
    id: "daikin-window-ac-271",
    name: "Daikin Window AC 12000 BTU DA190S",
    nameFa: "کولر گازی پنجره‌ای دایکین 12000 BTU مدل DA190S",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 89651340,
    description: "Window AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پنجره‌ای از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Intelligent Eye Sensor",
      "Rapid Cooling Mode",
      "WiFi Smart Control",
      "R32 Eco Refrigerant",
      "Inverter Technology",
      "Self-Cleaning Function"
    ],
    featuresFa: [
      "سنسور هوشمند چشمی",
      "حالت سرمایش سریع",
      "کنترل هوشمند WiFi",
      "گاز سردکننده R32",
      "فناوری اینورتر",
      "قابلیت خودتمیزکنی"
    ],
    specs: {
      Capacity: "12000 BTU",
      SEER: "6.8 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80",
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.5,
    reviews: 498,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA190S"
  },
  {
    id: "daikin-portable-ac-272",
    name: "Daikin Portable AC 12000 BTU DA831Pro",
    nameFa: "کولر گازی پرتابل دایکین 12000 BTU مدل DA831Pro",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 85268695,
    description: "Portable AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پرتابل از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Ultra-Quiet Operation",
      "R32 Eco Refrigerant",
      "WiFi Smart Control",
      "Self-Cleaning Function",
      "Intelligent Eye Sensor",
      "Inverter Technology"
    ],
    featuresFa: [
      "عملکرد فوق‌العاده کم‌صدا",
      "گاز سردکننده R32",
      "کنترل هوشمند WiFi",
      "قابلیت خودتمیزکنی",
      "سنسور هوشمند چشمی",
      "فناوری اینورتر"
    ],
    specs: {
      Capacity: "24000 BTU",
      SEER: "6.7 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80",
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.2,
    reviews: 2491,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA831Pro"
  },
  {
    id: "daikin-split-inverter-ac-273",
    name: "Daikin Split Inverter AC 9000 BTU DA940Neo",
    nameFa: "کولر گازی اسپلیت اینورتر دایکین 9000 BTU مدل DA940Neo",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 88656264,
    description: "Split Inverter AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی اسپلیت اینورتر از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Ultra-Quiet Operation",
      "Intelligent Eye Sensor",
      "R32 Eco Refrigerant",
      "WiFi Smart Control",
      "Self-Cleaning Function",
      "Rapid Cooling Mode"
    ],
    featuresFa: [
      "عملکرد فوق‌العاده کم‌صدا",
      "سنسور هوشمند چشمی",
      "گاز سردکننده R32",
      "کنترل هوشمند WiFi",
      "قابلیت خودتمیزکنی",
      "حالت سرمایش سریع"
    ],
    specs: {
      Capacity: "24000 BTU",
      SEER: "8 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80",
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.9,
    reviews: 2986,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA940Neo"
  },
  {
    id: "daikin-multi-split-system-274",
    name: "Daikin Multi-Split System 9000 BTU DA398Plus",
    nameFa: "سیستم مولتی‌اسپلیت دایکین 9000 BTU مدل DA398Plus",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 60183064,
    description: "Multi-Split System from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سیستم مولتی‌اسپلیت از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Inverter Technology",
      "Self-Cleaning Function",
      "R32 Eco Refrigerant",
      "Intelligent Eye Sensor",
      "Ultra-Quiet Operation",
      "Rapid Cooling Mode"
    ],
    featuresFa: [
      "فناوری اینورتر",
      "قابلیت خودتمیزکنی",
      "گاز سردکننده R32",
      "سنسور هوشمند چشمی",
      "عملکرد فوق‌العاده کم‌صدا",
      "حالت سرمایش سریع"
    ],
    specs: {
      Capacity: "24000 BTU",
      SEER: "8.4 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.9,
    reviews: 2130,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA398Plus"
  },
  {
    id: "daikin-multi-split-system-275",
    name: "Daikin Multi-Split System 30000 BTU DA605X",
    nameFa: "سیستم مولتی‌اسپلیت دایکین 30000 BTU مدل DA605X",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 70717492,
    description: "Multi-Split System from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سیستم مولتی‌اسپلیت از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Intelligent Eye Sensor",
      "Rapid Cooling Mode",
      "Streamer Air Purification",
      "R32 Eco Refrigerant",
      "WiFi Smart Control",
      "Inverter Technology"
    ],
    featuresFa: [
      "سنسور هوشمند چشمی",
      "حالت سرمایش سریع",
      "تصفیه هوای استریمر",
      "گاز سردکننده R32",
      "کنترل هوشمند WiFi",
      "فناوری اینورتر"
    ],
    specs: {
      Capacity: "30000 BTU",
      SEER: "8.6 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80",
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.7,
    reviews: 2679,
    badge: "Popular",
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA605X"
  },
  {
    id: "daikin-split-inverter-ac-276",
    name: "Daikin Split Inverter AC 9000 BTU DA145",
    nameFa: "کولر گازی اسپلیت اینورتر دایکین 9000 BTU مدل DA145",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 57172347,
    description: "Split Inverter AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی اسپلیت اینورتر از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "WiFi Smart Control",
      "Self-Cleaning Function",
      "Rapid Cooling Mode",
      "Streamer Air Purification",
      "R32 Eco Refrigerant",
      "Ultra-Quiet Operation"
    ],
    featuresFa: [
      "کنترل هوشمند WiFi",
      "قابلیت خودتمیزکنی",
      "حالت سرمایش سریع",
      "تصفیه هوای استریمر",
      "گاز سردکننده R32",
      "عملکرد فوق‌العاده کم‌صدا"
    ],
    specs: {
      Capacity: "30000 BTU",
      SEER: "8.8 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.9,
    reviews: 1433,
    isBestseller: true,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA145"
  },
  {
    id: "daikin-portable-ac-277",
    name: "Daikin Portable AC 18000 BTU DA798Plus",
    nameFa: "کولر گازی پرتابل دایکین 18000 BTU مدل DA798Plus",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 105246481,
    originalPrice: 127200000,
    description: "Portable AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پرتابل از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "R32 Eco Refrigerant",
      "Streamer Air Purification",
      "Rapid Cooling Mode",
      "Ultra-Quiet Operation",
      "Intelligent Eye Sensor",
      "Inverter Technology"
    ],
    featuresFa: [
      "گاز سردکننده R32",
      "تصفیه هوای استریمر",
      "حالت سرمایش سریع",
      "عملکرد فوق‌العاده کم‌صدا",
      "سنسور هوشمند چشمی",
      "فناوری اینورتر"
    ],
    specs: {
      Capacity: "24000 BTU",
      SEER: "6.1 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.6,
    reviews: 2205,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA798Plus"
  },
  {
    id: "daikin-window-ac-278",
    name: "Daikin Window AC 12000 BTU DA770Plus",
    nameFa: "کولر گازی پنجره‌ای دایکین 12000 BTU مدل DA770Plus",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 72589549,
    originalPrice: 87600000,
    description: "Window AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پنجره‌ای از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Self-Cleaning Function",
      "WiFi Smart Control",
      "Intelligent Eye Sensor",
      "R32 Eco Refrigerant",
      "Rapid Cooling Mode",
      "Inverter Technology"
    ],
    featuresFa: [
      "قابلیت خودتمیزکنی",
      "کنترل هوشمند WiFi",
      "سنسور هوشمند چشمی",
      "گاز سردکننده R32",
      "حالت سرمایش سریع",
      "فناوری اینورتر"
    ],
    specs: {
      Capacity: "9000 BTU",
      SEER: "8.6 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80",
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.7,
    reviews: 2368,
    isBestseller: true,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA770Plus"
  },
  {
    id: "daikin-split-inverter-ac-279",
    name: "Daikin Split Inverter AC 24000 BTU DA458Plus",
    nameFa: "کولر گازی اسپلیت اینورتر دایکین 24000 BTU مدل DA458Plus",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 115328533,
    description: "Split Inverter AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی اسپلیت اینورتر از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Intelligent Eye Sensor",
      "WiFi Smart Control",
      "Inverter Technology",
      "Streamer Air Purification",
      "Self-Cleaning Function",
      "R32 Eco Refrigerant"
    ],
    featuresFa: [
      "سنسور هوشمند چشمی",
      "کنترل هوشمند WiFi",
      "فناوری اینورتر",
      "تصفیه هوای استریمر",
      "قابلیت خودتمیزکنی",
      "گاز سردکننده R32"
    ],
    specs: {
      Capacity: "12000 BTU",
      SEER: "8.9 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.4,
    reviews: 563,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA458Plus"
  },
  {
    id: "daikin-split-inverter-ac-280",
    name: "Daikin Split Inverter AC 24000 BTU DA774Pro",
    nameFa: "کولر گازی اسپلیت اینورتر دایکین 24000 BTU مدل DA774Pro",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 118193664,
    description: "Split Inverter AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی اسپلیت اینورتر از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Streamer Air Purification",
      "Rapid Cooling Mode",
      "Intelligent Eye Sensor",
      "R32 Eco Refrigerant",
      "Ultra-Quiet Operation",
      "WiFi Smart Control"
    ],
    featuresFa: [
      "تصفیه هوای استریمر",
      "حالت سرمایش سریع",
      "سنسور هوشمند چشمی",
      "گاز سردکننده R32",
      "عملکرد فوق‌العاده کم‌صدا",
      "کنترل هوشمند WiFi"
    ],
    specs: {
      Capacity: "18000 BTU",
      SEER: "6.5 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80",
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.3,
    reviews: 724,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA774Pro"
  },
  {
    id: "daikin-window-ac-281",
    name: "Daikin Window AC 24000 BTU DA344Pro",
    nameFa: "کولر گازی پنجره‌ای دایکین 24000 BTU مدل DA344Pro",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 74406931,
    description: "Window AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پنجره‌ای از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Ultra-Quiet Operation",
      "Self-Cleaning Function",
      "Rapid Cooling Mode",
      "Streamer Air Purification",
      "Inverter Technology",
      "WiFi Smart Control"
    ],
    featuresFa: [
      "عملکرد فوق‌العاده کم‌صدا",
      "قابلیت خودتمیزکنی",
      "حالت سرمایش سریع",
      "تصفیه هوای استریمر",
      "فناوری اینورتر",
      "کنترل هوشمند WiFi"
    ],
    specs: {
      Capacity: "24000 BTU",
      SEER: "6.8 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80",
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4,
    reviews: 248,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA344Pro"
  },
  {
    id: "daikin-portable-ac-282",
    name: "Daikin Portable AC 24000 BTU DA986Pro",
    nameFa: "کولر گازی پرتابل دایکین 24000 BTU مدل DA986Pro",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 122511298,
    originalPrice: 145400000,
    description: "Portable AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پرتابل از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Self-Cleaning Function",
      "Ultra-Quiet Operation",
      "Rapid Cooling Mode",
      "R32 Eco Refrigerant",
      "Intelligent Eye Sensor",
      "WiFi Smart Control"
    ],
    featuresFa: [
      "قابلیت خودتمیزکنی",
      "عملکرد فوق‌العاده کم‌صدا",
      "حالت سرمایش سریع",
      "گاز سردکننده R32",
      "سنسور هوشمند چشمی",
      "کنترل هوشمند WiFi"
    ],
    specs: {
      Capacity: "12000 BTU",
      SEER: "7.2 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.2,
    reviews: 698,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA986Pro"
  },
  {
    id: "daikin-multi-split-system-283",
    name: "Daikin Multi-Split System 12000 BTU DA654Neo",
    nameFa: "سیستم مولتی‌اسپلیت دایکین 12000 BTU مدل DA654Neo",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 61039516,
    description: "Multi-Split System from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سیستم مولتی‌اسپلیت از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Streamer Air Purification",
      "Inverter Technology",
      "Ultra-Quiet Operation",
      "Self-Cleaning Function",
      "R32 Eco Refrigerant",
      "Intelligent Eye Sensor"
    ],
    featuresFa: [
      "تصفیه هوای استریمر",
      "فناوری اینورتر",
      "عملکرد فوق‌العاده کم‌صدا",
      "قابلیت خودتمیزکنی",
      "گاز سردکننده R32",
      "سنسور هوشمند چشمی"
    ],
    specs: {
      Capacity: "9000 BTU",
      SEER: "7.9 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80",
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.9,
    reviews: 891,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA654Neo"
  },
  {
    id: "daikin-portable-ac-284",
    name: "Daikin Portable AC 24000 BTU DA235Neo",
    nameFa: "کولر گازی پرتابل دایکین 24000 BTU مدل DA235Neo",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 102240364,
    description: "Portable AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پرتابل از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Rapid Cooling Mode",
      "Ultra-Quiet Operation",
      "Inverter Technology",
      "Self-Cleaning Function",
      "R32 Eco Refrigerant",
      "WiFi Smart Control"
    ],
    featuresFa: [
      "حالت سرمایش سریع",
      "عملکرد فوق‌العاده کم‌صدا",
      "فناوری اینورتر",
      "قابلیت خودتمیزکنی",
      "گاز سردکننده R32",
      "کنترل هوشمند WiFi"
    ],
    specs: {
      Capacity: "30000 BTU",
      SEER: "6.2 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80",
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.7,
    reviews: 809,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA235Neo"
  },
  {
    id: "daikin-multi-split-system-285",
    name: "Daikin Multi-Split System 12000 BTU DA362S",
    nameFa: "سیستم مولتی‌اسپلیت دایکین 12000 BTU مدل DA362S",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 121170249,
    description: "Multi-Split System from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سیستم مولتی‌اسپلیت از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Rapid Cooling Mode",
      "Ultra-Quiet Operation",
      "Self-Cleaning Function",
      "WiFi Smart Control",
      "Inverter Technology",
      "Streamer Air Purification"
    ],
    featuresFa: [
      "حالت سرمایش سریع",
      "عملکرد فوق‌العاده کم‌صدا",
      "قابلیت خودتمیزکنی",
      "کنترل هوشمند WiFi",
      "فناوری اینورتر",
      "تصفیه هوای استریمر"
    ],
    specs: {
      Capacity: "24000 BTU",
      SEER: "8.4 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80",
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.5,
    reviews: 1255,
    isNew: true,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA362S"
  },
  {
    id: "daikin-window-ac-286",
    name: "Daikin Window AC 30000 BTU DA280",
    nameFa: "کولر گازی پنجره‌ای دایکین 30000 BTU مدل DA280",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 72489926,
    description: "Window AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پنجره‌ای از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Streamer Air Purification",
      "Intelligent Eye Sensor",
      "Ultra-Quiet Operation",
      "Self-Cleaning Function",
      "Rapid Cooling Mode",
      "R32 Eco Refrigerant"
    ],
    featuresFa: [
      "تصفیه هوای استریمر",
      "سنسور هوشمند چشمی",
      "عملکرد فوق‌العاده کم‌صدا",
      "قابلیت خودتمیزکنی",
      "حالت سرمایش سریع",
      "گاز سردکننده R32"
    ],
    specs: {
      Capacity: "9000 BTU",
      SEER: "6.3 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80",
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.8,
    reviews: 1892,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA280"
  },
  {
    id: "daikin-split-inverter-ac-287",
    name: "Daikin Split Inverter AC 30000 BTU DA836Neo",
    nameFa: "کولر گازی اسپلیت اینورتر دایکین 30000 BTU مدل DA836Neo",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 72364539,
    description: "Split Inverter AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی اسپلیت اینورتر از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Intelligent Eye Sensor",
      "WiFi Smart Control",
      "Ultra-Quiet Operation",
      "Inverter Technology",
      "R32 Eco Refrigerant",
      "Self-Cleaning Function"
    ],
    featuresFa: [
      "سنسور هوشمند چشمی",
      "کنترل هوشمند WiFi",
      "عملکرد فوق‌العاده کم‌صدا",
      "فناوری اینورتر",
      "گاز سردکننده R32",
      "قابلیت خودتمیزکنی"
    ],
    specs: {
      Capacity: "30000 BTU",
      SEER: "6.2 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80",
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.2,
    reviews: 1649,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA836Neo"
  },
  {
    id: "daikin-window-ac-288",
    name: "Daikin Window AC 30000 BTU DA747X",
    nameFa: "کولر گازی پنجره‌ای دایکین 30000 BTU مدل DA747X",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 78365522,
    description: "Window AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پنجره‌ای از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Streamer Air Purification",
      "Inverter Technology",
      "R32 Eco Refrigerant",
      "Rapid Cooling Mode",
      "Self-Cleaning Function",
      "WiFi Smart Control"
    ],
    featuresFa: [
      "تصفیه هوای استریمر",
      "فناوری اینورتر",
      "گاز سردکننده R32",
      "حالت سرمایش سریع",
      "قابلیت خودتمیزکنی",
      "کنترل هوشمند WiFi"
    ],
    specs: {
      Capacity: "18000 BTU",
      SEER: "6.5 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4,
    reviews: 2264,
    isBestseller: true,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA747X"
  },
  {
    id: "daikin-multi-split-system-289",
    name: "Daikin Multi-Split System 30000 BTU DA533Pro",
    nameFa: "سیستم مولتی‌اسپلیت دایکین 30000 BTU مدل DA533Pro",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 72781922,
    originalPrice: 85800000,
    description: "Multi-Split System from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سیستم مولتی‌اسپلیت از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Rapid Cooling Mode",
      "R32 Eco Refrigerant",
      "Inverter Technology",
      "Intelligent Eye Sensor",
      "WiFi Smart Control",
      "Streamer Air Purification"
    ],
    featuresFa: [
      "حالت سرمایش سریع",
      "گاز سردکننده R32",
      "فناوری اینورتر",
      "سنسور هوشمند چشمی",
      "کنترل هوشمند WiFi",
      "تصفیه هوای استریمر"
    ],
    specs: {
      Capacity: "12000 BTU",
      SEER: "6.5 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80",
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.4,
    reviews: 1031,
    badge: "Premium",
    isNew: true,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA533Pro"
  },
  {
    id: "daikin-window-ac-290",
    name: "Daikin Window AC 9000 BTU DA354Neo",
    nameFa: "کولر گازی پنجره‌ای دایکین 9000 BTU مدل DA354Neo",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 94078731,
    description: "Window AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پنجره‌ای از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Inverter Technology",
      "Rapid Cooling Mode",
      "Self-Cleaning Function",
      "Streamer Air Purification",
      "Ultra-Quiet Operation",
      "WiFi Smart Control"
    ],
    featuresFa: [
      "فناوری اینورتر",
      "حالت سرمایش سریع",
      "قابلیت خودتمیزکنی",
      "تصفیه هوای استریمر",
      "عملکرد فوق‌العاده کم‌صدا",
      "کنترل هوشمند WiFi"
    ],
    specs: {
      Capacity: "30000 BTU",
      SEER: "6.6 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80",
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.7,
    reviews: 900,
    isNew: true,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA354Neo"
  },
  {
    id: "daikin-multi-split-system-291",
    name: "Daikin Multi-Split System 18000 BTU DA882Pro",
    nameFa: "سیستم مولتی‌اسپلیت دایکین 18000 BTU مدل DA882Pro",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 126431627,
    originalPrice: 150900000,
    description: "Multi-Split System from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سیستم مولتی‌اسپلیت از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "WiFi Smart Control",
      "Intelligent Eye Sensor",
      "Inverter Technology",
      "Ultra-Quiet Operation",
      "Self-Cleaning Function",
      "Streamer Air Purification"
    ],
    featuresFa: [
      "کنترل هوشمند WiFi",
      "سنسور هوشمند چشمی",
      "فناوری اینورتر",
      "عملکرد فوق‌العاده کم‌صدا",
      "قابلیت خودتمیزکنی",
      "تصفیه هوای استریمر"
    ],
    specs: {
      Capacity: "24000 BTU",
      SEER: "7.7 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.1,
    reviews: 2971,
    isBestseller: true,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA882Pro"
  },
  {
    id: "daikin-portable-ac-292",
    name: "Daikin Portable AC 24000 BTU DA114Plus",
    nameFa: "کولر گازی پرتابل دایکین 24000 BTU مدل DA114Plus",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 80303012,
    description: "Portable AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پرتابل از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Rapid Cooling Mode",
      "Self-Cleaning Function",
      "R32 Eco Refrigerant",
      "Inverter Technology",
      "Streamer Air Purification",
      "WiFi Smart Control"
    ],
    featuresFa: [
      "حالت سرمایش سریع",
      "قابلیت خودتمیزکنی",
      "گاز سردکننده R32",
      "فناوری اینورتر",
      "تصفیه هوای استریمر",
      "کنترل هوشمند WiFi"
    ],
    specs: {
      Capacity: "30000 BTU",
      SEER: "7.7 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80",
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.1,
    reviews: 639,
    badge: "Popular",
    isNew: true,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA114Plus"
  },
  {
    id: "daikin-split-inverter-ac-293",
    name: "Daikin Split Inverter AC 18000 BTU DA674X",
    nameFa: "کولر گازی اسپلیت اینورتر دایکین 18000 BTU مدل DA674X",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 89452596,
    description: "Split Inverter AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی اسپلیت اینورتر از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Self-Cleaning Function",
      "Intelligent Eye Sensor",
      "Rapid Cooling Mode",
      "R32 Eco Refrigerant",
      "Inverter Technology",
      "WiFi Smart Control"
    ],
    featuresFa: [
      "قابلیت خودتمیزکنی",
      "سنسور هوشمند چشمی",
      "حالت سرمایش سریع",
      "گاز سردکننده R32",
      "فناوری اینورتر",
      "کنترل هوشمند WiFi"
    ],
    specs: {
      Capacity: "18000 BTU",
      SEER: "8.7 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80",
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.8,
    reviews: 1253,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA674X"
  },
  {
    id: "daikin-multi-split-system-294",
    name: "Daikin Multi-Split System 9000 BTU DA260",
    nameFa: "سیستم مولتی‌اسپلیت دایکین 9000 BTU مدل DA260",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 44691239,
    description: "Multi-Split System from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سیستم مولتی‌اسپلیت از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "R32 Eco Refrigerant",
      "Self-Cleaning Function",
      "Ultra-Quiet Operation",
      "Streamer Air Purification",
      "Inverter Technology",
      "WiFi Smart Control"
    ],
    featuresFa: [
      "گاز سردکننده R32",
      "قابلیت خودتمیزکنی",
      "عملکرد فوق‌العاده کم‌صدا",
      "تصفیه هوای استریمر",
      "فناوری اینورتر",
      "کنترل هوشمند WiFi"
    ],
    specs: {
      Capacity: "24000 BTU",
      SEER: "7.3 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.3,
    reviews: 3145,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA260"
  },
  {
    id: "daikin-split-inverter-ac-295",
    name: "Daikin Split Inverter AC 12000 BTU DA437Neo",
    nameFa: "کولر گازی اسپلیت اینورتر دایکین 12000 BTU مدل DA437Neo",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 74368816,
    description: "Split Inverter AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی اسپلیت اینورتر از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Self-Cleaning Function",
      "R32 Eco Refrigerant",
      "Intelligent Eye Sensor",
      "Inverter Technology",
      "WiFi Smart Control",
      "Ultra-Quiet Operation"
    ],
    featuresFa: [
      "قابلیت خودتمیزکنی",
      "گاز سردکننده R32",
      "سنسور هوشمند چشمی",
      "فناوری اینورتر",
      "کنترل هوشمند WiFi",
      "عملکرد فوق‌العاده کم‌صدا"
    ],
    specs: {
      Capacity: "30000 BTU",
      SEER: "7.8 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.4,
    reviews: 2212,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA437Neo"
  },
  {
    id: "daikin-window-ac-296",
    name: "Daikin Window AC 12000 BTU DA949Neo",
    nameFa: "کولر گازی پنجره‌ای دایکین 12000 BTU مدل DA949Neo",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 132076223,
    originalPrice: 167800000,
    description: "Window AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پنجره‌ای از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "R32 Eco Refrigerant",
      "Streamer Air Purification",
      "Self-Cleaning Function",
      "Intelligent Eye Sensor",
      "WiFi Smart Control",
      "Ultra-Quiet Operation"
    ],
    featuresFa: [
      "گاز سردکننده R32",
      "تصفیه هوای استریمر",
      "قابلیت خودتمیزکنی",
      "سنسور هوشمند چشمی",
      "کنترل هوشمند WiFi",
      "عملکرد فوق‌العاده کم‌صدا"
    ],
    specs: {
      Capacity: "30000 BTU",
      SEER: "6.8 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80",
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.1,
    reviews: 2684,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA949Neo"
  },
  {
    id: "daikin-window-ac-297",
    name: "Daikin Window AC 30000 BTU DA221Pro",
    nameFa: "کولر گازی پنجره‌ای دایکین 30000 BTU مدل DA221Pro",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 48079495,
    description: "Window AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پنجره‌ای از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Ultra-Quiet Operation",
      "Self-Cleaning Function",
      "WiFi Smart Control",
      "Inverter Technology",
      "Rapid Cooling Mode",
      "Streamer Air Purification"
    ],
    featuresFa: [
      "عملکرد فوق‌العاده کم‌صدا",
      "قابلیت خودتمیزکنی",
      "کنترل هوشمند WiFi",
      "فناوری اینورتر",
      "حالت سرمایش سریع",
      "تصفیه هوای استریمر"
    ],
    specs: {
      Capacity: "18000 BTU",
      SEER: "6.5 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80",
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.5,
    reviews: 3143,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA221Pro"
  },
  {
    id: "daikin-window-ac-298",
    name: "Daikin Window AC 12000 BTU DA577Pro",
    nameFa: "کولر گازی پنجره‌ای دایکین 12000 BTU مدل DA577Pro",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 94688276,
    description: "Window AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پنجره‌ای از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "R32 Eco Refrigerant",
      "Rapid Cooling Mode",
      "Ultra-Quiet Operation",
      "Streamer Air Purification",
      "Inverter Technology",
      "Intelligent Eye Sensor"
    ],
    featuresFa: [
      "گاز سردکننده R32",
      "حالت سرمایش سریع",
      "عملکرد فوق‌العاده کم‌صدا",
      "تصفیه هوای استریمر",
      "فناوری اینورتر",
      "سنسور هوشمند چشمی"
    ],
    specs: {
      Capacity: "30000 BTU",
      SEER: "8.1 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80",
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.4,
    reviews: 1373,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA577Pro"
  },
  {
    id: "daikin-window-ac-299",
    name: "Daikin Window AC 30000 BTU DA863S",
    nameFa: "کولر گازی پنجره‌ای دایکین 30000 BTU مدل DA863S",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 110075556,
    originalPrice: 141200000,
    description: "Window AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پنجره‌ای از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "WiFi Smart Control",
      "Inverter Technology",
      "Ultra-Quiet Operation",
      "Self-Cleaning Function",
      "R32 Eco Refrigerant",
      "Rapid Cooling Mode"
    ],
    featuresFa: [
      "کنترل هوشمند WiFi",
      "فناوری اینورتر",
      "عملکرد فوق‌العاده کم‌صدا",
      "قابلیت خودتمیزکنی",
      "گاز سردکننده R32",
      "حالت سرمایش سریع"
    ],
    specs: {
      Capacity: "18000 BTU",
      SEER: "6.8 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80",
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.2,
    reviews: 2922,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA863S"
  },
  {
    id: "daikin-split-inverter-ac-300",
    name: "Daikin Split Inverter AC 18000 BTU DA221Plus",
    nameFa: "کولر گازی اسپلیت اینورتر دایکین 18000 BTU مدل DA221Plus",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 57770328,
    originalPrice: 76500000,
    description: "Split Inverter AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی اسپلیت اینورتر از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Self-Cleaning Function",
      "R32 Eco Refrigerant",
      "Rapid Cooling Mode",
      "Ultra-Quiet Operation",
      "Intelligent Eye Sensor",
      "Streamer Air Purification"
    ],
    featuresFa: [
      "قابلیت خودتمیزکنی",
      "گاز سردکننده R32",
      "حالت سرمایش سریع",
      "عملکرد فوق‌العاده کم‌صدا",
      "سنسور هوشمند چشمی",
      "تصفیه هوای استریمر"
    ],
    specs: {
      Capacity: "9000 BTU",
      SEER: "8.2 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80",
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.9,
    reviews: 370,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA221Plus"
  },
  {
    id: "daikin-window-ac-301",
    name: "Daikin Window AC 12000 BTU DA600Pro",
    nameFa: "کولر گازی پنجره‌ای دایکین 12000 BTU مدل DA600Pro",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 73638196,
    description: "Window AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پنجره‌ای از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Inverter Technology",
      "Intelligent Eye Sensor",
      "Rapid Cooling Mode",
      "Streamer Air Purification",
      "R32 Eco Refrigerant",
      "Self-Cleaning Function"
    ],
    featuresFa: [
      "فناوری اینورتر",
      "سنسور هوشمند چشمی",
      "حالت سرمایش سریع",
      "تصفیه هوای استریمر",
      "گاز سردکننده R32",
      "قابلیت خودتمیزکنی"
    ],
    specs: {
      Capacity: "12000 BTU",
      SEER: "8.7 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.2,
    reviews: 2231,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA600Pro"
  },
  {
    id: "daikin-portable-ac-302",
    name: "Daikin Portable AC 24000 BTU DA783X",
    nameFa: "کولر گازی پرتابل دایکین 24000 BTU مدل DA783X",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 113956708,
    description: "Portable AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پرتابل از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Self-Cleaning Function",
      "Streamer Air Purification",
      "Inverter Technology",
      "WiFi Smart Control",
      "Ultra-Quiet Operation",
      "Rapid Cooling Mode"
    ],
    featuresFa: [
      "قابلیت خودتمیزکنی",
      "تصفیه هوای استریمر",
      "فناوری اینورتر",
      "کنترل هوشمند WiFi",
      "عملکرد فوق‌العاده کم‌صدا",
      "حالت سرمایش سریع"
    ],
    specs: {
      Capacity: "30000 BTU",
      SEER: "8.9 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.5,
    reviews: 2198,
    isBestseller: true,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA783X"
  },
  {
    id: "daikin-split-inverter-ac-303",
    name: "Daikin Split Inverter AC 18000 BTU DA302Pro",
    nameFa: "کولر گازی اسپلیت اینورتر دایکین 18000 BTU مدل DA302Pro",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 134045467,
    description: "Split Inverter AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی اسپلیت اینورتر از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Inverter Technology",
      "Streamer Air Purification",
      "Intelligent Eye Sensor",
      "Rapid Cooling Mode",
      "Ultra-Quiet Operation",
      "R32 Eco Refrigerant"
    ],
    featuresFa: [
      "فناوری اینورتر",
      "تصفیه هوای استریمر",
      "سنسور هوشمند چشمی",
      "حالت سرمایش سریع",
      "عملکرد فوق‌العاده کم‌صدا",
      "گاز سردکننده R32"
    ],
    specs: {
      Capacity: "9000 BTU",
      SEER: "6.1 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1631545308772-81a0e0a3a6eb?w=800&q=80",
      "https://images.unsplash.com/photo-1697302449094-e4a19c0e0f83?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4.6,
    reviews: 473,
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA302Pro"
  },
  {
    id: "daikin-window-ac-304",
    name: "Daikin Window AC 9000 BTU DA497S",
    nameFa: "کولر گازی پنجره‌ای دایکین 9000 BTU مدل DA497S",
    category: "Air Conditioners",
    categoryFa: "کولر گازی",
    price: 114511896,
    originalPrice: 147900000,
    description: "Window AC from Daikin, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "کولر گازی پنجره‌ای از برند دایکین، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Intelligent Eye Sensor",
      "WiFi Smart Control",
      "R32 Eco Refrigerant",
      "Streamer Air Purification",
      "Rapid Cooling Mode",
      "Inverter Technology"
    ],
    featuresFa: [
      "سنسور هوشمند چشمی",
      "کنترل هوشمند WiFi",
      "گاز سردکننده R32",
      "تصفیه هوای استریمر",
      "حالت سرمایش سریع",
      "فناوری اینورتر"
    ],
    specs: {
      Capacity: "30000 BTU",
      SEER: "8.6 (A+++)",
      Refrigerant: "R32 Eco",
      Warranty: "3 years official"
    },
    specsFa: {
      "ظرفیت": "BTU",
      SEER: "A+++",
      "گاز سردکننده": "R32",
      "گارانتی": "۳ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80",
      "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=800&q=80"
    ],
    colors: [
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      },
      {
        name: "Blackwood",
        nameFa: "مشکی چوبی",
        hex: "#2a2a2a"
      }
    ],
    rating: 4,
    reviews: 2270,
    badge: "Best Seller",
    brand: "Daikin",
    brandFa: "دایکین",
    model: "DA497S"
  },
  {
    id: "philips-food-processor-305",
    name: "Philips Food Processor PH826Plus",
    nameFa: "غذاساز فیلیپس مدل PH826Plus",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 12290208,
    description: "Food Processor from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "غذاساز از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Compact Footprint Design",
      "Rapid Air Technology",
      "Smart Preset Programs",
      "One-Touch Operation",
      "Dishwasher Safe Parts",
      "10-Speed Control"
    ],
    featuresFa: [
      "طراحی جمع‌وجور",
      "فناوری هوای سریع",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "عملکرد تک‌لمسی",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "کنترل ۱۰ سرعته"
    ],
    specs: {
      Power: "1483 Watt",
      Capacity: "6 L",
      Presets: "4 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.6,
    reviews: 3083,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH826Plus"
  },
  {
    id: "philips-microwave-oven-306",
    name: "Philips Microwave Oven PH499",
    nameFa: "مایکروویو فیلیپس مدل PH499",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 37902476,
    description: "Microwave Oven from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مایکروویو از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Preset Programs",
      "Companion App with Recipes",
      "Rapid Air Technology",
      "10-Speed Control",
      "Keep Warm Function",
      "One-Touch Operation"
    ],
    featuresFa: [
      "برنامه‌های هوشمند پیش‌تنظیم",
      "اپلیکیشن همراه با دستور غذا",
      "فناوری هوای سریع",
      "کنترل ۱۰ سرعته",
      "قابلیت Keep Warm",
      "عملکرد تک‌لمسی"
    ],
    specs: {
      Power: "2120 Watt",
      Capacity: "2.8 L",
      Presets: "6 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.1,
    reviews: 3132,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH499"
  },
  {
    id: "philips-stand-mixer-307",
    name: "Philips Stand Mixer PH255Pro",
    nameFa: "میکسر ایستاده فیلیپس مدل PH255Pro",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 29801170,
    description: "Stand Mixer from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "میکسر ایستاده از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Compact Footprint Design",
      "Companion App with Recipes",
      "Keep Warm Function",
      "Rapid Air Technology",
      "One-Touch Operation",
      "10-Speed Control"
    ],
    featuresFa: [
      "طراحی جمع‌وجور",
      "اپلیکیشن همراه با دستور غذا",
      "قابلیت Keep Warm",
      "فناوری هوای سریع",
      "عملکرد تک‌لمسی",
      "کنترل ۱۰ سرعته"
    ],
    specs: {
      Power: "2108 Watt",
      Capacity: "3.9 L",
      Presets: "3 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.1,
    reviews: 1916,
    isBestseller: true,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH255Pro"
  },
  {
    id: "philips-stand-mixer-308",
    name: "Philips Stand Mixer PH355Neo",
    nameFa: "میکسر ایستاده فیلیپس مدل PH355Neo",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 16153594,
    description: "Stand Mixer from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "میکسر ایستاده از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Rapid Air Technology",
      "Keep Warm Function",
      "One-Touch Operation",
      "10-Speed Control",
      "Smart Preset Programs",
      "Compact Footprint Design"
    ],
    featuresFa: [
      "فناوری هوای سریع",
      "قابلیت Keep Warm",
      "عملکرد تک‌لمسی",
      "کنترل ۱۰ سرعته",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "طراحی جمع‌وجور"
    ],
    specs: {
      Power: "919 Watt",
      Capacity: "2.6 L",
      Presets: "4 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.7,
    reviews: 2349,
    isNew: true,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH355Neo"
  },
  {
    id: "philips-coffee-maker-309",
    name: "Philips Coffee Maker PH541S",
    nameFa: "قهوه‌ساز فیلیپس مدل PH541S",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 9392310,
    description: "Coffee Maker from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "قهوه‌ساز از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Keep Warm Function",
      "Smart Preset Programs",
      "Dishwasher Safe Parts",
      "10-Speed Control",
      "Companion App with Recipes",
      "Rapid Air Technology"
    ],
    featuresFa: [
      "قابلیت Keep Warm",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "کنترل ۱۰ سرعته",
      "اپلیکیشن همراه با دستور غذا",
      "فناوری هوای سریع"
    ],
    specs: {
      Power: "436 Watt",
      Capacity: "7 L",
      Presets: "3 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.1,
    reviews: 395,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH541S"
  },
  {
    id: "philips-microwave-oven-310",
    name: "Philips Microwave Oven PH470Pro",
    nameFa: "مایکروویو فیلیپس مدل PH470Pro",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 21122395,
    description: "Microwave Oven from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مایکروویو از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Dishwasher Safe Parts",
      "Smart Preset Programs",
      "Compact Footprint Design",
      "One-Touch Operation",
      "10-Speed Control",
      "Rapid Air Technology"
    ],
    featuresFa: [
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "طراحی جمع‌وجور",
      "عملکرد تک‌لمسی",
      "کنترل ۱۰ سرعته",
      "فناوری هوای سریع"
    ],
    specs: {
      Power: "1115 Watt",
      Capacity: "2.7 L",
      Presets: "3 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.5,
    reviews: 2980,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH470Pro"
  },
  {
    id: "philips-food-processor-311",
    name: "Philips Food Processor PH607Plus",
    nameFa: "غذاساز فیلیپس مدل PH607Plus",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 20519295,
    description: "Food Processor from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "غذاساز از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Dishwasher Safe Parts",
      "Smart Preset Programs",
      "Keep Warm Function",
      "Compact Footprint Design",
      "Companion App with Recipes",
      "One-Touch Operation"
    ],
    featuresFa: [
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "قابلیت Keep Warm",
      "طراحی جمع‌وجور",
      "اپلیکیشن همراه با دستور غذا",
      "عملکرد تک‌لمسی"
    ],
    specs: {
      Power: "814 Watt",
      Capacity: "6.6 L",
      Presets: "5 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.7,
    reviews: 3121,
    badge: "Top Rated",
    isNew: true,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH607Plus"
  },
  {
    id: "philips-food-processor-312",
    name: "Philips Food Processor PH705Pro",
    nameFa: "غذاساز فیلیپس مدل PH705Pro",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 14937831,
    originalPrice: 18400000,
    description: "Food Processor from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "غذاساز از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Rapid Air Technology",
      "Smart Preset Programs",
      "Compact Footprint Design",
      "Dishwasher Safe Parts",
      "One-Touch Operation",
      "10-Speed Control"
    ],
    featuresFa: [
      "فناوری هوای سریع",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "طراحی جمع‌وجور",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "عملکرد تک‌لمسی",
      "کنترل ۱۰ سرعته"
    ],
    specs: {
      Power: "1229 Watt",
      Capacity: "5.8 L",
      Presets: "4 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.3,
    reviews: 742,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH705Pro"
  },
  {
    id: "philips-blender-313",
    name: "Philips Blender PH141S",
    nameFa: "مخلوط‌کن فیلیپس مدل PH141S",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 34584979,
    description: "Blender from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مخلوط‌کن از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Companion App with Recipes",
      "One-Touch Operation",
      "Compact Footprint Design",
      "Dishwasher Safe Parts",
      "Rapid Air Technology",
      "Keep Warm Function"
    ],
    featuresFa: [
      "اپلیکیشن همراه با دستور غذا",
      "عملکرد تک‌لمسی",
      "طراحی جمع‌وجور",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "فناوری هوای سریع",
      "قابلیت Keep Warm"
    ],
    specs: {
      Power: "646 Watt",
      Capacity: "4.1 L",
      Presets: "4 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.3,
    reviews: 1159,
    isBestseller: true,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH141S"
  },
  {
    id: "philips-microwave-oven-314",
    name: "Philips Microwave Oven PH932Pro",
    nameFa: "مایکروویو فیلیپس مدل PH932Pro",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 36398817,
    description: "Microwave Oven from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مایکروویو از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Companion App with Recipes",
      "Keep Warm Function",
      "10-Speed Control",
      "Rapid Air Technology",
      "Dishwasher Safe Parts",
      "One-Touch Operation"
    ],
    featuresFa: [
      "اپلیکیشن همراه با دستور غذا",
      "قابلیت Keep Warm",
      "کنترل ۱۰ سرعته",
      "فناوری هوای سریع",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "عملکرد تک‌لمسی"
    ],
    specs: {
      Power: "1837 Watt",
      Capacity: "2.2 L",
      Presets: "8 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.4,
    reviews: 678,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH932Pro"
  },
  {
    id: "philips-stand-mixer-315",
    name: "Philips Stand Mixer PH746S",
    nameFa: "میکسر ایستاده فیلیپس مدل PH746S",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 16245025,
    originalPrice: 21600000,
    description: "Stand Mixer from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "میکسر ایستاده از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Preset Programs",
      "10-Speed Control",
      "One-Touch Operation",
      "Compact Footprint Design",
      "Dishwasher Safe Parts",
      "Rapid Air Technology"
    ],
    featuresFa: [
      "برنامه‌های هوشمند پیش‌تنظیم",
      "کنترل ۱۰ سرعته",
      "عملکرد تک‌لمسی",
      "طراحی جمع‌وجور",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "فناوری هوای سریع"
    ],
    specs: {
      Power: "959 Watt",
      Capacity: "2.7 L",
      Presets: "8 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.1,
    reviews: 899,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH746S"
  },
  {
    id: "philips-food-processor-316",
    name: "Philips Food Processor PH821Pro",
    nameFa: "غذاساز فیلیپس مدل PH821Pro",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 17596855,
    description: "Food Processor from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "غذاساز از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Keep Warm Function",
      "Companion App with Recipes",
      "Smart Preset Programs",
      "Compact Footprint Design",
      "10-Speed Control",
      "Dishwasher Safe Parts"
    ],
    featuresFa: [
      "قابلیت Keep Warm",
      "اپلیکیشن همراه با دستور غذا",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "طراحی جمع‌وجور",
      "کنترل ۱۰ سرعته",
      "قطعات قابل شستشو در ماشین ظرفشویی"
    ],
    specs: {
      Power: "1920 Watt",
      Capacity: "1.1 L",
      Presets: "7 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4,
    reviews: 2892,
    badge: "Premium",
    isNew: true,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH821Pro"
  },
  {
    id: "philips-microwave-oven-317",
    name: "Philips Microwave Oven PH120Neo",
    nameFa: "مایکروویو فیلیپس مدل PH120Neo",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 33092447,
    description: "Microwave Oven from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مایکروویو از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Rapid Air Technology",
      "Dishwasher Safe Parts",
      "Keep Warm Function",
      "Compact Footprint Design",
      "Companion App with Recipes",
      "One-Touch Operation"
    ],
    featuresFa: [
      "فناوری هوای سریع",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "قابلیت Keep Warm",
      "طراحی جمع‌وجور",
      "اپلیکیشن همراه با دستور غذا",
      "عملکرد تک‌لمسی"
    ],
    specs: {
      Power: "1103 Watt",
      Capacity: "7.2 L",
      Presets: "7 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.1,
    reviews: 3175,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH120Neo"
  },
  {
    id: "philips-blender-318",
    name: "Philips Blender PH108S",
    nameFa: "مخلوط‌کن فیلیپس مدل PH108S",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 20840301,
    originalPrice: 23600000,
    description: "Blender from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مخلوط‌کن از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Companion App with Recipes",
      "Rapid Air Technology",
      "Keep Warm Function",
      "Dishwasher Safe Parts",
      "10-Speed Control",
      "Smart Preset Programs"
    ],
    featuresFa: [
      "اپلیکیشن همراه با دستور غذا",
      "فناوری هوای سریع",
      "قابلیت Keep Warm",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "کنترل ۱۰ سرعته",
      "برنامه‌های هوشمند پیش‌تنظیم"
    ],
    specs: {
      Power: "663 Watt",
      Capacity: "1.2 L",
      Presets: "5 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.4,
    reviews: 1789,
    isNew: true,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH108S"
  },
  {
    id: "philips-microwave-oven-319",
    name: "Philips Microwave Oven PH458",
    nameFa: "مایکروویو فیلیپس مدل PH458",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 29014012,
    description: "Microwave Oven from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مایکروویو از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Keep Warm Function",
      "Dishwasher Safe Parts",
      "Compact Footprint Design",
      "One-Touch Operation",
      "10-Speed Control",
      "Smart Preset Programs"
    ],
    featuresFa: [
      "قابلیت Keep Warm",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "طراحی جمع‌وجور",
      "عملکرد تک‌لمسی",
      "کنترل ۱۰ سرعته",
      "برنامه‌های هوشمند پیش‌تنظیم"
    ],
    specs: {
      Power: "1318 Watt",
      Capacity: "3.4 L",
      Presets: "8 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.3,
    reviews: 361,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH458"
  },
  {
    id: "philips-microwave-oven-320",
    name: "Philips Microwave Oven PH314Pro",
    nameFa: "مایکروویو فیلیپس مدل PH314Pro",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 9849456,
    originalPrice: 10900000,
    description: "Microwave Oven from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مایکروویو از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "One-Touch Operation",
      "Companion App with Recipes",
      "Rapid Air Technology",
      "Keep Warm Function",
      "Smart Preset Programs",
      "10-Speed Control"
    ],
    featuresFa: [
      "عملکرد تک‌لمسی",
      "اپلیکیشن همراه با دستور غذا",
      "فناوری هوای سریع",
      "قابلیت Keep Warm",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "کنترل ۱۰ سرعته"
    ],
    specs: {
      Power: "2258 Watt",
      Capacity: "6.6 L",
      Presets: "8 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.3,
    reviews: 885,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH314Pro"
  },
  {
    id: "philips-food-processor-321",
    name: "Philips Food Processor PH555Neo",
    nameFa: "غذاساز فیلیپس مدل PH555Neo",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 17850161,
    originalPrice: 20300000,
    description: "Food Processor from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "غذاساز از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "10-Speed Control",
      "Companion App with Recipes",
      "Compact Footprint Design",
      "Smart Preset Programs",
      "One-Touch Operation",
      "Keep Warm Function"
    ],
    featuresFa: [
      "کنترل ۱۰ سرعته",
      "اپلیکیشن همراه با دستور غذا",
      "طراحی جمع‌وجور",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "عملکرد تک‌لمسی",
      "قابلیت Keep Warm"
    ],
    specs: {
      Power: "2079 Watt",
      Capacity: "1.6 L",
      Presets: "5 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.4,
    reviews: 716,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH555Neo"
  },
  {
    id: "philips-food-processor-322",
    name: "Philips Food Processor PH442S",
    nameFa: "غذاساز فیلیپس مدل PH442S",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 10838518,
    description: "Food Processor from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "غذاساز از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Dishwasher Safe Parts",
      "One-Touch Operation",
      "Smart Preset Programs",
      "Keep Warm Function",
      "Rapid Air Technology",
      "10-Speed Control"
    ],
    featuresFa: [
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "عملکرد تک‌لمسی",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "قابلیت Keep Warm",
      "فناوری هوای سریع",
      "کنترل ۱۰ سرعته"
    ],
    specs: {
      Power: "1519 Watt",
      Capacity: "2.7 L",
      Presets: "4 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.2,
    reviews: 1448,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH442S"
  },
  {
    id: "philips-air-fryer-323",
    name: "Philips Air Fryer PH671Neo",
    nameFa: "سرخ‌کن بدون روغن فیلیپس مدل PH671Neo",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 18000770,
    description: "Air Fryer from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سرخ‌کن بدون روغن از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Compact Footprint Design",
      "10-Speed Control",
      "One-Touch Operation",
      "Rapid Air Technology",
      "Dishwasher Safe Parts",
      "Companion App with Recipes"
    ],
    featuresFa: [
      "طراحی جمع‌وجور",
      "کنترل ۱۰ سرعته",
      "عملکرد تک‌لمسی",
      "فناوری هوای سریع",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "اپلیکیشن همراه با دستور غذا"
    ],
    specs: {
      Power: "2067 Watt",
      Capacity: "4.8 L",
      Presets: "6 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.1,
    reviews: 1170,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH671Neo"
  },
  {
    id: "philips-air-fryer-324",
    name: "Philips Air Fryer PH110Plus",
    nameFa: "سرخ‌کن بدون روغن فیلیپس مدل PH110Plus",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 32664080,
    originalPrice: 38300000,
    description: "Air Fryer from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سرخ‌کن بدون روغن از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Preset Programs",
      "Keep Warm Function",
      "Compact Footprint Design",
      "10-Speed Control",
      "Dishwasher Safe Parts",
      "Rapid Air Technology"
    ],
    featuresFa: [
      "برنامه‌های هوشمند پیش‌تنظیم",
      "قابلیت Keep Warm",
      "طراحی جمع‌وجور",
      "کنترل ۱۰ سرعته",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "فناوری هوای سریع"
    ],
    specs: {
      Power: "1254 Watt",
      Capacity: "7.8 L",
      Presets: "5 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.4,
    reviews: 67,
    isBestseller: true,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH110Plus"
  },
  {
    id: "philips-microwave-oven-325",
    name: "Philips Microwave Oven PH751Pro",
    nameFa: "مایکروویو فیلیپس مدل PH751Pro",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 23851179,
    description: "Microwave Oven from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مایکروویو از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Preset Programs",
      "Keep Warm Function",
      "10-Speed Control",
      "Companion App with Recipes",
      "Compact Footprint Design",
      "Dishwasher Safe Parts"
    ],
    featuresFa: [
      "برنامه‌های هوشمند پیش‌تنظیم",
      "قابلیت Keep Warm",
      "کنترل ۱۰ سرعته",
      "اپلیکیشن همراه با دستور غذا",
      "طراحی جمع‌وجور",
      "قطعات قابل شستشو در ماشین ظرفشویی"
    ],
    specs: {
      Power: "2160 Watt",
      Capacity: "2.5 L",
      Presets: "3 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.1,
    reviews: 2231,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH751Pro"
  },
  {
    id: "philips-blender-326",
    name: "Philips Blender PH557Neo",
    nameFa: "مخلوط‌کن فیلیپس مدل PH557Neo",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 30420548,
    description: "Blender from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مخلوط‌کن از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "10-Speed Control",
      "One-Touch Operation",
      "Companion App with Recipes",
      "Compact Footprint Design",
      "Dishwasher Safe Parts",
      "Keep Warm Function"
    ],
    featuresFa: [
      "کنترل ۱۰ سرعته",
      "عملکرد تک‌لمسی",
      "اپلیکیشن همراه با دستور غذا",
      "طراحی جمع‌وجور",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "قابلیت Keep Warm"
    ],
    specs: {
      Power: "1882 Watt",
      Capacity: "1.2 L",
      Presets: "3 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4,
    reviews: 1614,
    isNew: true,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH557Neo"
  },
  {
    id: "philips-microwave-oven-327",
    name: "Philips Microwave Oven PH793Plus",
    nameFa: "مایکروویو فیلیپس مدل PH793Plus",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 17649556,
    description: "Microwave Oven from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مایکروویو از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Rapid Air Technology",
      "Keep Warm Function",
      "One-Touch Operation",
      "Companion App with Recipes",
      "Smart Preset Programs",
      "Dishwasher Safe Parts"
    ],
    featuresFa: [
      "فناوری هوای سریع",
      "قابلیت Keep Warm",
      "عملکرد تک‌لمسی",
      "اپلیکیشن همراه با دستور غذا",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "قطعات قابل شستشو در ماشین ظرفشویی"
    ],
    specs: {
      Power: "332 Watt",
      Capacity: "2.7 L",
      Presets: "7 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.2,
    reviews: 3091,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH793Plus"
  },
  {
    id: "philips-food-processor-328",
    name: "Philips Food Processor PH311Pro",
    nameFa: "غذاساز فیلیپس مدل PH311Pro",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 22264572,
    description: "Food Processor from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "غذاساز از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Rapid Air Technology",
      "Keep Warm Function",
      "10-Speed Control",
      "One-Touch Operation",
      "Compact Footprint Design",
      "Dishwasher Safe Parts"
    ],
    featuresFa: [
      "فناوری هوای سریع",
      "قابلیت Keep Warm",
      "کنترل ۱۰ سرعته",
      "عملکرد تک‌لمسی",
      "طراحی جمع‌وجور",
      "قطعات قابل شستشو در ماشین ظرفشویی"
    ],
    specs: {
      Power: "1162 Watt",
      Capacity: "4.6 L",
      Presets: "4 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.2,
    reviews: 405,
    isNew: true,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH311Pro"
  },
  {
    id: "philips-coffee-maker-329",
    name: "Philips Coffee Maker PH808X",
    nameFa: "قهوه‌ساز فیلیپس مدل PH808X",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 26096186,
    originalPrice: 28900000,
    description: "Coffee Maker from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "قهوه‌ساز از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Compact Footprint Design",
      "10-Speed Control",
      "Rapid Air Technology",
      "Keep Warm Function",
      "Dishwasher Safe Parts",
      "One-Touch Operation"
    ],
    featuresFa: [
      "طراحی جمع‌وجور",
      "کنترل ۱۰ سرعته",
      "فناوری هوای سریع",
      "قابلیت Keep Warm",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "عملکرد تک‌لمسی"
    ],
    specs: {
      Power: "837 Watt",
      Capacity: "2.9 L",
      Presets: "6 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.4,
    reviews: 2927,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH808X"
  },
  {
    id: "philips-air-fryer-330",
    name: "Philips Air Fryer PH583",
    nameFa: "سرخ‌کن بدون روغن فیلیپس مدل PH583",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 17738879,
    originalPrice: 22100000,
    description: "Air Fryer from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سرخ‌کن بدون روغن از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Companion App with Recipes",
      "Keep Warm Function",
      "Smart Preset Programs",
      "Dishwasher Safe Parts",
      "One-Touch Operation",
      "Compact Footprint Design"
    ],
    featuresFa: [
      "اپلیکیشن همراه با دستور غذا",
      "قابلیت Keep Warm",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "عملکرد تک‌لمسی",
      "طراحی جمع‌وجور"
    ],
    specs: {
      Power: "1913 Watt",
      Capacity: "4 L",
      Presets: "8 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.1,
    reviews: 670,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH583"
  },
  {
    id: "philips-coffee-maker-331",
    name: "Philips Coffee Maker PH909",
    nameFa: "قهوه‌ساز فیلیپس مدل PH909",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 13253368,
    description: "Coffee Maker from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "قهوه‌ساز از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "One-Touch Operation",
      "10-Speed Control",
      "Compact Footprint Design",
      "Keep Warm Function",
      "Rapid Air Technology",
      "Smart Preset Programs"
    ],
    featuresFa: [
      "عملکرد تک‌لمسی",
      "کنترل ۱۰ سرعته",
      "طراحی جمع‌وجور",
      "قابلیت Keep Warm",
      "فناوری هوای سریع",
      "برنامه‌های هوشمند پیش‌تنظیم"
    ],
    specs: {
      Power: "383 Watt",
      Capacity: "3.1 L",
      Presets: "7 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.1,
    reviews: 1830,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH909"
  },
  {
    id: "philips-air-fryer-332",
    name: "Philips Air Fryer PH271Neo",
    nameFa: "سرخ‌کن بدون روغن فیلیپس مدل PH271Neo",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 11791396,
    originalPrice: 15000000,
    description: "Air Fryer from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سرخ‌کن بدون روغن از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Dishwasher Safe Parts",
      "Smart Preset Programs",
      "10-Speed Control",
      "Companion App with Recipes",
      "Keep Warm Function",
      "One-Touch Operation"
    ],
    featuresFa: [
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "کنترل ۱۰ سرعته",
      "اپلیکیشن همراه با دستور غذا",
      "قابلیت Keep Warm",
      "عملکرد تک‌لمسی"
    ],
    specs: {
      Power: "967 Watt",
      Capacity: "5 L",
      Presets: "8 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.9,
    reviews: 2503,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH271Neo"
  },
  {
    id: "philips-coffee-maker-333",
    name: "Philips Coffee Maker PH565",
    nameFa: "قهوه‌ساز فیلیپس مدل PH565",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 8908479,
    originalPrice: 10200000,
    description: "Coffee Maker from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "قهوه‌ساز از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Companion App with Recipes",
      "One-Touch Operation",
      "Rapid Air Technology",
      "Compact Footprint Design",
      "Keep Warm Function",
      "Smart Preset Programs"
    ],
    featuresFa: [
      "اپلیکیشن همراه با دستور غذا",
      "عملکرد تک‌لمسی",
      "فناوری هوای سریع",
      "طراحی جمع‌وجور",
      "قابلیت Keep Warm",
      "برنامه‌های هوشمند پیش‌تنظیم"
    ],
    specs: {
      Power: "2126 Watt",
      Capacity: "1.6 L",
      Presets: "8 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.3,
    reviews: 2861,
    badge: "Editor's Choice",
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH565"
  },
  {
    id: "philips-air-fryer-334",
    name: "Philips Air Fryer PH580Pro",
    nameFa: "سرخ‌کن بدون روغن فیلیپس مدل PH580Pro",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 18996449,
    description: "Air Fryer from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سرخ‌کن بدون روغن از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Keep Warm Function",
      "Compact Footprint Design",
      "Companion App with Recipes",
      "One-Touch Operation",
      "10-Speed Control",
      "Smart Preset Programs"
    ],
    featuresFa: [
      "قابلیت Keep Warm",
      "طراحی جمع‌وجور",
      "اپلیکیشن همراه با دستور غذا",
      "عملکرد تک‌لمسی",
      "کنترل ۱۰ سرعته",
      "برنامه‌های هوشمند پیش‌تنظیم"
    ],
    specs: {
      Power: "1269 Watt",
      Capacity: "4.6 L",
      Presets: "7 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.6,
    reviews: 1612,
    isNew: true,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH580Pro"
  },
  {
    id: "philips-canister-vacuum-335",
    name: "Philips Canister Vacuum PH804Neo",
    nameFa: "جاروبرقی سطلی فیلیپس مدل PH804Neo",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 25104188,
    description: "Canister Vacuum from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "60-Minute Runtime",
      "HEPA H13 Filtration",
      "Pet Hair Optimized Brush",
      "App & Voice Control",
      "Laser Dust Detection",
      "Multi-Surface Sensors"
    ],
    featuresFa: [
      "شارژدهی تا ۶۰ دقیقه",
      "فیلتراسیون HEPA H13",
      "برس مخصوص موی حیوانات",
      "کنترل اپلیکیشن و صدا",
      "تشخیص گرد و غبار با لیزر",
      "سنسورهای چندسطحی"
    ],
    specs: {
      "Suction Power": "162 AW",
      Runtime: "50 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.1,
    reviews: 2091,
    isBestseller: true,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH804Neo"
  },
  {
    id: "philips-cordless-stick-vacuum-336",
    name: "Philips Cordless Stick Vacuum PH298Plus",
    nameFa: "جاروبرقی شارژی فیلیپس مدل PH298Plus",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 60168114,
    description: "Cordless Stick Vacuum from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی شارژی از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Mapping Navigation",
      "Auto-Empty Base",
      "App & Voice Control",
      "60-Minute Runtime",
      "Multi-Surface Sensors",
      "Pet Hair Optimized Brush"
    ],
    featuresFa: [
      "ناوبری نقشه‌برداری هوشمند",
      "پایه تخلیه خودکار",
      "کنترل اپلیکیشن و صدا",
      "شارژدهی تا ۶۰ دقیقه",
      "سنسورهای چندسطحی",
      "برس مخصوص موی حیوانات"
    ],
    specs: {
      "Suction Power": "238 AW",
      Runtime: "60 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.1,
    reviews: 935,
    badge: "Best Seller",
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH298Plus"
  },
  {
    id: "philips-canister-vacuum-337",
    name: "Philips Canister Vacuum PH296S",
    nameFa: "جاروبرقی سطلی فیلیپس مدل PH296S",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 60482359,
    originalPrice: 71200000,
    description: "Canister Vacuum from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Auto-Empty Base",
      "Smart Mapping Navigation",
      "Laser Dust Detection",
      "60-Minute Runtime",
      "Multi-Surface Sensors",
      "Pet Hair Optimized Brush"
    ],
    featuresFa: [
      "پایه تخلیه خودکار",
      "ناوبری نقشه‌برداری هوشمند",
      "تشخیص گرد و غبار با لیزر",
      "شارژدهی تا ۶۰ دقیقه",
      "سنسورهای چندسطحی",
      "برس مخصوص موی حیوانات"
    ],
    specs: {
      "Suction Power": "154 AW",
      Runtime: "120 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.5,
    reviews: 2676,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH296S"
  },
  {
    id: "philips-cordless-stick-vacuum-338",
    name: "Philips Cordless Stick Vacuum PH119Pro",
    nameFa: "جاروبرقی شارژی فیلیپس مدل PH119Pro",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 32035301,
    description: "Cordless Stick Vacuum from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی شارژی از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Mapping Navigation",
      "Laser Dust Detection",
      "Auto-Empty Base",
      "HEPA H13 Filtration",
      "App & Voice Control",
      "Pet Hair Optimized Brush"
    ],
    featuresFa: [
      "ناوبری نقشه‌برداری هوشمند",
      "تشخیص گرد و غبار با لیزر",
      "پایه تخلیه خودکار",
      "فیلتراسیون HEPA H13",
      "کنترل اپلیکیشن و صدا",
      "برس مخصوص موی حیوانات"
    ],
    specs: {
      "Suction Power": "172 AW",
      Runtime: "120 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.5,
    reviews: 1167,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH119Pro"
  },
  {
    id: "philips-canister-vacuum-339",
    name: "Philips Canister Vacuum PH325X",
    nameFa: "جاروبرقی سطلی فیلیپس مدل PH325X",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 44286220,
    description: "Canister Vacuum from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "60-Minute Runtime",
      "Multi-Surface Sensors",
      "Auto-Empty Base",
      "App & Voice Control",
      "Pet Hair Optimized Brush",
      "Smart Mapping Navigation"
    ],
    featuresFa: [
      "شارژدهی تا ۶۰ دقیقه",
      "سنسورهای چندسطحی",
      "پایه تخلیه خودکار",
      "کنترل اپلیکیشن و صدا",
      "برس مخصوص موی حیوانات",
      "ناوبری نقشه‌برداری هوشمند"
    ],
    specs: {
      "Suction Power": "200 AW",
      Runtime: "90 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.1,
    reviews: 1566,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH325X"
  },
  {
    id: "philips-canister-vacuum-340",
    name: "Philips Canister Vacuum PH458X",
    nameFa: "جاروبرقی سطلی فیلیپس مدل PH458X",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 59181671,
    description: "Canister Vacuum from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Laser Dust Detection",
      "60-Minute Runtime",
      "App & Voice Control",
      "HEPA H13 Filtration",
      "Smart Mapping Navigation",
      "Auto-Empty Base"
    ],
    featuresFa: [
      "تشخیص گرد و غبار با لیزر",
      "شارژدهی تا ۶۰ دقیقه",
      "کنترل اپلیکیشن و صدا",
      "فیلتراسیون HEPA H13",
      "ناوبری نقشه‌برداری هوشمند",
      "پایه تخلیه خودکار"
    ],
    specs: {
      "Suction Power": "254 AW",
      Runtime: "90 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.2,
    reviews: 2265,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH458X"
  },
  {
    id: "philips-wet-dry-vacuum-341",
    name: "Philips Wet & Dry Vacuum PH822Plus",
    nameFa: "جاروبرقی خشک و تر فیلیپس مدل PH822Plus",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 55524457,
    description: "Wet & Dry Vacuum from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی خشک و تر از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "App & Voice Control",
      "HEPA H13 Filtration",
      "Smart Mapping Navigation",
      "Pet Hair Optimized Brush",
      "Multi-Surface Sensors",
      "Laser Dust Detection"
    ],
    featuresFa: [
      "کنترل اپلیکیشن و صدا",
      "فیلتراسیون HEPA H13",
      "ناوبری نقشه‌برداری هوشمند",
      "برس مخصوص موی حیوانات",
      "سنسورهای چندسطحی",
      "تشخیص گرد و غبار با لیزر"
    ],
    specs: {
      "Suction Power": "160 AW",
      Runtime: "40 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.1,
    reviews: 351,
    isBestseller: true,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH822Plus"
  },
  {
    id: "philips-robot-vacuum-342",
    name: "Philips Robot Vacuum PH424Pro",
    nameFa: "جاروبرقی رباتیک فیلیپس مدل PH424Pro",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 35348947,
    description: "Robot Vacuum from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی رباتیک از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "App & Voice Control",
      "Smart Mapping Navigation",
      "Pet Hair Optimized Brush",
      "HEPA H13 Filtration",
      "Auto-Empty Base",
      "60-Minute Runtime"
    ],
    featuresFa: [
      "کنترل اپلیکیشن و صدا",
      "ناوبری نقشه‌برداری هوشمند",
      "برس مخصوص موی حیوانات",
      "فیلتراسیون HEPA H13",
      "پایه تخلیه خودکار",
      "شارژدهی تا ۶۰ دقیقه"
    ],
    specs: {
      "Suction Power": "235 AW",
      Runtime: "120 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.6,
    reviews: 601,
    isNew: true,
    isBestseller: true,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH424Pro"
  },
  {
    id: "philips-canister-vacuum-343",
    name: "Philips Canister Vacuum PH731Neo",
    nameFa: "جاروبرقی سطلی فیلیپس مدل PH731Neo",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 53590656,
    description: "Canister Vacuum from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Auto-Empty Base",
      "Smart Mapping Navigation",
      "60-Minute Runtime",
      "Multi-Surface Sensors",
      "Laser Dust Detection",
      "Pet Hair Optimized Brush"
    ],
    featuresFa: [
      "پایه تخلیه خودکار",
      "ناوبری نقشه‌برداری هوشمند",
      "شارژدهی تا ۶۰ دقیقه",
      "سنسورهای چندسطحی",
      "تشخیص گرد و غبار با لیزر",
      "برس مخصوص موی حیوانات"
    ],
    specs: {
      "Suction Power": "240 AW",
      Runtime: "90 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4,
    reviews: 503,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH731Neo"
  },
  {
    id: "philips-wet-dry-vacuum-344",
    name: "Philips Wet & Dry Vacuum PH129Neo",
    nameFa: "جاروبرقی خشک و تر فیلیپس مدل PH129Neo",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 60177557,
    description: "Wet & Dry Vacuum from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی خشک و تر از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Multi-Surface Sensors",
      "Laser Dust Detection",
      "HEPA H13 Filtration",
      "60-Minute Runtime",
      "Auto-Empty Base",
      "Pet Hair Optimized Brush"
    ],
    featuresFa: [
      "سنسورهای چندسطحی",
      "تشخیص گرد و غبار با لیزر",
      "فیلتراسیون HEPA H13",
      "شارژدهی تا ۶۰ دقیقه",
      "پایه تخلیه خودکار",
      "برس مخصوص موی حیوانات"
    ],
    specs: {
      "Suction Power": "163 AW",
      Runtime: "50 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.4,
    reviews: 47,
    isBestseller: true,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH129Neo"
  },
  {
    id: "philips-canister-vacuum-345",
    name: "Philips Canister Vacuum PH149Pro",
    nameFa: "جاروبرقی سطلی فیلیپس مدل PH149Pro",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 57166744,
    originalPrice: 75400000,
    description: "Canister Vacuum from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Auto-Empty Base",
      "60-Minute Runtime",
      "Pet Hair Optimized Brush",
      "Laser Dust Detection",
      "HEPA H13 Filtration",
      "Multi-Surface Sensors"
    ],
    featuresFa: [
      "پایه تخلیه خودکار",
      "شارژدهی تا ۶۰ دقیقه",
      "برس مخصوص موی حیوانات",
      "تشخیص گرد و غبار با لیزر",
      "فیلتراسیون HEPA H13",
      "سنسورهای چندسطحی"
    ],
    specs: {
      "Suction Power": "194 AW",
      Runtime: "50 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.5,
    reviews: 1087,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH149Pro"
  },
  {
    id: "philips-robot-vacuum-346",
    name: "Philips Robot Vacuum PH173X",
    nameFa: "جاروبرقی رباتیک فیلیپس مدل PH173X",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 62467337,
    originalPrice: 74300000,
    description: "Robot Vacuum from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی رباتیک از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Laser Dust Detection",
      "60-Minute Runtime",
      "HEPA H13 Filtration",
      "Auto-Empty Base",
      "Smart Mapping Navigation",
      "Multi-Surface Sensors"
    ],
    featuresFa: [
      "تشخیص گرد و غبار با لیزر",
      "شارژدهی تا ۶۰ دقیقه",
      "فیلتراسیون HEPA H13",
      "پایه تخلیه خودکار",
      "ناوبری نقشه‌برداری هوشمند",
      "سنسورهای چندسطحی"
    ],
    specs: {
      "Suction Power": "220 AW",
      Runtime: "50 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.8,
    reviews: 1609,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH173X"
  },
  {
    id: "philips-home-theater-system-347",
    name: "Philips Home Theater System 43\" PH880",
    nameFa: "سیستم سینمای خانگی فیلیپس 43\" مدل PH880",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 86823182,
    originalPrice: 114400000,
    description: "Home Theater System from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سیستم سینمای خانگی از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Gaming Mode with Low Latency",
      "HDR10+ Support",
      "4K/8K Ultra HD Resolution",
      "AI Upscaling Processor",
      "Slim Bezel-less Design",
      "Smart Hub with Voice Assistant"
    ],
    featuresFa: [
      "حالت گیمینگ با تأخیر پایین",
      "پشتیبانی از HDR10+",
      "رزولوشن ۴K/۸K",
      "پردازنده ارتقای هوشمند AI",
      "طراحی بی‌قاب باریک",
      "هاب هوشمند با دستیار صوتی"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "144Hz",
      "Smart Platform": "Tizen OS",
      "HDMI Ports": "4 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80",
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4,
    reviews: 2907,
    isBestseller: true,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH880"
  },
  {
    id: "philips-home-theater-system-348",
    name: "Philips Home Theater System 55\" PH222Plus",
    nameFa: "سیستم سینمای خانگی فیلیپس 55\" مدل PH222Plus",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 122666026,
    description: "Home Theater System from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سیستم سینمای خانگی از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Slim Bezel-less Design",
      "Smart Hub with Voice Assistant",
      "Gaming Mode with Low Latency",
      "120Hz High Refresh Rate",
      "AI Upscaling Processor",
      "Dolby Vision & Atmos"
    ],
    featuresFa: [
      "طراحی بی‌قاب باریک",
      "هاب هوشمند با دستیار صوتی",
      "حالت گیمینگ با تأخیر پایین",
      "نرخ تازه‌سازی ۱۲۰ هرتز",
      "پردازنده ارتقای هوشمند AI",
      "دالبی ویژن و اتموس"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "120Hz",
      "Smart Platform": "Tizen OS",
      "HDMI Ports": "3 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.4,
    reviews: 2757,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH222Plus"
  },
  {
    id: "philips-soundbar-349",
    name: "Philips Soundbar 70\" PH489Pro",
    nameFa: "ساندبار فیلیپس 70\" مدل PH489Pro",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 54754676,
    description: "Soundbar from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "ساندبار از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "HDR10+ Support",
      "Slim Bezel-less Design",
      "Smart Hub with Voice Assistant",
      "4K/8K Ultra HD Resolution",
      "120Hz High Refresh Rate",
      "Dolby Vision & Atmos"
    ],
    featuresFa: [
      "پشتیبانی از HDR10+",
      "طراحی بی‌قاب باریک",
      "هاب هوشمند با دستیار صوتی",
      "رزولوشن ۴K/۸K",
      "نرخ تازه‌سازی ۱۲۰ هرتز",
      "دالبی ویژن و اتموس"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "60Hz",
      "Smart Platform": "Google TV",
      "HDMI Ports": "3 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.2,
    reviews: 1652,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH489Pro"
  },
  {
    id: "philips-oled-tv-350",
    name: "Philips OLED TV 70\" PH401S",
    nameFa: "تلویزیون اولد فیلیپس 70\" مدل PH401S",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 73673254,
    description: "OLED TV from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون اولد از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "AI Upscaling Processor",
      "Smart Hub with Voice Assistant",
      "HDR10+ Support",
      "4K/8K Ultra HD Resolution",
      "Slim Bezel-less Design",
      "Gaming Mode with Low Latency"
    ],
    featuresFa: [
      "پردازنده ارتقای هوشمند AI",
      "هاب هوشمند با دستیار صوتی",
      "پشتیبانی از HDR10+",
      "رزولوشن ۴K/۸K",
      "طراحی بی‌قاب باریک",
      "حالت گیمینگ با تأخیر پایین"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "60Hz",
      "Smart Platform": "Google TV",
      "HDMI Ports": "2 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80",
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.5,
    reviews: 323,
    badge: "Popular",
    isBestseller: true,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH401S"
  },
  {
    id: "philips-soundbar-351",
    name: "Philips Soundbar 75\" PH745S",
    nameFa: "ساندبار فیلیپس 75\" مدل PH745S",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 99244087,
    description: "Soundbar from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "ساندبار از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "120Hz High Refresh Rate",
      "HDR10+ Support",
      "Slim Bezel-less Design",
      "Gaming Mode with Low Latency",
      "Smart Hub with Voice Assistant",
      "4K/8K Ultra HD Resolution"
    ],
    featuresFa: [
      "نرخ تازه‌سازی ۱۲۰ هرتز",
      "پشتیبانی از HDR10+",
      "طراحی بی‌قاب باریک",
      "حالت گیمینگ با تأخیر پایین",
      "هاب هوشمند با دستیار صوتی",
      "رزولوشن ۴K/۸K"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "144Hz",
      "Smart Platform": "Tizen OS",
      "HDMI Ports": "3 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.8,
    reviews: 1258,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH745S"
  },
  {
    id: "philips-smart-tv-352",
    name: "Philips Smart TV 50\" PH404S",
    nameFa: "تلویزیون هوشمند فیلیپس 50\" مدل PH404S",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 92830527,
    originalPrice: 113800000,
    description: "Smart TV from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون هوشمند از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Hub with Voice Assistant",
      "Dolby Vision & Atmos",
      "4K/8K Ultra HD Resolution",
      "Gaming Mode with Low Latency",
      "HDR10+ Support",
      "120Hz High Refresh Rate"
    ],
    featuresFa: [
      "هاب هوشمند با دستیار صوتی",
      "دالبی ویژن و اتموس",
      "رزولوشن ۴K/۸K",
      "حالت گیمینگ با تأخیر پایین",
      "پشتیبانی از HDR10+",
      "نرخ تازه‌سازی ۱۲۰ هرتز"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "144Hz",
      "Smart Platform": "webOS",
      "HDMI Ports": "2 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.8,
    reviews: 2802,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH404S"
  },
  {
    id: "philips-smart-tv-353",
    name: "Philips Smart TV 75\" PH435X",
    nameFa: "تلویزیون هوشمند فیلیپس 75\" مدل PH435X",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 77764950,
    description: "Smart TV from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون هوشمند از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Hub with Voice Assistant",
      "Dolby Vision & Atmos",
      "HDR10+ Support",
      "4K/8K Ultra HD Resolution",
      "AI Upscaling Processor",
      "120Hz High Refresh Rate"
    ],
    featuresFa: [
      "هاب هوشمند با دستیار صوتی",
      "دالبی ویژن و اتموس",
      "پشتیبانی از HDR10+",
      "رزولوشن ۴K/۸K",
      "پردازنده ارتقای هوشمند AI",
      "نرخ تازه‌سازی ۱۲۰ هرتز"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "120Hz",
      "Smart Platform": "Google TV",
      "HDMI Ports": "3 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.8,
    reviews: 3001,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH435X"
  },
  {
    id: "philips-smart-tv-354",
    name: "Philips Smart TV 43\" PH410Plus",
    nameFa: "تلویزیون هوشمند فیلیپس 43\" مدل PH410Plus",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 126622463,
    originalPrice: 153400000,
    description: "Smart TV from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون هوشمند از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "AI Upscaling Processor",
      "4K/8K Ultra HD Resolution",
      "Slim Bezel-less Design",
      "HDR10+ Support",
      "Smart Hub with Voice Assistant",
      "120Hz High Refresh Rate"
    ],
    featuresFa: [
      "پردازنده ارتقای هوشمند AI",
      "رزولوشن ۴K/۸K",
      "طراحی بی‌قاب باریک",
      "پشتیبانی از HDR10+",
      "هاب هوشمند با دستیار صوتی",
      "نرخ تازه‌سازی ۱۲۰ هرتز"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "60Hz",
      "Smart Platform": "Android TV",
      "HDMI Ports": "4 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80",
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.2,
    reviews: 453,
    isNew: true,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH410Plus"
  },
  {
    id: "philips-home-theater-system-355",
    name: "Philips Home Theater System 85\" PH368X",
    nameFa: "سیستم سینمای خانگی فیلیپس 85\" مدل PH368X",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 52814558,
    description: "Home Theater System from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سیستم سینمای خانگی از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "120Hz High Refresh Rate",
      "Slim Bezel-less Design",
      "AI Upscaling Processor",
      "4K/8K Ultra HD Resolution",
      "Dolby Vision & Atmos",
      "HDR10+ Support"
    ],
    featuresFa: [
      "نرخ تازه‌سازی ۱۲۰ هرتز",
      "طراحی بی‌قاب باریک",
      "پردازنده ارتقای هوشمند AI",
      "رزولوشن ۴K/۸K",
      "دالبی ویژن و اتموس",
      "پشتیبانی از HDR10+"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "60Hz",
      "Smart Platform": "Android TV",
      "HDMI Ports": "2 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4,
    reviews: 3082,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH368X"
  },
  {
    id: "philips-qled-tv-356",
    name: "Philips QLED TV 75\" PH623X",
    nameFa: "تلویزیون کیولد فیلیپس 75\" مدل PH623X",
    category: "TV & Entertainment",
    categoryFa: "تلویزیون و سرگرمی",
    price: 138755773,
    description: "QLED TV from Philips, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "تلویزیون کیولد از برند فیلیپس، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "120Hz High Refresh Rate",
      "Dolby Vision & Atmos",
      "4K/8K Ultra HD Resolution",
      "AI Upscaling Processor",
      "Gaming Mode with Low Latency",
      "HDR10+ Support"
    ],
    featuresFa: [
      "نرخ تازه‌سازی ۱۲۰ هرتز",
      "دالبی ویژن و اتموس",
      "رزولوشن ۴K/۸K",
      "پردازنده ارتقای هوشمند AI",
      "حالت گیمینگ با تأخیر پایین",
      "پشتیبانی از HDR10+"
    ],
    specs: {
      Resolution: "4K UHD (3840 x 2160)",
      "Refresh Rate": "60Hz",
      "Smart Platform": "webOS",
      "HDMI Ports": "2 (HDMI 2.1)",
      Warranty: "2 years official"
    },
    specsFa: {
      "رزولوشن": "۴K UHD",
      "نرخ تازه‌سازی": "هرتز",
      "پلتفرم هوشمند": "سیستم هوشمند",
      "پورت HDMI": "چند پورت",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80",
      "https://images.unsplash.com/photo-1601944177325-f8867652837f?w=800&q=80"
    ],
    colors: [
      {
        name: "Titan Black",
        nameFa: "مشکی تیتانیوم",
        hex: "#1a1a1a"
      },
      {
        name: "Silver",
        nameFa: "نقره‌ای",
        hex: "#c0c0c0"
      }
    ],
    rating: 4.5,
    reviews: 1567,
    brand: "Philips",
    brandFa: "فیلیپس",
    model: "PH623X"
  },
  {
    id: "kitchenaid-microwave-oven-357",
    name: "KitchenAid Microwave Oven KI387Pro",
    nameFa: "مایکروویو کیتچن‌اید مدل KI387Pro",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 37377806,
    description: "Microwave Oven from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مایکروویو از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Compact Footprint Design",
      "One-Touch Operation",
      "10-Speed Control",
      "Smart Preset Programs",
      "Companion App with Recipes",
      "Rapid Air Technology"
    ],
    featuresFa: [
      "طراحی جمع‌وجور",
      "عملکرد تک‌لمسی",
      "کنترل ۱۰ سرعته",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "اپلیکیشن همراه با دستور غذا",
      "فناوری هوای سریع"
    ],
    specs: {
      Power: "1837 Watt",
      Capacity: "3.8 L",
      Presets: "3 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.2,
    reviews: 2211,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI387Pro"
  },
  {
    id: "kitchenaid-food-processor-358",
    name: "KitchenAid Food Processor KI500S",
    nameFa: "غذاساز کیتچن‌اید مدل KI500S",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 18246516,
    description: "Food Processor from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "غذاساز از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Dishwasher Safe Parts",
      "Keep Warm Function",
      "Smart Preset Programs",
      "Compact Footprint Design",
      "One-Touch Operation",
      "Companion App with Recipes"
    ],
    featuresFa: [
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "قابلیت Keep Warm",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "طراحی جمع‌وجور",
      "عملکرد تک‌لمسی",
      "اپلیکیشن همراه با دستور غذا"
    ],
    specs: {
      Power: "933 Watt",
      Capacity: "7.5 L",
      Presets: "3 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.2,
    reviews: 3199,
    badge: "Best Seller",
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI500S"
  },
  {
    id: "kitchenaid-blender-359",
    name: "KitchenAid Blender KI368Neo",
    nameFa: "مخلوط‌کن کیتچن‌اید مدل KI368Neo",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 18715185,
    originalPrice: 21300000,
    description: "Blender from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مخلوط‌کن از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Keep Warm Function",
      "Companion App with Recipes",
      "Rapid Air Technology",
      "Compact Footprint Design",
      "Smart Preset Programs",
      "10-Speed Control"
    ],
    featuresFa: [
      "قابلیت Keep Warm",
      "اپلیکیشن همراه با دستور غذا",
      "فناوری هوای سریع",
      "طراحی جمع‌وجور",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "کنترل ۱۰ سرعته"
    ],
    specs: {
      Power: "2194 Watt",
      Capacity: "4.2 L",
      Presets: "8 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.8,
    reviews: 1058,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI368Neo"
  },
  {
    id: "kitchenaid-stand-mixer-360",
    name: "KitchenAid Stand Mixer KI812Plus",
    nameFa: "میکسر ایستاده کیتچن‌اید مدل KI812Plus",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 17702482,
    originalPrice: 22100000,
    description: "Stand Mixer from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "میکسر ایستاده از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Companion App with Recipes",
      "Dishwasher Safe Parts",
      "Rapid Air Technology",
      "Keep Warm Function",
      "Smart Preset Programs",
      "Compact Footprint Design"
    ],
    featuresFa: [
      "اپلیکیشن همراه با دستور غذا",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "فناوری هوای سریع",
      "قابلیت Keep Warm",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "طراحی جمع‌وجور"
    ],
    specs: {
      Power: "748 Watt",
      Capacity: "1.2 L",
      Presets: "8 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.3,
    reviews: 3073,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI812Plus"
  },
  {
    id: "kitchenaid-blender-361",
    name: "KitchenAid Blender KI173Neo",
    nameFa: "مخلوط‌کن کیتچن‌اید مدل KI173Neo",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 11801661,
    description: "Blender from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مخلوط‌کن از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Compact Footprint Design",
      "Rapid Air Technology",
      "One-Touch Operation",
      "Dishwasher Safe Parts",
      "Smart Preset Programs",
      "Keep Warm Function"
    ],
    featuresFa: [
      "طراحی جمع‌وجور",
      "فناوری هوای سریع",
      "عملکرد تک‌لمسی",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "قابلیت Keep Warm"
    ],
    specs: {
      Power: "2144 Watt",
      Capacity: "2.3 L",
      Presets: "3 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.7,
    reviews: 2362,
    badge: "Top Rated",
    isNew: true,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI173Neo"
  },
  {
    id: "kitchenaid-coffee-maker-362",
    name: "KitchenAid Coffee Maker KI866X",
    nameFa: "قهوه‌ساز کیتچن‌اید مدل KI866X",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 10736770,
    description: "Coffee Maker from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "قهوه‌ساز از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Compact Footprint Design",
      "Dishwasher Safe Parts",
      "Rapid Air Technology",
      "10-Speed Control",
      "One-Touch Operation",
      "Keep Warm Function"
    ],
    featuresFa: [
      "طراحی جمع‌وجور",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "فناوری هوای سریع",
      "کنترل ۱۰ سرعته",
      "عملکرد تک‌لمسی",
      "قابلیت Keep Warm"
    ],
    specs: {
      Power: "909 Watt",
      Capacity: "1.6 L",
      Presets: "6 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.8,
    reviews: 1495,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI866X"
  },
  {
    id: "kitchenaid-coffee-maker-363",
    name: "KitchenAid Coffee Maker KI876Pro",
    nameFa: "قهوه‌ساز کیتچن‌اید مدل KI876Pro",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 24682971,
    description: "Coffee Maker from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "قهوه‌ساز از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Companion App with Recipes",
      "10-Speed Control",
      "Keep Warm Function",
      "Compact Footprint Design",
      "One-Touch Operation",
      "Rapid Air Technology"
    ],
    featuresFa: [
      "اپلیکیشن همراه با دستور غذا",
      "کنترل ۱۰ سرعته",
      "قابلیت Keep Warm",
      "طراحی جمع‌وجور",
      "عملکرد تک‌لمسی",
      "فناوری هوای سریع"
    ],
    specs: {
      Power: "306 Watt",
      Capacity: "5.6 L",
      Presets: "4 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.2,
    reviews: 2497,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI876Pro"
  },
  {
    id: "kitchenaid-microwave-oven-364",
    name: "KitchenAid Microwave Oven KI409Plus",
    nameFa: "مایکروویو کیتچن‌اید مدل KI409Plus",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 14733646,
    description: "Microwave Oven from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مایکروویو از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "10-Speed Control",
      "Keep Warm Function",
      "Dishwasher Safe Parts",
      "Companion App with Recipes",
      "Compact Footprint Design",
      "Rapid Air Technology"
    ],
    featuresFa: [
      "کنترل ۱۰ سرعته",
      "قابلیت Keep Warm",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "اپلیکیشن همراه با دستور غذا",
      "طراحی جمع‌وجور",
      "فناوری هوای سریع"
    ],
    specs: {
      Power: "1255 Watt",
      Capacity: "6.5 L",
      Presets: "5 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.9,
    reviews: 757,
    isBestseller: true,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI409Plus"
  },
  {
    id: "kitchenaid-food-processor-365",
    name: "KitchenAid Food Processor KI510S",
    nameFa: "غذاساز کیتچن‌اید مدل KI510S",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 23293417,
    description: "Food Processor from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "غذاساز از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Dishwasher Safe Parts",
      "Companion App with Recipes",
      "Keep Warm Function",
      "Compact Footprint Design",
      "Rapid Air Technology",
      "One-Touch Operation"
    ],
    featuresFa: [
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "اپلیکیشن همراه با دستور غذا",
      "قابلیت Keep Warm",
      "طراحی جمع‌وجور",
      "فناوری هوای سریع",
      "عملکرد تک‌لمسی"
    ],
    specs: {
      Power: "1740 Watt",
      Capacity: "6.7 L",
      Presets: "4 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.1,
    reviews: 776,
    badge: "Best Seller",
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI510S"
  },
  {
    id: "kitchenaid-air-fryer-366",
    name: "KitchenAid Air Fryer KI273X",
    nameFa: "سرخ‌کن بدون روغن کیتچن‌اید مدل KI273X",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 33207111,
    description: "Air Fryer from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سرخ‌کن بدون روغن از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Keep Warm Function",
      "Companion App with Recipes",
      "Smart Preset Programs",
      "10-Speed Control",
      "Dishwasher Safe Parts",
      "Compact Footprint Design"
    ],
    featuresFa: [
      "قابلیت Keep Warm",
      "اپلیکیشن همراه با دستور غذا",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "کنترل ۱۰ سرعته",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "طراحی جمع‌وجور"
    ],
    specs: {
      Power: "1242 Watt",
      Capacity: "6.7 L",
      Presets: "8 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.7,
    reviews: 937,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI273X"
  },
  {
    id: "kitchenaid-coffee-maker-367",
    name: "KitchenAid Coffee Maker KI993S",
    nameFa: "قهوه‌ساز کیتچن‌اید مدل KI993S",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 24206789,
    originalPrice: 27000000,
    description: "Coffee Maker from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "قهوه‌ساز از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Compact Footprint Design",
      "Companion App with Recipes",
      "Rapid Air Technology",
      "One-Touch Operation",
      "10-Speed Control",
      "Keep Warm Function"
    ],
    featuresFa: [
      "طراحی جمع‌وجور",
      "اپلیکیشن همراه با دستور غذا",
      "فناوری هوای سریع",
      "عملکرد تک‌لمسی",
      "کنترل ۱۰ سرعته",
      "قابلیت Keep Warm"
    ],
    specs: {
      Power: "1754 Watt",
      Capacity: "3 L",
      Presets: "6 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.2,
    reviews: 689,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI993S"
  },
  {
    id: "kitchenaid-microwave-oven-368",
    name: "KitchenAid Microwave Oven KI522",
    nameFa: "مایکروویو کیتچن‌اید مدل KI522",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 10684519,
    description: "Microwave Oven from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مایکروویو از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Compact Footprint Design",
      "Rapid Air Technology",
      "Dishwasher Safe Parts",
      "10-Speed Control",
      "One-Touch Operation",
      "Keep Warm Function"
    ],
    featuresFa: [
      "طراحی جمع‌وجور",
      "فناوری هوای سریع",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "کنترل ۱۰ سرعته",
      "عملکرد تک‌لمسی",
      "قابلیت Keep Warm"
    ],
    specs: {
      Power: "1735 Watt",
      Capacity: "4.2 L",
      Presets: "6 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.4,
    reviews: 1591,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI522"
  },
  {
    id: "kitchenaid-air-fryer-369",
    name: "KitchenAid Air Fryer KI528Pro",
    nameFa: "سرخ‌کن بدون روغن کیتچن‌اید مدل KI528Pro",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 23782811,
    originalPrice: 30100000,
    description: "Air Fryer from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سرخ‌کن بدون روغن از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "10-Speed Control",
      "One-Touch Operation",
      "Dishwasher Safe Parts",
      "Keep Warm Function",
      "Companion App with Recipes",
      "Compact Footprint Design"
    ],
    featuresFa: [
      "کنترل ۱۰ سرعته",
      "عملکرد تک‌لمسی",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "قابلیت Keep Warm",
      "اپلیکیشن همراه با دستور غذا",
      "طراحی جمع‌وجور"
    ],
    specs: {
      Power: "1882 Watt",
      Capacity: "2.6 L",
      Presets: "4 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.8,
    reviews: 935,
    isNew: true,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI528Pro"
  },
  {
    id: "kitchenaid-coffee-maker-370",
    name: "KitchenAid Coffee Maker KI630Pro",
    nameFa: "قهوه‌ساز کیتچن‌اید مدل KI630Pro",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 37837425,
    description: "Coffee Maker from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "قهوه‌ساز از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Keep Warm Function",
      "Companion App with Recipes",
      "10-Speed Control",
      "Smart Preset Programs",
      "Compact Footprint Design",
      "One-Touch Operation"
    ],
    featuresFa: [
      "قابلیت Keep Warm",
      "اپلیکیشن همراه با دستور غذا",
      "کنترل ۱۰ سرعته",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "طراحی جمع‌وجور",
      "عملکرد تک‌لمسی"
    ],
    specs: {
      Power: "2170 Watt",
      Capacity: "7 L",
      Presets: "3 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.4,
    reviews: 801,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI630Pro"
  },
  {
    id: "kitchenaid-stand-mixer-371",
    name: "KitchenAid Stand Mixer KI790Pro",
    nameFa: "میکسر ایستاده کیتچن‌اید مدل KI790Pro",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 22526311,
    description: "Stand Mixer from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "میکسر ایستاده از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Keep Warm Function",
      "One-Touch Operation",
      "Rapid Air Technology",
      "Smart Preset Programs",
      "Compact Footprint Design",
      "Dishwasher Safe Parts"
    ],
    featuresFa: [
      "قابلیت Keep Warm",
      "عملکرد تک‌لمسی",
      "فناوری هوای سریع",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "طراحی جمع‌وجور",
      "قطعات قابل شستشو در ماشین ظرفشویی"
    ],
    specs: {
      Power: "1151 Watt",
      Capacity: "5 L",
      Presets: "7 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.4,
    reviews: 571,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI790Pro"
  },
  {
    id: "kitchenaid-stand-mixer-372",
    name: "KitchenAid Stand Mixer KI658Neo",
    nameFa: "میکسر ایستاده کیتچن‌اید مدل KI658Neo",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 19596320,
    originalPrice: 24400000,
    description: "Stand Mixer from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "میکسر ایستاده از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Rapid Air Technology",
      "Dishwasher Safe Parts",
      "10-Speed Control",
      "One-Touch Operation",
      "Smart Preset Programs",
      "Keep Warm Function"
    ],
    featuresFa: [
      "فناوری هوای سریع",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "کنترل ۱۰ سرعته",
      "عملکرد تک‌لمسی",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "قابلیت Keep Warm"
    ],
    specs: {
      Power: "1069 Watt",
      Capacity: "5.8 L",
      Presets: "4 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.1,
    reviews: 3129,
    badge: "Editor's Choice",
    isBestseller: true,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI658Neo"
  },
  {
    id: "kitchenaid-blender-373",
    name: "KitchenAid Blender KI239Neo",
    nameFa: "مخلوط‌کن کیتچن‌اید مدل KI239Neo",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 15128167,
    description: "Blender from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مخلوط‌کن از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Preset Programs",
      "Dishwasher Safe Parts",
      "Rapid Air Technology",
      "Compact Footprint Design",
      "Keep Warm Function",
      "Companion App with Recipes"
    ],
    featuresFa: [
      "برنامه‌های هوشمند پیش‌تنظیم",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "فناوری هوای سریع",
      "طراحی جمع‌وجور",
      "قابلیت Keep Warm",
      "اپلیکیشن همراه با دستور غذا"
    ],
    specs: {
      Power: "977 Watt",
      Capacity: "7.8 L",
      Presets: "4 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.1,
    reviews: 2368,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI239Neo"
  },
  {
    id: "kitchenaid-stand-mixer-374",
    name: "KitchenAid Stand Mixer KI987X",
    nameFa: "میکسر ایستاده کیتچن‌اید مدل KI987X",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 29234353,
    description: "Stand Mixer from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "میکسر ایستاده از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Preset Programs",
      "One-Touch Operation",
      "10-Speed Control",
      "Dishwasher Safe Parts",
      "Rapid Air Technology",
      "Compact Footprint Design"
    ],
    featuresFa: [
      "برنامه‌های هوشمند پیش‌تنظیم",
      "عملکرد تک‌لمسی",
      "کنترل ۱۰ سرعته",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "فناوری هوای سریع",
      "طراحی جمع‌وجور"
    ],
    specs: {
      Power: "2007 Watt",
      Capacity: "7.4 L",
      Presets: "6 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.4,
    reviews: 2203,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI987X"
  },
  {
    id: "kitchenaid-blender-375",
    name: "KitchenAid Blender KI531S",
    nameFa: "مخلوط‌کن کیتچن‌اید مدل KI531S",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 22935412,
    originalPrice: 28500000,
    description: "Blender from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مخلوط‌کن از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "10-Speed Control",
      "Smart Preset Programs",
      "Dishwasher Safe Parts",
      "Companion App with Recipes",
      "Rapid Air Technology",
      "One-Touch Operation"
    ],
    featuresFa: [
      "کنترل ۱۰ سرعته",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "اپلیکیشن همراه با دستور غذا",
      "فناوری هوای سریع",
      "عملکرد تک‌لمسی"
    ],
    specs: {
      Power: "1946 Watt",
      Capacity: "1.5 L",
      Presets: "5 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.4,
    reviews: 2866,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI531S"
  },
  {
    id: "kitchenaid-air-fryer-376",
    name: "KitchenAid Air Fryer KI322Neo",
    nameFa: "سرخ‌کن بدون روغن کیتچن‌اید مدل KI322Neo",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 23685076,
    description: "Air Fryer from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سرخ‌کن بدون روغن از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Dishwasher Safe Parts",
      "Keep Warm Function",
      "Rapid Air Technology",
      "10-Speed Control",
      "Compact Footprint Design",
      "Smart Preset Programs"
    ],
    featuresFa: [
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "قابلیت Keep Warm",
      "فناوری هوای سریع",
      "کنترل ۱۰ سرعته",
      "طراحی جمع‌وجور",
      "برنامه‌های هوشمند پیش‌تنظیم"
    ],
    specs: {
      Power: "1077 Watt",
      Capacity: "2.6 L",
      Presets: "6 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.8,
    reviews: 41,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI322Neo"
  },
  {
    id: "kitchenaid-air-fryer-377",
    name: "KitchenAid Air Fryer KI169Neo",
    nameFa: "سرخ‌کن بدون روغن کیتچن‌اید مدل KI169Neo",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 12851870,
    description: "Air Fryer from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سرخ‌کن بدون روغن از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Dishwasher Safe Parts",
      "Companion App with Recipes",
      "Compact Footprint Design",
      "Keep Warm Function",
      "Rapid Air Technology",
      "10-Speed Control"
    ],
    featuresFa: [
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "اپلیکیشن همراه با دستور غذا",
      "طراحی جمع‌وجور",
      "قابلیت Keep Warm",
      "فناوری هوای سریع",
      "کنترل ۱۰ سرعته"
    ],
    specs: {
      Power: "1205 Watt",
      Capacity: "1.6 L",
      Presets: "4 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.8,
    reviews: 1729,
    isBestseller: true,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI169Neo"
  },
  {
    id: "kitchenaid-coffee-maker-378",
    name: "KitchenAid Coffee Maker KI180S",
    nameFa: "قهوه‌ساز کیتچن‌اید مدل KI180S",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 25364748,
    description: "Coffee Maker from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "قهوه‌ساز از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "One-Touch Operation",
      "Compact Footprint Design",
      "Rapid Air Technology",
      "Dishwasher Safe Parts",
      "Companion App with Recipes",
      "Smart Preset Programs"
    ],
    featuresFa: [
      "عملکرد تک‌لمسی",
      "طراحی جمع‌وجور",
      "فناوری هوای سریع",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "اپلیکیشن همراه با دستور غذا",
      "برنامه‌های هوشمند پیش‌تنظیم"
    ],
    specs: {
      Power: "1620 Watt",
      Capacity: "2.6 L",
      Presets: "7 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.1,
    reviews: 670,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI180S"
  },
  {
    id: "kitchenaid-stand-mixer-379",
    name: "KitchenAid Stand Mixer KI873X",
    nameFa: "میکسر ایستاده کیتچن‌اید مدل KI873X",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 24825362,
    description: "Stand Mixer from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "میکسر ایستاده از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "One-Touch Operation",
      "Smart Preset Programs",
      "Dishwasher Safe Parts",
      "Compact Footprint Design",
      "Keep Warm Function",
      "Rapid Air Technology"
    ],
    featuresFa: [
      "عملکرد تک‌لمسی",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "طراحی جمع‌وجور",
      "قابلیت Keep Warm",
      "فناوری هوای سریع"
    ],
    specs: {
      Power: "821 Watt",
      Capacity: "6 L",
      Presets: "3 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.6,
    reviews: 616,
    isBestseller: true,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI873X"
  },
  {
    id: "kitchenaid-blender-380",
    name: "KitchenAid Blender KI772Neo",
    nameFa: "مخلوط‌کن کیتچن‌اید مدل KI772Neo",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 33622986,
    description: "Blender from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مخلوط‌کن از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "10-Speed Control",
      "One-Touch Operation",
      "Dishwasher Safe Parts",
      "Rapid Air Technology",
      "Keep Warm Function",
      "Smart Preset Programs"
    ],
    featuresFa: [
      "کنترل ۱۰ سرعته",
      "عملکرد تک‌لمسی",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "فناوری هوای سریع",
      "قابلیت Keep Warm",
      "برنامه‌های هوشمند پیش‌تنظیم"
    ],
    specs: {
      Power: "382 Watt",
      Capacity: "3.6 L",
      Presets: "6 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.1,
    reviews: 2164,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI772Neo"
  },
  {
    id: "kitchenaid-stand-mixer-381",
    name: "KitchenAid Stand Mixer KI232Plus",
    nameFa: "میکسر ایستاده کیتچن‌اید مدل KI232Plus",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 23503580,
    originalPrice: 27900000,
    description: "Stand Mixer from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "میکسر ایستاده از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "One-Touch Operation",
      "Rapid Air Technology",
      "Keep Warm Function",
      "Compact Footprint Design",
      "Companion App with Recipes",
      "10-Speed Control"
    ],
    featuresFa: [
      "عملکرد تک‌لمسی",
      "فناوری هوای سریع",
      "قابلیت Keep Warm",
      "طراحی جمع‌وجور",
      "اپلیکیشن همراه با دستور غذا",
      "کنترل ۱۰ سرعته"
    ],
    specs: {
      Power: "1517 Watt",
      Capacity: "3.4 L",
      Presets: "6 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.3,
    reviews: 2514,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI232Plus"
  },
  {
    id: "kitchenaid-food-processor-382",
    name: "KitchenAid Food Processor KI570Plus",
    nameFa: "غذاساز کیتچن‌اید مدل KI570Plus",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 33052448,
    originalPrice: 38400000,
    description: "Food Processor from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "غذاساز از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "One-Touch Operation",
      "Keep Warm Function",
      "Companion App with Recipes",
      "Dishwasher Safe Parts",
      "Rapid Air Technology",
      "10-Speed Control"
    ],
    featuresFa: [
      "عملکرد تک‌لمسی",
      "قابلیت Keep Warm",
      "اپلیکیشن همراه با دستور غذا",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "فناوری هوای سریع",
      "کنترل ۱۰ سرعته"
    ],
    specs: {
      Power: "895 Watt",
      Capacity: "5.3 L",
      Presets: "5 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.4,
    reviews: 1077,
    badge: "Popular",
    isBestseller: true,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI570Plus"
  },
  {
    id: "kitchenaid-blender-383",
    name: "KitchenAid Blender KI314",
    nameFa: "مخلوط‌کن کیتچن‌اید مدل KI314",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 31775452,
    description: "Blender from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مخلوط‌کن از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Compact Footprint Design",
      "Keep Warm Function",
      "Companion App with Recipes",
      "10-Speed Control",
      "One-Touch Operation",
      "Dishwasher Safe Parts"
    ],
    featuresFa: [
      "طراحی جمع‌وجور",
      "قابلیت Keep Warm",
      "اپلیکیشن همراه با دستور غذا",
      "کنترل ۱۰ سرعته",
      "عملکرد تک‌لمسی",
      "قطعات قابل شستشو در ماشین ظرفشویی"
    ],
    specs: {
      Power: "2207 Watt",
      Capacity: "2.9 L",
      Presets: "6 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.6,
    reviews: 2157,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI314"
  },
  {
    id: "kitchenaid-stand-mixer-384",
    name: "KitchenAid Stand Mixer KI291X",
    nameFa: "میکسر ایستاده کیتچن‌اید مدل KI291X",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 14931848,
    description: "Stand Mixer from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "میکسر ایستاده از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Preset Programs",
      "One-Touch Operation",
      "Dishwasher Safe Parts",
      "Rapid Air Technology",
      "Compact Footprint Design",
      "Companion App with Recipes"
    ],
    featuresFa: [
      "برنامه‌های هوشمند پیش‌تنظیم",
      "عملکرد تک‌لمسی",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "فناوری هوای سریع",
      "طراحی جمع‌وجور",
      "اپلیکیشن همراه با دستور غذا"
    ],
    specs: {
      Power: "2164 Watt",
      Capacity: "1.3 L",
      Presets: "7 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.2,
    reviews: 452,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI291X"
  },
  {
    id: "kitchenaid-microwave-oven-385",
    name: "KitchenAid Microwave Oven KI104X",
    nameFa: "مایکروویو کیتچن‌اید مدل KI104X",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 10543996,
    description: "Microwave Oven from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مایکروویو از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Dishwasher Safe Parts",
      "Rapid Air Technology",
      "10-Speed Control",
      "Compact Footprint Design",
      "One-Touch Operation",
      "Companion App with Recipes"
    ],
    featuresFa: [
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "فناوری هوای سریع",
      "کنترل ۱۰ سرعته",
      "طراحی جمع‌وجور",
      "عملکرد تک‌لمسی",
      "اپلیکیشن همراه با دستور غذا"
    ],
    specs: {
      Power: "888 Watt",
      Capacity: "5.6 L",
      Presets: "4 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.8,
    reviews: 2083,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI104X"
  },
  {
    id: "kitchenaid-blender-386",
    name: "KitchenAid Blender KI875Pro",
    nameFa: "مخلوط‌کن کیتچن‌اید مدل KI875Pro",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 9795725,
    originalPrice: 12100000,
    description: "Blender from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مخلوط‌کن از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Keep Warm Function",
      "Companion App with Recipes",
      "Dishwasher Safe Parts",
      "Smart Preset Programs",
      "Rapid Air Technology",
      "10-Speed Control"
    ],
    featuresFa: [
      "قابلیت Keep Warm",
      "اپلیکیشن همراه با دستور غذا",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "فناوری هوای سریع",
      "کنترل ۱۰ سرعته"
    ],
    specs: {
      Power: "2078 Watt",
      Capacity: "5.8 L",
      Presets: "6 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.3,
    reviews: 1325,
    isNew: true,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI875Pro"
  },
  {
    id: "kitchenaid-microwave-oven-387",
    name: "KitchenAid Microwave Oven KI921",
    nameFa: "مایکروویو کیتچن‌اید مدل KI921",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 35743323,
    originalPrice: 46500000,
    description: "Microwave Oven from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مایکروویو از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Keep Warm Function",
      "Dishwasher Safe Parts",
      "Compact Footprint Design",
      "Companion App with Recipes",
      "10-Speed Control",
      "Rapid Air Technology"
    ],
    featuresFa: [
      "قابلیت Keep Warm",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "طراحی جمع‌وجور",
      "اپلیکیشن همراه با دستور غذا",
      "کنترل ۱۰ سرعته",
      "فناوری هوای سریع"
    ],
    specs: {
      Power: "997 Watt",
      Capacity: "4.4 L",
      Presets: "5 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.3,
    reviews: 17,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI921"
  },
  {
    id: "kitchenaid-air-fryer-388",
    name: "KitchenAid Air Fryer KI633Plus",
    nameFa: "سرخ‌کن بدون روغن کیتچن‌اید مدل KI633Plus",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 22049407,
    originalPrice: 28300000,
    description: "Air Fryer from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سرخ‌کن بدون روغن از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Preset Programs",
      "Rapid Air Technology",
      "Companion App with Recipes",
      "Dishwasher Safe Parts",
      "Compact Footprint Design",
      "Keep Warm Function"
    ],
    featuresFa: [
      "برنامه‌های هوشمند پیش‌تنظیم",
      "فناوری هوای سریع",
      "اپلیکیشن همراه با دستور غذا",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "طراحی جمع‌وجور",
      "قابلیت Keep Warm"
    ],
    specs: {
      Power: "2237 Watt",
      Capacity: "6.3 L",
      Presets: "5 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.7,
    reviews: 3021,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI633Plus"
  },
  {
    id: "kitchenaid-food-processor-389",
    name: "KitchenAid Food Processor KI839S",
    nameFa: "غذاساز کیتچن‌اید مدل KI839S",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 36923804,
    description: "Food Processor from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "غذاساز از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Preset Programs",
      "Dishwasher Safe Parts",
      "Companion App with Recipes",
      "Rapid Air Technology",
      "One-Touch Operation",
      "10-Speed Control"
    ],
    featuresFa: [
      "برنامه‌های هوشمند پیش‌تنظیم",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "اپلیکیشن همراه با دستور غذا",
      "فناوری هوای سریع",
      "عملکرد تک‌لمسی",
      "کنترل ۱۰ سرعته"
    ],
    specs: {
      Power: "1054 Watt",
      Capacity: "2.4 L",
      Presets: "6 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.3,
    reviews: 640,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI839S"
  },
  {
    id: "kitchenaid-blender-390",
    name: "KitchenAid Blender KI407S",
    nameFa: "مخلوط‌کن کیتچن‌اید مدل KI407S",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 35510812,
    originalPrice: 42200000,
    description: "Blender from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مخلوط‌کن از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Dishwasher Safe Parts",
      "One-Touch Operation",
      "10-Speed Control",
      "Smart Preset Programs",
      "Companion App with Recipes",
      "Rapid Air Technology"
    ],
    featuresFa: [
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "عملکرد تک‌لمسی",
      "کنترل ۱۰ سرعته",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "اپلیکیشن همراه با دستور غذا",
      "فناوری هوای سریع"
    ],
    specs: {
      Power: "1516 Watt",
      Capacity: "7.6 L",
      Presets: "7 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.9,
    reviews: 969,
    isBestseller: true,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI407S"
  },
  {
    id: "kitchenaid-blender-391",
    name: "KitchenAid Blender KI603Neo",
    nameFa: "مخلوط‌کن کیتچن‌اید مدل KI603Neo",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 27396166,
    originalPrice: 36900000,
    description: "Blender from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مخلوط‌کن از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Rapid Air Technology",
      "Compact Footprint Design",
      "Smart Preset Programs",
      "Keep Warm Function",
      "Dishwasher Safe Parts",
      "Companion App with Recipes"
    ],
    featuresFa: [
      "فناوری هوای سریع",
      "طراحی جمع‌وجور",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "قابلیت Keep Warm",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "اپلیکیشن همراه با دستور غذا"
    ],
    specs: {
      Power: "2219 Watt",
      Capacity: "6.4 L",
      Presets: "8 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.9,
    reviews: 400,
    isBestseller: true,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI603Neo"
  },
  {
    id: "kitchenaid-stand-mixer-392",
    name: "KitchenAid Stand Mixer KI761Neo",
    nameFa: "میکسر ایستاده کیتچن‌اید مدل KI761Neo",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 23422423,
    originalPrice: 28700000,
    description: "Stand Mixer from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "میکسر ایستاده از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "One-Touch Operation",
      "Compact Footprint Design",
      "Companion App with Recipes",
      "Dishwasher Safe Parts",
      "Keep Warm Function",
      "10-Speed Control"
    ],
    featuresFa: [
      "عملکرد تک‌لمسی",
      "طراحی جمع‌وجور",
      "اپلیکیشن همراه با دستور غذا",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "قابلیت Keep Warm",
      "کنترل ۱۰ سرعته"
    ],
    specs: {
      Power: "1645 Watt",
      Capacity: "2 L",
      Presets: "5 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.2,
    reviews: 1218,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI761Neo"
  },
  {
    id: "kitchenaid-food-processor-393",
    name: "KitchenAid Food Processor KI587S",
    nameFa: "غذاساز کیتچن‌اید مدل KI587S",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 10099622,
    description: "Food Processor from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "غذاساز از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Rapid Air Technology",
      "Smart Preset Programs",
      "Compact Footprint Design",
      "Dishwasher Safe Parts",
      "10-Speed Control",
      "Keep Warm Function"
    ],
    featuresFa: [
      "فناوری هوای سریع",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "طراحی جمع‌وجور",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "کنترل ۱۰ سرعته",
      "قابلیت Keep Warm"
    ],
    specs: {
      Power: "2297 Watt",
      Capacity: "4.7 L",
      Presets: "8 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.1,
    reviews: 1097,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI587S"
  },
  {
    id: "kitchenaid-blender-394",
    name: "KitchenAid Blender KI454Pro",
    nameFa: "مخلوط‌کن کیتچن‌اید مدل KI454Pro",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 21220886,
    description: "Blender from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مخلوط‌کن از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Compact Footprint Design",
      "Smart Preset Programs",
      "Rapid Air Technology",
      "Companion App with Recipes",
      "Dishwasher Safe Parts",
      "10-Speed Control"
    ],
    featuresFa: [
      "طراحی جمع‌وجور",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "فناوری هوای سریع",
      "اپلیکیشن همراه با دستور غذا",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "کنترل ۱۰ سرعته"
    ],
    specs: {
      Power: "1297 Watt",
      Capacity: "5 L",
      Presets: "4 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4,
    reviews: 2634,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI454Pro"
  },
  {
    id: "kitchenaid-blender-395",
    name: "KitchenAid Blender KI317S",
    nameFa: "مخلوط‌کن کیتچن‌اید مدل KI317S",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 35511020,
    originalPrice: 45500000,
    description: "Blender from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مخلوط‌کن از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Companion App with Recipes",
      "One-Touch Operation",
      "Smart Preset Programs",
      "Keep Warm Function",
      "Compact Footprint Design",
      "Rapid Air Technology"
    ],
    featuresFa: [
      "اپلیکیشن همراه با دستور غذا",
      "عملکرد تک‌لمسی",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "قابلیت Keep Warm",
      "طراحی جمع‌وجور",
      "فناوری هوای سریع"
    ],
    specs: {
      Power: "2045 Watt",
      Capacity: "6.5 L",
      Presets: "7 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.7,
    reviews: 694,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI317S"
  },
  {
    id: "kitchenaid-coffee-maker-396",
    name: "KitchenAid Coffee Maker KI298Plus",
    nameFa: "قهوه‌ساز کیتچن‌اید مدل KI298Plus",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 37326635,
    originalPrice: 47900000,
    description: "Coffee Maker from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "قهوه‌ساز از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Preset Programs",
      "One-Touch Operation",
      "Compact Footprint Design",
      "Companion App with Recipes",
      "Dishwasher Safe Parts",
      "Rapid Air Technology"
    ],
    featuresFa: [
      "برنامه‌های هوشمند پیش‌تنظیم",
      "عملکرد تک‌لمسی",
      "طراحی جمع‌وجور",
      "اپلیکیشن همراه با دستور غذا",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "فناوری هوای سریع"
    ],
    specs: {
      Power: "1625 Watt",
      Capacity: "1.4 L",
      Presets: "6 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.3,
    reviews: 1543,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI298Plus"
  },
  {
    id: "kitchenaid-food-processor-397",
    name: "KitchenAid Food Processor KI868Pro",
    nameFa: "غذاساز کیتچن‌اید مدل KI868Pro",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 28087660,
    originalPrice: 32400000,
    description: "Food Processor from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "غذاساز از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Companion App with Recipes",
      "10-Speed Control",
      "Dishwasher Safe Parts",
      "Compact Footprint Design",
      "Smart Preset Programs",
      "Keep Warm Function"
    ],
    featuresFa: [
      "اپلیکیشن همراه با دستور غذا",
      "کنترل ۱۰ سرعته",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "طراحی جمع‌وجور",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "قابلیت Keep Warm"
    ],
    specs: {
      Power: "1554 Watt",
      Capacity: "6.3 L",
      Presets: "7 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.5,
    reviews: 1823,
    isNew: true,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI868Pro"
  },
  {
    id: "kitchenaid-stand-mixer-398",
    name: "KitchenAid Stand Mixer KI950X",
    nameFa: "میکسر ایستاده کیتچن‌اید مدل KI950X",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 32306531,
    originalPrice: 41400000,
    description: "Stand Mixer from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "میکسر ایستاده از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Compact Footprint Design",
      "One-Touch Operation",
      "Companion App with Recipes",
      "Dishwasher Safe Parts",
      "Rapid Air Technology",
      "10-Speed Control"
    ],
    featuresFa: [
      "طراحی جمع‌وجور",
      "عملکرد تک‌لمسی",
      "اپلیکیشن همراه با دستور غذا",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "فناوری هوای سریع",
      "کنترل ۱۰ سرعته"
    ],
    specs: {
      Power: "921 Watt",
      Capacity: "2.3 L",
      Presets: "8 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.6,
    reviews: 2398,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI950X"
  },
  {
    id: "kitchenaid-stand-mixer-399",
    name: "KitchenAid Stand Mixer KI739X",
    nameFa: "میکسر ایستاده کیتچن‌اید مدل KI739X",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 36074260,
    description: "Stand Mixer from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "میکسر ایستاده از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Companion App with Recipes",
      "10-Speed Control",
      "Dishwasher Safe Parts",
      "Smart Preset Programs",
      "One-Touch Operation",
      "Compact Footprint Design"
    ],
    featuresFa: [
      "اپلیکیشن همراه با دستور غذا",
      "کنترل ۱۰ سرعته",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "عملکرد تک‌لمسی",
      "طراحی جمع‌وجور"
    ],
    specs: {
      Power: "1649 Watt",
      Capacity: "2.2 L",
      Presets: "6 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.5,
    reviews: 2023,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI739X"
  },
  {
    id: "kitchenaid-air-fryer-400",
    name: "KitchenAid Air Fryer KI514X",
    nameFa: "سرخ‌کن بدون روغن کیتچن‌اید مدل KI514X",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 16035343,
    originalPrice: 17900000,
    description: "Air Fryer from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سرخ‌کن بدون روغن از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "10-Speed Control",
      "Keep Warm Function",
      "Companion App with Recipes",
      "Rapid Air Technology",
      "Dishwasher Safe Parts",
      "Compact Footprint Design"
    ],
    featuresFa: [
      "کنترل ۱۰ سرعته",
      "قابلیت Keep Warm",
      "اپلیکیشن همراه با دستور غذا",
      "فناوری هوای سریع",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "طراحی جمع‌وجور"
    ],
    specs: {
      Power: "492 Watt",
      Capacity: "7.6 L",
      Presets: "6 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.6,
    reviews: 1246,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI514X"
  },
  {
    id: "kitchenaid-air-fryer-401",
    name: "KitchenAid Air Fryer KI814Neo",
    nameFa: "سرخ‌کن بدون روغن کیتچن‌اید مدل KI814Neo",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 35842683,
    originalPrice: 47600000,
    description: "Air Fryer from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سرخ‌کن بدون روغن از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "10-Speed Control",
      "Dishwasher Safe Parts",
      "Smart Preset Programs",
      "Compact Footprint Design",
      "Companion App with Recipes",
      "Keep Warm Function"
    ],
    featuresFa: [
      "کنترل ۱۰ سرعته",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "طراحی جمع‌وجور",
      "اپلیکیشن همراه با دستور غذا",
      "قابلیت Keep Warm"
    ],
    specs: {
      Power: "401 Watt",
      Capacity: "4.8 L",
      Presets: "5 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.3,
    reviews: 2074,
    isBestseller: true,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI814Neo"
  },
  {
    id: "kitchenaid-air-fryer-402",
    name: "KitchenAid Air Fryer KI158Plus",
    nameFa: "سرخ‌کن بدون روغن کیتچن‌اید مدل KI158Plus",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 16969642,
    originalPrice: 18800000,
    description: "Air Fryer from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "سرخ‌کن بدون روغن از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Companion App with Recipes",
      "Keep Warm Function",
      "Smart Preset Programs",
      "Compact Footprint Design",
      "10-Speed Control",
      "Dishwasher Safe Parts"
    ],
    featuresFa: [
      "اپلیکیشن همراه با دستور غذا",
      "قابلیت Keep Warm",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "طراحی جمع‌وجور",
      "کنترل ۱۰ سرعته",
      "قطعات قابل شستشو در ماشین ظرفشویی"
    ],
    specs: {
      Power: "381 Watt",
      Capacity: "3.3 L",
      Presets: "4 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.5,
    reviews: 2165,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI158Plus"
  },
  {
    id: "kitchenaid-coffee-maker-403",
    name: "KitchenAid Coffee Maker KI297S",
    nameFa: "قهوه‌ساز کیتچن‌اید مدل KI297S",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 36593217,
    originalPrice: 49100000,
    description: "Coffee Maker from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "قهوه‌ساز از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Dishwasher Safe Parts",
      "10-Speed Control",
      "Rapid Air Technology",
      "Companion App with Recipes",
      "Smart Preset Programs",
      "One-Touch Operation"
    ],
    featuresFa: [
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "کنترل ۱۰ سرعته",
      "فناوری هوای سریع",
      "اپلیکیشن همراه با دستور غذا",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "عملکرد تک‌لمسی"
    ],
    specs: {
      Power: "765 Watt",
      Capacity: "1.6 L",
      Presets: "4 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4,
    reviews: 1984,
    badge: "Top Rated",
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI297S"
  },
  {
    id: "kitchenaid-stand-mixer-404",
    name: "KitchenAid Stand Mixer KI850X",
    nameFa: "میکسر ایستاده کیتچن‌اید مدل KI850X",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 14789474,
    description: "Stand Mixer from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "میکسر ایستاده از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Keep Warm Function",
      "Companion App with Recipes",
      "Rapid Air Technology",
      "Smart Preset Programs",
      "One-Touch Operation",
      "Compact Footprint Design"
    ],
    featuresFa: [
      "قابلیت Keep Warm",
      "اپلیکیشن همراه با دستور غذا",
      "فناوری هوای سریع",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "عملکرد تک‌لمسی",
      "طراحی جمع‌وجور"
    ],
    specs: {
      Power: "1947 Watt",
      Capacity: "3.1 L",
      Presets: "6 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.8,
    reviews: 2528,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI850X"
  },
  {
    id: "kitchenaid-food-processor-405",
    name: "KitchenAid Food Processor KI798S",
    nameFa: "غذاساز کیتچن‌اید مدل KI798S",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 36331607,
    description: "Food Processor from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "غذاساز از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Preset Programs",
      "Dishwasher Safe Parts",
      "One-Touch Operation",
      "Companion App with Recipes",
      "10-Speed Control",
      "Rapid Air Technology"
    ],
    featuresFa: [
      "برنامه‌های هوشمند پیش‌تنظیم",
      "قطعات قابل شستشو در ماشین ظرفشویی",
      "عملکرد تک‌لمسی",
      "اپلیکیشن همراه با دستور غذا",
      "کنترل ۱۰ سرعته",
      "فناوری هوای سریع"
    ],
    specs: {
      Power: "2262 Watt",
      Capacity: "1.3 L",
      Presets: "6 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.5,
    reviews: 833,
    isBestseller: true,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI798S"
  },
  {
    id: "kitchenaid-blender-406",
    name: "KitchenAid Blender KI185",
    nameFa: "مخلوط‌کن کیتچن‌اید مدل KI185",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 18080327,
    description: "Blender from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "مخلوط‌کن از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Keep Warm Function",
      "10-Speed Control",
      "Rapid Air Technology",
      "Smart Preset Programs",
      "One-Touch Operation",
      "Dishwasher Safe Parts"
    ],
    featuresFa: [
      "قابلیت Keep Warm",
      "کنترل ۱۰ سرعته",
      "فناوری هوای سریع",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "عملکرد تک‌لمسی",
      "قطعات قابل شستشو در ماشین ظرفشویی"
    ],
    specs: {
      Power: "1361 Watt",
      Capacity: "1.2 L",
      Presets: "4 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1583778176476-4a8b02a76dcb?w=800&q=80",
      "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4,
    reviews: 1102,
    isBestseller: true,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI185"
  },
  {
    id: "kitchenaid-coffee-maker-407",
    name: "KitchenAid Coffee Maker KI978",
    nameFa: "قهوه‌ساز کیتچن‌اید مدل KI978",
    category: "Kitchen Appliances",
    categoryFa: "لوازم آشپزخانه",
    price: 36524109,
    description: "Coffee Maker from KitchenAid, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "قهوه‌ساز از برند کیتچن‌اید، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "10-Speed Control",
      "Compact Footprint Design",
      "Smart Preset Programs",
      "Keep Warm Function",
      "Rapid Air Technology",
      "Dishwasher Safe Parts"
    ],
    featuresFa: [
      "کنترل ۱۰ سرعته",
      "طراحی جمع‌وجور",
      "برنامه‌های هوشمند پیش‌تنظیم",
      "قابلیت Keep Warm",
      "فناوری هوای سریع",
      "قطعات قابل شستشو در ماشین ظرفشویی"
    ],
    specs: {
      Power: "2280 Watt",
      Capacity: "6.8 L",
      Presets: "3 Smart Programs",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت": "وات",
      "ظرفیت": "لیتر",
      "برنامه‌های پیش‌تنظیم": "چند برنامه هوشمند",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800&q=80"
    ],
    colors: [
      {
        name: "Black",
        nameFa: "مشکی",
        hex: "#1a1a1a"
      },
      {
        name: "White",
        nameFa: "سفید",
        hex: "#f5f0eb"
      }
    ],
    rating: 4.1,
    reviews: 1468,
    brand: "KitchenAid",
    brandFa: "کیتچن‌اید",
    model: "KI978"
  },
  {
    id: "irobot-canister-vacuum-408",
    name: "iRobot Canister Vacuum IR129Pro",
    nameFa: "جاروبرقی سطلی آی‌ربات مدل IR129Pro",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 53398773,
    description: "Canister Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "App & Voice Control",
      "Laser Dust Detection",
      "Smart Mapping Navigation",
      "HEPA H13 Filtration",
      "Pet Hair Optimized Brush",
      "60-Minute Runtime"
    ],
    featuresFa: [
      "کنترل اپلیکیشن و صدا",
      "تشخیص گرد و غبار با لیزر",
      "ناوبری نقشه‌برداری هوشمند",
      "فیلتراسیون HEPA H13",
      "برس مخصوص موی حیوانات",
      "شارژدهی تا ۶۰ دقیقه"
    ],
    specs: {
      "Suction Power": "239 AW",
      Runtime: "90 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.2,
    reviews: 587,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR129Pro"
  },
  {
    id: "irobot-cordless-stick-vacuum-409",
    name: "iRobot Cordless Stick Vacuum IR974Pro",
    nameFa: "جاروبرقی شارژی آی‌ربات مدل IR974Pro",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 49326100,
    description: "Cordless Stick Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی شارژی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "HEPA H13 Filtration",
      "Multi-Surface Sensors",
      "Smart Mapping Navigation",
      "Auto-Empty Base",
      "60-Minute Runtime",
      "Pet Hair Optimized Brush"
    ],
    featuresFa: [
      "فیلتراسیون HEPA H13",
      "سنسورهای چندسطحی",
      "ناوبری نقشه‌برداری هوشمند",
      "پایه تخلیه خودکار",
      "شارژدهی تا ۶۰ دقیقه",
      "برس مخصوص موی حیوانات"
    ],
    specs: {
      "Suction Power": "160 AW",
      Runtime: "40 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.4,
    reviews: 290,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR974Pro"
  },
  {
    id: "irobot-robot-vacuum-410",
    name: "iRobot Robot Vacuum IR703",
    nameFa: "جاروبرقی رباتیک آی‌ربات مدل IR703",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 28977433,
    description: "Robot Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی رباتیک از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "60-Minute Runtime",
      "Smart Mapping Navigation",
      "App & Voice Control",
      "Auto-Empty Base",
      "Multi-Surface Sensors",
      "HEPA H13 Filtration"
    ],
    featuresFa: [
      "شارژدهی تا ۶۰ دقیقه",
      "ناوبری نقشه‌برداری هوشمند",
      "کنترل اپلیکیشن و صدا",
      "پایه تخلیه خودکار",
      "سنسورهای چندسطحی",
      "فیلتراسیون HEPA H13"
    ],
    specs: {
      "Suction Power": "202 AW",
      Runtime: "60 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.3,
    reviews: 1815,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR703"
  },
  {
    id: "irobot-robot-vacuum-411",
    name: "iRobot Robot Vacuum IR293Pro",
    nameFa: "جاروبرقی رباتیک آی‌ربات مدل IR293Pro",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 37272527,
    originalPrice: 44300000,
    description: "Robot Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی رباتیک از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "HEPA H13 Filtration",
      "Auto-Empty Base",
      "Multi-Surface Sensors",
      "Laser Dust Detection",
      "60-Minute Runtime",
      "App & Voice Control"
    ],
    featuresFa: [
      "فیلتراسیون HEPA H13",
      "پایه تخلیه خودکار",
      "سنسورهای چندسطحی",
      "تشخیص گرد و غبار با لیزر",
      "شارژدهی تا ۶۰ دقیقه",
      "کنترل اپلیکیشن و صدا"
    ],
    specs: {
      "Suction Power": "178 AW",
      Runtime: "120 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.1,
    reviews: 1606,
    isNew: true,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR293Pro"
  },
  {
    id: "irobot-cordless-stick-vacuum-412",
    name: "iRobot Cordless Stick Vacuum IR401",
    nameFa: "جاروبرقی شارژی آی‌ربات مدل IR401",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 61308933,
    originalPrice: 76400000,
    description: "Cordless Stick Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی شارژی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "60-Minute Runtime",
      "Multi-Surface Sensors",
      "Pet Hair Optimized Brush",
      "App & Voice Control",
      "HEPA H13 Filtration",
      "Auto-Empty Base"
    ],
    featuresFa: [
      "شارژدهی تا ۶۰ دقیقه",
      "سنسورهای چندسطحی",
      "برس مخصوص موی حیوانات",
      "کنترل اپلیکیشن و صدا",
      "فیلتراسیون HEPA H13",
      "پایه تخلیه خودکار"
    ],
    specs: {
      "Suction Power": "155 AW",
      Runtime: "90 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.6,
    reviews: 561,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR401"
  },
  {
    id: "irobot-canister-vacuum-413",
    name: "iRobot Canister Vacuum IR573S",
    nameFa: "جاروبرقی سطلی آی‌ربات مدل IR573S",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 48256097,
    description: "Canister Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Auto-Empty Base",
      "Multi-Surface Sensors",
      "HEPA H13 Filtration",
      "Pet Hair Optimized Brush",
      "Smart Mapping Navigation",
      "60-Minute Runtime"
    ],
    featuresFa: [
      "پایه تخلیه خودکار",
      "سنسورهای چندسطحی",
      "فیلتراسیون HEPA H13",
      "برس مخصوص موی حیوانات",
      "ناوبری نقشه‌برداری هوشمند",
      "شارژدهی تا ۶۰ دقیقه"
    ],
    specs: {
      "Suction Power": "170 AW",
      Runtime: "120 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.7,
    reviews: 355,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR573S"
  },
  {
    id: "irobot-cordless-stick-vacuum-414",
    name: "iRobot Cordless Stick Vacuum IR884",
    nameFa: "جاروبرقی شارژی آی‌ربات مدل IR884",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 22199916,
    description: "Cordless Stick Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی شارژی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "App & Voice Control",
      "60-Minute Runtime",
      "Pet Hair Optimized Brush",
      "HEPA H13 Filtration",
      "Multi-Surface Sensors",
      "Laser Dust Detection"
    ],
    featuresFa: [
      "کنترل اپلیکیشن و صدا",
      "شارژدهی تا ۶۰ دقیقه",
      "برس مخصوص موی حیوانات",
      "فیلتراسیون HEPA H13",
      "سنسورهای چندسطحی",
      "تشخیص گرد و غبار با لیزر"
    ],
    specs: {
      "Suction Power": "225 AW",
      Runtime: "60 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.4,
    reviews: 1598,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR884"
  },
  {
    id: "irobot-canister-vacuum-415",
    name: "iRobot Canister Vacuum IR951X",
    nameFa: "جاروبرقی سطلی آی‌ربات مدل IR951X",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 35286874,
    description: "Canister Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Laser Dust Detection",
      "App & Voice Control",
      "Auto-Empty Base",
      "60-Minute Runtime",
      "Pet Hair Optimized Brush",
      "HEPA H13 Filtration"
    ],
    featuresFa: [
      "تشخیص گرد و غبار با لیزر",
      "کنترل اپلیکیشن و صدا",
      "پایه تخلیه خودکار",
      "شارژدهی تا ۶۰ دقیقه",
      "برس مخصوص موی حیوانات",
      "فیلتراسیون HEPA H13"
    ],
    specs: {
      "Suction Power": "244 AW",
      Runtime: "50 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.7,
    reviews: 1752,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR951X"
  },
  {
    id: "irobot-cordless-stick-vacuum-416",
    name: "iRobot Cordless Stick Vacuum IR192Plus",
    nameFa: "جاروبرقی شارژی آی‌ربات مدل IR192Plus",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 37969293,
    description: "Cordless Stick Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی شارژی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "HEPA H13 Filtration",
      "Laser Dust Detection",
      "Auto-Empty Base",
      "App & Voice Control",
      "60-Minute Runtime",
      "Multi-Surface Sensors"
    ],
    featuresFa: [
      "فیلتراسیون HEPA H13",
      "تشخیص گرد و غبار با لیزر",
      "پایه تخلیه خودکار",
      "کنترل اپلیکیشن و صدا",
      "شارژدهی تا ۶۰ دقیقه",
      "سنسورهای چندسطحی"
    ],
    specs: {
      "Suction Power": "249 AW",
      Runtime: "120 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.8,
    reviews: 2551,
    isBestseller: true,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR192Plus"
  },
  {
    id: "irobot-canister-vacuum-417",
    name: "iRobot Canister Vacuum IR535X",
    nameFa: "جاروبرقی سطلی آی‌ربات مدل IR535X",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 66439049,
    description: "Canister Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Auto-Empty Base",
      "60-Minute Runtime",
      "HEPA H13 Filtration",
      "Laser Dust Detection",
      "Multi-Surface Sensors",
      "Smart Mapping Navigation"
    ],
    featuresFa: [
      "پایه تخلیه خودکار",
      "شارژدهی تا ۶۰ دقیقه",
      "فیلتراسیون HEPA H13",
      "تشخیص گرد و غبار با لیزر",
      "سنسورهای چندسطحی",
      "ناوبری نقشه‌برداری هوشمند"
    ],
    specs: {
      "Suction Power": "227 AW",
      Runtime: "120 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.7,
    reviews: 3025,
    isNew: true,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR535X"
  },
  {
    id: "irobot-canister-vacuum-418",
    name: "iRobot Canister Vacuum IR577",
    nameFa: "جاروبرقی سطلی آی‌ربات مدل IR577",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 49247673,
    originalPrice: 63800000,
    description: "Canister Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "App & Voice Control",
      "60-Minute Runtime",
      "HEPA H13 Filtration",
      "Auto-Empty Base",
      "Multi-Surface Sensors",
      "Smart Mapping Navigation"
    ],
    featuresFa: [
      "کنترل اپلیکیشن و صدا",
      "شارژدهی تا ۶۰ دقیقه",
      "فیلتراسیون HEPA H13",
      "پایه تخلیه خودکار",
      "سنسورهای چندسطحی",
      "ناوبری نقشه‌برداری هوشمند"
    ],
    specs: {
      "Suction Power": "176 AW",
      Runtime: "90 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.1,
    reviews: 1798,
    badge: "Top Rated",
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR577"
  },
  {
    id: "irobot-wet-dry-vacuum-419",
    name: "iRobot Wet & Dry Vacuum IR356X",
    nameFa: "جاروبرقی خشک و تر آی‌ربات مدل IR356X",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 33791922,
    description: "Wet & Dry Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی خشک و تر از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Auto-Empty Base",
      "Smart Mapping Navigation",
      "Multi-Surface Sensors",
      "Pet Hair Optimized Brush",
      "60-Minute Runtime",
      "Laser Dust Detection"
    ],
    featuresFa: [
      "پایه تخلیه خودکار",
      "ناوبری نقشه‌برداری هوشمند",
      "سنسورهای چندسطحی",
      "برس مخصوص موی حیوانات",
      "شارژدهی تا ۶۰ دقیقه",
      "تشخیص گرد و غبار با لیزر"
    ],
    specs: {
      "Suction Power": "165 AW",
      Runtime: "90 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.6,
    reviews: 1364,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR356X"
  },
  {
    id: "irobot-cordless-stick-vacuum-420",
    name: "iRobot Cordless Stick Vacuum IR149Plus",
    nameFa: "جاروبرقی شارژی آی‌ربات مدل IR149Plus",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 47278305,
    originalPrice: 63300000,
    description: "Cordless Stick Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی شارژی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Pet Hair Optimized Brush",
      "App & Voice Control",
      "Laser Dust Detection",
      "HEPA H13 Filtration",
      "Auto-Empty Base",
      "Multi-Surface Sensors"
    ],
    featuresFa: [
      "برس مخصوص موی حیوانات",
      "کنترل اپلیکیشن و صدا",
      "تشخیص گرد و غبار با لیزر",
      "فیلتراسیون HEPA H13",
      "پایه تخلیه خودکار",
      "سنسورهای چندسطحی"
    ],
    specs: {
      "Suction Power": "245 AW",
      Runtime: "90 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.5,
    reviews: 644,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR149Plus"
  },
  {
    id: "irobot-cordless-stick-vacuum-421",
    name: "iRobot Cordless Stick Vacuum IR705",
    nameFa: "جاروبرقی شارژی آی‌ربات مدل IR705",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 52439753,
    description: "Cordless Stick Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی شارژی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Laser Dust Detection",
      "Multi-Surface Sensors",
      "HEPA H13 Filtration",
      "Auto-Empty Base",
      "Smart Mapping Navigation",
      "App & Voice Control"
    ],
    featuresFa: [
      "تشخیص گرد و غبار با لیزر",
      "سنسورهای چندسطحی",
      "فیلتراسیون HEPA H13",
      "پایه تخلیه خودکار",
      "ناوبری نقشه‌برداری هوشمند",
      "کنترل اپلیکیشن و صدا"
    ],
    specs: {
      "Suction Power": "166 AW",
      Runtime: "50 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.2,
    reviews: 2265,
    isBestseller: true,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR705"
  },
  {
    id: "irobot-cordless-stick-vacuum-422",
    name: "iRobot Cordless Stick Vacuum IR340S",
    nameFa: "جاروبرقی شارژی آی‌ربات مدل IR340S",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 46241389,
    description: "Cordless Stick Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی شارژی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Laser Dust Detection",
      "Pet Hair Optimized Brush",
      "Smart Mapping Navigation",
      "App & Voice Control",
      "Multi-Surface Sensors",
      "HEPA H13 Filtration"
    ],
    featuresFa: [
      "تشخیص گرد و غبار با لیزر",
      "برس مخصوص موی حیوانات",
      "ناوبری نقشه‌برداری هوشمند",
      "کنترل اپلیکیشن و صدا",
      "سنسورهای چندسطحی",
      "فیلتراسیون HEPA H13"
    ],
    specs: {
      "Suction Power": "253 AW",
      Runtime: "90 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.1,
    reviews: 2493,
    isNew: true,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR340S"
  },
  {
    id: "irobot-wet-dry-vacuum-423",
    name: "iRobot Wet & Dry Vacuum IR663S",
    nameFa: "جاروبرقی خشک و تر آی‌ربات مدل IR663S",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 40995495,
    description: "Wet & Dry Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی خشک و تر از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "HEPA H13 Filtration",
      "App & Voice Control",
      "Pet Hair Optimized Brush",
      "Laser Dust Detection",
      "Multi-Surface Sensors",
      "60-Minute Runtime"
    ],
    featuresFa: [
      "فیلتراسیون HEPA H13",
      "کنترل اپلیکیشن و صدا",
      "برس مخصوص موی حیوانات",
      "تشخیص گرد و غبار با لیزر",
      "سنسورهای چندسطحی",
      "شارژدهی تا ۶۰ دقیقه"
    ],
    specs: {
      "Suction Power": "155 AW",
      Runtime: "50 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.6,
    reviews: 89,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR663S"
  },
  {
    id: "irobot-wet-dry-vacuum-424",
    name: "iRobot Wet & Dry Vacuum IR697X",
    nameFa: "جاروبرقی خشک و تر آی‌ربات مدل IR697X",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 48398211,
    description: "Wet & Dry Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی خشک و تر از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "60-Minute Runtime",
      "Smart Mapping Navigation",
      "Laser Dust Detection",
      "App & Voice Control",
      "Pet Hair Optimized Brush",
      "HEPA H13 Filtration"
    ],
    featuresFa: [
      "شارژدهی تا ۶۰ دقیقه",
      "ناوبری نقشه‌برداری هوشمند",
      "تشخیص گرد و غبار با لیزر",
      "کنترل اپلیکیشن و صدا",
      "برس مخصوص موی حیوانات",
      "فیلتراسیون HEPA H13"
    ],
    specs: {
      "Suction Power": "219 AW",
      Runtime: "50 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.4,
    reviews: 644,
    isNew: true,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR697X"
  },
  {
    id: "irobot-canister-vacuum-425",
    name: "iRobot Canister Vacuum IR419S",
    nameFa: "جاروبرقی سطلی آی‌ربات مدل IR419S",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 41406098,
    description: "Canister Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "60-Minute Runtime",
      "Laser Dust Detection",
      "Auto-Empty Base",
      "Multi-Surface Sensors",
      "HEPA H13 Filtration",
      "Smart Mapping Navigation"
    ],
    featuresFa: [
      "شارژدهی تا ۶۰ دقیقه",
      "تشخیص گرد و غبار با لیزر",
      "پایه تخلیه خودکار",
      "سنسورهای چندسطحی",
      "فیلتراسیون HEPA H13",
      "ناوبری نقشه‌برداری هوشمند"
    ],
    specs: {
      "Suction Power": "157 AW",
      Runtime: "40 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.6,
    reviews: 2174,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR419S"
  },
  {
    id: "irobot-cordless-stick-vacuum-426",
    name: "iRobot Cordless Stick Vacuum IR286Pro",
    nameFa: "جاروبرقی شارژی آی‌ربات مدل IR286Pro",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 55361928,
    description: "Cordless Stick Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی شارژی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Mapping Navigation",
      "Laser Dust Detection",
      "Pet Hair Optimized Brush",
      "60-Minute Runtime",
      "Multi-Surface Sensors",
      "App & Voice Control"
    ],
    featuresFa: [
      "ناوبری نقشه‌برداری هوشمند",
      "تشخیص گرد و غبار با لیزر",
      "برس مخصوص موی حیوانات",
      "شارژدهی تا ۶۰ دقیقه",
      "سنسورهای چندسطحی",
      "کنترل اپلیکیشن و صدا"
    ],
    specs: {
      "Suction Power": "243 AW",
      Runtime: "60 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.2,
    reviews: 1892,
    isBestseller: true,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR286Pro"
  },
  {
    id: "irobot-wet-dry-vacuum-427",
    name: "iRobot Wet & Dry Vacuum IR818Neo",
    nameFa: "جاروبرقی خشک و تر آی‌ربات مدل IR818Neo",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 24232061,
    description: "Wet & Dry Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی خشک و تر از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "60-Minute Runtime",
      "App & Voice Control",
      "Smart Mapping Navigation",
      "Pet Hair Optimized Brush",
      "Laser Dust Detection",
      "Auto-Empty Base"
    ],
    featuresFa: [
      "شارژدهی تا ۶۰ دقیقه",
      "کنترل اپلیکیشن و صدا",
      "ناوبری نقشه‌برداری هوشمند",
      "برس مخصوص موی حیوانات",
      "تشخیص گرد و غبار با لیزر",
      "پایه تخلیه خودکار"
    ],
    specs: {
      "Suction Power": "172 AW",
      Runtime: "120 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.4,
    reviews: 1967,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR818Neo"
  },
  {
    id: "irobot-robot-vacuum-428",
    name: "iRobot Robot Vacuum IR647S",
    nameFa: "جاروبرقی رباتیک آی‌ربات مدل IR647S",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 33692804,
    description: "Robot Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی رباتیک از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Pet Hair Optimized Brush",
      "Laser Dust Detection",
      "HEPA H13 Filtration",
      "App & Voice Control",
      "60-Minute Runtime",
      "Multi-Surface Sensors"
    ],
    featuresFa: [
      "برس مخصوص موی حیوانات",
      "تشخیص گرد و غبار با لیزر",
      "فیلتراسیون HEPA H13",
      "کنترل اپلیکیشن و صدا",
      "شارژدهی تا ۶۰ دقیقه",
      "سنسورهای چندسطحی"
    ],
    specs: {
      "Suction Power": "170 AW",
      Runtime: "60 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.4,
    reviews: 584,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR647S"
  },
  {
    id: "irobot-wet-dry-vacuum-429",
    name: "iRobot Wet & Dry Vacuum IR403Plus",
    nameFa: "جاروبرقی خشک و تر آی‌ربات مدل IR403Plus",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 40905699,
    originalPrice: 45100000,
    description: "Wet & Dry Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی خشک و تر از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Mapping Navigation",
      "Multi-Surface Sensors",
      "Laser Dust Detection",
      "60-Minute Runtime",
      "HEPA H13 Filtration",
      "App & Voice Control"
    ],
    featuresFa: [
      "ناوبری نقشه‌برداری هوشمند",
      "سنسورهای چندسطحی",
      "تشخیص گرد و غبار با لیزر",
      "شارژدهی تا ۶۰ دقیقه",
      "فیلتراسیون HEPA H13",
      "کنترل اپلیکیشن و صدا"
    ],
    specs: {
      "Suction Power": "154 AW",
      Runtime: "40 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.1,
    reviews: 318,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR403Plus"
  },
  {
    id: "irobot-cordless-stick-vacuum-430",
    name: "iRobot Cordless Stick Vacuum IR826S",
    nameFa: "جاروبرقی شارژی آی‌ربات مدل IR826S",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 35607776,
    description: "Cordless Stick Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی شارژی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "HEPA H13 Filtration",
      "Smart Mapping Navigation",
      "60-Minute Runtime",
      "Pet Hair Optimized Brush",
      "Multi-Surface Sensors",
      "Laser Dust Detection"
    ],
    featuresFa: [
      "فیلتراسیون HEPA H13",
      "ناوبری نقشه‌برداری هوشمند",
      "شارژدهی تا ۶۰ دقیقه",
      "برس مخصوص موی حیوانات",
      "سنسورهای چندسطحی",
      "تشخیص گرد و غبار با لیزر"
    ],
    specs: {
      "Suction Power": "193 AW",
      Runtime: "40 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.7,
    reviews: 1271,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR826S"
  },
  {
    id: "irobot-canister-vacuum-431",
    name: "iRobot Canister Vacuum IR253S",
    nameFa: "جاروبرقی سطلی آی‌ربات مدل IR253S",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 50570858,
    description: "Canister Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "App & Voice Control",
      "HEPA H13 Filtration",
      "60-Minute Runtime",
      "Laser Dust Detection",
      "Auto-Empty Base",
      "Smart Mapping Navigation"
    ],
    featuresFa: [
      "کنترل اپلیکیشن و صدا",
      "فیلتراسیون HEPA H13",
      "شارژدهی تا ۶۰ دقیقه",
      "تشخیص گرد و غبار با لیزر",
      "پایه تخلیه خودکار",
      "ناوبری نقشه‌برداری هوشمند"
    ],
    specs: {
      "Suction Power": "229 AW",
      Runtime: "60 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.4,
    reviews: 937,
    isNew: true,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR253S"
  },
  {
    id: "irobot-cordless-stick-vacuum-432",
    name: "iRobot Cordless Stick Vacuum IR701Pro",
    nameFa: "جاروبرقی شارژی آی‌ربات مدل IR701Pro",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 65221397,
    description: "Cordless Stick Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی شارژی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Laser Dust Detection",
      "Smart Mapping Navigation",
      "60-Minute Runtime",
      "Auto-Empty Base",
      "Multi-Surface Sensors",
      "App & Voice Control"
    ],
    featuresFa: [
      "تشخیص گرد و غبار با لیزر",
      "ناوبری نقشه‌برداری هوشمند",
      "شارژدهی تا ۶۰ دقیقه",
      "پایه تخلیه خودکار",
      "سنسورهای چندسطحی",
      "کنترل اپلیکیشن و صدا"
    ],
    specs: {
      "Suction Power": "249 AW",
      Runtime: "120 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.6,
    reviews: 1921,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR701Pro"
  },
  {
    id: "irobot-canister-vacuum-433",
    name: "iRobot Canister Vacuum IR206S",
    nameFa: "جاروبرقی سطلی آی‌ربات مدل IR206S",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 23860858,
    originalPrice: 30100000,
    description: "Canister Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Mapping Navigation",
      "Pet Hair Optimized Brush",
      "Laser Dust Detection",
      "HEPA H13 Filtration",
      "Multi-Surface Sensors",
      "Auto-Empty Base"
    ],
    featuresFa: [
      "ناوبری نقشه‌برداری هوشمند",
      "برس مخصوص موی حیوانات",
      "تشخیص گرد و غبار با لیزر",
      "فیلتراسیون HEPA H13",
      "سنسورهای چندسطحی",
      "پایه تخلیه خودکار"
    ],
    specs: {
      "Suction Power": "220 AW",
      Runtime: "90 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.8,
    reviews: 1328,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR206S"
  },
  {
    id: "irobot-wet-dry-vacuum-434",
    name: "iRobot Wet & Dry Vacuum IR389X",
    nameFa: "جاروبرقی خشک و تر آی‌ربات مدل IR389X",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 55080839,
    description: "Wet & Dry Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی خشک و تر از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "60-Minute Runtime",
      "Smart Mapping Navigation",
      "Pet Hair Optimized Brush",
      "HEPA H13 Filtration",
      "App & Voice Control",
      "Auto-Empty Base"
    ],
    featuresFa: [
      "شارژدهی تا ۶۰ دقیقه",
      "ناوبری نقشه‌برداری هوشمند",
      "برس مخصوص موی حیوانات",
      "فیلتراسیون HEPA H13",
      "کنترل اپلیکیشن و صدا",
      "پایه تخلیه خودکار"
    ],
    specs: {
      "Suction Power": "236 AW",
      Runtime: "90 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.7,
    reviews: 514,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR389X"
  },
  {
    id: "irobot-cordless-stick-vacuum-435",
    name: "iRobot Cordless Stick Vacuum IR786Pro",
    nameFa: "جاروبرقی شارژی آی‌ربات مدل IR786Pro",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 62103423,
    description: "Cordless Stick Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی شارژی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "HEPA H13 Filtration",
      "Smart Mapping Navigation",
      "Pet Hair Optimized Brush",
      "Auto-Empty Base",
      "60-Minute Runtime",
      "App & Voice Control"
    ],
    featuresFa: [
      "فیلتراسیون HEPA H13",
      "ناوبری نقشه‌برداری هوشمند",
      "برس مخصوص موی حیوانات",
      "پایه تخلیه خودکار",
      "شارژدهی تا ۶۰ دقیقه",
      "کنترل اپلیکیشن و صدا"
    ],
    specs: {
      "Suction Power": "150 AW",
      Runtime: "40 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4,
    reviews: 1877,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR786Pro"
  },
  {
    id: "irobot-canister-vacuum-436",
    name: "iRobot Canister Vacuum IR624X",
    nameFa: "جاروبرقی سطلی آی‌ربات مدل IR624X",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 60430978,
    description: "Canister Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Pet Hair Optimized Brush",
      "Multi-Surface Sensors",
      "Auto-Empty Base",
      "60-Minute Runtime",
      "App & Voice Control",
      "Smart Mapping Navigation"
    ],
    featuresFa: [
      "برس مخصوص موی حیوانات",
      "سنسورهای چندسطحی",
      "پایه تخلیه خودکار",
      "شارژدهی تا ۶۰ دقیقه",
      "کنترل اپلیکیشن و صدا",
      "ناوبری نقشه‌برداری هوشمند"
    ],
    specs: {
      "Suction Power": "156 AW",
      Runtime: "40 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.8,
    reviews: 2028,
    badge: "Editor's Choice",
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR624X"
  },
  {
    id: "irobot-robot-vacuum-437",
    name: "iRobot Robot Vacuum IR710Neo",
    nameFa: "جاروبرقی رباتیک آی‌ربات مدل IR710Neo",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 30143290,
    description: "Robot Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی رباتیک از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "HEPA H13 Filtration",
      "Pet Hair Optimized Brush",
      "Laser Dust Detection",
      "Smart Mapping Navigation",
      "Auto-Empty Base",
      "60-Minute Runtime"
    ],
    featuresFa: [
      "فیلتراسیون HEPA H13",
      "برس مخصوص موی حیوانات",
      "تشخیص گرد و غبار با لیزر",
      "ناوبری نقشه‌برداری هوشمند",
      "پایه تخلیه خودکار",
      "شارژدهی تا ۶۰ دقیقه"
    ],
    specs: {
      "Suction Power": "184 AW",
      Runtime: "50 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.2,
    reviews: 2252,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR710Neo"
  },
  {
    id: "irobot-cordless-stick-vacuum-438",
    name: "iRobot Cordless Stick Vacuum IR761",
    nameFa: "جاروبرقی شارژی آی‌ربات مدل IR761",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 53458117,
    originalPrice: 63900000,
    description: "Cordless Stick Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی شارژی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Pet Hair Optimized Brush",
      "Laser Dust Detection",
      "App & Voice Control",
      "Auto-Empty Base",
      "HEPA H13 Filtration",
      "Smart Mapping Navigation"
    ],
    featuresFa: [
      "برس مخصوص موی حیوانات",
      "تشخیص گرد و غبار با لیزر",
      "کنترل اپلیکیشن و صدا",
      "پایه تخلیه خودکار",
      "فیلتراسیون HEPA H13",
      "ناوبری نقشه‌برداری هوشمند"
    ],
    specs: {
      "Suction Power": "179 AW",
      Runtime: "90 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.6,
    reviews: 42,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR761"
  },
  {
    id: "irobot-cordless-stick-vacuum-439",
    name: "iRobot Cordless Stick Vacuum IR857Pro",
    nameFa: "جاروبرقی شارژی آی‌ربات مدل IR857Pro",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 28796994,
    description: "Cordless Stick Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی شارژی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "HEPA H13 Filtration",
      "Laser Dust Detection",
      "Pet Hair Optimized Brush",
      "Multi-Surface Sensors",
      "Auto-Empty Base",
      "60-Minute Runtime"
    ],
    featuresFa: [
      "فیلتراسیون HEPA H13",
      "تشخیص گرد و غبار با لیزر",
      "برس مخصوص موی حیوانات",
      "سنسورهای چندسطحی",
      "پایه تخلیه خودکار",
      "شارژدهی تا ۶۰ دقیقه"
    ],
    specs: {
      "Suction Power": "181 AW",
      Runtime: "40 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.1,
    reviews: 1819,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR857Pro"
  },
  {
    id: "irobot-cordless-stick-vacuum-440",
    name: "iRobot Cordless Stick Vacuum IR838Plus",
    nameFa: "جاروبرقی شارژی آی‌ربات مدل IR838Plus",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 30033810,
    description: "Cordless Stick Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی شارژی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Multi-Surface Sensors",
      "Pet Hair Optimized Brush",
      "Laser Dust Detection",
      "App & Voice Control",
      "Smart Mapping Navigation",
      "60-Minute Runtime"
    ],
    featuresFa: [
      "سنسورهای چندسطحی",
      "برس مخصوص موی حیوانات",
      "تشخیص گرد و غبار با لیزر",
      "کنترل اپلیکیشن و صدا",
      "ناوبری نقشه‌برداری هوشمند",
      "شارژدهی تا ۶۰ دقیقه"
    ],
    specs: {
      "Suction Power": "210 AW",
      Runtime: "40 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.1,
    reviews: 2779,
    badge: "Premium",
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR838Plus"
  },
  {
    id: "irobot-wet-dry-vacuum-441",
    name: "iRobot Wet & Dry Vacuum IR420Neo",
    nameFa: "جاروبرقی خشک و تر آی‌ربات مدل IR420Neo",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 27501421,
    description: "Wet & Dry Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی خشک و تر از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Pet Hair Optimized Brush",
      "App & Voice Control",
      "Auto-Empty Base",
      "Multi-Surface Sensors",
      "Laser Dust Detection",
      "Smart Mapping Navigation"
    ],
    featuresFa: [
      "برس مخصوص موی حیوانات",
      "کنترل اپلیکیشن و صدا",
      "پایه تخلیه خودکار",
      "سنسورهای چندسطحی",
      "تشخیص گرد و غبار با لیزر",
      "ناوبری نقشه‌برداری هوشمند"
    ],
    specs: {
      "Suction Power": "260 AW",
      Runtime: "90 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.1,
    reviews: 2193,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR420Neo"
  },
  {
    id: "irobot-canister-vacuum-442",
    name: "iRobot Canister Vacuum IR388Neo",
    nameFa: "جاروبرقی سطلی آی‌ربات مدل IR388Neo",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 63100873,
    originalPrice: 75500000,
    description: "Canister Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Auto-Empty Base",
      "Multi-Surface Sensors",
      "Laser Dust Detection",
      "HEPA H13 Filtration",
      "Pet Hair Optimized Brush",
      "60-Minute Runtime"
    ],
    featuresFa: [
      "پایه تخلیه خودکار",
      "سنسورهای چندسطحی",
      "تشخیص گرد و غبار با لیزر",
      "فیلتراسیون HEPA H13",
      "برس مخصوص موی حیوانات",
      "شارژدهی تا ۶۰ دقیقه"
    ],
    specs: {
      "Suction Power": "167 AW",
      Runtime: "90 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.8,
    reviews: 174,
    isNew: true,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR388Neo"
  },
  {
    id: "irobot-canister-vacuum-443",
    name: "iRobot Canister Vacuum IR799Plus",
    nameFa: "جاروبرقی سطلی آی‌ربات مدل IR799Plus",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 26876315,
    description: "Canister Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Pet Hair Optimized Brush",
      "Laser Dust Detection",
      "Smart Mapping Navigation",
      "Auto-Empty Base",
      "60-Minute Runtime",
      "App & Voice Control"
    ],
    featuresFa: [
      "برس مخصوص موی حیوانات",
      "تشخیص گرد و غبار با لیزر",
      "ناوبری نقشه‌برداری هوشمند",
      "پایه تخلیه خودکار",
      "شارژدهی تا ۶۰ دقیقه",
      "کنترل اپلیکیشن و صدا"
    ],
    specs: {
      "Suction Power": "250 AW",
      Runtime: "60 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.4,
    reviews: 2996,
    badge: "Best Seller",
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR799Plus"
  },
  {
    id: "irobot-cordless-stick-vacuum-444",
    name: "iRobot Cordless Stick Vacuum IR699X",
    nameFa: "جاروبرقی شارژی آی‌ربات مدل IR699X",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 58269151,
    description: "Cordless Stick Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی شارژی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "App & Voice Control",
      "Auto-Empty Base",
      "Laser Dust Detection",
      "HEPA H13 Filtration",
      "Smart Mapping Navigation",
      "60-Minute Runtime"
    ],
    featuresFa: [
      "کنترل اپلیکیشن و صدا",
      "پایه تخلیه خودکار",
      "تشخیص گرد و غبار با لیزر",
      "فیلتراسیون HEPA H13",
      "ناوبری نقشه‌برداری هوشمند",
      "شارژدهی تا ۶۰ دقیقه"
    ],
    specs: {
      "Suction Power": "171 AW",
      Runtime: "90 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4,
    reviews: 2280,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR699X"
  },
  {
    id: "irobot-cordless-stick-vacuum-445",
    name: "iRobot Cordless Stick Vacuum IR448Plus",
    nameFa: "جاروبرقی شارژی آی‌ربات مدل IR448Plus",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 31999038,
    originalPrice: 40100000,
    description: "Cordless Stick Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی شارژی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Pet Hair Optimized Brush",
      "Laser Dust Detection",
      "60-Minute Runtime",
      "Smart Mapping Navigation",
      "App & Voice Control",
      "Auto-Empty Base"
    ],
    featuresFa: [
      "برس مخصوص موی حیوانات",
      "تشخیص گرد و غبار با لیزر",
      "شارژدهی تا ۶۰ دقیقه",
      "ناوبری نقشه‌برداری هوشمند",
      "کنترل اپلیکیشن و صدا",
      "پایه تخلیه خودکار"
    ],
    specs: {
      "Suction Power": "192 AW",
      Runtime: "40 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.7,
    reviews: 1495,
    badge: "Editor's Choice",
    isBestseller: true,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR448Plus"
  },
  {
    id: "irobot-wet-dry-vacuum-446",
    name: "iRobot Wet & Dry Vacuum IR128S",
    nameFa: "جاروبرقی خشک و تر آی‌ربات مدل IR128S",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 62011147,
    originalPrice: 79900000,
    description: "Wet & Dry Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی خشک و تر از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "60-Minute Runtime",
      "Pet Hair Optimized Brush",
      "Laser Dust Detection",
      "HEPA H13 Filtration",
      "Auto-Empty Base",
      "App & Voice Control"
    ],
    featuresFa: [
      "شارژدهی تا ۶۰ دقیقه",
      "برس مخصوص موی حیوانات",
      "تشخیص گرد و غبار با لیزر",
      "فیلتراسیون HEPA H13",
      "پایه تخلیه خودکار",
      "کنترل اپلیکیشن و صدا"
    ],
    specs: {
      "Suction Power": "255 AW",
      Runtime: "50 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.6,
    reviews: 2029,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR128S"
  },
  {
    id: "irobot-robot-vacuum-447",
    name: "iRobot Robot Vacuum IR439Plus",
    nameFa: "جاروبرقی رباتیک آی‌ربات مدل IR439Plus",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 35129531,
    description: "Robot Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی رباتیک از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "App & Voice Control",
      "HEPA H13 Filtration",
      "60-Minute Runtime",
      "Laser Dust Detection",
      "Smart Mapping Navigation",
      "Auto-Empty Base"
    ],
    featuresFa: [
      "کنترل اپلیکیشن و صدا",
      "فیلتراسیون HEPA H13",
      "شارژدهی تا ۶۰ دقیقه",
      "تشخیص گرد و غبار با لیزر",
      "ناوبری نقشه‌برداری هوشمند",
      "پایه تخلیه خودکار"
    ],
    specs: {
      "Suction Power": "238 AW",
      Runtime: "90 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.5,
    reviews: 1437,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR439Plus"
  },
  {
    id: "irobot-wet-dry-vacuum-448",
    name: "iRobot Wet & Dry Vacuum IR590S",
    nameFa: "جاروبرقی خشک و تر آی‌ربات مدل IR590S",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 32319135,
    description: "Wet & Dry Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی خشک و تر از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Mapping Navigation",
      "Multi-Surface Sensors",
      "Auto-Empty Base",
      "App & Voice Control",
      "Pet Hair Optimized Brush",
      "HEPA H13 Filtration"
    ],
    featuresFa: [
      "ناوبری نقشه‌برداری هوشمند",
      "سنسورهای چندسطحی",
      "پایه تخلیه خودکار",
      "کنترل اپلیکیشن و صدا",
      "برس مخصوص موی حیوانات",
      "فیلتراسیون HEPA H13"
    ],
    specs: {
      "Suction Power": "198 AW",
      Runtime: "50 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.3,
    reviews: 2702,
    isNew: true,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR590S"
  },
  {
    id: "irobot-canister-vacuum-449",
    name: "iRobot Canister Vacuum IR543",
    nameFa: "جاروبرقی سطلی آی‌ربات مدل IR543",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 47999517,
    description: "Canister Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Multi-Surface Sensors",
      "Pet Hair Optimized Brush",
      "Laser Dust Detection",
      "Auto-Empty Base",
      "HEPA H13 Filtration",
      "Smart Mapping Navigation"
    ],
    featuresFa: [
      "سنسورهای چندسطحی",
      "برس مخصوص موی حیوانات",
      "تشخیص گرد و غبار با لیزر",
      "پایه تخلیه خودکار",
      "فیلتراسیون HEPA H13",
      "ناوبری نقشه‌برداری هوشمند"
    ],
    specs: {
      "Suction Power": "226 AW",
      Runtime: "50 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.9,
    reviews: 1510,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR543"
  },
  {
    id: "irobot-cordless-stick-vacuum-450",
    name: "iRobot Cordless Stick Vacuum IR671X",
    nameFa: "جاروبرقی شارژی آی‌ربات مدل IR671X",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 49566470,
    description: "Cordless Stick Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی شارژی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "60-Minute Runtime",
      "Multi-Surface Sensors",
      "Auto-Empty Base",
      "Smart Mapping Navigation",
      "Pet Hair Optimized Brush",
      "App & Voice Control"
    ],
    featuresFa: [
      "شارژدهی تا ۶۰ دقیقه",
      "سنسورهای چندسطحی",
      "پایه تخلیه خودکار",
      "ناوبری نقشه‌برداری هوشمند",
      "برس مخصوص موی حیوانات",
      "کنترل اپلیکیشن و صدا"
    ],
    specs: {
      "Suction Power": "181 AW",
      Runtime: "50 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.4,
    reviews: 2476,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR671X"
  },
  {
    id: "irobot-canister-vacuum-451",
    name: "iRobot Canister Vacuum IR940Plus",
    nameFa: "جاروبرقی سطلی آی‌ربات مدل IR940Plus",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 63506129,
    description: "Canister Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Laser Dust Detection",
      "HEPA H13 Filtration",
      "Smart Mapping Navigation",
      "Multi-Surface Sensors",
      "Auto-Empty Base",
      "App & Voice Control"
    ],
    featuresFa: [
      "تشخیص گرد و غبار با لیزر",
      "فیلتراسیون HEPA H13",
      "ناوبری نقشه‌برداری هوشمند",
      "سنسورهای چندسطحی",
      "پایه تخلیه خودکار",
      "کنترل اپلیکیشن و صدا"
    ],
    specs: {
      "Suction Power": "206 AW",
      Runtime: "60 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.7,
    reviews: 2710,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR940Plus"
  },
  {
    id: "irobot-wet-dry-vacuum-452",
    name: "iRobot Wet & Dry Vacuum IR451X",
    nameFa: "جاروبرقی خشک و تر آی‌ربات مدل IR451X",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 63158030,
    originalPrice: 78000000,
    description: "Wet & Dry Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی خشک و تر از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "HEPA H13 Filtration",
      "Pet Hair Optimized Brush",
      "Multi-Surface Sensors",
      "60-Minute Runtime",
      "Auto-Empty Base",
      "Smart Mapping Navigation"
    ],
    featuresFa: [
      "فیلتراسیون HEPA H13",
      "برس مخصوص موی حیوانات",
      "سنسورهای چندسطحی",
      "شارژدهی تا ۶۰ دقیقه",
      "پایه تخلیه خودکار",
      "ناوبری نقشه‌برداری هوشمند"
    ],
    specs: {
      "Suction Power": "198 AW",
      Runtime: "50 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.3,
    reviews: 296,
    badge: "Popular",
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR451X"
  },
  {
    id: "irobot-canister-vacuum-453",
    name: "iRobot Canister Vacuum IR971Pro",
    nameFa: "جاروبرقی سطلی آی‌ربات مدل IR971Pro",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 33996668,
    originalPrice: 44800000,
    description: "Canister Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Mapping Navigation",
      "Laser Dust Detection",
      "Pet Hair Optimized Brush",
      "HEPA H13 Filtration",
      "Multi-Surface Sensors",
      "Auto-Empty Base"
    ],
    featuresFa: [
      "ناوبری نقشه‌برداری هوشمند",
      "تشخیص گرد و غبار با لیزر",
      "برس مخصوص موی حیوانات",
      "فیلتراسیون HEPA H13",
      "سنسورهای چندسطحی",
      "پایه تخلیه خودکار"
    ],
    specs: {
      "Suction Power": "209 AW",
      Runtime: "90 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.9,
    reviews: 232,
    isNew: true,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR971Pro"
  },
  {
    id: "irobot-canister-vacuum-454",
    name: "iRobot Canister Vacuum IR553",
    nameFa: "جاروبرقی سطلی آی‌ربات مدل IR553",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 33159302,
    originalPrice: 40200000,
    description: "Canister Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "HEPA H13 Filtration",
      "Laser Dust Detection",
      "Auto-Empty Base",
      "Multi-Surface Sensors",
      "Pet Hair Optimized Brush",
      "App & Voice Control"
    ],
    featuresFa: [
      "فیلتراسیون HEPA H13",
      "تشخیص گرد و غبار با لیزر",
      "پایه تخلیه خودکار",
      "سنسورهای چندسطحی",
      "برس مخصوص موی حیوانات",
      "کنترل اپلیکیشن و صدا"
    ],
    specs: {
      "Suction Power": "165 AW",
      Runtime: "50 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.1,
    reviews: 800,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR553"
  },
  {
    id: "irobot-wet-dry-vacuum-455",
    name: "iRobot Wet & Dry Vacuum IR239Plus",
    nameFa: "جاروبرقی خشک و تر آی‌ربات مدل IR239Plus",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 33198861,
    description: "Wet & Dry Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی خشک و تر از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "App & Voice Control",
      "Auto-Empty Base",
      "60-Minute Runtime",
      "Laser Dust Detection",
      "Smart Mapping Navigation",
      "Pet Hair Optimized Brush"
    ],
    featuresFa: [
      "کنترل اپلیکیشن و صدا",
      "پایه تخلیه خودکار",
      "شارژدهی تا ۶۰ دقیقه",
      "تشخیص گرد و غبار با لیزر",
      "ناوبری نقشه‌برداری هوشمند",
      "برس مخصوص موی حیوانات"
    ],
    specs: {
      "Suction Power": "246 AW",
      Runtime: "60 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.7,
    reviews: 2093,
    badge: "Best Seller",
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR239Plus"
  },
  {
    id: "irobot-cordless-stick-vacuum-456",
    name: "iRobot Cordless Stick Vacuum IR569Pro",
    nameFa: "جاروبرقی شارژی آی‌ربات مدل IR569Pro",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 30042885,
    description: "Cordless Stick Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی شارژی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "Smart Mapping Navigation",
      "Auto-Empty Base",
      "Multi-Surface Sensors",
      "Laser Dust Detection",
      "60-Minute Runtime",
      "HEPA H13 Filtration"
    ],
    featuresFa: [
      "ناوبری نقشه‌برداری هوشمند",
      "پایه تخلیه خودکار",
      "سنسورهای چندسطحی",
      "تشخیص گرد و غبار با لیزر",
      "شارژدهی تا ۶۰ دقیقه",
      "فیلتراسیون HEPA H13"
    ],
    specs: {
      "Suction Power": "212 AW",
      Runtime: "120 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.7,
    reviews: 904,
    badge: "Premium",
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR569Pro"
  },
  {
    id: "irobot-wet-dry-vacuum-457",
    name: "iRobot Wet & Dry Vacuum IR741Plus",
    nameFa: "جاروبرقی خشک و تر آی‌ربات مدل IR741Plus",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 34869744,
    description: "Wet & Dry Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی خشک و تر از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "60-Minute Runtime",
      "Pet Hair Optimized Brush",
      "HEPA H13 Filtration",
      "Smart Mapping Navigation",
      "Auto-Empty Base",
      "App & Voice Control"
    ],
    featuresFa: [
      "شارژدهی تا ۶۰ دقیقه",
      "برس مخصوص موی حیوانات",
      "فیلتراسیون HEPA H13",
      "ناوبری نقشه‌برداری هوشمند",
      "پایه تخلیه خودکار",
      "کنترل اپلیکیشن و صدا"
    ],
    specs: {
      "Suction Power": "221 AW",
      Runtime: "50 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.4,
    reviews: 858,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR741Plus"
  },
  {
    id: "irobot-canister-vacuum-458",
    name: "iRobot Canister Vacuum IR965",
    nameFa: "جاروبرقی سطلی آی‌ربات مدل IR965",
    category: "Vacuum Cleaners",
    categoryFa: "جاروبرقی",
    price: 34605707,
    description: "Canister Vacuum from iRobot, engineered for reliable everyday performance with modern smart features and an efficient design.",
    descriptionFa: "جاروبرقی سطلی از برند آی‌ربات، طراحی‌شده برای عملکرد قابل‌اعتماد روزانه با ویژگی‌های هوشمند مدرن و طراحی کارآمد.",
    features: [
      "App & Voice Control",
      "Multi-Surface Sensors",
      "Auto-Empty Base",
      "Smart Mapping Navigation",
      "60-Minute Runtime",
      "Laser Dust Detection"
    ],
    featuresFa: [
      "کنترل اپلیکیشن و صدا",
      "سنسورهای چندسطحی",
      "پایه تخلیه خودکار",
      "ناوبری نقشه‌برداری هوشمند",
      "شارژدهی تا ۶۰ دقیقه",
      "تشخیص گرد و غبار با لیزر"
    ],
    specs: {
      "Suction Power": "247 AW",
      Runtime: "40 min",
      Filtration: "HEPA H13",
      Warranty: "2 years official"
    },
    specsFa: {
      "قدرت مکش": "AW",
      "شارژدهی": "دقیقه",
      "فیلتراسیون": "HEPA H13",
      "گارانتی": "۲ سال رسمی"
    },
    images: [
      "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=800&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80"
    ],
    colors: [
      {
        name: "Nickel/Blue",
        nameFa: "نیکل/آبی",
        hex: "#7a9cc6"
      },
      {
        name: "Graphite",
        nameFa: "گرافیت",
        hex: "#3a3a3a"
      }
    ],
    rating: 4.1,
    reviews: 2417,
    brand: "iRobot",
    brandFa: "آی‌ربات",
    model: "IR965"
  }
];

export const brands = [
  {
    name: "Samsung",
    nameFa: "سامسونگ",
    logo: "/images/brands/samsung.svg",
    productCount: 75,
    country: "South Korea"
  },
  {
    name: "LG",
    nameFa: "ال‌جی",
    logo: "/images/brands/lg.svg",
    productCount: 66,
    country: "South Korea"
  },
  {
    name: "Bosch",
    nameFa: "بوش",
    logo: "/images/brands/bosch.svg",
    productCount: 61,
    country: "Germany"
  },
  {
    name: "Dyson",
    nameFa: "دایسون",
    logo: "/images/brands/dyson.svg",
    productCount: 51,
    country: "UK"
  },
  {
    name: "Daikin",
    nameFa: "دایکین",
    logo: "/images/brands/daikin.svg",
    productCount: 51,
    country: "Japan"
  },
  {
    name: "Philips",
    nameFa: "فیلیپس",
    logo: "/images/brands/philips.svg",
    productCount: 52,
    country: "Netherlands"
  },
  {
    name: "KitchenAid",
    nameFa: "کیتچن‌اید",
    logo: "/images/brands/kitchenaid.svg",
    productCount: 51,
    country: "USA"
  },
  {
    name: "iRobot",
    nameFa: "آی‌ربات",
    logo: "/images/brands/irobot.svg",
    productCount: 51,
    country: "USA"
  }
];