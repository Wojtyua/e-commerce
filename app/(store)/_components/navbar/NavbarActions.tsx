import CartButton from "../ui/CartButton";
import ProfileButton from "../ui/ProfileButton";
import SearchBar from "../ui/SearchBar";
import WishlistButton from "../ui/WishlistButton";

const NavbarActions = () => {
  return (
    <div className="ml-auto flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
      <SearchBar />
      <CartButton />
      <WishlistButton />
      <div className="hidden md:flex">
        <ProfileButton />
      </div>
    </div>
  );
};

export default NavbarActions;
