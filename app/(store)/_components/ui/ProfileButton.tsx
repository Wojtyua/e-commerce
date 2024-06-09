import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

import { CiUser } from "react-icons/ci";

const ProfileButton = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <div
          role="button"
          className="hover:bg-neutral-200 transition rounded-full p-2"
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
