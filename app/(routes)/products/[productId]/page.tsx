"use client";

import { getProductById } from "@/utils/getProductById";
import { useQuery } from "@tanstack/react-query";

const ProductDetailsPage = ({ params }: { params: { productId: number } }) => {
  const id = params.productId;
  const { data } = useQuery({
    queryKey: ["productById"],
    queryFn: () => getProductById(id),
    staleTime: 1000 * 60 * 5,
  });

  return (
    <section className="grid justify-center w-full lg:w-4/5 mx-auto bg-purple-300">
      <div>
        <p>Product details page</p>
        <p>Product id: {params.productId}</p>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
