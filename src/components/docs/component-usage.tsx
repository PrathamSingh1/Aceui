"use client";

import { Check, Copy } from "lucide-react";
import React, { useState } from "react";

interface ComponentUsageProps {
  importName: string;
  importPath: string;
  example: string;
}

export function ComponentUsage({
  importName,
  importPath,
  example,
}: ComponentUsageProps) {
  const [copied, setCopied] = useState(false);
  const code = `import { ${importName} } from "${importPath}";\n\n${example}`;

  function copy() {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }
  return (
    <div className="group relative rounded-lg border border-neutral-800 bg-neutral-950 p-4">
      <pre className="overflow-x-auto font-mono text-xs leading-relaxed text-neutral-300">
        {code}
      </pre>
      <button
        onClick={copy}
        className="absolute top-3 right-3 rounded-md p-1.5 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-neutral-800"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5 text-emerald-400" />
        ) : (
          <Copy className="h-3.5 w-3.5 text-neutral-400" />
        )}
      </button>
    </div>
  );
}
