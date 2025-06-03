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
      "Developing a modern and user-friendly Content Management System (CMS) for the news platform informasi.kdi.biz.id, designed to be responsive and intuitive across devices. The system supports efficient management of news, media, advertisements, and user-generated content (UGC), incorporating Role-Based Access Control (RBAC), moderation and approval workflows, and interactive analytics and reporting tools. The entire development followed Agile methodology with iterative sprints to ensure alignment with user and stakeholder needs.",
    type: "Freelance",
  },
  {
    title: "Frontend Developer",
    slug: "frontend-developer-sarimurni",
    company: "PT. Sarimurni",
    location: "Setiabudi, South Jakarta, DKI Jakarta, Indonesia",
    period: "Oct 2024 - present",
    description:
      "Developed a Learning Management System (LMS) web application for Sarimurni Group to support internal employee training and development in a centralized and digital environment. The project focused on delivering an intuitive and responsive user interface, seamless frontend-backend integration, and secure access control through Role-Based Access Control (RBAC). In addition to developing the CMS interface and implementing authentication flows, I also collaborated closely with the backend team.",
    type: "Internship",
  },
  {
    title: "Frontend Developer",
    slug: "frontend-developer-gits",
    company: "PT. GITS Indonesia",
    location: "Summarecon, Bandung, West Java, Indonesia",
    period: "Aug 2023 - Des 2023",
    description:
      "Completed an internship as a Frontend Software Engineer at GITS, contributing to the development of an e-Procurement web application. Participated in a full training program to build and enhance frontend development skills, learning technologies such as Vue.js and Nuxt.js. Worked closely with a cross-functional team within an Agile Scrum environment, focusing on creating responsive and easy-to-use user interfaces while collaborating effectively with designers and backend developers.",
    type: "Internship",
  },
  {
    title: "Frontend Web Developer",
    slug: "frontend-web-developer-skilvul",
    company: "Skilvul",
    location: "Jakarta South, DKI Jakarta, Indonesia",
    period: "Feb 2023 - Jun 2023",
    description:
      "Completed an internship where I was actively involved in the entire product development cycle—from initial design discussions to full implementation. During the internship, I helped develop a web-based book reading application that integrates a large and dynamic collection of books from a centralized database. This project allowed me to deepen my understanding of user interface design, API integration, and the importance of delivering a smooth and accessible reading experience.",
    type: "Internship",
  },
];

export async function GET() {
  return NextResponse.json(experiences);
}
