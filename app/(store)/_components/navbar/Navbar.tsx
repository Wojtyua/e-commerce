"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CiMenuBurger } from "react-icons/ci";

import Navigation from "@/app/(store)/_components/navbar/Navigation";
import IconButton from "@/app/(store)/_components/ui/IconButton";
import NavbarActions from "./NavbarActions";
import MobileNav from "./MobileNav";
import Logo from "@/components/Logo";

const routes = [
  {
    id: "1",
    label: "Men",
    href: "/men",
  },
  {
    id: "2",
    label: "Women",
    href: "/women",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="border-b">
      <div className="px-4 sm:px-4 lg:px-8 flex h-16 items-center">
        <Logo />
        <Navigation data={routes} />

        <NavbarActions />
        <IconButton
          icon={<CiMenuBurger size={25} />}
          onClick={() => {
            toggleMenu();
          }}
          className="md:hidden ml-2 sm:ml-3"
        />
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed top-0 h-screen w-screen bg-black bg-opacity-5 backdrop-blur-sm z-10 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.2 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            ></motion.div>
            <MobileNav toggleMenu={toggleMenu} categories={routes} />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
