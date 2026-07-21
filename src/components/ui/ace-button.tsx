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

  return (
    <button
      className={cn(
        "text-md cursor-pointer rounded-lg bg-[hsl(190_60%_45%)] px-6 py-2 text-neutral-200 shadow-[inset_3px_2px_10px_hsl(150_70%_60%)] transition-colors duration-200 hover:bg-[hsl(190_60%_40%)] active:scale-[0.97] dark:bg-[hsl(190_50%_40%)] dark:text-neutral-900 dark:hover:bg-[hsl(190_50%_35%)]",
        className,
      )}
    >
      Button
    </button>
  );
}

AceButton.displayName = "AceButton";

export default AceButton;
