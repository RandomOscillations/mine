import React from "react";
import { experiences } from "@/constants";
import ExperienceCard from "../cards/experience-card";

const Experience = () => {
  return (
    <div>
      {experiences.map((experience) => (
        <ExperienceCard key={experience.id} {...experience} />
      ))}
    </div>
  );
};

export default Experience;
