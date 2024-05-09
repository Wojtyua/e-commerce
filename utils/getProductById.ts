import supabase from "@/services/supabase";

export interface FormattedProduct {
  id: number | null;
  model: string | null;
  price: number | null;
  target_group: string | null;
  image_urls: string[] | [];
  variants: { size: number | null; quantity: number | null }[];
}

export const getProductById = async (
  id: number
): Promise<FormattedProduct | null> => {
  const { data, error } = await supabase
    .from("products")
    .select(
      `
      id,
      model,
      price,
      target_group,
      product_images (
        images(image_url)
      ),
      variants (size, quantity)
    `
    )
    .eq("id", id);

  if (error) {
    console.error("Error fetching product by id:", error.message);
    return null;
  }

  if (!data || data.length === 0) {
    return null;
  }

  const product = data[0];

  const image_urls = product.product_images.flatMap(
    (pi) => pi.images?.image_url || []
  );

  const variants = product.variants.map((variant) => ({
    size: variant.size,
    quantity: variant.quantity,
  }));

  const formattedProduct: FormattedProduct = {
    id: product.id,
    model: product.model,
    price: product.price,
    target_group: product.target_group,
    image_urls,
    variants,
  };

  return formattedProduct;
};
