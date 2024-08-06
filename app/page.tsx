import Image from "next/image";

export default async function Home() {
  return (
    <div className="w-full">
      <section className="relative h-[90vh] w-full pt-20">
        <div className="w-full">
          <Image
            src={"/images/banner-1.jpg"}
            className="object-cover grayscale"
            fill
            alt="banner"
          />
        </div>
      </section>
    </div>
  );
}
