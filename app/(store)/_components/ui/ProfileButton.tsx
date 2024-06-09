import { CiUser } from "react-icons/ci";
import IconButton from "./IconButton";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const ProfileButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    // <div className="relative" onClick={() => setIsOpen(!isOpen)}>
    //   <IconButton icon={<CiUser size={25} />} />
    //   {isOpen && (
    //     <div className="absolute -bottom-24 z-10 right-0 text-black-primary w-64 h-24 bg-white-primary shadow-lg rounded-lg border"></div>
    //   )}
    // </div>
    <Popover>
      <PopoverTrigger>
        <div
          role="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`${
            isOpen ? "bg-neutral-200" : ""
          } hover:bg-neutral-200 transition rounded-full p-2`}
        >
          <CiUser size={25} />
        </div>
      </PopoverTrigger>
      <PopoverContent>Place content for the popover here.</PopoverContent>
    </Popover>
  );
};

export default ProfileButton;
