"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Calendar,
  MapPin,
  Award,
  BookOpen,
  GraduationCap,
  Users,
  Trophy,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Education() {
  const educationRef = useRef<HTMLElement>(null);
  const ctx = gsap.context(() => {});

  useEffect(() => {
    if (typeof window === "undefined" || !educationRef.current) return;

    gsap.to(".parallax-bg", {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: educationRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.fromTo(
      ".featured-card",
      {
        opacity: 0,
        y: 100,
        scale: 0.8,
        rotationX: 15,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".featured-card",
          start: "top 85%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".header-element",
      { opacity: 0, y: 50, rotationY: 45 },
      {
        opacity: 1,
        y: 0,
        rotationY: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".featured-card",
          start: "top 75%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".gpa-counter",
      { textContent: "0.00" },
      {
        textContent: "3.39",
        duration: 2,
        ease: "power2.out",
        snap: { textContent: 0.01 },
        scrollTrigger: {
          trigger: ".gpa-highlight",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".detail-grid-item",
      { opacity: 0, x: -50, scale: 0.9 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.6,
        stagger: {
          amount: 0.4,
          from: "start",
        },
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".details-grid",
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    const description = document.querySelector(".description-text");
    if (description) {
      const text = description.textContent || "";
      description.textContent = "";

      gsap
        .timeline({
          scrollTrigger: {
            trigger: description,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })
        .to(description, {
          duration: 2,
          ease: "none",
          onStart: () => {
            let i = 0;
            const typewriter = setInterval(() => {
              if (i < text.length) {
                description.textContent += text.charAt(i);
                i++;
              } else {
                clearInterval(typewriter);
              }
            }, 30);
          },
        });
    }

    gsap.fromTo(
      ".achievement-card",
      {
        opacity: 0,
        rotationY: 90,
        z: -100,
      },
      {
        opacity: 1,
        rotationY: 0,
        z: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".achievements-section",
          start: "top 75%",
          end: "bottom 50%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      ".course-badge",
      {
        opacity: 0,
        scale: 0,
        rotation: 180,
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.5,
        stagger: {
          amount: 1,
          from: "random",
        },
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: ".courses-section",
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.to(".floating-icon", {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      stagger: 0.2,
    });

    gsap.fromTo(
      ".progress-bar",
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".featured-card",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.to(".rotate-on-scroll", {
      rotation: 360,
      ease: "none",
      scrollTrigger: {
        trigger: educationRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });

    gsap.fromTo(
      ".text-reveal",
      {
        clipPath: "inset(0 100% 0 0)",
      },
      {
        clipPath: "inset(0 0% 0 0)",
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".text-reveal",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [educationRef]);

  const education = {
    degree: "Bachelor of Information Technology",
    institution: "University Paramadina",
    location: "Jakarta, Indonesia",
    period: "2020 - 2024",
    status: "Graduated",
    gpa: "3.39/4.00",
    description:
      "Focused on software engineering, web development, and computer systems. Completed capstone project on full-stack web application development.",
    achievements: [
      "Community Service Committee of Informatics Engineering Study Program (Pemanfaatan Teknologi Untuk Kegiatan Pembelajaran Pada PKBM 31 Jakarta dan PKBM 21 Jakarta)",
      "3rd Place in Hackathon Competition",
    ],
    courses: [
      "Data Structures",
      "Web Development",
      "Database Systems",
      "Software Engineering",
      "Mobile Development",
    ],
    type: "degree",
  };

  return (
    <section
      id="featured-education"
      ref={educationRef}
      className="py-12 md:py-20 bg-gradient-to-br from-background to-muted/20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <GraduationCap className="h-4 w-4" />
              Featured Education
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Academic Journey
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My foundational education in Information Technology that shaped my
              career in software development
            </p>
          </div>

          {/* Main Featured Card */}
          <Card className="featured-card relative overflow-hidden border-2 border-primary/20 shadow-2xl hover:shadow-3xl transition-all duration-500">
            {/* Background Gradient */}
            <div className="parallax-bg absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5"></div>

            <CardContent className="relative p-6 md:p-10">
              {/* Header Section */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                <div className="flex-1">
                  <div className="header-element flex items-center gap-3 mb-4">
                    <div className="floating-icon p-3 bg-primary/10 rounded-full">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {education.status}
                    </Badge>
                  </div>

                  <h3 className="header-element text-reveal text-2xl md:text-3xl font-bold text-primary mb-2 leading-tight">
                    {education.degree}
                  </h3>
                  <h4 className="header-element text-xl md:text-2xl font-semibold mb-4 text-foreground/90">
                    {education.institution}
                  </h4>
                </div>

                {/* GPA Highlight */}
                <div className="header-element gpa-highlight bg-gradient-to-br from-primary/10 to-purple-500/10 p-4 rounded-xl border border-primary/20 text-center min-w-[120px] relative overflow-hidden">
                  <div className="progress-bar absolute bottom-0 left-0 h-1 bg-primary origin-left"></div>
                  <div className="gpa-counter text-2xl font-bold text-primary">
                    3.39
                  </div>
                  <div className="text-sm text-muted-foreground">
                    GPA / 4.00
                  </div>
                </div>
              </div>

              {/* Details Grid */}
              <div className="details-grid grid md:grid-cols-2 gap-6 mb-8">
                <div className="detail-grid-item flex items-center gap-3 p-4 bg-background/50 rounded-lg border">
                  <Calendar className="floating-icon h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-medium">{education.period}</div>
                    <div className="text-sm text-muted-foreground">
                      Study Period
                    </div>
                  </div>
                </div>

                <div className="detail-grid-item flex items-center gap-3 p-4 bg-background/50 rounded-lg border">
                  <MapPin className="floating-icon h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-medium">{education.location}</div>
                    <div className="text-sm text-muted-foreground">
                      Location
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="detail-item mb-8">
                <p className="description-text text-base md:text-lg text-muted-foreground leading-relaxed">
                  {education.description}
                </p>
              </div>

              {/* Achievements Section */}
              <div className="achievements-section mb-8">
                <h5 className="flex items-center gap-2 text-lg font-semibold text-primary mb-6">
                  <Trophy className="h-5 w-5" />
                  Key Achievements & Activities
                </h5>
                <div className="space-y-4">
                  {education.achievements.map((achievement, i) => (
                    <div
                      key={i}
                      className="achievement-card flex items-start gap-4 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-lg border-l-4 border-primary"
                    >
                      <div className="floating-icon p-2 bg-primary/10 rounded-full flex-shrink-0 mt-1">
                        {i === 0 ? (
                          <Users className="h-4 w-4 text-primary" />
                        ) : (
                          <Trophy className="h-4 w-4 text-primary" />
                        )}
                      </div>
                      <div>
                        <p className="text-reveal font-medium text-foreground leading-relaxed">
                          {achievement}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Courses Section */}
              <div className="courses-section">
                <h5 className="flex items-center gap-2 text-lg font-semibold text-primary mb-6">
                  <BookOpen className="h-5 w-5" />
                  Core Subjects & Specializations
                </h5>
                <div className="flex flex-wrap gap-3">
                  {education.courses.map((course, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className="course-badge text-sm py-2 px-4 bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 hover:scale-105 transition-transform"
                    >
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="detail-item mt-8 pt-6 border-t border-border">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    4-Year Bachelor's Program
                  </span>
                  <span>
                    Graduated {new Date().getFullYear() - 2024} years ago
                  </span>
                </div>
              </div>
            </CardContent>
            <div className="rotate-on-scroll absolute top-4 right-4 w-20 h-20    border-primary/20 rounded-full"></div>
          </Card>
        </div>
      </div>
    </section>
  );
}
