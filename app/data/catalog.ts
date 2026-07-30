import { Product } from "@/app/types";
import { appliances } from "@/app/data/appliances";
import { products } from "@/app/data/products";

export function getProductById(id: string): Product | undefined {
  return appliances.find((p) => p.id === id) ?? products.find((p) => p.id === id);
}

export function getAllCatalogProducts(): Product[] {
  const ids = new Set(appliances.map((p) => p.id));
  const extras = products.filter((p) => !ids.has(p.id));
  return [...appliances, ...extras];
}

export function searchCatalogProducts(query: string): Product[] {
  const q = query.trim();
  if (!q) return getAllCatalogProducts();

  const lower = q.toLowerCase();
  return getAllCatalogProducts().filter((p) => {
    const fields = [
      p.name,
      p.nameFa,
      p.brand,
      p.brandFa,
      p.category,
      p.categoryFa,
      p.description,
      p.descriptionFa,
      p.model,
    ];
    return fields.some((field) => {
      if (!field) return false;
      return field.toLowerCase().includes(lower) || field.includes(q);
    });
  });
}
