import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import CategoryCard from "../Home/CategoryCard";

type Props = {
  slidesCount: number;
  options: EmblaOptionsType;
};

function Carousel({ slidesCount, options }: Props) {
  const slides = Array.from(Array(slidesCount).keys());
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  return (
    <section className="embla mt-7">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <CategoryCard />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Carousel;
