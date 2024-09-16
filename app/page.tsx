import Image from "next/image";
import BlurFade from "./components/animations/blur-fade";
import WordRotate from "./components/animations/word-rotate";

export default async function Home() {
  return (
    <div className="w-full">
      <section className="relative h-[90vh] w-full pt-20">
        <div className="w-full">
          <Image
            src={"/images/banner-1.jpg"}
            className="relative -z-10 object-cover opacity-40 blur-md grayscale dark:blur-lg"
            fill
            alt="banner"
          />
          <h1 className="absolute top-[10%] z-20 px-8 text-7xl font-extrabold capitalize leading-[1.25] tracking-wide text-black opacity-100 dark:text-white max-md:text-center md:top-[30%] md:text-8xl">
            <BlurFade className="md:flex md:items-center">
              <span>Wear</span>
              <WordRotate
                className="ml-5 text-danger-400"
                words={["Clothes", "Shirts", "T-shirts"]}
              />
            </BlurFade>
            <BlurFade delay={0.2}>That Matter</BlurFade>
          </h1>
        </div>
      </section>
    </div>
  );
}
