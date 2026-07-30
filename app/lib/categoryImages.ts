/** تصاویر دمو موجود در public/images */
export const DEMO_IMAGES = [
  "/images/1_Modern_White_Air_Purifier_Minimal.png",
  "/images/2_Choose_to_live_the_luxe_life_with.png",
  "/images/3_White_overhead_wireless_headphones.png",
  "/images/4_Modern_White_Smart_Air_Purifier_Touch.png",
  "/images/5_290_Air_Purifier_Product_Display.png",
  "/images/6_5_Modern_Home_Appliances_that_Will.png",
  "/images/7_Redefining_premium_Meet_the_new_ROG.png",
  "/images/8_198_344_Lifestyle_Appliances_Royalty.png",
  "/images/9_Cylindrical_Smart_Air_Purifier_in.png",
  "/images/cat-air-conditioner.png",
  "/images/cat-kitchen.png",
  "/images/cat-refrigerator.png",
  "/images/Featured.png",
] as const;

export const CATEGORY_IMAGES: Record<string, string> = {
  "tv-entertainment": "/images/7_Redefining_premium_Meet_the_new_ROG.png",
  refrigerator: "/images/cat-refrigerator.png",
  washing: "/images/8_198_344_Lifestyle_Appliances_Royalty.png",
  "air-conditioner": "/images/cat-air-conditioner.png",
  vacuum: "/images/1_Modern_White_Air_Purifier_Minimal.png",
  kitchen: "/images/cat-kitchen.png",
};

export const PRODUCT_CATEGORY_FALLBACK: Record<string, string> = {
  "TV & Entertainment": CATEGORY_IMAGES["tv-entertainment"],
  Refrigerators: CATEGORY_IMAGES.refrigerator,
  "Washing Machines": CATEGORY_IMAGES.washing,
  "Air Conditioners": CATEGORY_IMAGES["air-conditioner"],
  "Vacuum Cleaners": CATEGORY_IMAGES.vacuum,
  "Kitchen Appliances": CATEGORY_IMAGES.kitchen,
};

const CATEGORY_IMAGE_POOLS: Record<string, readonly string[]> = {
  "TV & Entertainment": [
    CATEGORY_IMAGES["tv-entertainment"],
    "/images/3_White_overhead_wireless_headphones.png",
    "/images/Featured.png",
    "/images/6_5_Modern_Home_Appliances_that_Will.png",
  ],
  Refrigerators: [
    CATEGORY_IMAGES.refrigerator,
    "/images/2_Choose_to_live_the_luxe_life_with.png",
    "/images/Featured.png",
  ],
  "Washing Machines": [
    CATEGORY_IMAGES.washing,
    "/images/6_5_Modern_Home_Appliances_that_Will.png",
    "/images/8_198_344_Lifestyle_Appliances_Royalty.png",
  ],
  "Air Conditioners": [
    CATEGORY_IMAGES["air-conditioner"],
    "/images/4_Modern_White_Smart_Air_Purifier_Touch.png",
    "/images/5_290_Air_Purifier_Product_Display.png",
    "/images/9_Cylindrical_Smart_Air_Purifier_in.png",
  ],
  "Vacuum Cleaners": [
    CATEGORY_IMAGES.vacuum,
    "/images/9_Cylindrical_Smart_Air_Purifier_in.png",
    "/images/4_Modern_White_Smart_Air_Purifier_Touch.png",
  ],
  "Kitchen Appliances": [
    CATEGORY_IMAGES.kitchen,
    "/images/2_Choose_to_live_the_luxe_life_with.png",
    "/images/Featured.png",
  ],
};

export const ABOUT_PREVIEW_IMAGE = "/images/2_Choose_to_live_the_luxe_life_with.png";

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function isUsableDemoImage(url?: string): boolean {
  if (!url) return false;
  if (url.startsWith("http://") || url.startsWith("https://")) return false;
  return url.startsWith("/images/") && url.endsWith(".png");
}

export function getCategoryImage(categoryId: string, fallback?: string): string {
  return CATEGORY_IMAGES[categoryId] ?? fallback ?? "/images/Featured.png";
}

export function getBlogImage(index: number): string {
  return DEMO_IMAGES[index % DEMO_IMAGES.length];
}

type ProductLike = {
  id: string;
  category: string;
  images?: string[];
};

export function getProductDisplayImage(product: ProductLike, index = 0): string {
  const candidate = product.images?.[index];
  if (isUsableDemoImage(candidate)) return candidate!;

  const pool = CATEGORY_IMAGE_POOLS[product.category] ?? DEMO_IMAGES;
  const poolIndex = (hashString(product.id) + index) % pool.length;
  return pool[poolIndex] ?? "/images/Featured.png";
}

export function getProductDisplayImages(product: ProductLike, count = 3): string[] {
  const results: string[] = [];
  for (let i = 0; i < count; i += 1) {
    const img = getProductDisplayImage(product, i);
    if (!results.includes(img)) results.push(img);
  }
  if (results.length === 0) results.push("/images/Featured.png");
  return results;
}

export function resolveImageUrl(
  url: string | undefined,
  options?: { category?: string; seed?: string; index?: number }
): string {
  if (isUsableDemoImage(url)) return url!;

  if (options?.category && options?.seed) {
    return getProductDisplayImage(
      { id: options.seed, category: options.category, images: url ? [url] : [] },
      options.index ?? 0
    );
  }

  return "/images/Featured.png";
}
