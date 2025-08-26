import { IconName } from "./iconMap";

export type TNavLink = {
  id: number;
  label: string;
  link: string;
  icon: IconName;
};

export type TTab = {
  id: number;
  name: string;
};

export const navLinks: TNavLink[] = [
  { id: 1, label: "X", link: "https://x.com/divandcode", icon: "XLogoIcon" },
  {
    id: 2,
    label: "GitHub",
    link: "https://github.com/Divnoor-4602",
    icon: "GithubLogoIcon",
  },
  {
    id: 3,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/divnoor-nagra/",
    icon: "LinkedinLogoIcon",
  },
  {
    id: 4,
    label: "Mail",
    link: "mailto:your.divnoorsinghnagra@gmail.com",
    icon: "EnvelopeSimpleIcon",
  },
];

export const tabs: TTab[] = [
  { id: 1, name: "Projects" },
  { id: 2, name: "Experience" },
  { id: 3, name: "Tools" },
];
