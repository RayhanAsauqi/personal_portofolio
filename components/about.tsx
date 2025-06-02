"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function About() {
  const aboutRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !aboutRef.current) return;

    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const titleElement = aboutRef.current?.querySelector(".about-title");
        if (titleElement) {
          gsap.fromTo(
            titleElement,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              scrollTrigger: {
                trigger: titleElement,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        const contentElements =
          aboutRef.current?.querySelectorAll(".about-content");
        if (contentElements && contentElements.length > 0) {
          contentElements.forEach((element, index) => {
            gsap.fromTo(
              element,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: index * 0.2,
                scrollTrigger: {
                  trigger: element,
                  start: "top 80%",
                  end: "bottom 20%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          });
        }

        const skillCards = aboutRef.current?.querySelectorAll(".skill-card");
        if (skillCards && skillCards.length > 0) {
          skillCards.forEach((card, index) => {
            gsap.fromTo(
              card,
              { opacity: 0, scale: 0.8 },
              {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                delay: index * 0.1,
                scrollTrigger: {
                  trigger: card,
                  start: "top 80%",
                  end: "bottom 20%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          });
        }
      }, aboutRef);

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="about-title text-3xl md:text-4xl font-bold text-center mb-12">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="about-content">
              <h3 className="text-2xl font-semibold mb-6">
                Hello! I'm Rayhan Alsauqi
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of
                experience creating digital solutions that make a difference. I
                love turning complex problems into simple, beautiful, and
                intuitive designs.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing my knowledge
                through blog posts and mentoring.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in the power of collaboration and am always excited to
                work with teams that share my passion for creating exceptional
                user experiences.
              </p>
            </div>

            <div className="about-content">
              <div className="bg-gradient-to-br from-muted/50 to-accent/50 rounded-lg  text-center border">
                <Image
                  src="/assets/rayhan_image.jpg"
                  width={400}
                  height={400}
                  className="w-full h-full rounded-lg  "
                  alt="portofolio image"
                />
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}
