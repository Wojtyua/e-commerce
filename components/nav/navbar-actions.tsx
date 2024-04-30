import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

import SearchBar from "@/components/search-bar";
import IconButton from "@/components/ui/icon-button";
import Cart from "@/components/ui/cart-button";

type navbarActionsProps = {
  isMobile?: boolean;
};

const structure = [
  {
    icon: <CiHeart size={25} />,
    action: () => {},
    label: "Favorites",
  },
  {
    icon: <Cart />,
    action: () => {},
    label: "Cart",
  },
  {
    icon: <CiUser size={25} />,
    action: () => {},
    label: "Profile",
  },
];

const NavbarActions = ({ isMobile }: navbarActionsProps) => {
  return (
    <div
      className={` ${
        isMobile
          ? "flex flex-col"
          : "ml-auto flex items-center space-x-2 sm:space-x-4 lg:space-x-6"
      } `}
    >
      <SearchBar />
      {structure.map((item, index) => (
        <div key={index} className={`${isMobile && "flex items-center gap-2"}`}>
          <IconButton icon={item.icon} onClick={item.action} />
          {isMobile && <p>{item.label}</p>}
        </div>
      ))}
    </div>
  );
};

export default NavbarActions;
