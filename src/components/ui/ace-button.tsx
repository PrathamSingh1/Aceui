"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

export interface AceButtonProps extends HTMLMotionProps<"button"> {
  children?: React.ReactNode;
  /** Render as a different motion element, e.g. "a", "div" */
  as?: keyof typeof motion;
}

export function AceButton({
  children = "Click me",
  className,
  as = "button",
  ...rest
}: AceButtonProps) {
  const Component = (motion as any)[as] ?? motion.button;

  return <button className={cn("bg-neutral-700")}>Button</button>;
}

AceButton.displayName = "AceButton";

export default AceButton;
