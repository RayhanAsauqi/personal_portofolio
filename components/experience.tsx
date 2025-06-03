"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { ExperienceState } from "@/app/api/experiences/route";
import { useDisclosure } from "@/hooks/use-disclosure";
import ExperienceDetail from "./modals/experince-detail";
import { Button } from "./ui/button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Experience() {
  const { isOpen, setIsOpenAction } = useDisclosure();
  const experienceRef = useRef<HTMLElement>(null);
  const [experiences, setExperiences] = useState<ExperienceState[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/experiences")
      .then((res) => res.json())
      .then((data) => {
        setExperiences(data);
        setIsLoaded(true);
      })
      .catch((err) => console.error("Failed to fetch experiences", err));
  }, []);

  const handleOpen = (slug: string) => {
    setSelectedSlug(slug);
    setIsOpenAction(true);
  };

  useEffect(() => {
    if (typeof window === "undefined" || !experienceRef.current || !isLoaded)
      return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".experience-title",
        {
          opacity: 0,
          y: 50,
          rotationX: 45,
          transformPerspective: 1000,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".experience-title",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1,
          },
        }
      );

      document.querySelectorAll(".timeline-item").forEach((item, index) => {
        const isEven = index % 2 === 0;
        const card = item.querySelector(".timeline-card");
        const dot = item.querySelector(".timeline-dot");

        gsap.set(item, {
          opacity: 0,
          x: isEven ? -100 : 100,
          rotationY: isEven ? -15 : 15,
          transformPerspective: 1000,
        });

        gsap.set(dot, {
          scale: 0,
          rotation: 180,
        });

        gsap.set(card, {
          opacity: 0,
          y: 50,
          scale: 0.9,
          rotationX: 15,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none reverse",
          },
        });

        tl.to(dot, {
          scale: 1,
          rotation: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        })
          .to(
            item,
            {
              opacity: 1,
              x: 0,
              rotationY: 0,
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.3"
          )
          .to(
            card,
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotationX: 0,
              duration: 0.6,
              ease: "power2.out",
            },
            "-=0.4"
          );

        gsap.to(dot, {
          y: -5,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: index * 0.2,
        });

        gsap.to(card, {
          y: -20,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        const title = item.querySelector(".job-title");
        const company = item.querySelector(".company-name");
        const description = item.querySelector(".job-description");

        if (title) {
          gsap.fromTo(
            title,
            { clipPath: "inset(0 100% 0 0)" },
            {
              clipPath: "inset(0 0% 0 0)",
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: title,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        if (company) {
          gsap.fromTo(
            company,
            { opacity: 0, x: -30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: company,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        if (description) {
          gsap.fromTo(
            description,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: description,
                start: "top 85%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        const cardElement = card as HTMLElement;
        if (cardElement) {
          cardElement.addEventListener("mouseenter", () => {
            gsap.to(card, {
              scale: 1.02,
              y: -5,
              duration: 0.3,
              ease: "power2.out",
            });
            gsap.to(dot, {
              scale: 1.2,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          cardElement.addEventListener("mouseleave", () => {
            gsap.to(card, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            });
            gsap.to(dot, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        }
      });

      gsap.to(".bg-decoration", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".rotate-on-scroll", {
        rotation: 180,
        ease: "none",
        scrollTrigger: {
          trigger: experienceRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, experienceRef);

    return () => ctx.revert();
  }, [isLoaded]);



  return (
    <section
      id="experience"
      ref={experienceRef}
      className="py-12 md:py-20 relative overflow-hidden"
    >
      <div className="bg-decoration absolute top-10 right-10 w-32 h-32  border-primary/10 rounded-full"></div>
      <div className="rotate-on-scroll absolute bottom-10 left-10 w-24 h-24  border-primary/20 rounded-full"></div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="experience-title text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 md:mb-16">
            Work Experience
          </h2>

          <div className="timeline-container relative">
            <div className="timeline-line absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary md:transform md:-translate-x-0.5"></div>

            <div className="space-y-8 md:space-y-16">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`timeline-item relative ${
                    index % 2 === 0
                      ? "md:flex md:flex-row"
                      : "md:flex md:flex-row-reverse"
                  }`}
                >
                  <div className="timeline-dot absolute left-6 md:left-1/2 w-4 h-4 md:w-6 md:h-6 bg-primary rounded-full transform -translate-x-1/2 md:-translate-x-1/2 z-10 border-2 md:border-4 border-background shadow-lg top-6 flex items-center justify-center">
                    <Briefcase className="h-2 w-2 md:h-3 md:w-3 text-background" />
                  </div>

                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    } pl-12 md:pl-0 pr-4 md:pr-0`}
                  >
                    <Card className="timeline-card hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

                      <CardContent className="p-4 md:p-8 relative z-10">
                        <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground mb-3">
                          <Calendar className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                          <span className="font-medium">{exp.period}</span>
                        </div>

                        <h3 className="job-title text-lg md:text-xl font-bold mb-2 text-primary leading-tight">
                          {exp.title}
                        </h3>
                        <h4 className="company-name text-base md:text-lg font-semibold mb-2 leading-tight">
                          {exp.company}
                        </h4>

                        <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground mb-4">
                          <MapPin className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                          <span className="truncate">{exp.location}</span>
                        </div>
                        <p className="job-description text-sm md:text-base text-muted-foreground mb-4 line-clamp-3">
                          {exp.description}
                        </p>

                        <Button
                          variant="default"
                          size="sm"
                          className="text-xs"
                          onClick={() => handleOpen(exp.slug)}
                        >
                          View Details
                        </Button>
                        <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-border">
                          <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>Job Type</span>
                            <span className=" sm:inline font-medium text-primary">
                              {exp.type}
                            </span>
                          </div>
                        </div>

                        <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-purple-500 w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>

            <div className="timeline-item relative flex justify-center mt-12 md:mt-16">
              <div className="timeline-dot absolute left-6 md:left-1/2 w-6 h-6 md:w-8 md:h-8 bg-gradient-to-r from-primary to-primary/60 rounded-full transform -translate-x-1/2 md:-translate-x-1/2 z-10 border-2 md:border-4 border-background shadow-lg flex items-center justify-center">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-background rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedSlug && (
        <ExperienceDetail
          isOpen={isOpen}
          setIsOpenAction={setIsOpenAction}
          slug={selectedSlug}
        />
      )}
    </section>
  );
}
