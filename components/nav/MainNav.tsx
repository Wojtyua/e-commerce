"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Link as LinkType } from "@/types";

type MainNavProps = {
  data: LinkType[];
};

const MainNav = ({ data }: MainNavProps) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `${route.href}`,
    label: route.label,
    active: pathname === `${route.href}`,
  }));

  return (
    <nav className="hidden mx-6 md:flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-black-primary",
            route.active ? "text-black-primary" : "text-neutral-500"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
