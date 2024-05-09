import supabase from "@/services/supabase";

export const getProductById = async (id: number) => {
  const { data, error } = await supabase
    .from("products")
    .select(
      `
      id,
      model,
      price,
      target_group,
      product_images (
        images(*)
      ),
      variants (*)
    `
    )
    .eq("id", id);

  if (error) {
    console.error("Error fetching product by id:", error.message);
    return [];
  }

  // Ensure data is an array before mapping it
  if (!data) {
    return [];
  }

  // Return the formatted data instead of the raw data
  return data;
};
