"use client";

import { getProductById, FormattedProduct } from "@/utils/getProductById";
import { useQuery } from "@tanstack/react-query";
import useCartStore from "@/lib/store";

import ProductHeader from "@/components/productDetails/ProductHeader";
import AddToWishlistButton from "@/components/ui/AddToWishlistButton";
import AddToCartButton from "@/components/ui/AddToCartButton";
import ProductPending from "@/components/ui/ProductPending";
import ImageGallery from "@/components/ImageGallery";

const ProductDetailsPage = ({ params }: { params: { productId: number } }) => {
  const productId = params.productId;
  const state = useCartStore((state) => state.items);
  const { data, status } = useQuery<FormattedProduct | null>({
    queryKey: ["productById", productId],
    queryFn: () => getProductById(productId),
    staleTime: 1000 * 60 * 5,
  });

  if (status === "pending") {
    return <ProductPending />;
  }

  if (status === "error") {
    return <div>Error loading product details</div>;
  }

  if (!data) {
    return <div>Product not found</div>;
  }

  const product = {
    id: data.id,
    model: data.model,
    price: data.price,
    quantity: 1,
    imageUrl: data.image_urls[0],
  };

  return (
    <section className="flex flex-col px-2 py-5 gap-4 justify-center mx-auto md:flex-row">
      <div className="order-2 md:order-1">
        <ImageGallery images={data.image_urls} />
      </div>
      <div className=" order-1 md:hidden">
        <ProductHeader
          model={data.model}
          target={data.target_group}
          price={data.price}
        />
      </div>

      <div className="mt-5 order-3 flex flex-col gap-5 px-1">
        <div className=" hidden md:block md:order-1">
          <ProductHeader
            model={data.model}
            target={data.target_group}
            price={data.price}
          />
        </div>
        <div className="md:order-2">
          <h3 className="text-xl font-semibold tracking-wide mb-3">
            Choose a size
          </h3>
          <div className="grid grid-cols-3 gap-2">
            {data.variants.map((variant, index) => (
              <button
                key={index}
                className="px-3 py-2 mx-auto w-2/3 border border-neutral-200 rounded-md"
              >
                {variant.size}
              </button>
            ))}
          </div>
        </div>
        <div className="order-4 md:max-w-96">
          <h3 className="font-semibold text-lg mb-2">About</h3>
          <p className="tracking-wide text">{data.description}</p>
        </div>
        <div className="flex flex-col gap-2 order-5">
          <AddToCartButton product={product} />
          <AddToWishlistButton />
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
