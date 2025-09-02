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
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Python", icon: "pytorch", customIcon: "python-icon" },
      { name: "TailwindCSS", icon: "tailwindcss" },
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
      { name: "C++", icon: "cpp", customIcon: "cpp-icon" },
      { name: "C", icon: "c", customIcon: "c-icon" },
    ],
  },
];

export const experiences: TExperience[] = [
  {
    id: 1,
    company: "High Frequency Highway",
    image: "/images/landing/hfh-logo.png",
    position: [
      {
        id: 1,
        title: "Machine Learning Intern",
        description:
          "Worked on a recommendation algorithm and added the functionality to recommend new music for the users. Also worked on a personalized meditation generator which generates a meditation based on the user's mood and preferences.",
        startDate: "2025-05-25",
        endDate: "2025-08-04",
        techStack: [
          { name: "Python", icon: "pytorch", customIcon: "python-icon" },
          { name: "Gemini", icon: "gemini", customIcon: "gemini-icon" },
          { name: "Hugging Face", icon: "huggingface" },
          { name: "OpenAI", icon: "openai" },
          { name: "Claude", icon: "claude" },
          { name: "Colab", icon: "colab" },
        ],
      },
    ],
    startDate: "2025-05-25",
    endDate: "2025-08-04",
  },
  {
    id: 2,
    company: "e-con Systems",
    image: "/images/landing/e-con-systems-logo.png",
    position: [
      {
        id: 1,
        title: "Application Development Intern",
        description:
          "Developed and released a Sensor Caliberation application for the USB 3.0 cameras that includes the UVC-compliant plug-and-play USB3 camera.",
        startDate: "2023-06-19",
        endDate: "2023-08-23",
        techStack: [
          { name: "Python", icon: "pytorch", customIcon: "python-icon" },
          { name: "PyQt5", icon: "pyqt5", customIcon: "pyqt-icon" },
        ],
      },
    ],
    startDate: "2023-06-19",
    endDate: "2023-08-23",
  },
  {
    id: 3,
    company: "Mobiveil",
    image: "/images/landing/mobiveil-logo.png",
    position: [
      {
        id: 1,
        title: "Machine Learning Intern",
        description:
          "Assisted in developing a person detection and person tracking algorithm using DetectNet V2, as a part of an Autonomous Mobile Robot (AMR).",
        startDate: "2022-07-11",
        endDate: "2022-08-17",
        techStack: [
          { name: "C++", icon: "cpp", customIcon: "cpp-icon" },
          { name: "Cuda", icon: "cuda", customIcon: "cuda-icon" },
          { name: "Bash", icon: "bash", customIcon: "bash-icon" },
        ],
      },
    ],
    startDate: "2023-06-19",
    endDate: "2023-08-15",
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
  { id: 3, name: "MySQL", icon: "mysql", customIcon: "mysql-icon" },
  { id: 4, name: "PostgreSQL", icon: "postgresql" },
  { id: 5, name: "Supabase", icon: "supabase", customIcon: "supabase-icon" },
  { id: 6, name: "Firebase", icon: "firebase", customIcon: "firebase-icon" },
  { id: 7, name: "Docker", icon: "docker" },
  { id: 8, name: "Node.js", icon: "nodejs" },
];
