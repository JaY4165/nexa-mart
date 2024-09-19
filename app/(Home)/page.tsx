import dynamic from "next/dynamic";
import Hero from "../components/Home/Hero";

const ShopByBrands = dynamic(() => import("../components/Home/ShopByBrands"));
const ShopByCategories = dynamic(
  () => import("../components/Home/ShopByCategories"),
);
const FeaturedProducts = dynamic(
  () => import("../components/Home/FeaturedProducts"),
);

export default async function Home() {
  return (
    <div className="w-full">
      <Hero />
      <ShopByCategories />
      <ShopByBrands />
      <FeaturedProducts />
    </div>
  );
}
