import supabase from "@/services/supabase";

export const getProducts = async () => {
  let { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.error("Error fetching products", error);
    throw new Error("Error fetching products");
  }

  return data;
};
