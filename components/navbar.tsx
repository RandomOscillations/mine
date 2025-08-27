"use client";

import React from "react";

import dynamic from "next/dynamic";
import { motion } from "motion/react";
import { navLinks } from "@/constants";
import { iconMap } from "@/constants/iconMap";
import { SunIcon } from "@phosphor-icons/react";
import Link from "next/link";

const ThemeSwitch = dynamic(() => import("./theme-swtch"), {
  ssr: false,
  loading: () => (
    <div
      className="rounded-full bg-[--color-background] p-2 cursor-pointer border max-w-fit animate-pulse"
      style={{ borderColor: "var(--color-theme-border)" }}
    >
      <SunIcon className="text-[--color-text] w-4 h-4" />
    </div>
  ),
});

const Navbar = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* nav container */}
      <div className="mx-auto max-w-3xl px-5 py-3 border-x border-dashed border-[var(--color-main-border)]">
        <nav className="flex items-center justify-between">
          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {navLinks.map((link) => {
              // Check if the link has an icon property
              if (link.icon) {
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
              } else {
                // Render as text for links without icons (like Cal)
                return (
                  <Link
                    key={link.id}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 dark:text-neutral-500 hover:text-[var(--color-text)] transition-colors duration-75 font-medium text-xs"
                  >
                    {link.label}
                  </Link>
                );
              }
            })}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <ThemeSwitch />
          </motion.div>
        </nav>
      </div>
      {/* This creates the horizontal dashed line that will intersect with the wrapper borders */}
      <div className="w-full border-b border-dashed border-[var(--color-main-border)]"></div>
    </div>
  );
};

export default Navbar;
