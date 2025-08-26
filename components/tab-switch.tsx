"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { tabs } from "@/constants";

const TabSwitch = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  const containerRef = useRef<HTMLDivElement>(null);
  const activeTabElementRef = useRef<HTMLButtonElement>(null);
  const [clipPath, setClipPath] = useState("inset(0px 75% 0px 0% round 17px)");

  useEffect(() => {
    const container = containerRef.current;

    if (activeTab && container) {
      const activeTabElement = activeTabElementRef.current;

      if (activeTabElement) {
        const { offsetLeft, offsetWidth } = activeTabElement;

        const clipLeft = offsetLeft;
        const clipRight = offsetLeft + offsetWidth;
        const newClipPath = `inset(0 ${Number(
          100 - (clipRight / container.offsetWidth) * 100
        ).toFixed()}% 0 ${Number(
          (clipLeft / container.offsetWidth) * 100
        ).toFixed()}% round 17px)`;

        setClipPath(newClipPath);
      }
    }
  }, [activeTab]);

  return (
    <div className="relative flex flex-col items-center w-fit my-6">
      <ul className="relative flex w-full justify-center gap-2">
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button
              ref={activeTab === tab.name ? activeTabElementRef : null}
              data-tab={tab.name}
              onClick={() => {
                setActiveTab(tab.name);
              }}
              className="flex h-[28px] items-center gap-2 rounded-full px-4 text-sm font-medium text-[var(--color-bio)] no-underline"
            >
              {tab.name}
            </button>
          </li>
        ))}
      </ul>

      <motion.div
        aria-hidden
        className="absolute z-10 w-full overflow-hidden"
        style={{ clipPath: "inset(0px 75% 0px 0% round 17px)" }}
        animate={{ clipPath }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 40,
        }}
        ref={containerRef}
      >
        <ul
          className="relative flex w-full justify-center gap-2"
          style={{ backgroundColor: "var(--color-tab-switch-bg)" }}
        >
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                data-tab={tab.name}
                onClick={() => {
                  setActiveTab(tab.name);
                }}
                className="flex h-[28px] items-center gap-2 rounded-full px-4 text-sm font-bold text-[var(--color-text)] no-underline"
                tabIndex={-1}
              >
                {tab.name}
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default TabSwitch;
