"use client";

import React from "react";
import { motion } from "motion/react";

const PageFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-4xl mx-auto">
      {/* This creates the horizontal dashed line that will intersect with the wrapper borders */}
      <div className="w-full border-t border-dashed border-[var(--color-main-border)]"></div>
      {/* footer container */}
      <div className="mx-auto max-w-3xl px-5 py-3 border-x border-dashed border-[var(--color-main-border)]">
        {/* Add your footer content here */}
        <div className="flex items-center justify-between">
          {/* Left side content */}
          <motion.div
            className="text-xs text-[var(--color-project-card-description)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <span>div</span>
          </motion.div>

          {/* Right side content */}
          <motion.div
            className="text-xs text-[var(--color-project-card-description)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          >
            Built with Next.js
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PageFooter;
