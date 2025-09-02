import { IconName } from "./iconMap";
import { tabKey } from "@/components/tabs/atoms";

export type TNavLink = {
  id: number;
  label: string;
  link: string;
  icon?: IconName;
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
  previewImage: string;
  techStack: { name: string; icon: string; customIcon?: string }[]; // customIcon should be the filename without .svg extension
};

export type TPosition = {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  techStack: { name: string; icon: string; customIcon?: string }[]; // customIcon should be the filename without .svg extension
};

export type TExperience = {
  id: number;
  image: string;
  company: string;
  position: TPosition[];
  startDate: string;
  endDate: string;
};

export type TTools = {
  id: number;
  name: string;
  icon: string;
  customIcon?: string;
};

export const navLinks: TNavLink[] = [
  {
    id: 0,
    label: "Cal",
    link: "https://cal.com/adithya-srini/30min",
  },
  { id: 1, label: "X", link: "https://x.com/adithyasrini25", icon: "XLogoIcon" },
  {
    id: 2,
    label: "GitHub",
    link: "https://github.com/RandomOscillations",
    icon: "GithubLogoIcon",
  },
  {
    id: 3,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/adithya-srinivasan-16527627a/",
    icon: "LinkedinLogoIcon",
  },
  {
    id: 4,
    label: "Mail",
    link: "mailto:adithya.srini8912@gmail.com",
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
    githubLink: "",
    liveLink: "https://radal.ai/",
    previewImage: "/images/radal-preview.png",
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
    title: "GitProbe",
    description:
      "GitProbe turns any GitHub repository into a clean, readable summary of its architecture and logic, perfect for giving LLMs instant context.",
    image: "/images/landing/gitprobe-logo.png",
    githubLink: "",
    liveLink: "https://gitprobe.com/",
    previewImage: "/images/gitprobe-preview.png",
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
    title: "Out-of-Order Superscalar Processor Simulator",
    description:
      "Designed and implemented a aimulator for an Out-of-Order Superscalar Processor capable of issuing and retiring multiple instructions per cycle.",
    image: "/images/landing/mamaease-logo.png",
    githubLink: "https://github.com/RandomOscillations/Out-of-Order-Processor-Simulator",
    liveLink: "",
    previewImage: "/images/mamaease-preview.png",
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

export const experiences: TExperience[] = [
  {
    id: 1,
    company: "Univeristy of the Fraser Valley",
    image: "/images/landing/ufv-logo.png",
    position: [
      {
        id: 1,
        title: "Computer Science Researcher",
        description:
          "Leading ongoing research under UFV's School of Computing to develop a cross-platform psychiatric diagnostics app powered by streaming RAG-based LLMs, real-time STT/TTS pipelines, and history-aware conversational AI.",
        startDate: "2025-02-01",
        endDate: "Present",
        techStack: [
          { name: "Next.js", icon: "nextjs2" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Python", icon: "pytorch", customIcon: "python-icon" },
          { name: "TailwindCSS", icon: "tailwindcss" },
          { name: "Supabase", icon: "supabase", customIcon: "supabase-icon" },
          { name: "Expo", icon: "expo", customIcon: "expo-icon" },
          { name: "Gemini", icon: "gemini", customIcon: "gemini-icon" },
          { name: "Hugging Face", icon: "huggingface" },
          { name: "OpenAI", icon: "openai" },
          { name: "Claude", icon: "claude" },
          { name: "Colab", icon: "colab" },
        ],
      },
      {
        id: 2,
        title: "Frontend Developer",
        description:
          "Built and maintained a WordPress-based web app under UFV's Graphic Design Department, focusing on motion design, Laravel backend, and scalable content management for diverse users.",
        startDate: "2025-01-01",
        endDate: "Present",
        techStack: [
          { name: "WordPress", icon: "wordpress" },
          { name: "JavaScript", icon: "js" },
          { name: "Laravel", icon: "laravel" },
          { name: "PHP", icon: "php" },
          { name: "Figma", icon: "figma" },
        ],
      },
    ],
    startDate: "2025-01-01",
    endDate: "Present",
  },
  {
    id: 2,
    company: "Zippex",
    image: "/images/landing/zippex-logo.png",
    position: [
      {
        id: 1,
        title: "Full Stack Developer",
        description:
          "Developed and maintained a web app for Zippex, a startup that provides a platform for users to create and share their own zip codes.",
        startDate: "2024-08-01",
        endDate: "2024-12-31",
        techStack: [
          { name: "Next.js", icon: "nextjs2" },
          { name: "React Native", icon: "react" },
          { name: "TypeScript", icon: "typescript" },
          { name: "TailwindCSS", icon: "tailwindcss" },
          { name: "Firebase", icon: "firebase" },
          { name: "Expo", icon: "expo", customIcon: "expo-icon" },
        ],
      },
    ],
    startDate: "2024-08-01",
    endDate: "2024-12-31",
  },
];

export const frontendTools: TTools[] = [
  { id: 2, name: "Next.js", icon: "nextjs2" },
  { id: 1, name: "TypeScript", icon: "typescript" },
  { id: 3, name: "React.js", icon: "react" },
  { id: 4, name: "TailwindCSS", icon: "tailwindcss" },
];

export const backendTools: TTools[] = [
  { id: 1, name: "Vercel", icon: "vercel" },
  { id: 2, name: "Azure", icon: "azure", customIcon: "azure-icon" },
  { id: 3, name: "Drizzle", icon: "drizzle", customIcon: "drizzle-icon" },
  { id: 4, name: "tRPC", icon: "tRPC" },
  { id: 5, name: "PostgreSQL", icon: "postgresql" },
  { id: 7, name: "Supabase", icon: "supabase", customIcon: "supabase-icon" },
  { id: 6, name: "Docker", icon: "docker" },
  { id: 8, name: "Node.js", icon: "nodejs" },
];
