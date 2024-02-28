"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { categories } from "@/data";

import Container from "@/components/ui/container";
import MainNav from "@/components/nav/main-nav";
import NavbarActions from "@/components/nav/navbar-actions";
import IconButton from "@/components/ui/icon-button";
import MobileNav from "@/components/nav/mobile-nav";

import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="border-b">
      <Container>
        <div className="px-4 sm:px-4 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <p className="font-bold text-xl">SneakPeak</p>
          </Link>
          <MainNav data={categories} />

          <NavbarActions />
          <IconButton
            icon={<CiMenuBurger size={25} />}
            onClick={() => {
              toggleMenu();
            }}
            className="md:hidden ml-2 sm:ml-3"
          />
        </div>
      </Container>
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
            <MobileNav toggleMenu={toggleMenu} categories={categories} />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
