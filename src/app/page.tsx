import { Home as HomeScreen } from "@/screens/Home";
import { Products } from "@/types/products";

const getProducts = async (): Promise<Products> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
  if (!res.ok) throw new Error("Failed to fetch products");

  return res.json();
};

export const dynamic = "force-dynamic";

export default async function Home() {
  const { data: trips } = await getProducts();

  return <HomeScreen trips={trips} />;
}
