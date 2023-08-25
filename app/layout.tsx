"use client"
import { Footer, Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";
export const metadata: Metadata = {
  title: "Pouya Barari gelyard",
  description: "i am a front end developer and this is my website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  useEffect(() => {
    Aos.init({
      duration: 200,
      offset: 100,
    });
  }, []);
  return (
    <html lang="en" dir="rtl">
      <body className={"relative"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
