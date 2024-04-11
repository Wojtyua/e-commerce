"use client";
import { useEffect } from "react";
import { getProducts } from "@/services/apiProducts";

const WomenPage = () => {
  useEffect(() => {
    getProducts().then((data) => console.log(data));
  }, []);

  return <div>Women Page</div>;
};

export default WomenPage;
