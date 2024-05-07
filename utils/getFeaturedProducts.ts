import supabase from "@/services/supabase";

type FeaturedProduct = {
  id: string;
  model: string;
  price: number;
  image_url: string;
  target_group: string;
};

export const getFeaturedProducts = async () => {
  const { data, error } = await supabase
    .from("products")
    .select(
      `
      id,
      model,
      price,
      product_images (
        images(*)
      ),
      variants (*)
    `
    )
    .eq("featured", true);

  if (error) {
    console.error("Error fetching featured products:", error.message);
    return [];
  }

  // Ensure data is an array before mapping it
  if (!data) {
    return [];
  }

  // Map through the data to format it, extracting only the first image URL
  const formattedData: FeaturedProduct[] = data.map((product) => ({
    id: product.id,
    model: product.model,
    price: product.price,
    image_url: product.product_images[0]?.images?.image_url,
    target_group: product.variants[0]?.target_group,
  }));

  // Return the formatted data instead of the raw data
  return formattedData;
};
