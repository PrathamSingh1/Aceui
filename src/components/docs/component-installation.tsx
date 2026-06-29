"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface ComponentInstallationProps {
  registryUrl: string;
  dependencies: string[];
  sourceCode: string;
}

export function ComponentInstallation({
  registryUrl,
  dependencies,
  sourceCode,
}: ComponentInstallationProps) {
  const [tab, setTab] = useState<"cli" | "manual">("cli");
  const [copied, setCopied] = useState(false);

  const cliCommand = `npx shadcn@latest add "${registryUrl}"`;
  const depsCommand = `npm install ${dependencies.join(" ")}`;

  function copy(text: string) {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="space-y-4">
      {/* Tab switcher */}
      <div className="flex gap-2 border-b border-neutral-200 dark:border-neutral-800">
        {(["cli", "manual"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn(
              "pb-2 text-sm capitalize transition-colors",
              tab === t
                ? "border-b-2 border-neutral-900 text-neutral-900 dark:border-white dark:text-white"
                : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300",
            )}
          >
            {t === "cli" ? "CLI" : "Manual"}
          </button>
        ))}
      </div>

      {tab === "cli" && (
        <div className="relative">
          <CodeBlock
            code={cliCommand}
            onCopy={() => copy(cliCommand)}
            copied={copied}
          />
        </div>
      )}

      {tab === "manual" && (
        <ol className="space-y-6 text-sm text-neutral-700 dark:text-neutral-300">
          <li>
            <p className="mb-2 font-medium text-neutral-900 dark:text-white">
              1. Install dependencies
            </p>
            <CodeBlock
              code={depsCommand}
              onCopy={() => copy(depsCommand)}
              copied={copied}
            />
          </li>
          <li>
            <p className="mb-2 font-medium text-neutral-900 dark:text-white">
              2. Add the cn() utility to lib/utils.ts
            </p>
            <CodeBlock
              code={`import { type ClassValue, clsx } from "clsx";\nimport { twMerge } from "tailwind-merge";\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs));\n}`}
              onCopy={() => copy("")}
              copied={false}
            />
          </li>
          <li>
            <p className="mb-2 font-medium text-neutral-900 dark:text-white">
              3. Copy the component source
            </p>
            <CodeBlock
              code={sourceCode}
              onCopy={() => copy(sourceCode)}
              copied={copied}
            />
          </li>
        </ol>
      )}
    </div>
  );
}

// Reusable code block with copy button
function CodeBlock({
  code,
  onCopy,
  copied,
}: {
  code: string;
  onCopy: () => void;
  copied: boolean;
}) {
  return (
    <div className="group relative rounded-lg bg-neutral-950 p-4 text-sm text-neutral-100">
      <pre className="overflow-x-auto font-mono text-xs leading-relaxed whitespace-pre">
        {code}
      </pre>
      <button
        onClick={onCopy}
        className="absolute top-3 right-3 rounded-md p-1.5 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-neutral-800"
      >
        {copied ? (
          <Check className="h-3.5 w-3.5 text-green-400" />
        ) : (
          <Copy className="h-3.5 w-3.5 text-neutral-400" />
        )}
      </button>
    </div>
  );
}
