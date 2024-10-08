"use client";

import BlurFade from "../animations/blur-fade";
import { EmblaOptionsType } from "embla-carousel";
import Carousel from "../shared/Carousel";

function ShopByCategories() {
  const carouselOptions: EmblaOptionsType = { align: "start", dragFree: true };
  const slideCount = 3;
  return (
    <div className="px-8 pt-20">
      <h1 className="text-lg font-extrabold capitalize leading-[1.25] tracking-wide text-black opacity-100 dark:text-white max-md:text-center md:text-3xl">
        <BlurFade className="md:flex md:items-center">
          Shop Our Top Categories
        </BlurFade>
      </h1>
      <Carousel options={carouselOptions} slidesCount={slideCount} />
    </div>
  );
}

export default ShopByCategories;
