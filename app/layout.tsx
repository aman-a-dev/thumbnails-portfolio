import type { Metadata } from "next";
import "./globals.css";

// components
import { ThemeProvider } from "@/providers/theme-provider";
import { Toaster } from "sonner";

// layout
import NavBar from "@/components/common/navbar";
import Footer from "@/components/common/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head />
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavBar />
          {children}
          <Footer />
          <Toaster richColors closeButton position="bottom-left" />
          {/*<CodingFactsToast />*/}
        </ThemeProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL("https://leulgfx.vercel.app"),

  title: {
    default: "LeulGFX — Professional Thumbnail Designer",
    template: "%s | LeulGFX",
  },

  description:
    "LeulGFX is a professional thumbnail designer creating high-quality, eye-catching YouTube thumbnails and digital visuals designed to capture attention and increase clicks.",

  keywords: [
    "LeulGFX",
    "Leul GFX",
    "thumbnail designer",
    "YouTube thumbnail designer",
    "YouTube thumbnails",
    "professional thumbnails",
    "thumbnail design",
    "YouTube thumbnail design",
    "graphic designer",
    "graphic design",
    "digital designer",
    "visual designer",
    "creative designer",
    "social media design",
    "content creator design",
    "YouTube creator",
    "YouTube graphics",
    "clickable thumbnails",
    "high CTR thumbnails",
    "photo manipulation",
    "image editing",
    "digital art",
    "creative visuals",
    "thumbnail portfolio",
    "thumbnail design portfolio",
  ],

  authors: [
    {
      name: "LeulGFX",
      url: "https://leulgfx.vercel.app/",
    },
  ],

  creator: "LeulGFX",
  publisher: "LeulGFX",

  applicationName: "LeulGFX",

  category: "Graphic Design",

  classification:
    "Thumbnail Design, YouTube Thumbnails, Graphic Design, Digital Design",

  alternates: {
    canonical: "https://leulgfx.vercel.app/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    // apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "LeulGFX — Professional Thumbnail Designer",
    description:
      "Professional YouTube thumbnail design and eye-catching digital visuals created by LeulGFX.",
    url: "https://leulgfx.vercel.app/",
    siteName: "LeulGFX",
    locale: "en_US",
    type: "website",

    // Add your OG image when available
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "LeulGFX — Professional Thumbnail Designer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "LeulGFX — Professional Thumbnail Designer",
    description:
      "Eye-catching YouTube thumbnails and creative digital visuals designed by LeulGFX.",
    images: ["/opengraph-image"],
  },

  other: {
    // PWA / Mobile
    "application-name": "LeulGFX",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "LeulGFX",

    // Theme
    "theme-color": "#09090b",
    "msapplication-TileColor": "#09090b",

    // Google Search Console
    "google-site-verification": "YOUR_GOOGLE_VERIFICATION_CODE",

    // Article / Content
    "article:author": "LeulGFX",
    "article:section": "Thumbnail Design",
    "article:tag":
      "Thumbnail Design, YouTube Thumbnails, Graphic Design, Digital Design, Photo Manipulation",

    // Search Engine
    "revisit-after": "7 days",
    distribution: "global",
    rating: "general",

    // Copyright
    copyright: `© ${new Date().getFullYear()} LeulGFX. All rights reserved.`,
  },
};
