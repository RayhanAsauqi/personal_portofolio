import { NextResponse } from "next/server";

export type ExperienceState = {
  slug: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  type: string;
};

const experiences: ExperienceState[] = [
  {
    title: "Frontend Developer",
    slug: "frontend-developer-fakta",
    company: "Fakta.com",
    location: "South Jakarta, Pancoran, DKI Jakarta, Indonesia",
    period: "Jan 2025 - Present",
    description:
      "Led development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and implemented best practices for code quality and performance.",
    type: "Freelance",
  },
  {
    title: "Frontend Developer",
    slug: "frontend-developer-sarimurni",
    company: "PT. Sarimurni",
    location: "Setiabudi, South Jakarta, DKI Jakarta, Indonesia",
    period: "Oct 2024 - present",
    description:
      "In this project, I was responsible for developing a web-based Learning Management System (LMS) for internal use by Sarimurni Group. The platform supports employee training and development in a centralized and digital way. I designed a responsive and intuitive UI/UX aligned with the company’s visual identity. My main focus was building the CMS interface that allows admins to manage content, users, and system settings efficiently. I also integrated the frontend with APIs provided by the backend team to ensure dynamic data handling. To maintain security, I implemented a Role-Based Access Control (RBAC) system, ensuring users access features based on their roles and responsibilities.",
    type: "Internship",
  },
  {
    title: "Frontend Developer",
    slug: "frontend-developer-gits",
    company: "PT. GITS Indonesia",
    location: "Summarecon, Bandung, West Java, Indonesia",
    period: "Aug 2023 - Des 2023",
    description:
      "Specialized in creating interactive and visually appealing frontend experiences. Worked closely with designers to implement pixel-perfect designs.",
    type: "Internship",
  },
  {
    title: "Frontend Web Developer",
    slug: "frontend-web-developer-skilvul",
    company: "Skilvul",
    location: "Jakarta South, DKI Jakarta, Indonesia",
    period: "Feb 2023 - Jun 2023",
    description:
      "Started my career building web applications and learning modern development practices. Contributed to various projects and gained experience in full-stack development.",
    type: "Internship",
  },
];

export async function GET() {
  return NextResponse.json(experiences);
}
