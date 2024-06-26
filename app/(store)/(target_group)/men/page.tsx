"use client";

import { getMensProducts } from "@/utils/getMenProducts";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

const MenPage = () => {
  const { data, status } = useQuery({
    queryKey: ["mensProds"],
    queryFn: getMensProducts,
    staleTime: 1000 * 60 * 5,
  });
  if (status === "pending") return <div>Loading...</div>;
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 xl:gap-12 p-5">
      {data?.map((product) => (
        <div key={product.id} className="shadow-md rounded-md">
          <Image
            className="bg-gray-100 w-64 h-64 md:h-96 md:w-80 rounded-md object-cover"
            width={400}
            height={400}
            src={product.image_url || "ImagePlaceholder"}
            alt={product.model || "placeholder"}
          />

          <div className="p-2 space-y-1 tracking-wide">
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

export default MenPage;
