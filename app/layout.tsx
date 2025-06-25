import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { usePathname, useRouter } from "next/navigation";
import ClientWrapper from "./ClientWrapper";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Abdullah Naeem - Data Scientist",
  description:
    "Data Scientist and AI/ML Engineer. Focused on tranforming raw data into real world intelligence",
  generator: "Next.js",
  applicationName: "Abdullah Naeem - Data Scientist",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "nigeria",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Abdullah Naeem - Data Scientist",
    description:
      "Data Scientist and AI/ML Engineer. Focused on tranforming raw data into real world intelligence",
    url: "https://www.abdullahnaeem.me/",
    siteName: "www.abdullahnaeem.me",
    images: [
      {
        url: "/profile.webp",
        width: 1200,
        height: 630,
        alt: "Abdullah Naeem - Data Scientist",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdullah Naeem - Data Scientist",
    description:
      "Data Scientist and AI/ML Engineer. Focused on tranforming raw data into real world intelligence",
    creator: "abdullah__",
    creatorId: "1243720976552144897",
    images: [
      "/profile.webp",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        <ClientWrapper>
          {children}
        </ClientWrapper>
        <Analytics />
      </body>
    </html>
  );
}
