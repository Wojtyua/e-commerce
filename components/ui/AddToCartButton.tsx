import useCartStore from "@/lib/store";
import { CartItem } from "@/types/store.types";
import { Button } from "./button";
import { CiHeart } from "react-icons/ci";

const AddToCartButton = ({ product }: { product: CartItem }) => {
  const addItem = useCartStore((state) => state.addItem);
  const items = useCartStore((state) => state.items);

  const handleAddToCart = () => {
    addItem({ ...product, quantity: 1 });
    console.log("Added to cart", { product, items });
  };

  return (
    <Button
      size="lg"
      variant="outline"
      className="gap-2 text-md"
      onClick={handleAddToCart}
    >
      <CiHeart size={25} />
      Add to wishlist
    </Button>
  );
};

export default AddToCartButton;
