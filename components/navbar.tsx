"use client";

import React from "react";
import dynamic from "next/dynamic";

const ThemeSwitch = dynamic(() => import("./theme-swtch"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const Navbar = () => {
  return (
    <div>
      <ThemeSwitch />
    </div>
  );
};

export default Navbar;
