import { CiUser } from "react-icons/ci";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

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
      <PopoverContent>
        <div className="space-y-3">
          <p className="text-neutral-500">
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
      </PopoverContent>
    </Popover>
  );
};

export default ProfileButton;
