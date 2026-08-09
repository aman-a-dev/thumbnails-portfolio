"use client";

import { TrueFocus } from "@/components/ui/true-focus";
import { BlurText } from "@/components/ui/blur-text";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { motion, Variants } from "framer-motion";
import { IconSparkles } from "@tabler/icons-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden px-4 py-20 sm:px-6 lg:px-8"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="w-full max-w-4xl"
      >
        <Card className="border-border/50 bg-card/80 shadow-2xl backdrop-blur-sm">
          <CardHeader className="space-y-4 pb-2 text-center sm:pb-4">
            <motion.div variants={itemVariants}>
              <CardTitle className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                <TrueFocus
                  sentence="About Me"
                  manualMode={false}
                  blurAmount={5}
                  borderColor="var(--primary)"
                  animationDuration={0.5}
                  pauseBetweenAnimations={1}
                />
              </CardTitle>
            </motion.div>

            <CardDescription className="mx-auto max-w-md">
              <BlurText
                text="Who is Leul GFX?"
                delay={200}
                animateBy="words"
                direction="top"
                className="text-base font-semibold text-muted-foreground sm:text-lg"
              />
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-8 px-6 pb-8 pt-4 sm:px-10 sm:pb-10">
            <BlurText
              className="mx-auto max-w-2xl text-center text-base leading-relaxed text-muted-foreground sm:text-lg"
              text={`I design high-quality, eye-catching thumbnails that instantly grab attention and make your content stand out. From YouTube videos to social media, I combine strong visuals, clean layouts, bold typography, and creative design to help your content get noticed and drive more clicks.`}
              delay={10}
              animateBy="words"
              direction="top"
            />

            {/* CTA hint */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center pt-2"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium text-primary sm:text-sm">
                <IconSparkles className="h-3.5 w-3.5" />
                <span>Ready to make your content shine?</span>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
