import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { PiShoppingBagLight } from "react-icons/pi";

import SearchBar from "@/components/ui/SearchBar";
import IconButton from "@/components/ui/IconButton";
import CartButton from "../ui/CartButton";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";

const structure = [
  {
    icon: <CiHeart size={25} />,
    action: () => {},
  },
  {
    icon: <PiShoppingBagLight size={25} />,
    action: () => {
      console.log("clicked shopping bag");
    },
  },
  {
    icon: <CiUser size={25} />,
    action: () => {},
  },
];

const NavbarActions = () => {
  return (
    <div className="ml-auto flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
      <SearchBar />
      {/* {structure.map((item, index) => (
        <div key={index}>
          <IconButton icon={item.icon} onClick={item.action} />
        </div>
      ))} */}

      <CartButton />
    </div>
  );
};

export default NavbarActions;
