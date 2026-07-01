"use client";

import { useState } from "react";
import { Code2, Eye, Copy, Check, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComponentPreviewProps {
  demo: React.ComponentType;
  sourceCode: string;
  registryUrl: string;
  className?: string;
}

export function ComponentPreview({
  demo: Demo,
  sourceCode,
  registryUrl,
  className,
}: ComponentPreviewProps) {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const cliCommand = `npx shadcn@latest add "${registryUrl}"`;

  function copyCli() {
    navigator.clipboard.writeText(cliCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className={cn("space-y-3", className)}>
      {/* Top bar: Preview/Code tabs + CLI command bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1 rounded-lg border border-neutral-800 bg-neutral-900 p-1">
          <button
            onClick={() => setTab("preview")}
            className={cn(
              "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              tab === "preview"
                ? "bg-neutral-700 text-white"
                : "text-neutral-400 hover:text-neutral-200",
            )}
          >
            <Eye className="h-3.5 w-3.5" />
            Preview
          </button>
          <button
            onClick={() => setTab("code")}
            className={cn(
              "flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors",
              tab === "code"
                ? "bg-neutral-700 text-white"
                : "text-neutral-400 hover:text-neutral-200",
            )}
          >
            <Code2 className="h-3.5 w-3.5" />
            Code
          </button>
        </div>

        {/* CLI quick-install bar */}
        <div className="flex min-w-[280px] flex-1 items-center justify-between gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-3 py-2">
          <code className="truncate font-mono text-xs text-neutral-300">
            {cliCommand}
          </code>
          <div className="flex shrink-0 items-center gap-1">
            <button
              onClick={copyCli}
              className="rounded-md p-1.5 text-neutral-500 hover:bg-neutral-800 hover:text-neutral-200"
            >
              {copied ? (
                <Check className="h-3.5 w-3.5 text-emerald-400" />
              ) : (
                <Copy className="h-3.5 w-3.5" />
              )}
            </button>
            <button className="rounded-md p-1.5 text-neutral-500 hover:bg-neutral-800 hover:text-neutral-200">
              <Maximize2 className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Preview or Code panel */}
      {tab === "preview" ? (
        <div className="relative flex min-h-[400px] w-full items-center justify-center rounded-xl border border-neutral-800 bg-neutral-950">
          <Demo />
        </div>
      ) : (
        <div className="max-h-[500px] overflow-auto rounded-xl border border-neutral-800 bg-neutral-950 p-4">
          <pre className="font-mono text-xs leading-relaxed text-neutral-300">
            {sourceCode}
          </pre>
        </div>
      )}
    </div>
  );
}
