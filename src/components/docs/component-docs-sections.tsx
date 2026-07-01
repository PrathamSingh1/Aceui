"use client";

import { useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { COMPONENT_DOCS } from "@/lib/component-docs";
import { CodeBlock } from "@/components/ui/code-block";
import { CLICommand } from "./cli-command";

const UTILS_CODE = `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`;

interface ComponentDocsSectionsProps {
  componentName: string;
  slug: string;
  sourceCode: string;
}

export function ComponentDocsSections({
  componentName,
  slug,
  sourceCode,
}: ComponentDocsSectionsProps) {
  const docs = COMPONENT_DOCS[slug] || COMPONENT_DOCS[componentName];
  const [tab, setTab] = useState<"cli" | "manual">("cli");
  const handleCLI = useCallback(() => setTab("cli"), []);
  const handleManual = useCallback(() => setTab("manual"), []);

  if (!docs) return null;

  return (
    <div className="mt-6 space-y-10">
      {/* Installation */}
      <section id="installation" className="scroll-mt-24">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-neutral-900 dark:text-zinc-100">
          Installation
        </h2>

        {/* CLI / Manual toggle */}
        <div className="mb-6 inline-flex items-center rounded-xl border border-neutral-200 bg-neutral-100 p-1 dark:border-zinc-700/50 dark:bg-zinc-900/80">
          {(["cli", "manual"] as const).map((t) => (
            <button
              key={t}
              onClick={t === "cli" ? handleCLI : handleManual}
              className={cn(
                "rounded-lg px-5 py-1.5 text-sm font-medium capitalize transition-all duration-150 select-none",
                tab === t
                  ? "bg-white text-neutral-900 shadow-sm dark:bg-zinc-700 dark:text-white"
                  : "text-neutral-400 hover:text-neutral-700 dark:text-zinc-500 dark:hover:text-zinc-300",
              )}
            >
              {t === "cli" ? "CLI" : "Manual"}
            </button>
          ))}
        </div>

        {/* CLI tab */}
        {tab === "cli" && (
          <div className="space-y-4">
            <p className="text-sm text-neutral-500 dark:text-zinc-400">
              Run the following command
            </p>
            <CLICommand componentName={componentName} />
          </div>
        )}

        {/* Manual tab */}
        {tab === "manual" && (
          <div className="space-y-8 border-l-2 border-neutral-200 pl-6 dark:border-[#222]">
            {/* Step 1 — Dependencies */}
            <div className="relative">
              <div className="absolute top-0 -left-[26px] h-6 w-2 rounded-r-full bg-neutral-300 dark:bg-zinc-600" />
              <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-zinc-200">
                Install dependencies
              </h3>
              <CodeBlock code={docs.dependencies} language="bash" />
            </div>

            {/* Step 2 — Utils (if needed) */}
            {docs.includeUtils && (
              <div className="relative">
                <div className="absolute top-0 -left-[26px] h-6 w-2 rounded-r-full bg-neutral-300 dark:bg-zinc-600" />
                <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-zinc-200">
                  lib/utils.ts
                </h3>
                <CodeBlock code={UTILS_CODE} language="tsx" />
              </div>
            )}

            {/* Step 3 — Source code */}
            <div className="relative">
              <div className="absolute top-0 -left-[26px] h-6 w-2 rounded-r-full bg-neutral-300 dark:bg-zinc-600" />
              <h3 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-zinc-200">
                Copy the source code
              </h3>
              <div className="mb-4 inline-flex items-center rounded-md border border-neutral-200 bg-neutral-100 px-3 py-1 font-mono text-sm text-neutral-600 dark:border-[#222] dark:bg-zinc-900 dark:text-zinc-300">
                components/ui/{componentName}.tsx
              </div>
              <CodeBlock code={sourceCode} language="tsx" expandable />
            </div>
          </div>
        )}
      </section>

      {/* Usage */}
      <section id="usage" className="scroll-mt-24">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-neutral-900 dark:text-zinc-100">
          Usage
        </h2>
        <CodeBlock code={docs.usageCode} language="tsx" />
      </section>

      {/* Props */}
      {docs.props.length > 0 && (
        <section id="props" className="scroll-mt-24">
          <h2 className="mb-6 text-2xl font-bold tracking-tight text-neutral-900 dark:text-zinc-100">
            Props
          </h2>
          <div className="overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800">
            <table className="w-full text-sm">
              <thead className="bg-neutral-50 dark:bg-neutral-900">
                <tr>
                  {["Prop", "Type", "Default", "Description"].map((h) => (
                    <th
                      key={h}
                      className="px-4 py-3 text-left font-medium text-neutral-600 dark:text-neutral-400"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200 dark:divide-neutral-800">
                {docs.props.map((p) => (
                  <tr key={p.prop}>
                    <td className="px-4 py-3 font-mono text-xs text-neutral-900 dark:text-neutral-100">
                      {p.prop}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-violet-600 dark:text-violet-400">
                      {p.type}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-neutral-500">
                      {p.defaultValue}
                    </td>
                    <td className="px-4 py-3 text-neutral-600 dark:text-neutral-400">
                      {p.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}
