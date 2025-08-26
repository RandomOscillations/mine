import React from "react";
import Image from "next/image";
import { TPosition } from "@/constants";
import {
  formatDateToMonthYear,
  calculateDuration,
  formatDuration,
} from "@/lib/utils";
import PositionCard from "./position-card";

export type TExperienceCard = {
  company: string;
  image: string;
  position: TPosition[];
  startDate: string;
  endDate: string;
};

const ExperienceCard = ({
  company,
  position,
  image,
  startDate,
  endDate,
}: TExperienceCard) => {
  const duration = calculateDuration(startDate, endDate);

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex gap-3 w-full items-start">
          <div className="w-8 h-8 flex-shrink-0 mt-1.5">
            <Image
              src={image}
              alt={company}
              width={32}
              height={32}
              className="rounded-md w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between">
              <span className="font-bold text-base tracking-tight">
                {company}
              </span>
              <span className="text-xs text-[var(--color-project-card-description)]">
                {formatDateToMonthYear(startDate)} -{" "}
                {formatDateToMonthYear(endDate)}
              </span>
            </div>
            <div className="text-xs text-[var(--color-experience-card-description)] font-medium">
              {formatDuration(duration, startDate)}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {position.map((pos) => (
            <PositionCard
              key={pos.id}
              {...pos}
              showDate={position.length > 1}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ExperienceCard;
