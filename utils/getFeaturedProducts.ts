import supabase from "@/services/supabase";

export const getFeaturedProducts = async () => {
  const { data, error } = await supabase
    .from("products")
    .select(
      `
      id,
      model,
      price,
      product_images (
        image_id,
        images (
          id,
          image_url
        )
      )
    `
    )
    .eq("featured", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching featured products:", error.message);
    return [];
  }

  if (data) {
    // Flatten the data to include image URLs directly within each product object
    const formattedData = data.map((product) => {
      const imageUrls = product.product_images.map((pi) => pi.images.image_url);
      return {
        ...product,
        imageUrls,
      };
    });
    return formattedData;
  }

  return [];
};
