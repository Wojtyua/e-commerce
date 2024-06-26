import { motion } from "framer-motion";
import { menuSlide } from "@/lib/animations";
import { Link as LinkType } from "@/types/types";
import Link from "next/link";

import { IoCloseOutline } from "react-icons/io5";
import { CiHeart, CiUser } from "react-icons/ci";
import { PiShoppingBagLight } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import IconButton from "@/app/(store)/_components/ui/IconButton";
import ProfileMessage from "@/components/ProfileMessage";

type MobileNavProps = {
  toggleMenu: () => void;
  categories: LinkType[];
};

const structure = [
  {
    icon: <CiSearch size={25} />,
    action: () => {},
    label: "Search",
  },
  {
    icon: <CiHeart size={25} />,
    action: () => {},
    label: "Wishlist",
  },
  {
    icon: <PiShoppingBagLight size={25} />,
    action: () => {
      console.log("clicked shopping bag");
    },
    label: "Cart",
  },
  {
    icon: <CiUser size={25} />,
    action: () => {},
    label: "Profile",
  },
];

// REFACTOR IS NEEDED!!!
const MobileNav = ({ toggleMenu, categories }: MobileNavProps) => {
  return (
    <motion.aside
      className="fixed top-0 right-0 h-full w-80 z-50 bg-white text-black-primary md:hidden"
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className="px-4 flex h-16 items-center justify-end ">
        <IconButton
          icon={<IoCloseOutline size={25} />}
          onClick={toggleMenu}
          className="md:hidden ml-2 sm:ml-3"
        />
      </div>
      <div className="flex flex-col text-2xl space-y-12 font-medium py-2 px-10">
        {/* To bedzie można wywalic albo zrobić jakos inaczej */}
        <div className="flex flex-col space-y-4">
          <Link href="/new">New & Featured</Link>
          {categories.map((category) => (
            <Link
              onClick={toggleMenu}
              key={category.id}
              href={`${category.href}`}
            >
              {category.label}
            </Link>
          ))}
        </div>
        <div className="text-lg">
          <ProfileMessage setState={toggleMenu} />
        </div>
        <div className="text-base font-semibold">
          {structure.map((item, index) => (
            <div key={index}>
              <IconButton
                icon={item.icon}
                onClick={item.action}
                label={item.label}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.aside>
  );
};

export default MobileNav;
