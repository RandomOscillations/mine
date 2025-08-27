"use client";

import React from "react";
import { motion } from "motion/react";
import { experiences } from "@/constants";
import ExperienceCard from "../cards/experience-card";

const Experience = () => {
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

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const, // Same cubic-bezier as your reference
      },
    },
  };

  return (
    <motion.section
      className="pt-3 flex flex-col gap-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
    >
      {experiences.map((experience) => (
        <motion.div key={experience.id} variants={cardVariants}>
          <ExperienceCard {...experience} />
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Experience;
