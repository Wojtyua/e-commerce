import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

import { CiUser } from "react-icons/ci";
import Link from "next/link";
import { useState } from "react";
import useAuthStore from "@/lib/zustand/authStore";

const ProfileButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useAuthStore((state) => state.user);
  // const signout = useAuthStore((state) => state.signout); // Pobranie funkcji signout z zustand

  console.log("Current user:", user);

  const userName = user?.email || "User";

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
        {user ? (
          <div className="flex flex-col gap-3">
            <p className="text-neutral-500 tracking-wide">
              Welcome back{" "}
              <span className="text-black-primary font-semibold">
                {userName}!
              </span>
            </p>
            <Button
              onClick={() => {
                setIsOpen(false);
                // signout(); // Użycie funkcji signout
              }}
            >
              Logout
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-neutral-500">
              Become a{" "}
              <span className="text-black-primary font-semibold">
                SneakPeak
              </span>{" "}
              member and get exclusive offers and discounts
            </p>
            <div className="flex space-x-2">
              <Link href="/auth/login">
                <Button variant="secondary" onClick={() => setIsOpen(false)}>
                  Log in
                </Button>
              </Link>
              <Link href="/auth/signup">
                <Button onClick={() => setIsOpen(false)}>Register</Button>
              </Link>
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default ProfileButton;
