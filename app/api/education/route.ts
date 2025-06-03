import { NextResponse } from "next/server";

export type Achievement = {
  title: string;
  description: string;
  icon: string;
};

export type StatItem = {
  label: string;
  value: string;
  icon: string;
};

export type Educations = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  gpa: string;
  description: string;
  achievements: Achievement[];
  stats: StatItem[];
};

export async function GET(): Promise<NextResponse<Educations>> {
  const education: Educations = {
    degree: "Bachelor of Information Technology",
    institution: "University Paramadina",
    location: "Jakarta, Indonesia",
    period: "Sep 2020 - Jan 2025",
    status: "Graduated",
    gpa: "3.39/4.00",
    description:
      "Focused on Software Engineering, Human-Computer Interaction (HCI), and Full-Stack Web Development. Specialized in building robust software systems and user-centered applications. Completed a capstone project involving full-stack web development using modern technologies and industry best practices.",

    achievements: [
      {
        title: "Community Service Committee",
        description:
          "Informatics Engineering Study Program - Technology Utilization for Learning Activities at PKBM 31 Jakarta and PKBM 21 Jakarta",
        icon: "Users",
      },
      {
        title: "3rd Place Hackathon Competition",
        description:
          'With the theme "Unleashing the Potential of Future Technology: Exploring New Business Opportunities in the Era of Artificial Intelligence"',
        icon: "Trophy",
      },
    ],
    stats: [
      { label: "Years", value: "4", icon: "Calendar" },
      { label: "GPA", value: "3.39", icon: "Award" },
    ],
  };

  return NextResponse.json(education);
}
