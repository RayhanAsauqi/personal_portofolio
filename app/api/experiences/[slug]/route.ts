import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export type ExperienceState = {
  slug: string;
  title: string;
  company: string;
  company_url?: string;
  location: string;
  period: string;
  description: string;
  current_period?: string;
  type: string;
  responsibilities?: string[];
  technologies?: string[];
};
const experiences: ExperienceState[] = [
  {
    title: "Frontend Developer",
    slug: "frontend-developer-fakta",
    company: "Fakta.com",
    company_url: "https://fakta.com/footer/about-us",
    location: "South Jakarta, Pancoran, DKI Jakarta, Indonesia",
    period: "Jan 2025 - Present",
    description:
      "Led development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and implemented best practices for code quality and performance.",
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
    slug: "frontend-developer-sarimurni",
    company: "PT. Sarimurni",
    company_url: "https://sarimurni.co.id/id/tentang-kami",
    location: "Setiabudi, South Jakarta, DKI Jakarta, Indonesia",
    period: "Oct 2024 - Present",
    current_period: "Present",
    description:
      "In this project, I was responsible for developing a web-based Learning Management System (LMS) application intended for internal use by Sarimurni Group. The application was designed to support the employee training and development process in a digital and centralized manner, making it more efficient and accessible across the organization. I began by designing an intuitive, responsive, and user-friendly interface (UI) along with a seamless user experience (UX). The design was tailored to meet the needs of internal users while aligning with Sarimurni Group’s visual identity to ensure consistency and professionalism. My main focus was on building the CMS (Content Management System) interface, which would be used by administrators or specific users to manage training content, user data, and system settings. I ensured that the CMS interface was not only functional but also easy to navigate based on daily operational needs. During development, I also integrated the frontend with APIs provided by the backend team. This integration allowed data to be displayed and managed dynamically, ensuring smooth two-way communication between the user interface and the backend system. Additionally, I implemented a Role-Based Access Control (RBAC) mechanism to maintain secure and structured access across the platform. This system ensures that each user can only access features and information relevant to their roles and responsibilities within the organization. Through this approach, I aimed to build a secure, efficient, and user-oriented platform to support internal learning processes.",
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
    slug: "frontend-developer-gits",
    company: "PT. GITS Indonesia",
    company_url: "https://gits.id/about/",
    location: "Summarecon, Bandung, West Java, Indonesia",
    current_period: "5 months",
    period: "Aug 2023 - Des 2023",
    description:
      "Specialized in creating interactive and visually appealing frontend experiences. Worked closely with designers to implement pixel-perfect designs.",
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
    description:
      "Started my career building web applications and learning modern development practices. Contributed to various projects and gained experience in full-stack development.",
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
