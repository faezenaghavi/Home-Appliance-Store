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
