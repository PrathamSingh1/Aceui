import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "../layout/container";
import { Heading } from "../layout/heading";

export const Hero = ({ className }: {
  className?: string;
}) => {
  return (
    <Container>
      <div className={cn("pt-[70px]", className)}>
        <Heading as="h1" className="text-center text-6xl font-bold mt-[50px]">Craft exceptional experiences <br></br> with modern interfaces</Heading>
        <p className="text-base text-center mt-4 dark:text-neutral-400 text-neutral-600">Beautiful components, thoughtful interactions, and refined animations designed to feel effortless. <br></br> Copy, customize, and create exceptional user experiences in minutes.</p>
      </div>
    </Container>
  )
}
