import products from "@/data/response_products.json";

export type Products = typeof products;
export type ProductsData = typeof products.data;
export type ProductData = (typeof products.data)[number];
