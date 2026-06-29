"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  language = "bash",
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const lines = code.split("\n");

  return (
    <div className="group relative rounded-lg border border-neutral-800 bg-neutral-950">
      {/* Language badge */}
      {language && (
        <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-2">
          <span className="text-xs text-neutral-500">{language}</span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-neutral-500 transition-colors hover:bg-neutral-800 hover:text-neutral-300"
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
      )}

      {/* Code content */}
      <div className="overflow-x-auto p-4">
        <pre className="font-mono text-sm leading-relaxed text-neutral-200">
          {showLineNumbers
            ? lines.map((line, i) => (
                <div key={i} className="flex gap-4">
                  <span className="w-4 shrink-0 text-right text-neutral-600 select-none">
                    {i + 1}
                  </span>
                  <span>{line}</span>
                </div>
              ))
            : code}
        </pre>
      </div>

      {/* Copy button (when no language header) */}
      {!language && (
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 rounded-md p-1.5 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-neutral-800"
        >
          {copied ? (
            <Check className="h-3.5 w-3.5 text-emerald-400" />
          ) : (
            <Copy className="h-3.5 w-3.5 text-neutral-400" />
          )}
        </button>
      )}
    </div>
  );
}
