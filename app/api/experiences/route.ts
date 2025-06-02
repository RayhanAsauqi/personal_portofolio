import { NextResponse } from "next/server";

export type ExperienceState = {
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
    company: "Fakta.com",
    location: "South Jakarta, Pancoran, DKI Jakarta, Indonesia",
    period: "Jan 2025 - Present",
    description:
      "Led development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and implemented best practices for code quality and performance.",
    type: "Freelance",
  },
  {
    title: "Frontend Developer",
    company: "PT. Sarimurni",
    location: "Setiabudi, South Jakarta, DKI Jakarta, Indonesia",
    period: "Oct 2024 - present",
    description:
      "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create responsive and user-friendly interfaces.",
    type: "Internship",
  },
  {
    title: "Frontend Developer",
    company: "PT. GITS Indonesia",
    location: "Summarecon, Bandung, West Java, Indonesia",
    period: "Aug 2023 - Des 2023",
    description:
      "Specialized in creating interactive and visually appealing frontend experiences. Worked closely with designers to implement pixel-perfect designs.",
    type: "Internship",
  },
  {
    title: "Frontend Web Developer",
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
