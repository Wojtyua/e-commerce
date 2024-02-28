import { motion } from "framer-motion";
import IconButton from "../ui/icon-button";
import { IoCloseOutline } from "react-icons/io5";
import { menuSlide } from "@/lib/animations";
import { Category } from "@/types";
import Link from "next/link";
import { Button } from "../ui/button";
import Cart from "../ui/cart-button";

type MobileNavProps = {
  toggleMenu: () => void;
  categories: Category[];
};

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
          <Link href="/new">New & Recomended</Link>
          {categories.map((category) => (
            <Link key={category.id} href={`/category/${category.id}`}>
              {category.name}
            </Link>
          ))}
        </div>

        {/* login or register */}
        <div className="space-y-3">
          <p className="text-neutral-500 text-lg">
            {/* to zmienic */}
            Become a{" "}
            <span className="text-black-primary font-semibold">
              SneakPeak
            </span>{" "}
            member and get exclusive offers and discounts
          </p>
          <div className="flex space-x-2">
            <Button variant="secondary">Log in</Button>
            <Button>Register</Button>
          </div>
        </div>
        <div className="text-base font-semibold">
          <Link href="/cart" className="flex items-center gap-2">
            <Cart />
            <p>Cart</p>
          </Link>
          <Link href="/cart" className="flex items-center gap-2">
            <Cart />
            <p>Cart</p>
          </Link>
          <Link href="/cart" className="flex items-center gap-2">
            <Cart />
            <p>Cart</p>
          </Link>
          <Link href="/cart" className="flex items-center gap-2">
            <Cart />
            <p>Cart</p>
          </Link>
        </div>
      </div>
    </motion.aside>
  );
};

export default MobileNav;
