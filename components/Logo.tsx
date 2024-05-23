import Link from "next/link";

type LogoProps = {
  variant?: "default" | "white";
};

const Logo = ({ variant }: LogoProps) => {
  return (
    <Link href="/">
      <span
        role="button"
        className={`font-bold text-xl ${
          variant === "white" ? "text-white-primary" : ""
        }`}
      >
        SneakPeak
      </span>
    </Link>
  );
};

export default Logo;
