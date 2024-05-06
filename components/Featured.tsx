"use client";

import { getFeaturedProducts } from "@/utils/getFeaturedProducts";
import { useQuery } from "@tanstack/react-query";

const Featured = () => {
  const { data } = useQuery({
    queryKey: ["featuredProducts"],
    queryFn: getFeaturedProducts,
    staleTime: 1000 * 60 * 5,
  });
  return (
    <div>
      <ul>
        {data?.map((product) => (
          <li key={product.id}>{product.model}</li>
        ))}
      </ul>
    </div>
  );
};

export default Featured;
