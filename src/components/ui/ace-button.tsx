"use client";

import React from "react";
import { motion, type MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface AceButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, MotionProps {
  children?: React.ReactNode;
  /** Render as a different element, e.g. as="a" */
  as?: keyof typeof motion;
}

export function AceButton({
  children = "Click me",
  className = "",
  as = "button",
  ...rest
}: AceButtonProps) {
  const Component = (motion as any)[as] ?? motion.button;

  return (
    <Component
      {...rest}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
      className={cn(
        // Base layout
        "relative inline-flex items-center justify-center overflow-hidden",
        "rounded-md px-6 py-2",
        // Light mode
        "border border-neutral-200 bg-neutral-50 text-neutral-900",
        // Dark mode
        "dark:border-neutral-800 dark:bg-black dark:text-neutral-100",
        // CSS variable for the shine effect (different in dark/light)
        "[--shine:rgba(0,0,0,.66)] dark:[--shine:rgba(255,255,255,.66)]",
        className,
      )}
    >
      {/* Text with sweep mask animation */}
      <motion.span
        className="relative z-10 flex h-full w-full items-center justify-center font-light tracking-wide"
        style={{
          WebkitMaskImage:
            "linear-gradient(-75deg, white calc(var(--x) + 20%), transparent calc(var(--x) + 30%), white calc(var(--x) + 100%))",
          maskImage:
            "linear-gradient(-75deg, white calc(var(--x) + 20%), transparent calc(var(--x) + 30%), white calc(var(--x) + 100%))",
        }}
        initial={{ ["--x" as any]: "100%" }}
        animate={{ ["--x" as any]: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
          repeatDelay: 1.5,
        }}
      >
        {children}
      </motion.span>

      {/* Border shine sweep */}
      <motion.span
        className="absolute inset-0 rounded-md p-px"
        style={{
          background:
            "linear-gradient(-75deg, transparent 30%, var(--shine) 50%, transparent 70%)",
          backgroundSize: "200% 100%",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
        }}
        initial={{ backgroundPosition: "100% 0", opacity: 0 }}
        animate={{ backgroundPosition: ["100% 0", "0% 0"], opacity: [0, 1, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 1.5,
        }}
      />
    </Component>
  );
}

export default AceButton;
