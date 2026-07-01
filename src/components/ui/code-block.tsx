"use client";

import { useState, useEffect } from "react";
import { Check, Copy } from "lucide-react";
import { codeToHtml } from "shiki";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  expandable?: boolean; // ← the missing prop
  className?: string;
}

export function CodeBlock({
  code,
  language = "tsx",
  expandable = false,
  className,
}: CodeBlockProps) {
  const [html, setHtml] = useState("");
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    codeToHtml(code, { lang: language, theme: "github-dark-dimmed" }).then(
      (result) => {
        if (!cancelled) setHtml(result);
      },
    );
    return () => {
      cancelled = true;
    };
  }, [code, language]);

  function copy() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg border border-neutral-200 bg-neutral-50 dark:border-[#222] dark:bg-zinc-950",
        className,
      )}
    >
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-neutral-200 bg-white px-4 py-2 dark:border-[#222] dark:bg-zinc-900/80">
        <span className="text-xs text-neutral-500 dark:text-neutral-400">
          {language}
        </span>
        <button
          onClick={copy}
          className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-neutral-300"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3 text-emerald-400" />
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <div
        className={cn(
          "overflow-x-auto text-sm [&_pre]:!bg-transparent [&_pre]:p-4 [&_pre]:leading-relaxed",
          expandable && !isExpanded && "max-h-48 overflow-hidden",
        )}
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {/* Expand / Collapse button — only when expandable */}
      {expandable && !isExpanded && (
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-center bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent pt-12 pb-3">
          <button
            onClick={() => setIsExpanded(true)}
            className="rounded-full border border-neutral-700 bg-zinc-900/80 px-4 py-1.5 text-xs font-medium text-neutral-300 backdrop-blur-sm transition-all hover:scale-105 hover:bg-zinc-800 active:scale-95"
          >
            Expand code
          </button>
        </div>
      )}

      {expandable && isExpanded && (
        <div className="flex justify-center py-3">
          <button
            onClick={() => setIsExpanded(false)}
            className="rounded-full border border-neutral-700 bg-zinc-900/80 px-4 py-1.5 text-xs font-medium text-neutral-300 backdrop-blur-sm transition-all hover:scale-105 hover:bg-zinc-800 active:scale-95"
          >
            Collapse
          </button>
        </div>
      )}
    </div>
  );
}
