import { Footer, Navbar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import "aos/dist/aos.css";

export const metadata: Metadata = {
  title: "Pouya Barari gelyard",
  description: "i am a front end developer and this is my website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" dir="rtl" >
      <body className="mainContainter">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
