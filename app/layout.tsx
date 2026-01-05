import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  verification: {
    google: "yYQSLyylbWTuVqfu1-trofOqioL-hfu5H-AtWanh9Lo",
  },
  title: "Nikunj Vaghasiya | Next.js & React.js Developer Resume",
  description:
    "Nikunj Vaghasiya is a Next.js & React.js Developer from Ahmedabad, Gujarat. View resume, skills, experience, and portfolio.",
  keywords: [
    "Nikunj Vaghasiya",
    "Next.js Developer Resume",
    "React.js Developer Ahmedabad",
    "Frontend Developer Resume",
    "Nikunj Resume",
    "Nikunj Vaghasiya Resume",
  ],
  authors: [{ name: "Nikunj Vaghasiya" }],
  openGraph: {
    title: "Nikunj Vaghasiya | Frontend Developer Resume",
    description:
      "Professional resume of Nikunj Vaghasiya – Next.js, React.js Developer",
    url: "https://nikunj-vaghasiya-resume.vercel.app/",
    siteName: "Nikunj Vaghasiya Resume",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
