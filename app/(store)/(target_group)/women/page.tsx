"use client";

import { getWomenProducts } from "@/utils/getWomenProducts";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

const WomenPage = () => {
  const { data, status } = useQuery({
    queryKey: ["womensProds"],
    queryFn: getWomenProducts,
    staleTime: 1000 * 60 * 5,
  });
  return (
    <div className="grid grid-cols-3 gap-10 p-5">
      {data?.map((product) => (
        <div
          className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
          key={product.id}
        >
          <Image
            className="bg-gray-100 w-auto h-auto rounded-md"
            width={350}
            height={350}
            src={product.image_url || "ImagePlaceholder"}
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
            <p className="text-xl font-semibold">{product.price} PLN</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WomenPage;
