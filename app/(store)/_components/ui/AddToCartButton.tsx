import { Button } from "@/components/ui/button";
import useCartStore from "@/lib/zustand/cartStore";
import { CartItem } from "@/types/store.types";

import { PiShoppingBagLight } from "react-icons/pi";

const AddToCartButton = ({ product }: { product: CartItem }) => {
  const addItem = useCartStore((state) => state.addItem);
  const items = useCartStore((state) => state.items);

  const handleAddToCart = () => {
    addItem({ ...product, quantity: 1 });
    console.log("Added to cart", { product, items });
  };

  return (
    <Button size="lg" className="gap-2 text-md" onClick={handleAddToCart}>
      <PiShoppingBagLight size={25} />
      Add to cart
    </Button>
  );
};

export default AddToCartButton;
