"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, className, children }) => {
  const pathname = usePathname();

  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={`${isActive ? "text-blue-500 lg:border-b-2 lg:border-blue-500" : ""} ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
