"use client";

import React from "react";
import { motion } from "motion/react";
import ProjectCard from "../cards/project-card";
import { projects } from "@/constants";

const Projects = () => {
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
      className="pt-3 flex flex-col gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
    >
      {projects.map((project) => (
        <motion.div key={project.id} variants={cardVariants}>
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </motion.section>
  );
};

export default Projects;
