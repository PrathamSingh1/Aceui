import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "../layout/container";

export const Hero = ({ className }: {
  className?: string;
}) => {
  return (
    <Container>
      <div className={cn("", className)}>
        Ace ui
      </div>
    </Container>
  )
}
