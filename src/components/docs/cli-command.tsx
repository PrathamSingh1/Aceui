"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { getShadcnAddCommand, type PackageManager } from "@/lib/registry";

const PM_TABS: { id: PackageManager; label: string; icon: React.ReactNode }[] =
  [
    {
      id: "npm",
      label: "npm",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="14"
          height="14"
          fill="none"
        >
          <rect width="32" height="32" rx="2" fill="#CB3837" />
          <path d="M16 8v16h8V16h4V8H6v16h4V8h6z" fill="#fff" />
        </svg>
      ),
    },
    {
      id: "pnpm",
      label: "pnpm",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="14"
          height="14"
          fill="none"
        >
          <rect width="32" height="32" rx="2" fill="#F69220" />
          <path
            d="M7 7h18v18h-8V15h-2v10H7V7zm2 2v14h4V9H9zm10 0h4v4h-4V9z"
            fill="#fff"
          />
        </svg>
      ),
    },
    {
      id: "bun",
      label: "bun",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="14"
          height="14"
          fill="currentColor"
        >
          <path d="M12.79 16.58c.22-.05.44-.08.66-.08 1.96 0 3.63 1.3 4.1 3.09.28-.7 1.05-1.18 1.93-1.18 1.16 0 2.1.94 2.1 2.1 0 .14-.02.28-.06.41a3.07 3.07 0 0 1 1.76.54 9.17 9.17 0 0 0-1.22-3.15c-1.3-2.3-3.6-3.8-6.1-4.2-1.9-.3-3.9.1-5.6 1.1-.3-.3-.7-.5-1.1-.5-1 0-1.8.8-1.8 1.8 0 .2.03.4.1.6-.9.6-1.5 1.6-1.5 2.8 0 1.2.6 2.2 1.5 2.8-.07-.2-.1-.4-.1-.6 0-1 .8-1.8 1.8-1.8.4 0 .8.2 1.1.5 2.1-1.3 4.6-1.6 7.02-.93z" />
        </svg>
      ),
    },
    {
      id: "yarn",
      label: "yarn",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="14"
          height="14"
          fill="none"
        >
          <path
            d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2z"
            fill="#2C8EBB"
          />
        </svg>
      ),
    },
  ];

export function CLICommand({ componentName }: { componentName: string }) {
  const [activePm, setActivePm] = useState<PackageManager>("npm");
  const [copied, setCopied] = useState(false);

  const command = getShadcnAddCommand(componentName, activePm);

  function copy() {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-[#161616]">
      {/* Tab bar */}
      <div className="flex items-center justify-between border-b border-neutral-200 bg-white px-3 py-2 dark:border-neutral-800 dark:bg-black">
        <div className="flex items-center gap-1">
          {PM_TABS.map((pm) => (
            <button
              key={pm.id}
              onClick={() => setActivePm(pm.id)}
              className={cn(
                "relative flex items-center gap-2 rounded-none border-t-2 border-transparent px-4 py-2 text-sm font-medium transition-colors",
                activePm === pm.id
                  ? "text-neutral-900 dark:text-white"
                  : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300",
              )}
            >
              {/* Active underline */}
              {activePm === pm.id && (
                <span className="absolute right-0 bottom-[-9px] left-0 h-[2px] rounded-full bg-neutral-900 dark:bg-white" />
              )}
              {pm.icon}
              {pm.label}
            </button>
          ))}
        </div>

        <button
          onClick={copy}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 bg-neutral-100 text-neutral-500 transition-all hover:text-neutral-900 active:scale-95 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:text-white"
        >
          {copied ? (
            <Check className="h-4 w-4 text-emerald-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Command */}
      <div className="px-4 py-3">
        <code className="font-mono text-sm text-neutral-700 dark:text-neutral-300">
          {command}
        </code>
      </div>
    </div>
  );
}
