"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import Link from "next/link";

import DepthCarousel from "@/components/ui/depth-carousel";
import { soraBoldFont } from "@/fonts/font";
import { IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  const [text, setText] = useState<string>("LEUL●GFX");
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const carouselWrapperRef = useRef<HTMLDivElement>(null);

  const [cardWidth, setCardWidth] = useState<number>(280);
  const [cardHeight, setCardHeight] = useState<number>(158);

  const thumbnailItems = [
    "/thumbnails/hero-1.png",
    "/thumbnails/hero-2.png",
    "/thumbnails/hero-3.png",
  ].map((src) => ({ image: src, alt: "Thumbnail" }));

  const updateCarouselSize = useCallback(() => {
    if (!carouselWrapperRef.current) return;
    const rect = carouselWrapperRef.current.getBoundingClientRect();
    const rawWidth = rect.width * 0.85;
    const w = Math.min(Math.max(rawWidth, 200), 360);
    const h = w * (9 / 16);
    setCardWidth(w);
    setCardHeight(h);
  }, []);

  useEffect(() => {
    updateCarouselSize();
    const observer = new ResizeObserver(() => updateCarouselSize());
    const el = carouselWrapperRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [updateCarouselSize]);

  // Responsive final position for the title block:
  // keeps it higher on tall/large screens so there's no dead space at the top.
  const getFinalTop = () => {
    if (window.innerWidth < 768) return "25%";
    const h = window.innerHeight;
    if (h < 700) return "42%";
    if (h < 900) return "40%";
    return "38%";
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    const target = "PORTFOLIO";
    const start = "LEULGFX";
    let iterations = 0;
    let intervalId: NodeJS.Timeout | undefined;
    let timeoutId: NodeJS.Timeout | undefined;

    const delayPromise = new Promise<void>((resolve) => {
      timeoutId = setTimeout(resolve, 1000);
    });

    let isMounted = true;

    delayPromise.then(() => {
      if (!isMounted) return;
      intervalId = setInterval(() => {
        setText(() => {
          let newText = target
            .split("")
            .map((letter, index) => {
              if (index < Math.floor(iterations)) {
                return target[index];
              }
              if (index < start.length) {
                return start[index];
              }
              return "";
            })
            .join("");
          return newText;
        });

        if (iterations >= target.length) {
          clearInterval(intervalId);
          const tl = gsap.timeline({
            onComplete: () => {
              document.body.style.overflow = "auto";
            },
          });

          // Move text block to a responsive final position (higher on large screens)
          tl.to(
            containerRef.current,
            {
              top: getFinalTop(),
              duration: 1.5,
              ease: "power3.inOut",
            },
            "+=0.2",
          );
          tl.fromTo(
            [subtitleRef.current, buttonsRef.current],
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.2,
              stagger: 0.2,
              ease: "power3.out",
            },
            "-=1.0",
          );
          tl.fromTo(
            carouselWrapperRef.current,
            { y: "100vh" },
            { y: 0, duration: 1.5, ease: "power3.out" },
            "-=1.2",
          );
        }
        iterations += 1 / 3;
      }, 50);
    });

    return () => {
      isMounted = false;
      document.body.style.overflow = "auto";
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-end justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        background:
          "radial-gradient(circle, hsl(var(--background)) 0%, hsl(var(--muted)) 80%)",
      }}
    >
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]"></div>

      {/* Text + subtitle + buttons – absolutely positioned */}
      <div
        ref={containerRef}
        className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none select-none flex flex-col items-start w-max"
      >
        <h1
          ref={textRef}
          className={`font-sans text-[clamp(4.5rem,17vw,24rem)] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground via-muted-foreground to-background drop-shadow-2xl pr-4 md:pr-8 leading-none uppercase`}
        >
          {text}
        </h1>
        <p
          ref={subtitleRef}
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:-bottom-12 md:left-8 text-foreground text-base md:text-2xl lg:text-4xl drop-shadow-md z-10 opacity-0 w-max"
        >
          <span className="font-bold">Thumbnail</span>{" "}
          <span className="font-[cursive] text-primary">Designer</span>
        </p>
        <div
          ref={buttonsRef}
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 md:translate-x-0 md:-bottom-12 md:left-auto md:right-20 flex items-center gap-2 md:gap-4 pointer-events-auto z-10 opacity-0 w-max"
        >
          <Link
            href="/#contact"
            className="group w-8 h-8 md:w-12 md:h-12 rounded-full border border-3 border-border/80 flex items-center justify-center backdrop-blur-md bg-background/20 hover:bg-background/40 hover:border-border/50 transition-all duration-300 cursor-pointer"
          >
            <IconArrowRight strokeWidth={3} />
          </Link>
          <Link
            href="/#contact"
            className="px-4 py-1.5 md:px-6 md:py-2.5 rounded-full border border-3 border-border/80 flex items-center justify-center backdrop-blur-md bg-background/20 hover:bg-background/40 hover:border-border/50 transition-all cursor-pointer"
          >
            <Button className="text-foreground text-xs md:text-base italic font-semibold tracking-wider">
              Contact
            </Button>
          </Link>
        </div>
      </div>

      {/* Carousel wrapper – scales up on large screens to balance the layout */}
      <div
        ref={carouselWrapperRef}
        className="relative z-10 w-full max-w-lg md:max-w-xl xl:max-w-2xl 2xl:max-w-3xl mx-auto pointer-events-auto translate-y-[100vh]"
        style={{ aspectRatio: "16 / 9" }}
      >
        <DepthCarousel
          items={thumbnailItems}
          cardWidth={cardWidth}
          cardHeight={cardHeight}
          radius={12}
          depth={80}
          spread={40}
          tilt={10}
          tiltDirection="right"
          perspective={1200}
          visibleCards={3}
          falloff={0.2}
          blur={2}
          duration={600}
          autoplay={true}
          autoplayDelay={3000}
          loop={true}
          showControls={true}
          showIndicators={true}
          className="w-full h-full -mt-54 md:-mt-10"
        />
      </div>
    </section>
  );
};

export default Hero;
