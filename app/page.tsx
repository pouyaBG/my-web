"use client"
import { Introduction, Skill } from "@/components";
import WorkSamples from "@/components/WorkSamples";
import { useEffect } from "react";
import Aos from "aos";
export default function Home() {

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <main className="overflow-hidden">
      <Introduction />
      <Skill />
      <WorkSamples />
    </main>
  );
}
