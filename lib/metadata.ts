import { Metadata } from "next";

export const siteConfig = {
  name: "Adithya",
  title: "Adithya | Full Stack Developer | Based in Raleigh",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies",
  url: "www.divnoor.me",
  ogImage: "/images/social-preview.png",
  links: {
    twitter: "https://x.com/divandcode",
    github: "https://github.com/Divnoor-4602",
    linkedin: "https://www.linkedin.com/in/divnoor-nagra/",
  },
  contact: {
    email: "divnoorsinghnagra@gmail.com",
    location: "Vancouver, Canada",
  },
  profession: {
    title: "Full Stack Developer",
    company: "Freelance",
    experience: "2+ years",
  },
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Svelte Developer",
    "Astro Developer",
    "UI/UX Designer",
    "Frontend Developer",
    "Backend Developer",
    "TypeScript",
    "Tailwind CSS",
    "Figma",
    "Web Development",
    "Software Engineer",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(`https://${siteConfig.url}`),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `https://${siteConfig.url}`,
    siteName: `${siteConfig.name} Portfolio`,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.profession.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`https://${siteConfig.url}${siteConfig.ogImage}`],
    creator: "@divandcode",
    site: "@divandcode",
  },
  category: "technology",
  classification: "Personal Portfolio",
  other: {
    "theme-color": "#0D0D0D",
    "msapplication-TileColor": "#0D0D0D",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": siteConfig.name,
  },
};

export function generatePageMetadata(
  pageTitle: string,
  pageDescription: string
): Metadata {
  return {
    title: `${pageTitle} | ${siteConfig.name}`,
    description: pageDescription,
    openGraph: {
      title: `${pageTitle} | ${siteConfig.name}`,
      description: pageDescription,
    },
    twitter: {
      title: `${pageTitle} | ${siteConfig.name}`,
      description: pageDescription,
    },
  };
}

export function generatePostMetadata(
  postTitle: string,
  postDescription: string,
  postImage?: string
): Metadata {
  return {
    title: `${postTitle} | ${siteConfig.name}`,
    description: postDescription,
    openGraph: {
      title: `${postTitle} | ${siteConfig.name}`,
      description: postDescription,
      images: postImage
        ? [{ url: postImage, width: 1200, height: 630 }]
        : undefined,
    },
    twitter: {
      title: `${postTitle} | ${siteConfig.name}`,
      description: postDescription,
      images: postImage
        ? [
            postImage.startsWith("http")
              ? postImage
              : `https://${siteConfig.url}${postImage}`,
          ]
        : undefined,
    },
  };
}

export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.profession.title,
  description: siteConfig.description,
  url: `https://${siteConfig.url}`,
  sameAs: [
    siteConfig.links.github,
    siteConfig.links.linkedin,
    siteConfig.links.twitter,
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "Svelte",
    "Astro",
    "Tailwind CSS",
    "Figma",
    "TypeScript",
    "Node.js",
    "Full Stack Development",
    "Web Development",
    "UI/UX Design",
    "Frontend Development",
    "Backend Development",
  ],
  worksFor: {
    "@type": "Organization",
    name: siteConfig.profession.company,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.contact.location.split(",")[0]?.trim(),
    addressCountry: siteConfig.contact.location.split(",")[1]?.trim(),
  },
};
