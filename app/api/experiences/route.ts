import { NextResponse } from "next/server";

export type ExperienceState = {
  slug: string;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  type: string;
};

const experiences: ExperienceState[] = [
  {
    title: "Frontend Developer",
    slug: "frontend-developer-fakta",
    company: "Fakta.com",
    location: "South Jakarta, Pancoran, DKI Jakarta, Indonesia",
    period: "Jan 2025 - Present",
    description: [
      "Led development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and implemented best practices for code quality and performance.",
    ],
    type: "Freelance",
  },
  {
    title: "Frontend Developer",
    slug: "frontend-developer-sarimurni",
    company: "PT. Sarimurni",
    location: "Setiabudi, South Jakarta, DKI Jakarta, Indonesia",
    period: "Oct 2024 - present",
    description: [
      "This project aims to build a Learning Management System (LMS) web application that will be used internally by Sarimurni Group. This application is designed to support the employee training and development process digitally and centrally.",
      "The development focus also includes designing an intuitive, responsive, and easy-to-use user interface (UI) and user experience (UX). This design is adapted according to the needs of internal users and the visual identity of Sarimurni Group.",
      "This web application will be integrated with the API provided by the backend team, so that data can be displayed and managed dynamically. This integration ensures two-way communication between the user interface and the backend system runs smoothly.",
      "The development is directed primarily at the CMS interface, which will be used by admins or specific users to manage content, users, and other system settings. The CMS interface is designed to be functional and easily accessible according to operational needs.",
      "To maintain security and regularity of access, the system is equipped with a Role-Based Access Control (RBAC) mechanism. With this system, each user can only access features and information that are in accordance with their roles and responsibilities within the organization.",
    ],
    type: "Internship",
  },
  {
    title: "Frontend Developer",
    slug: "frontend-developer-gits",
    company: "PT. GITS Indonesia",
    location: "Summarecon, Bandung, West Java, Indonesia",
    period: "Aug 2023 - Des 2023",
    description: [
      "Specialized in creating interactive and visually appealing frontend experiences. Worked closely with designers to implement pixel-perfect designs.",
    ],
    type: "Internship",
  },
  {
    title: "Frontend Web Developer",
    slug: "frontend-web-developer-skilvul",
    company: "Skilvul",
    location: "Jakarta South, DKI Jakarta, Indonesia",
    period: "Feb 2023 - Jun 2023",
    description: [
      "Started my career building web applications and learning modern development practices. Contributed to various projects and gained experience in full-stack development.",
    ],
    type: "Internship",
  },
];

export async function GET() {
  return NextResponse.json(experiences);
}
