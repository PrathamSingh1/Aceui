"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface BlueTonnedButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function BlueTonnedButton({
  children = "Welcome :)",
  className,
  onClick,
  ...rest
}: BlueTonnedButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "cursor-pointer rounded-xl px-8 py-3",

        "dark:bg-gradient-to-b dark:from-[#0A0A0A] dark:to-[#0D101F]",

        "dark:shadow-[inset_0_-8px_6px_-2px_#144CCD,inset_0_-4px_3px_-8px_rgba(102,148,255,0.5),inset_0_-2px_2px_-6px_rgba(255,255,255,0.4),inset_0_0_8px_-2px_rgba(35,99,255,0.15)]",

        "dark:hover:shadow-[inset_0_-8px_7px_-2px_#144CCD,inset_0_-4px_3px_-8px_rgba(102,148,255,0.5),inset_0_-2px_2px_-6px_rgba(255,255,255,0.4),inset_0_0_8px_-2px_rgba(35,99,255,0.15)]",

        "hover:shadow-[inset_0_-8px_7px_-2px_#144CCD,inset_0_-4px_3px_-8px_rgba(102,148,255,0.5),inset_0_-2px_2px_-6px_rgba(255,255,255,0.4),inset_0_0_8px_-2px_rgba(35,99,255,0.15)]",

        "transition-all duration-150 dark:hover:brightness-110",

        "shadow-[inset_0_-8px_8px_-2px_#145CCD,inset_0_-4px_3px_-8px_rgba(102,148,255,0.5),inset_0_-2px_2px_-6px_rgba(255,255,255,0.4),inset_0_0_8px_-2px_rgba(35,99,255,0.15)]",

        "active:scale-[0.98]",
        className,
      )}
      {...rest}
    >
      <span className="bg-neutral-800/80 bg-clip-text text-transparent dark:bg-neutral-200/80">
        {children}
      </span>
    </button>
  );
}

BlueTonnedButton.displayName = "BlueTonnedButton";

export default BlueTonnedButton;
