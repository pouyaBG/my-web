import { Introduction, Skill } from "@/components";
import WorkSamples from "@/components/WorkSamples";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Introduction />
      <Skill />
      <WorkSamples />
    </main>
  );
}
