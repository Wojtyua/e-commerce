"use client";

import { getFeaturedProducts } from "@/utils/getFeaturedProducts";
import { useQuery } from "@tanstack/react-query";

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
      <SectionHeader title="Featured products" />
      <Carousel className="">
        <div className="absolute top-0 right-0">
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </div>

        <CarouselContent>
          {data?.map((product) => (
            <CarouselItem className="basis-1/3" key={product.id}>
              <Image
                className="bg-gray-300"
                width={250}
                height={250}
                src={product.image_url}
                alt={product.model}
              />
              <h3>{product.model}</h3>
              <p>${product.price}</p>
            </CarouselItem>
          ))}
          <CarouselItem className="basis-1/3">Placeholder</CarouselItem>
          <CarouselItem className="basis-1/3">Placeholder</CarouselItem>
          <CarouselItem className="basis-1/3">Placeholder</CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default Featured;
