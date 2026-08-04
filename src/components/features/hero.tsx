import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "../layout/container";
import { Heading } from "../layout/heading";
import { Button } from "../layout/button";
import { IconArrowAutofitUp } from "@tabler/icons-react";
import Link from "next/link";

export const Hero = ({ className }: { className?: string }) => {
  return (
    <Container>
      <div className={cn("pt-[70px]", className)}>
        <Heading as="h1" className="mt-[50px] text-center text-6xl font-bold">
          Craft exceptional experiences <br></br> with modern interfaces
        </Heading>
        <p className="mt-4 text-center text-base text-neutral-600 dark:text-neutral-400">
          Beautiful components, thoughtful interactions, and refined animations
          designed to feel effortless. <br></br> Copy, customize, and create
          exceptional user experiences in minutes.
        </p>
        <div className="mt-8 flex items-center justify-center gap-8">
          <Link href={`/components`}>
            <Button className="flex items-center gap-8">
              Start Building
              <IconArrowAutofitUp size={16} />
            </Button>
          </Link>
          <Link href={`/templates`}>
            <Button variant="secondary">Browse Components</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
};
