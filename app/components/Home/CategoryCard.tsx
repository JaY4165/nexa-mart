import { Card, CardFooter, Image } from "@nextui-org/react";

function CategoryCard() {
  return (
    <Card isFooterBlurred radius="lg" className="cursor-pointer border-none">
      <Image
        isLoading={false}
        isZoomed
        alt="Woman listing to music"
        className="aspect-auto object-cover"
        height={200}
        src="/images/banner-1.jpg"
        width={200}
        loading="lazy"
      />
      <CardFooter className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-center overflow-hidden rounded-large bg-black/50 py-1 text-center shadow-small before:rounded-xl before:bg-white/10">
        <p className="text-center text-xl font-bold text-white">Mens Wear</p>
      </CardFooter>
    </Card>
  );
}

export default CategoryCard;
