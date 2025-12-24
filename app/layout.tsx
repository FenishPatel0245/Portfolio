import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ParticleBackground } from "@/components/ui/particle-background";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fenish Patel | Portfolio",
  description: "Computer Science Student with hands-on experience in programming, databases, and software development.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white relative`}
      >
        <ParticleBackground />
        <div className="relative z-10 pointer-events-none">
          <div className="pointer-events-auto">
            {children}
          </div>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
