"use client";

import { Button, Image } from "@nextui-org/react";
import BlurFade from "../animations/blur-fade";
import { Heart, ShoppingCart } from "lucide-react";
import StarRating from "../shared/StarRating";

function FeaturedProducts() {
  const arr = Array(10).fill(1);
  const handleRatingChange = (newRating: number) => {
    console.log(`New rating: ${newRating}`);
    // You can perform any action with the new rating here
  };
  return (
    <div className="px-8 pt-20">
      <h1 className="text-lg font-extrabold capitalize leading-[1.25] tracking-wide text-black opacity-100 dark:text-white max-md:text-center md:text-3xl">
        <BlurFade className="md:flex md:items-center">
          Featured Products
        </BlurFade>
      </h1>

      <div className="mt-7">
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {arr.map(() => (
            <div key={crypto.randomUUID()} className="cursor-pointer">
              <div className="relative w-full">
                <Image
                  radius="lg"
                  isZoomed
                  width={1000}
                  height={300}
                  src={"/images/men2.jpg"}
                  alt="image"
                  className="h-60 w-full bg-cover bg-center object-cover object-center"
                />
                <div className="absolute right-3 top-3 z-10 rounded-full bg-white/30 p-2 dark:bg-black/30">
                  <Heart className="hover:animate-appearance-in hover:fill-danger-400 hover:text-danger-400 hover:transition-all hover:duration-500 hover:ease-in-out" />
                </div>
              </div>
              <div className="mt-2 flex w-full flex-row items-start justify-between px-1">
                <div className="flex flex-col space-y-1">
                  <p className="w-[170px] truncate text-xl font-semibold text-black hover:underline dark:text-white">
                    Men&apos;s T-Shirt lkdmlkds dsklfmsdmklf sdlkmlsk
                  </p>
                  <p className="text-md w-[170px] truncate font-semibold text-black text-black/50 dark:text-white/50">
                    Levis alda saldja lsakdj sadl dlas
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-md w-[80px] truncate text-nowrap text-end font-mono font-semibold text-black/50 line-through dark:text-white/50">
                    1000 ₹
                  </p>
                  <p className="text-md w-[80px] truncate text-nowrap text-end font-mono font-semibold text-black dark:text-white">
                    5000000 ₹
                  </p>
                </div>
              </div>
              <div className="mt-1 flex flex-row items-center justify-between gap-3 px-1">
                <StarRating onChange={handleRatingChange} initialRating={3} />
                <div className="">
                  {/* <Button
                    size="sm"
                    radius="full"
                    variant="flat"
                    color="danger"
                    className="z-1 group relative flex items-center font-medium transition-all duration-200 ease-in-out"
                  >
                    <div className="absolute -inset-0.5 -z-10 animate-pulse rounded-xl blur-xl group-hover:inset-10 group-hover:opacity-100"></div>
                    <div className="svg-wrapper transform transition-all duration-400 group-hover:translate-x-5 group-hover:rotate-45">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-shopping-bag"
                      >
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                        <path d="M3 6h18" />
                        <path d="M16 10a4 4 0 0 1-8 0" />
                      </svg>
                    </div>
                    <span className="ml-1 text-white transition-all duration-300 group-hover:text-transparent">
                      Add to cart
                    </span>
                  </Button> */}
                  <Button
                    variant="flat"
                    size="sm"
                    radius="sm"
                    color="danger"
                    startContent={<ShoppingCart size={14} />}
                  >
                    Add to cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
