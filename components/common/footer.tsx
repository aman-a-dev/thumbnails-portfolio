"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandBehance,
  IconBrandX,
  IconMail,
  IconArrowUp,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/common/logo";

const EXPLORE_LINKS = [
  { label: "Thumbnails", href: "/#thumbnails" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
] as const;

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/leul.gfx?igsh=MTRxbGp3c250anF5eQ==",
    icon: IconBrandInstagram,
  },
  { label: "Behance", href: "https://behance.net", icon: IconBrandBehance },
  { label: "Telegram", href: "https://t.me/leul_gfx", icon: IconBrandTelegram },
  { label: "X", href: "https://x.com", icon: IconBrandX },
] as const;

const MARQUEE_WORDS = ["Thumbnails", "Design", "CTR", "Graphics"];

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);

  const email = "hello@leulgfx.com";

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — link below still works
    }
  };

  const fadeUp = {
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
  };

  return (
    <footer className="mt-24 border-t border-border bg-background">
      {/* Signature marquee strip */}
      <div className="relative overflow-hidden border-b border-border bg-foreground py-3">
        {shouldReduceMotion ? (
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 px-4">
            {MARQUEE_WORDS.map((word) => (
              <span
                key={word}
                className="text-sm font-medium uppercase tracking-widest text-background"
              >
                {word}
              </span>
            ))}
          </div>
        ) : (
          <motion.div
            className="flex w-max items-center gap-10 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 18, ease: "linear", repeat: Infinity }}
          >
            {Array.from({ length: 2 }).map((_, dupeIndex) => (
              <div key={dupeIndex} className="flex items-center gap-10 pl-10">
                {MARQUEE_WORDS.map((word) => (
                  <span
                    key={`${dupeIndex}-${word}`}
                    className="flex items-center gap-10 text-sm font-medium uppercase tracking-widest text-background"
                  >
                    {word}
                    <span
                      className="h-1 w-1 rounded-full bg-background/50"
                      aria-hidden="true"
                    />
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Main content */}
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-2 md:grid-cols-[1.3fr_0.7fr_1fr]">
        {/* Brand */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-4"
        >
          <div className="flex gap-1">
            <Logo /> <h3 className="font-[cursive]">● GFX</h3>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Custom thumbnails and motion design for creators who want their
            content to stop the scroll.
          </p>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="group flex w-fit items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <IconMail className="h-4 w-4" strokeWidth={1.75} />
            <span>{copied ? "Copied!" : email}</span>
          </button>
        </motion.div>

        {/* Explore */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.05 }}
          className="flex flex-col gap-3"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Explore
          </span>
          <nav className="flex flex-col gap-2">
            {EXPLORE_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="w-fit text-sm text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </motion.div>

        {/* Connect */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.1 }}
          className="flex flex-col gap-3"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Connect
          </span>
          <div className="flex flex-wrap gap-2">
            {SOCIALS.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <social.icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-5xl flex-col-reverse items-center gap-4 px-6 py-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Leul GFX. All rights reserved.
          </p>

          <motion.div
            whileHover={shouldReduceMotion ? undefined : { y: -3 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.94 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
          >
            <Link
              href="#top"
              aria-label="Back to top"
              className={cn(
                "flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2",
                "text-xs font-medium text-foreground transition-colors hover:bg-accent",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              )}
            >
              Back to top
              <IconArrowUp className="h-3.5 w-3.5" strokeWidth={2} />
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
