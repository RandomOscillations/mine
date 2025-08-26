import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  EnvelopeSimpleIcon,
  XLogoIcon,
} from "@phosphor-icons/react";

export const iconMap = {
  XLogoIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  EnvelopeSimpleIcon,
} as const;

export type IconName = keyof typeof iconMap;
