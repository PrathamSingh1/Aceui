"use client";

import { useState } from "react";
import { Eye, Code2, Copy, Check, Maximize2, Minimize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { CodeBlock } from "@/components/ui/code-block";

interface ComponentPreviewPanelProps {
  installCommand: string;
  sourceCode: string;
  componentName: string;
  slug: string;
  children: React.ReactNode;
}

export function ComponentPreviewPanel({
  installCommand,
  sourceCode,
  componentName,
  slug,
  children,
}: ComponentPreviewPanelProps) {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  function copy() {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  // ── FULLSCREEN MODE ──────────────────────────────────────────
  if (isExpanded) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        {/* Only element: floating minimize button in top-right */}
        <button
          onClick={() => setIsExpanded(false)}
          className="absolute top-4 right-4 z-10 rounded-md p-1.5 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-white"
          title="Exit fullscreen"
        >
          <Minimize2 className="h-4 w-4" />
        </button>

        {/* Just the demo, nothing else */}
        {children}
      </div>
    );
  }

  // normal mode
  return (
    <div className="space-y-3">
      {/* Top bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* Preview / Code toggle */}
        <div className="flex items-center gap-1 rounded-lg border border-neutral-200 bg-neutral-100 p-1 dark:border-neutral-800 dark:bg-neutral-900">
          {(["preview", "code"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cn(
                "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
                tab === t
                  ? "bg-white text-neutral-900 shadow-sm dark:bg-neutral-700 dark:text-white"
                  : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300",
              )}
            >
              {t === "preview" ? (
                <Eye className="h-3.5 w-3.5" />
              ) : (
                <Code2 className="h-3.5 w-3.5" />
              )}
              <span className="capitalize">{t}</span>
            </button>
          ))}
        </div>

        {/* CLI bar with copy + expand */}
        <div className="flex min-w-[260px] flex-1 items-center justify-between gap-2 rounded-lg border border-neutral-200 bg-neutral-100 px-3 py-2 dark:border-neutral-800 dark:bg-neutral-900">
          <code className="truncate font-mono text-xs text-neutral-600 dark:text-neutral-300">
            {installCommand}
          </code>
          <div className="flex shrink-0 items-center gap-1">
            <button
              onClick={copy}
              className="rounded-md p-1.5 text-neutral-400 transition-colors hover:bg-neutral-200 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5 text-emerald-400" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
            </button>
            <button
              onClick={() => setIsExpanded(true)}
              className="rounded-md p-1.5 text-neutral-400 transition-colors hover:bg-neutral-200 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"
              title="Fullscreen preview"
            >
              <Maximize2 className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Preview panel */}
      {tab === "preview" && (
        <div
          id="preview"
          className="relative flex min-h-[400px] w-full scroll-mt-24 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950"
        >
          {children}
        </div>
      )}

      {/* Code panel */}
      {tab === "code" && (
        <div id="code" className="scroll-mt-24">
          <CodeBlock code={sourceCode} language="tsx" />
        </div>
      )}
    </div>
  );
}
