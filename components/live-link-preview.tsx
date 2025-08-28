"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type LiveLinkPreviewProps = {
  liveLink: string;
  previewImage: string;
  previewAlt: string;
};

const LiveLinkPreview = ({
  liveLink,
  previewImage,
  previewAlt,
}: LiveLinkPreviewProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Trigger */}
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <Link
          className="flex items-center gap-1 text-[var(--color-project-card-description)] hover:text-[var(--color-text)]"
          href={liveLink}
          target="_blank"
        >
          <span className="text-xs">View</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="inline-block"
          >
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
          </svg>
        </Link>
      </div>

      {/* Hover Card Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
              },
            }}
            exit={{
              opacity: 0,
              y: 20,
              scale: 0.6,
              transition: {
                duration: 0.2,
                ease: "easeInOut",
              },
            }}
            className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 z-50 shadow-xl rounded-xl"
          >
            <div className="p-1 bg-[var(--color-hover-card-bg)] border-2 border-[var(--color-hover-card-border)] shadow rounded-xl w-[200px]">
              <Image
                src={previewImage}
                alt={previewAlt}
                width={300}
                height={200}
                className="rounded-lg object-cover"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LiveLinkPreview;
