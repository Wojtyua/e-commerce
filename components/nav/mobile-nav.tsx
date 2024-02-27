import { motion } from "framer-motion";
import IconButton from "../icon-button";
import { IoCloseOutline } from "react-icons/io5";
import { menuSlide } from "@/lib/animations";

type MobileNavProps = {
  toggleMenu: () => void;
  isMenuOpen: boolean;
};

const MobileNav = ({ toggleMenu }: MobileNavProps) => {
  return (
    <motion.aside
      className="fixed top-0 right-0 w-80 h-screen z-10 bg-white shadow-sm md:hidden"
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className="px-4 sm:px-4 lg:px-8 flex h-16 items-center justify-end ">
        <IconButton
          icon={<IoCloseOutline size={25} />}
          onClick={() => {
            toggleMenu();
          }}
          className="md:hidden ml-2 sm:ml-3"
        />
      </div>
    </motion.aside>
  );
};

export default MobileNav;
