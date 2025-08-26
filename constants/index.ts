import { IconName } from "./iconMap";

export interface NavLink {
  id: number;
  label: string;
  link: string;
  icon: IconName;
}

export const navLinks: NavLink[] = [
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
