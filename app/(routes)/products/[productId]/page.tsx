"use client";

import { getProductById, FormattedProduct } from "@/utils/getProductById";
import { useQuery } from "@tanstack/react-query";

const ProductDetailsPage = ({ params }: { params: { productId: number } }) => {
  const productId = params.productId;
  const { data, status } = useQuery<FormattedProduct | null>({
    queryKey: ["productById", productId],
    queryFn: () => getProductById(productId),
    staleTime: 1000 * 60 * 5,
  });

  if (status === "pending") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error loading product details</div>;
  }

  return (
    <section className="grid justify-center w-full lg:w-4/5 mx-auto bg-purple-300">
      <div>
        <h2>{data?.model || "No model available"}</h2>
        {/* You can add more detailed display logic here */}
      </div>
    </section>
  );
};

export default ProductDetailsPage;
