import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lundy.work"),
  title: "Seab Lundy — DevOps Engineer",
  description:
    "DevOps Engineer in Phnom Penh specializing in Kubernetes platforms, CI/CD pipelines, GitOps, infrastructure automation, and DevSecOps.",
  openGraph: {
    title: "Seab Lundy — DevOps Engineer",
    description:
      "Kubernetes, CI/CD, GitOps, infrastructure automation, and DevSecOps.",
    url: "https://www.lundy.work",
    siteName: "Seab Lundy",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
