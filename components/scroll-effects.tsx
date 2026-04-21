"use client";

import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollEffects() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>("[data-cinematic-section]");

      sections.forEach((section) => {
        gsap.fromTo(
          section,
          {
            opacity: 0.45,
            y: 88,
            scale: 0.98,
            filter: "blur(12px)",
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 82%",
              end: "top 35%",
              scrub: 1,
            },
          },
        );
      });

      const parallaxElements = gsap.utils.toArray<HTMLElement>("[data-parallax-speed]");

      parallaxElements.forEach((element) => {
        const speed = Number(element.dataset.parallaxSpeed ?? "0.12");
        const trigger = element.closest("section") ?? element;

        gsap.to(element, {
          y: -140 * speed,
          ease: "none",
          scrollTrigger: {
            trigger,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      const timelineLine = document.querySelector<HTMLElement>("[data-timeline-line]");

      if (timelineLine) {
        gsap.fromTo(
          timelineLine,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            transformOrigin: "top center",
            scrollTrigger: {
              trigger: timelineLine,
              start: "top 70%",
              end: "bottom 30%",
              scrub: true,
            },
          },
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return null;
}