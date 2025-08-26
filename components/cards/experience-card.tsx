import React from "react";
import Image from "next/image";
import { TPosition } from "@/constants";

export type TExperienceCard = {
  company: string;
  position: TPosition[];
  startDate: string;
  endDate: string;
};

const ExperienceCard = ({
  company,
  position,
  startDate,
  endDate,
}: TExperienceCard) => {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold">{company}</h3>
      </div>
    </div>
  );
};

export default ExperienceCard;
