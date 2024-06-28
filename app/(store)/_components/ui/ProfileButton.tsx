import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { CiUser } from "react-icons/ci";

import { useState } from "react";

import ProfileMessage from "@/components/ProfileMessage";

const ProfileButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger>
        <div
          role="button"
          className="hover:bg-neutral-200 transition rounded-full p-2"
        >
          <CiUser size={25} />
        </div>
      </PopoverTrigger>
      <PopoverContent>
        <ProfileMessage setState={setIsOpen} />
      </PopoverContent>
    </Popover>
  );
};

export default ProfileButton;
