"use client";

import React from "react";
import { motion } from "motion/react";
import { frontendTools, backendTools } from "@/constants";
import ToolCard from "../cards/tool-card";

const Tools = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const cardsVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.03, // Individual delays like reference
        delayChildren: 0.1,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6, // Same duration as reference
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
    >
      {/* Frontend Tools Section */}
      <motion.div variants={sectionVariants}>
        <h3 className="text-base font-semibold mb-4 text-[var(--color-text)]">
          Frontend
        </h3>
        <motion.div
          className="flex flex-wrap gap-x-16 gap-y-8"
          variants={cardsVariants}
        >
          {frontendTools.map((tool) => (
            <motion.div key={tool.id} variants={cardVariants}>
              <ToolCard tool={tool} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Backend Tools Section */}
      <motion.div variants={sectionVariants}>
        <h3 className="text-base font-semibold mb-4 text-[var(--color-text)]">
          Backend
        </h3>
        <motion.div
          className="flex flex-wrap gap-x-16 gap-y-6"
          variants={cardsVariants}
        >
          {backendTools.map((tool) => (
            <motion.div key={tool.id} variants={cardVariants}>
              <ToolCard tool={tool} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Tools;
