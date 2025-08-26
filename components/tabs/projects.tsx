import React from "react";
import { ProjectCard } from "../cards";
import { projects } from "@/constants";

const Projects = () => {
  return (
    <section className="pt-3 flex flex-col gap-12">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </section>
  );
};

export default Projects;
