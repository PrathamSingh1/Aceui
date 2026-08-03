"use client";

import { Hero } from "@/components/features/hero";

export default function Home() {
  return (
    <section className="bg-light dark:bg-dark min-h-[calc(100vh-65px)]">
      <Hero />
    </section>
  );
}
