import React from "react";
import Image from "next/image";
import { TExperience } from "@/constants";

export type TExperienceCard = {
  experience: TExperience;
};

const ExperienceCard = ({ experience }: TExperienceCard) => {
  return <div className="flex gap-3">{experience.company}</div>;
};

export default ExperienceCard;
