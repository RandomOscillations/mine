import { IconName } from "./iconMap";
import { tabKey } from "@/components/tabs/atoms";

export type TNavLink = {
  id: number;
  label: string;
  link: string;
  icon: IconName;
};

export type TTab = {
  id: number;
  name: string;
  value: tabKey;
};

export type TProjects = {
  id: number;
  title: string;
  description: string;
  image: string;
  githubLink: string;
  liveLink: string;
  techStack: { name: string; icon: string; customIcon?: string }[]; // customIcon should be the filename without .svg extension
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
  { id: 1, name: "Projects", value: "projects" },
  { id: 2, name: "Experience", value: "experience" },
  { id: 3, name: "Tools", value: "tools" },
];

export const projects: TProjects[] = [
  {
    id: 1,
    title: "Radal",
    description: "Cursor for creating fine-tuning pipelines",
    image: "/images/landing/radal-logo-dark.png",
    githubLink: "https://github.com/Divnoor-4602/radal",
    liveLink: "https://radal.vercel.app/",
    techStack: [
      { name: "Next.js", icon: "nextjs2" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Python", icon: "pytorch", customIcon: "python-icon" },
      { name: "TailwindCSS", icon: "tailwindcss" },
      { name: "Shadcn UI", icon: "shadcnui" },
      { name: "Vercel", icon: "vercel" },
      { name: "Azure", icon: "azure", customIcon: "azure-icon" },
      { name: "Hugging Face", icon: "huggingface" },
    ],
  },
  {
    id: 2,
    title: "Clarity.ai",
    description:
      "Clarity.ai helps assess your mental health through AI conversations, as part of ongoing research.",
    image: "/images/landing/clarity-logo.png",
    githubLink: "https://github.com/Divnoor-4602/radal",
    liveLink: "https://radal.vercel.app/",
    techStack: [
      { name: "React Native", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Python", icon: "pytorch", customIcon: "python-icon" },
      { name: "TailwindCSS", icon: "tailwindcss" },
      { name: "Supabase", icon: "supabase", customIcon: "supabase-icon" },
      { name: "Expo", icon: "expo", customIcon: "expo-icon" },
      { name: "Gemini", icon: "gemini", customIcon: "gemini-icon" },
      { name: "Hugging Face", icon: "huggingface" },
    ],
  },
  {
    id: 3,
    title: "Mamaease",
    description:
      "Mental health app for pregnant women offering support, journaling, and mood report sharing.",
    image: "/images/landing/mamaease-logo.png",
    githubLink: "https://github.com/Divnoor-4602/radal",
    liveLink: "https://radal.vercel.app/",
    techStack: [
      { name: "React Native", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "TailwindCSS", icon: "tailwindcss" },
      { name: "Supabase", icon: "supabase", customIcon: "supabase-icon" },
      { name: "Expo", icon: "expo", customIcon: "expo-icon" },
      { name: "OpenAI", icon: "openai" },
    ],
  },
];
