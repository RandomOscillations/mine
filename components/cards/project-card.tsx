import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LinkIcon } from "@phosphor-icons/react";
import CustomStackBadge from "../custom-stack-badge";

export type TProjectCard = {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  liveLink: string;
  techStack: { name: string; icon: string; customIcon?: string }[]; // customIcon should be the filename without .svg extension
};

const ProjectCard = ({
  title,
  description,
  image,
  githubLink,
  liveLink,
  techStack,
}: TProjectCard) => {
  return (
    <div className="w-full flex flex-col gap-4">
      {/* project header */}

      <div className="flex flex-col w-full gap-1">
        <div className="flex items-start justify-between w-full">
          <h2 className="tracking-tight font-semibold text-base text-[var(--color-text)]">
            {title}
          </h2>
          {/* view links */}
          <div className="flex items-center gap-4">
            {githubLink && (
              <Link
                className="flex items-center gap-1 text-[var(--color-project-card-description)] hover:text-[var(--color-text)]"
                href={githubLink}
                target="_blank"
              >
                <span className="text-xs">GitHub</span>
                <LinkIcon size={12} />
              </Link>
            )}
            {liveLink && (
              <Link
                className="flex items-center gap-1 text-[var(--color-project-card-description)] hover:text-[var(--color-text)]"
                href={liveLink}
                target="_blank"
              >
                <span className="text-xs">View</span>
                <LinkIcon size={12} />
              </Link>
            )}
          </div>
        </div>
        <div className="text-sm text-[var(--color-project-card-description)]">
          {description}
        </div>
      </div>

      {/* badges */}
      <div className="flex flex-wrap gap-3 ">
        {techStack.map((tech) => (
          <CustomStackBadge
            key={tech.name}
            name={tech.name}
            icon={tech.icon}
            customIcon={tech.customIcon}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
