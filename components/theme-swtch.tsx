"use client";

import React from "react";
import { MoonStarsIcon, SunIcon } from "@phosphor-icons/react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  console.log(theme);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div
      className="rounded-full bg-[--color-background] p-2 cursor-pointer border max-w-fit"
      style={{ borderColor: "var(--color-theme-border)" }}
      onClick={handleThemeSwitch}
    >
      {theme === "dark" ? (
        <MoonStarsIcon className="text-[--color-text] w-4 h-4" />
      ) : (
        <SunIcon className="text-[--color-text] w-4 h-4" />
      )}
    </div>
  );
};

export default ThemeSwitch;
