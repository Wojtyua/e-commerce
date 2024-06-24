"use client";

import { getMensProducts } from "@/utils/getMenProducts";
import { useQuery } from "@tanstack/react-query";

const MenPage = () => {
  const { data, status } = useQuery({
    queryKey: ["mensProds"],
    queryFn: getMensProducts,
    staleTime: 1000 * 60 * 5,
  });
  return <div>Men page</div>;
};

export default MenPage;
