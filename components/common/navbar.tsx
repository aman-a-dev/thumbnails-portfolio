"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import Link from "next/link";
import {
  IconMenu2,
  IconX,
  IconHome,
  IconShare,
  IconInfoCircle,
  IconHeadset,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/common/logo";
import ToggleTheme from "@/components/common/toggle-theme";

const NAV_ITEMS = [
  { label: "Home", href: "/", icon: IconHome },
  { label: "Thumbnails", href: "/#thumbnails", icon: IconShare },
  { label: "About", href: "/#about", icon: IconInfoCircle },
  { label: "Contact", href: "/#contact", icon: IconHeadset },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-3xl px-4">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 rounded-full border border-border bg-card p-1.5 shadow-sm px-2">
          <Logo />
          <h3 className="font-[cursive]">● GFX</h3>
        </div>

        <div className="flex items-center gap-1 rounded-full border border-border bg-card p-1.5 shadow-sm">
          <ToggleTheme />

          {/* Desktop / tablet inline nav — appears once the panel would be redundant */}
          <nav className="hidden items-center gap-1 md:flex">
            <div className="mx-1 h-6 w-px bg-border" aria-hidden="true" />
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {item.label}
                <item.icon className="h-4 w-4" strokeWidth={1.75} />
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger — drives the collapsible panel below */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
          >
            <motion.span
              animate={{ rotate: open ? 90 : 0 }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 300, damping: 20 }
              }
              className="flex"
            >
              {open ? (
                <IconX className="h-5 w-5" />
              ) : (
                <IconMenu2 className="h-5 w-5" />
              )}
            </motion.span>
          </button>
        </div>
      </div>

      {/* Collapsible mobile panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={
              shouldReduceMotion
                ? { duration: 0.15 }
                : { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
            }
            className="mt-3 overflow-hidden md:hidden"
          >
            <div className="rounded-3xl bg-muted p-2">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={
                    shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -12 }
                  }
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: shouldReduceMotion ? 0 : 0.05 * i + 0.1,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-2xl px-4 py-4",
                      "text-2xl sm:text-3xl font-medium text-foreground",
                      "transition-colors hover:bg-accent hover:text-accent-foreground",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    )}
                  >
                    <span>{item.label}</span>
                    <item.icon
                      className="h-6 w-6 shrink-0 text-foreground"
                      strokeWidth={1.75}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
