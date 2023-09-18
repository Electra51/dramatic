"use client";
import React from "react";
import { NavLink as Link } from "./NavElements";
import { NavLinkProps } from "@/types/propTypes";
import { usePathname } from "next/navigation";

const NavLink = ({ route, children, color, large, onClick }: NavLinkProps) => {
  const pathname = usePathname();
  const currentRoute = pathname;

  return (
    <Link
      href={route}
      onClick={onClick}
      color={color}
      large={large}
      className={currentRoute === route ? "active" : ""}>
      {children}
    </Link>
  );
};

export default NavLink;
