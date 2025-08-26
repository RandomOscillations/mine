import React from "react";
import { experiences } from "@/constants";
import ExperienceCard from "../cards/experience-card";

const Experience = () => {
  return (
    <section className="pt-3 flex flex-col gap-12">
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} {...experience} />
      ))}
    </section>
  );
};

export default Experience;
