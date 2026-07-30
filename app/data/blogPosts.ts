export type BlogPostData = {
  id: string;
  titleFa: string;
  titleEn: string;
  excerptFa: string;
  excerptEn: string;
  contentFa: string[];
  contentEn: string[];
  categoryFa: string;
  categoryEn: string;
  dateFa: string;
  dateEn: string;
  readTime: number;
  imageIndex: number;
  featured?: boolean;
};

export const blogPosts: BlogPostData[] = [
  {
    id: "1",
    titleFa: "آینده خانه‌های هوشمند در سال ۱۴۰۵",
    titleEn: "The Future of Smart Homes in 2026",
    excerptFa:
      "چگونه لوازم نوویرا با هوش مصنوعی و اتوماسیون، زندگی روزمره شما را متحول می‌کنند و آینده زندگی لوکس را شکل می‌دهند.",
    excerptEn:
      "How Novira appliances with AI and automation transform daily living and shape the future of luxury homes.",
    contentFa: [
      "خانه‌های هوشمند دیگر یک مفهوم دور از ذهن نیستند. امروزه یخچال‌ها، ماشین لباسشویی‌ها و سیستم‌های تهویه می‌توانند با یکدیگر ارتباط برقرار کنند و بر اساس عادات خانواده عمل کنند.",
      "هوش مصنوعی در لوازم خانگی جدید، مصرف انرژی را بهینه می‌کند، هشدار نگهداری می‌دهد و حتی پیشنهاد خرید مواد غذایی را ارائه می‌دهد. این یعنی صرفه‌جویی در زمان و هزینه برای خانواده‌های مدرن.",
      "در نوویرا، تمرکز ما بر ترکیب طراحی لوکس با فناوری کاربردی است. محصولات ما نه‌تنها زیبا هستند، بلکه یاد می‌گیرند تا زندگی روزمره شما را ساده‌تر کنند.",
      "در سال ۱۴۰۵ انتظار می‌رود اتوماسیون خانگی به بخش جدایی‌ناپذیر هر آشپزخانه و نشیمن تبدیل شود. اگر به دنبال ارتقای خانه خود هستید، شروع از لوازم هوشمند منتخب بهترین گام است.",
    ],
    contentEn: [
      "Smart homes are no longer a distant concept. Today's refrigerators, washing machines, and HVAC systems can communicate with each other and adapt to household habits.",
      "AI in modern appliances optimizes energy use, sends maintenance alerts, and even suggests grocery replenishment — saving time and money for modern families.",
      "At Novira, we focus on combining luxury design with practical technology. Our products don't just look beautiful — they learn to simplify your daily routine.",
      "In 2026, home automation is expected to become an essential part of every kitchen and living room. If you're upgrading your home, curated smart appliances are the best place to start.",
    ],
    categoryFa: "تکنولوژی",
    categoryEn: "Technology",
    dateFa: "۱۲ اسفند ۱۴۰۴",
    dateEn: "Mar 2, 2026",
    readTime: 5,
    imageIndex: 0,
    featured: true,
  },
  {
    id: "2",
    titleFa: "طراحی آرام و بی‌سروصدا",
    titleEn: "Quiet Engineering Design",
    excerptFa: "ورود به دنیای مهندسی سکوت برای لوازم خانگی — چرا آرامش صوتی در خانه‌های مدرن اهمیت دارد.",
    excerptEn: "Entering the world of silence engineering — why acoustic comfort matters in modern homes.",
    contentFa: [
      "آرامش صوتی یکی از مهم‌ترین فاکتورهای کیفیت زندگی در خانه‌های امروزی است. لوازم خانگی قدیمی اغلب منبع نویز مزاحم در فضاهای باز محسوب می‌شوند.",
      "مهندسی سکوت در محصولات جدید شامل موتورهای اینverter، عایق‌بندی پیشرفته و طراحی بدنه است که ارتعاشات را کاهش می‌دهد. نتیجه: محیطی آرام‌تر برای کار، استراحت و تمرکز.",
      "ماشین لباسشویی‌ها، جاروبرقی‌ها و کولرهای گازی جدید با برچسب Quiet یا Silent Performance می‌توانند سطح صدا را تا ۵۰٪ نسبت به نسل قبل کاهش دهند.",
      "هنگام خرید، به decibel rating توجه کنید. سرمایه‌گذاری روی لوازم بی‌صدا، ارزش فضای زندگی شما را به‌مراتب بیشتر از قیمت اولیه افزایش می‌دهد.",
    ],
    contentEn: [
      "Acoustic comfort is one of the most important factors in modern home quality. Older appliances often become a source of unwanted noise in open-plan spaces.",
      "Silence engineering in new products includes inverter motors, advanced insulation, and body design that reduces vibration — resulting in a calmer environment for work, rest, and focus.",
      "New washing machines, vacuums, and air conditioners labeled Quiet or Silent Performance can reduce noise levels by up to 50% compared to previous generations.",
      "When shopping, pay attention to decibel ratings. Investing in quiet appliances increases the value of your living space far beyond the initial price.",
    ],
    categoryFa: "طراحی",
    categoryEn: "Design",
    dateFa: "۵ بهمن ۱۴۰۴",
    dateEn: "Jan 25, 2026",
    readTime: 3,
    imageIndex: 1,
  },
  {
    id: "3",
    titleFa: "نگهداری و افزایش عمر دستگاه‌ها",
    titleEn: "Maintenance & Longevity",
    excerptFa: "نکات کلیدی برای حفظ کارایی و زیبایی لوازم خانگی لوکس در طولانی‌مدت.",
    excerptEn: "Key tips for preserving the performance and beauty of luxury home appliances.",
    contentFa: [
      "لوازم خانگی لوکس سرمایه‌گذاری بلندمدت هستند. با نگهداری صحیح می‌توانید عمر مفید آن‌ها را سال‌ها افزایش دهید و هزینه تعمیرات را به حداقل برسانید.",
      "فیلترها را طبق دستور سازنده تعویض کنید، سطح دستگاه‌ها را با مواد شوینده مناسب تمیز نگه دارید و از بارگذاری بیش از حد ظرفیت خودداری کنید.",
      "سرویس دوره‌ای توسط تکنسین مجاز، گارانتی را معتبر نگه می‌دارد و از بروز مشکلات جدی جلوگیری می‌کند. بسیاری از برندها اپلیکیشن یادآوری سرویس ارائه می‌دهند.",
      "نگهداری منظم نه‌تنها کارایی را حفظ می‌کند، بلکه ظاهر دستگاه را نیز مانند روز اول نگه می‌دارد — مخصوصاً برای آشپزخانه‌های باز و مدرن.",
    ],
    contentEn: [
      "Luxury appliances are a long-term investment. With proper care, you can extend their useful life by years and minimize repair costs.",
      "Replace filters as recommended, clean surfaces with appropriate products, and avoid overloading beyond capacity.",
      "Periodic service by authorized technicians keeps warranties valid and prevents serious issues. Many brands offer service reminder apps.",
      "Regular maintenance preserves not only performance but also appearance — especially important for open, modern kitchens.",
    ],
    categoryFa: "نگهداری",
    categoryEn: "Care",
    dateFa: "۲۰ دی ۱۴۰۴",
    dateEn: "Jan 10, 2026",
    readTime: 4,
    imageIndex: 2,
  },
  {
    id: "4",
    titleFa: "راهنمای انتخاب یخچال ساید بای ساید",
    titleEn: "Side-by-Side Refrigerator Buying Guide",
    excerptFa: "معیارهای مهم خرید یخچال حرفه‌ای برای آشپزخانه‌های مدرن و خانواده‌های پرجمعیت.",
    excerptEn: "Essential criteria for choosing a professional fridge for modern kitchens.",
    contentFa: [
      "انتخاب یخچال مناسب به اندازه خانواده، چیدمان آشپزخانه و عادات غذایی شما بستگی دارد. مدل ساید بای ساید برای خانواده‌های پرجمعیت و فضاهای وسیع ایده‌آل است.",
      "به ظرفیت خالص (لیتر)، سیستم خنک‌کننده (نوفراست یا Total No Frost)، مصرف انرژی (کلاس A و بالاتر) و امکانات هوشمند مانند دوربین داخلی توجه کنید.",
      "عرض استاندارد ۹۰ سانتی‌متر است؛ قبل از خرید، فضای نصب شامل فاصله از دیوار و امکان باز شدن کامل درب را اندازه‌گیری کنید.",
      "برندهای معتبر با شبکه خدمات گسترده و گارانتی رسمی، آرامش خاطر بیشتری در خرید لوازم بزرگ خانگی فراهم می‌کنند.",
    ],
    contentEn: [
      "Choosing the right refrigerator depends on household size, kitchen layout, and eating habits. Side-by-side models are ideal for larger families and spacious kitchens.",
      "Consider net capacity (liters), cooling system (No Frost or Total No Frost), energy rating (Class A and above), and smart features like internal cameras.",
      "Standard width is 90 cm; before buying, measure installation space including wall clearance and full door swing.",
      "Trusted brands with wide service networks and official warranty provide greater peace of mind for major appliance purchases.",
    ],
    categoryFa: "راهنمای خرید",
    categoryEn: "Buying Guide",
    dateFa: "۸ دی ۱۴۰۴",
    dateEn: "Jan 3, 2026",
    readTime: 6,
    imageIndex: 3,
  },
  {
    id: "5",
    titleFa: "صرفه‌جویی انرژی با لوازم A+++",
    titleEn: "Energy Savings with A+++ Appliances",
    excerptFa: "چگونه با انتخاب لوازم کم‌مصرف، هم به محیط زیست کمک کنید و هم هزینه برق را کاهش دهید.",
    excerptEn: "How efficient appliances help the environment and reduce electricity bills.",
    contentFa: [
      "برچسب انرژی A+++ نشان‌دهنده بالاترین سطح بهره‌وری در کلاس محصول است. این لوازم در درازمدت هزینه برق خانگی را به‌شکل محسوسی کاهش می‌دهند.",
      "کولرهای اینverter، یخچال‌های با کمپرسور هوشمند و ماشین لباسشویی‌های با سنسور بار، مصرف را بر اساس نیاز واقعی تنظیم می‌کنند.",
      "محاسبه هزینه سالانه انرژی روی برچسب محصول به شما کمک می‌کند مقایسه دقیق‌تری بین مدل‌ها داشته باشید — گاهی مدل گران‌تر در ۳ سال جبران می‌شود.",
      "صرفه‌جویی انرژی فقط مسئله اقتصادی نیست؛ انتخاب لوازم کم‌مصرف گامی عملی برای کاهش ردپای کربن خانواده شماست.",
    ],
    contentEn: [
      "The A+++ energy label indicates the highest efficiency class. These appliances significantly reduce household electricity costs over time.",
      "Inverter air conditioners, smart-compressor refrigerators, and load-sensing washers adjust consumption based on actual need.",
      "Annual energy cost on product labels helps you compare models accurately — sometimes a pricier unit pays for itself within three years.",
      "Energy savings aren't just economic; choosing efficient appliances is a practical step toward reducing your household carbon footprint.",
    ],
    categoryFa: "تکنولوژی",
    categoryEn: "Technology",
    dateFa: "۱ دی ۱۴۰۴",
    dateEn: "Jan 1, 2026",
    readTime: 4,
    imageIndex: 4,
  },
  {
    id: "6",
    titleFa: "دکوراسیون آشپزخانه مینیمال",
    titleEn: "Minimalist Kitchen Styling",
    excerptFa: "ترکیب لوازم استیل و مشکی مات برای فضایی لوکس، تمیز و کاربردی.",
    excerptEn: "Combining stainless steel and matte black for a clean, luxurious kitchen.",
    contentFa: [
      "آشپزخانه مینیمال بر سادگی، خطوط تمیز و حذف شلوغی بصری استوار است. لوازم خانگی با سطح یکدست و رنگ خنثی، ستون اصلی این سبک هستند.",
      "ترکیب استیل برس‌خورده با مشکی مات، عمق بصری ایجاد می‌کند بدون آنکه فضا را شلوغ کند. لوازم توکار (Built-in) خط دید را یکپارچه نگه می‌دارند.",
      "نورپردازی لایه‌ای زیر کابینت و نور طبیعی، ظاهر لوازم را برجسته می‌کند. از دستگیره‌های مخفی و سطوح بدون درز برای حس لوکس‌تر استفاده کنید.",
      "در نوویرا، مجموعه آشپزخانه ما با تمرکز بر طراحی مینیمال انتخاب شده تا با هر سبک دکوراسیون مدرن هماهنگ شود.",
    ],
    contentEn: [
      "Minimalist kitchens are built on simplicity, clean lines, and visual decluttering. Appliances with uniform surfaces and neutral colors are the foundation of this style.",
      "Combining brushed stainless steel with matte black creates visual depth without clutter. Built-in appliances keep sightlines seamless.",
      "Layered under-cabinet lighting and natural light highlight appliance finishes. Use handle-less designs and seamless surfaces for a more luxurious feel.",
      "At Novira, our kitchen collection is curated with minimal design in mind to harmonize with any modern decor style.",
    ],
    categoryFa: "طراحی",
    categoryEn: "Design",
    dateFa: "۲۵ آذر ۱۴۰۴",
    dateEn: "Dec 15, 2025",
    readTime: 3,
    imageIndex: 5,
  },
];

export function getBlogPost(id: string): BlogPostData | undefined {
  return blogPosts.find((p) => p.id === id);
}
