import localFont from "next/font/local";
import { Great_Vibes } from "next/font/google";

export const greatVibesFont = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});

export const soraBoldFont = localFont({ src: "./sora-bold.otf" });
