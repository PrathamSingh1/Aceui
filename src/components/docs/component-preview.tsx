"use client";

import { cn } from "@/lib/utils";

interface ComponentPreviewProps {
  demo: React.ComponentType;
  className?: string;
}

export function ComponentPreview({
  demo: Demo,
  className,
}: ComponentPreviewProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-[400px] w-full items-center justify-center",
        "rounded-xl border border-neutral-200 bg-neutral-50",
        "dark:border-neutral-800 dark:bg-neutral-950",
        className,
      )}
    >
      <Demo />
    </div>
  );
}
