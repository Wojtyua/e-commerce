import { Button } from "./button";
import { CiHeart } from "react-icons/ci";

const AddToWishlistButton = () => {
  return (
    <Button size="lg" className="gap-2 text-md" variant="outline">
      <CiHeart size={25} />
      Add to wishlist
    </Button>
  );
};

export default AddToWishlistButton;
