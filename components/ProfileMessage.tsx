import useAuthStore from "@/lib/zustand/authStore";
import Link from "next/link";
import { Button } from "./ui/button";

const ProfileMessage = ({
  setState,
}: {
  setState?: (arg: boolean) => void;
}) => {
  const user = useAuthStore((state) => state.user);
  // const signout = useAuthStore((state) => state.signout); // Pobranie funkcji signout z zustand

  const username = user?.user_metadata.full_name?.split(" ")[0] || "User";
  return (
    <div>
      {user ? (
        <div className="flex flex-col gap-3">
          <p className="text-neutral-500 tracking-wide">
            Welcome back{" "}
            <span className="text-black-primary font-semibold">
              {username}!
            </span>
          </p>
          <Button
            onClick={() => {
              setState && setState(false);

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
            <span className="text-black-primary font-semibold">SneakPeak</span>{" "}
            member and get exclusive offers and discounts
          </p>
          <div className="flex space-x-2">
            <Link href="/auth/login">
              <Button
                variant="secondary"
                onClick={() => setState && setState(false)}
              >
                Log in
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button onClick={() => setState && setState(false)}>
                Register
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileMessage;
