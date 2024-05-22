"use client";

import { getFeaturedProducts } from "@/utils/getFeaturedProducts";
import { useQuery } from "@tanstack/react-query";
import ImagePlaceholder from "@/public/images/image_placeholder.webp";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import SectionHeader from "./ui/SectionHeader";

const Featured = () => {
  const { data } = useQuery({
    queryKey: ["featuredProducts"],
    queryFn: getFeaturedProducts,
    staleTime: 1000 * 60 * 5,
  });
  return (
    <section className="px-3 w-full relative">
      <SectionHeader title="Featured products" className="mb-24 sm:mb-16 " />

      <Carousel>
        <div className="absolute -top-12 right-16">
          <CarouselPrevious />
          <CarouselNext />
        </div>
        <CarouselContent>
          {data?.map((product) => (
            <CarouselItem
              className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              key={product.id}
            >
              <Image
                className="bg-gray-100 w-auto h-auto"
                width={250}
                height={250}
                src={product.image_url || ImagePlaceholder}
                alt={product.model || "placeholder"}
              />
              <div className="py-2 space-y-1 tracking-wide">
                <Link href={`/products/${product.id}`}>
                  <h3 className="font-bold text-lg capitalize hover:underline hover:cursor-pointer hover:transition">
                    {product.model}
                  </h3>
                </Link>

                <p className="text-sm text-neutral-500 first-letter:uppercase">
                  {product.target_group}&apos;s sneakers
                </p>
                <p className="text-xl font-semibold">{product.price} zł</p>
              </div>
            </CarouselItem>
          ))}
          <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 ">
            <Image
              className="bg-gray-100 w-auto h-auto"
              width={250}
              height={250}
              src={ImagePlaceholder}
              alt="plachoolder image"
            />
            <div className="py-2 space-y-1 tracking-wide flex flex-col ">
              <h3 className="font-bold text-lg capitalize hover:underline hover:cursor-pointer hover:transition">
                Buty sportowe
              </h3>
              <p className="text-sm text-neutral-500 first-letter:uppercase">
                man&apos;s
              </p>
              <p className="text-xl font-semibold">699.69 zł</p>
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/3">Placeholder</CarouselItem>
          <CarouselItem className="basis-1/3">Placeholder</CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Featured;
