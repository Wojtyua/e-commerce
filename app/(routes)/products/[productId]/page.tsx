"use client";

import ImageGallery from "@/components/ImageGallery";
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

  if (!data) {
    return <div>Product not found</div>;
  }

  return (
    <section className="flex flex-col px-2 py-5 gap-4 justify-center mx-auto">
      <div className="px-3">
        <h2 className="text-3xl font-semibold tracking-wide capitalize ">
          {data.model}
        </h2>
        <p className="text-lg text-neutral-500 first-letter:uppercase">
          {data.target_group}&apos;s shoes
        </p>
        <p className="text-lg font-bold">{data.price} zł</p>
      </div>
      <ImageGallery images={data.image_urls} />
      <div className="mt-5 px-3">
        <h3 className="text-xl font-semibold tracking-wide mb-3">
          Choose a size
        </h3>
        <div className="grid grid-cols-3 gap-2">
          {data.variants.map((variant, index) => (
            <button
              key={index}
              className="px-3 py-1 border border-neutral-200 rounded-md"
            >
              {variant.size}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
