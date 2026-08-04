import React from "react";
import { cn } from "@/lib/utils"

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  disabled?: boolean;
};

const variantStyles = {
  primary:
    "bg-linear-to-b from- text-white hover:bg-blue-700 active:bg-blue-800 border border-transparent",
  secondary:
    "bg-white text-blue-600 hover:bg-blue-50 active:bg-blue-100 border border-blue-600",
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
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </button>
  );
};
