import SearchBar from "@/components/ui/SearchBar";
import CartButton from "../ui/CartButton";
import WishlistButton from "../ui/WishlistButton";
import ProfileButton from "../ui/ProfileButton";

const NavbarActions = () => {
  return (
    <div className="ml-auto flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
      <SearchBar />
      <CartButton />
      <WishlistButton />
      <ProfileButton />
    </div>
  );
};

export default NavbarActions;
