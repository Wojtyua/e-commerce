"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { categories } from "@/data";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/nav/navbar-actions";
import IconButton from "@/components/icon-button";
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
      <AnimatePresence mode="wait">
        {/* Dodanie animacji do zamknięcia menu */}
        {isMenuOpen && (
          <MobileNav toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
