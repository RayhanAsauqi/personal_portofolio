"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Calendar,
  MapPin,
  GraduationCap,
  Users,
  Trophy,
  Award,
  BookOpen,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Educations } from "@/app/api/education/route";
import { getImageEtag } from "next/dist/server/image-optimizer";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const iconComponents: Record<string, React.ComponentType<any>> = {
  Calendar,
  Users,
  Trophy,
  Award,
  BookOpen,
  GraduationCap,
  MapPin,
};
export function Education() {
  const educationRef = useRef<HTMLElement>(null);
  const [educations, setEducations] = useState<Educations | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !educationRef.current) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".section-header",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".section-header",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Main card animation
      gsap.fromTo(
        ".education-card",
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".education-card",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Achievement items animation
      gsap.fromTo(
        ".achievement-item",
        {
          opacity: 0,
          x: -20,
        },
        {
          opacity: 1,
          x: 0,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".achievements-section",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, educationRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Fetch education data
    const fetchEducation = async () => {
      try {
        const response = await fetch("/api/education");
        if (!response.ok) {
          throw new Error("Failed to fetch education data");
        }
        const data = await response.json();
        setEducations(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchEducation();
  }, []);

  const getIconComponent = (iconName: string) => {
    const Icon = iconComponents[iconName];
    return Icon ? <Icon className="h-4 w-4" /> : null;
  };

  // const education = {
  //   degree: "Bachelor of Information Technology",
  //   institution: "University Paramadina",
  //   location: "Jakarta, Indonesia",
  //   period: "2020 - 2024",
  //   status: "Graduated",
  //   gpa: "3.39/4.00",
  //   description:
  //     "Focused on software engineering, web development, and computer systems. Completed capstone project on full-stack web application development with modern technologies and best practices.",
  //   achievements: [
  //     {
  //       title: "Community Service Committee",
  //       description:
  //         "Informatics Engineering Study Program - Technology Utilization for Learning Activities at PKBM 31 Jakarta and PKBM 21 Jakarta",
  //       icon: Users,
  //     },
  //     {
  //       title: "3rd Place Hackathon Competition",
  //       description:
  //         "Developed innovative solution for educational technology platform",
  //       icon: Trophy,
  //     },
  //   ],
  // };

  return (
    <section id="education" ref={educationRef} className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="section-header text-center mb-12">
            <div className="inline-flex items-center gap-2 border border-border bg-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <GraduationCap className="h-4 w-4" />
              Education
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Academic Background
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Formal education that built my foundation in technology
            </p>
          </div>

          {/* Education Card */}
          <Card className="education-card border-2 overflow-hidden">
            <CardContent className="p-0">
              {/* Header Section */}
              <div className="bg-primary text-primary-foreground p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-4">
                      {educations?.status}
                    </Badge>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
                      {educations?.degree}
                    </h3>
                    <p className="text-lg md:text-xl opacity-90 mb-4">
                      {educations?.institution}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 text-sm opacity-90">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{educations?.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{educations?.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* GPA Circle */}
                  <div className="flex items-center justify-center bg-primary-foreground text-primary rounded-full h-24 w-24 flex-shrink-0">
                    <div className="text-center">
                      <div className="text-2xl font-bold leading-none">
                        {educations?.gpa.split("/")[0]}
                      </div>
                      <div className="text-xs opacity-80 mt-1">GPA / 4.00</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 space-y-8">
                {/* Description */}
                <div>
                  <h4 className="text-lg font-semibold mb-3">Overview</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {educations?.description}
                  </p>
                </div>

                {/* Achievements */}
                <div className="achievements-section">
                  <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Trophy className="h-5 w-5" />
                    Key Achievements
                  </h4>
                  <div className="space-y-4">
                    {educations?.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="achievement-item flex items-start gap-4 p-4 border-l-2 border-primary bg-secondary/50 rounded-r-lg"
                      >
                        <div className="p-2 bg-background border rounded-full flex-shrink-0">
                          {getIconComponent(achievement.icon)}
                        </div>
                        <div className="min-w-0">
                          <h5 className="font-medium mb-1">
                            {achievement.title}
                          </h5>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-8 py-4 border-t bg-secondary/30 flex items-center justify-between text-sm text-muted-foreground">
                <span>4 Years and 8 Months Bachelor's Program</span>
                <span>Information Technology</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
