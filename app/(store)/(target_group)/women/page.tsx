"use client";

import { getWomenProducts } from "@/utils/getWomenProducts";
import { useQuery } from "@tanstack/react-query";

const WomenPage = () => {
  const { data, status } = useQuery({
    queryKey: ["womensProds"],
    queryFn: getWomenProducts,
    staleTime: 1000 * 60 * 5,
  });
  return <div>Women Page</div>;
};

export default WomenPage;
