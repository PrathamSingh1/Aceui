"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ShadowButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function ShadowButton({
  children = "Hello, there!",
  className,
  onClick,
  ...rest
}: ShadowButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "cursor-pointer rounded-xl p-1",

        "bg-gradient-to-b from-white to-[#f0f0ef]",
        "shadow-[0_1px_1px_rgba(0,0,0,0.04),0_6px_14px_-4px_rgba(0,0,0,0.12)]",

        "dark:bg-gradient-to-b dark:from-[#3a3a3a] dark:to-[#262626]",
        "dark:shadow-[0_1px_1px_rgba(0,0,0,0.4),0_6px_14px_-4px_rgba(0,0,0,0.5)]",
        "transition-transform duration-150 active:scale-[0.98]",
        className,
      )}
      {...rest}
    >
      <div
        className={cn(
          "rounded-lg px-10 py-3",
          // Ligt mode colors
          "bg-gradient-to-b from-white to-[#fafaf4]",
          "shadow-[inset_0_1px_0_rgba(255,255,255,0.9),inset_0_-1px_2px_rgba(0,0,0,0.05)]",
          // Dark mode colors
          "dark:bg-gradient-to-b dark:from-[#333333] dark:to-[#2a2a2a]",
          "dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-1px_2px_rgba(0,0,0,0.4)]",
        )}
      >
        <span
          className={cn(
            "bg-[linear-gradient(to_bottom,#000000_0%,#2f2f2f_100%)] bg-clip-text text-lg font-semibold text-transparent",
            "dark:bg-[linear-gradient(to_bottom,#ffffff_0%,#d4d4d4_100%)]",
          )}
        >
          {children}
        </span>
      </div>
    </button>
  );
}

ShadowButton.displayName = "ShadowButton";

export default ShadowButton;
