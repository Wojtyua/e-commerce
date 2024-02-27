"use client";

import { PiShoppingBagLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

import SearchBar from "@/components/search-bar";
import IconButton from "@/components/icon-button";

const NavbarActions = () => {
  return (
    <div className="ml-auto flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
      <SearchBar />
      <IconButton icon={<CiHeart size={25} />} onClick={() => {}} />
      <IconButton icon={<PiShoppingBagLight size={25} />} onClick={() => {}} />
      <IconButton icon={<CiUser size={25} />} onClick={() => {}} />
    </div>
  );
};

export default NavbarActions;
