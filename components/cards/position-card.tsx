import React from "react";
import CustomStackBadge from "../custom-stack-badge";
import { formatDateToMonthYear } from "@/lib/utils";

export type TPositionCard = {
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  techStack: { name: string; icon: string; customIcon?: string }[];
  showDate?: boolean;
};

const PositionCard = ({
  title,
  startDate,
  endDate,
  description,
  techStack,
  showDate = false,
}: TPositionCard) => {
  return (
    <div className="w-full flex flex-col gap-4">
      {/* position header */}
      <div className="flex flex-col w-full gap-1">
        <h2 className="tracking-tight font-semibold text-sm text-[var(--color-text)]">
          {title}
        </h2>

        <div className="text-sm text-[var(--color-project-card-description)]">
          {description}
        </div>
      </div>

      {/* tech stack badges */}
      <div className="flex flex-wrap gap-3">
        {techStack.map((tech) => (
          <CustomStackBadge
            key={tech.name}
            name={tech.name}
            icon={tech.icon}
            customIcon={tech.customIcon}
          />
        ))}
      </div>

      {/* current date - only show if showDate is true */}
      {showDate && (
        <div className="text-[10px] text-[var(--color-project-card-description)]">
          {formatDateToMonthYear(startDate)} - {formatDateToMonthYear(endDate)}
        </div>
      )}
    </div>
  );
};

export default PositionCard;
