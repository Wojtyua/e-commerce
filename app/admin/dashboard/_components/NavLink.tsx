import Link from "next/link";

type NavLinkProps = {
  href: string;
  label: string;
  isActive?: boolean;
};

const NavLink = ({ href, label, isActive }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={`rounden-md text-md tracking-wider text-sm p-2 rounded-md hover:bg-neutral-800 ${
        isActive ? "bg-neutral-800" : ""
      }`}
    >
      {label}
    </Link>
  );
};

export default NavLink;
