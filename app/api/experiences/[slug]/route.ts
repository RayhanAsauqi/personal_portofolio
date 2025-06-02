import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export type ExperienceState = {
  slug: string;
  title: string;
  company: string;
  company_url?: string;
  location: string;
  period: string;
  description: string[];
  current_period?: string;
  type: string;
  responsibilities?: string[];
  technologies?: string[];
};
const experiences: ExperienceState[] = [
  {
    title: "Frontend Developer",
    slug: "frontend-developer-sarimurni",
    company: "PT. Sarimurni",
    company_url: "https://sarimurni.co.id/id/tentang-kami",
    location: "South Jakarta, DKI Jakarta, Indonesia",
    period: "Oct 2024 - Present",
    current_period: "Present",
    description: [
      "This project aims to build a Learning Management System (LMS) web application that will be used internally by Sarimurni Group. This application is designed to support the employee training and development process digitally and centrally.",
      "The development focus also includes designing an intuitive, responsive, and easy-to-use user interface (UI) and user experience (UX). This design is adapted according to the needs of internal users and the visual identity of Sarimurni Group.",
      "This web application will be integrated with the API provided by the backend team, so that data can be displayed and managed dynamically. This integration ensures two-way communication between the user interface and the backend system runs smoothly.",
      "The development is directed primarily at the CMS interface, which will be used by admins or specific users to manage content, users, and other system settings. The CMS interface is designed to be functional and easily accessible according to operational needs.",
      "To maintain security and regularity of access, the system is equipped with a Role-Based Access Control (RBAC) mechanism. With this system, each user can only access features and information that are in accordance with their roles and responsibilities within the organization.",
    ],
    type: "Internship",
    responsibilities: [
      "Designed and implemented a responsive and user-friendly UI/UX",
      "setting up frontend structure in LMS project",
      "Led frontend development and collaborated with backend team",
      "Setting up Authentication Flow in the LMS frontend",
      "Mentored junior developers",
    ],
    technologies: ["React", "Next.js", "Tailwind Css", "Shadcn UI"],
  },
  {
    title: "Frontend Developer",
    slug: "frontend-developer-fakta",
    company: "Fakta.com",
    company_url: "https://fakta.com/footer/about-us",
    location: "South Jakarta, Pancoran, DKI Jakarta, Indonesia",
    period: "Jan 2025 - Present",
    description: [
      "Led development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and implemented best practices for code quality and performance.",
    ],
    type: "Freelance",
    current_period: "Present",
    responsibilities: [
      "Led frontend development and collaborated with backend team",
      "Mentored junior developers",
    ],
    technologies: ["React", "Next.js", "Tailwind Css", "Hero UI"],
  },
  {
    title: "Frontend Developer",
    slug: "frontend-developer-gits",
    company: "PT. GITS Indonesia",
    company_url: "https://gits.id/about/",
    location: "Summarecon, Bandung, West Java, Indonesia",
    current_period: "5 months",
    period: "Aug 2023 - Des 2023",
    description: [
      "Specialized in creating interactive and visually appealing frontend experiences. Worked closely with designers to implement pixel-perfect designs.",
    ],
    type: "Internship",
    responsibilities: [
      "Led frontend development and collaborated with backend team",
      "Mentored junior developers",
    ],
    technologies: ["Vue.js", "Nuxt.js", "Morpheme UI", "Tailwind CSS"],
  },
  {
    title: "Frontend Web Developer",
    slug: "frontend-web-developer-skilvul",
    company: "Skilvul",
    company_url: "https://skilvul.com/about/",
    location: "Jakarta South, DKI Jakarta, Indonesia",
    period: "Feb 2023 - Juli 2023",
    current_period: "5 months",
    description: [
      "Started my career building web applications and learning modern development practices. Contributed to various projects and gained experience in full-stack development.",
    ],
    type: "Internship",
    responsibilities: [
      "Led frontend development and collaborated with backend team",
      "Mentored junior developers",
    ],
    technologies: ["React", "Bootstrap", "Node.js", "Express.js", "MySQL"],
  },
];

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const exp = experiences.find((item) => item.slug === slug);

  if (!exp) {
    return NextResponse.json(
      { message: "Experience not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(exp);
}
