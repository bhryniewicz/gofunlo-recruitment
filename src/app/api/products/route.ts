import { NextResponse } from "next/server";
import products from "@/data/response_products.json";

export async function GET() {
  return NextResponse.json(products);
}
