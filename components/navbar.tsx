"use client";

import React from "react";
import dynamic from "next/dynamic";
import { navLinks } from "@/constants";
import { iconMap } from "@/constants/iconMap";
import Link from "next/link";

const ThemeSwitch = dynamic(() => import("./theme-swtch"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const Navbar = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* nav container */}
      <div className="mx-auto max-w-2xl px-5 py-3 border-x border-dashed border-gray-400 dark:border-neutral-800">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {navLinks.map((link) => {
              const IconComponent = iconMap[link.icon];
              return (
                <Link
                  key={link.id}
                  href={link.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-neutral-500 hover:text-[var(--color-text)] transition-colors duration-75"
                >
                  <IconComponent className="w-5 h-5" />
                </Link>
              );
            })}
          </div>
          <ThemeSwitch />
        </nav>
      </div>
      {/* This creates the horizontal dashed line that will intersect with the wrapper borders */}
      <div className="w-full border-b border-dashed border-gray-400 dark:border-neutral-800"></div>
    </div>
  );
};

export default Navbar;
