import useAuthStore from "@/lib/zustand/authStore";
import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const ProfileMessage = ({
  setState,
}: {
  setState?: (arg: boolean) => void;
}) => {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const router = useRouter();

  const username = user?.user_metadata.first_name || "User";
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
              logout(() => router.push("/"));
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
