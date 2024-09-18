import Hero from "../components/Home/Hero";
import ShopByCategories from "../components/Home/ShopByCategories";

export default async function Home() {
  return (
    <div className="w-full">
      <Hero />
      <ShopByCategories />
    </div>
  );
}
