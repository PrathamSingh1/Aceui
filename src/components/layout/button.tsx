import React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  disabled?: boolean;
};

const variantStyles = {
  primary:
    "bg-linear-to-b from-[hsl(0deg_0%_10%)] to-[hsl(0deg_0%_5%)] shadow-[inset_0_0_5px_0.5px_hsl(360deg_5%_80%)] dark:from-[hsl(0deg_0%_90%)] dark:to-[hsl(0deg_0%_85%)] dark:shadow-[inset_0_0_5px_0.5px_hsl(360deg_0%_10%)] text-white hover:bg-blue-700 active:bg-blue-800 dark:text-neutral-800 border-2 border-neutral-600 dark:border-neutral-400",
  secondary:
    "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 active:bg-neutral-900 border-2 border-neutral-200 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900 dark:border-neutral-800",
};

export const Button = ({
  children,
  className,
  variant = "primary",
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "inline-flex cursor-pointer items-center justify-center rounded-lg px-4 py-3 text-sm font-medium transition-colors active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </button>
  );
};
