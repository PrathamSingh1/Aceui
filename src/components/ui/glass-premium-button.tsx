"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

export interface GlassPremiumButtonProps extends HTMLMotionProps<"button"> {
  children?: React.ReactNode;
  /** Render as a different motion element, e.g. "a", "div" */
  as?: keyof typeof motion;
}

export function GlassPremiumButton({
  children = "Click me",
  className,
  as = "button",
  ...rest
}: GlassPremiumButtonProps) {
  const Component = (motion as any)[as] ?? motion.button;

  return (
    <button
      className={cn(
        "text-md cursor-pointer rounded-full p-[3px] shadow-lg shadow-teal-200/20 transition-colors duration-200 active:scale-[0.99]",

        "bg-linear-to-b from-[#F4F4F4] via-[#565656] to-[#93B3AE]",

        className,
      )}
    >
      <div
        className={cn(
          "rounded-full px-16 py-3 text-neutral-200",

          "bg-linear-to-b from-[#D5D8D8] to-[#818C8A] dark:bg-linear-to-b",

          className,
        )}
      >
        <span
          className={cn(
            "bg-[linear-gradient(to_bottom,#252424_0%,#3C3C3C_100%)] bg-clip-text text-transparent",
            className,
          )}
        >
          {children || "Button"}
        </span>
      </div>
    </button>
  );
}

GlassPremiumButton.displayName = "GlassPremiumButton";

export default GlassPremiumButton;
