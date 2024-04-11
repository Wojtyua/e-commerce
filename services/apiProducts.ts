import supabase from "./supabase";

export async function getProducts() {
  let { data, error } = await supabase.from("productSizes").select(`
    *,
    productId(*),
    sizes:sizeId(size)`);

  if (error) {
    console.error(error);
    throw new Error("Products could not be fetched");
  }

  return data;
}
