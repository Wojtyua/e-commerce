"use client";

import { getMensProducts } from "@/utils/getMenProducts";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

const MenPage = () => {
  const { data, status } = useQuery({
    queryKey: ["mensProds"],
    queryFn: getMensProducts,
    staleTime: 1000 * 60 * 5,
  });
  if (status === "pending") return <div>Loading...</div>;
  return (
    <div className="grid grid-cols-3 gap-3 p-5">
      {data?.map((product) => (
        <div key={product.id}>
          <Image
            src={product.image_url || "placeholder"}
            alt={product.model || "placeholder"}
            width={300}
            height={300}
            className="w-auto h-auto"
          />
          <h2>{product.model}</h2>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default MenPage;
