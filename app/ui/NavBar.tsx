"use client";

import React from "react";
import Link from "next/link";
import { AiFillPrinter } from "react-icons/ai";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Szerződések", href: "/bookings" },
    { label: "Ügyfelek", href: "/bookers" },
    { label: "Printerek", href: "/printers" },
    { label: "Kategóriák", href: "/categories" },
    { label: "Hibák", href: "/services" },
    { label: "Munkalapok", href: "/worksheets" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillPrinter />
      </Link>
      <ul className="flex space-x-6 text-zinc">
        {links.map((link) => (
          <Link
            key={link.href}
            className={`${
              link.href === currentPath ? "text-zinc-950" : "text-zinc-500"
            } hover:text-zinc-800 transition-colors`}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
