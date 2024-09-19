import BlurFade from "../animations/blur-fade";

function FeaturedProducts() {
  return (
    <div className="px-8 pt-20">
      <h1 className="text-lg font-extrabold capitalize leading-[1.25] tracking-wide text-black opacity-100 dark:text-white max-md:text-center md:text-3xl">
        <BlurFade className="md:flex md:items-center">
          Featured Products
        </BlurFade>
      </h1>
    </div>
  );
}

export default FeaturedProducts;
