import React from "react";
import { cn } from "@/lib/utils";


export const Badge = ({ children, className }: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("", className)}>
      {children}
    </div>
  )
}
