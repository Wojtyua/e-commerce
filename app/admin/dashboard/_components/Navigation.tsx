"use client";
import Logo from "@/components/Logo";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
  },
  {
    label: "Products",
    href: "/admin/dashboard/products",
  },
  {
    label: "Orders",
    href: "/admin/dashboard/orders",
  },
  {
    label: "Users",
    href: "/admin/dashboard/users",
  },
];

const Navigation = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col space-y-8 p-2 bg-black-primary text-white-primary">
      <Logo />
      <nav className="flex-1">
        <ul className="space-y-2 flex flex-col">
          {routes.map((route) => (
            <NavLink
              key={route.href}
              href={route.href}
              label={route.label}
              isActive={pathname === route.href}
            />
          ))}
        </ul>
      </nav>
      <span className="bg-neutral-900 text-white-primary text-2xl">Logout</span>
    </div>
  );
};

export default Navigation;
