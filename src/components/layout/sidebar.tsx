"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { COMPONENT_CATEGORIES } from "@/lib/components-catalog";
import {
  ChevronDownLogo,
  ChevronUpLogo,
  DownloadLogo,
  HandClickLogo,
} from "../icons/icons";

const docsNav = [
  { label: "Install Next.js", href: "/docs/install-nextjs" },
  { label: "Install Tailwind CSS", href: "/docs/install-tailwind" },
  { label: "Add utilities", href: "/docs/add-utilities" },
  { label: "CLI", href: "/docs/cli" },
];

export function Sidebar() {
  const pathname = usePathname();
  const installationActive = docsNav.some((item) => pathname === item.href);

  return (
    <nav className="mt-4 w-full space-y-6 text-sm">
      {/* Installation */}
      <div>
        <div
          className={cn(
            "mb-2 flex items-center justify-between rounded-lg px-2 hover:bg-neutral-800",
            installationActive && "bg-neutral-800",
          )}
        >
          <div className="flex items-center px-2 py-1.5">
            <DownloadLogo />
            <p
              className={cn(
                "px-2 text-sm font-semibold text-neutral-400",
                installationActive && "text-light",
              )}
            >
              Installation
            </p>
          </div>
          <ChevronUpLogo />
        </div>

        <ul className="space-y-0.5">
          {docsNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "mx-8 block w-[80%] rounded-lg px-2 py-1 text-sm transition-colors",
                  pathname === item.href
                    ? "text-light bg-neutral-800 font-medium"
                    : "text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Component categories — straight from catalog */}
      {COMPONENT_CATEGORIES.map((category) => {
        const categoryActive = category.items.some(
          (item) => pathname === `/components/${item.slug}`,
        );
        return (
          <div key={category.name}>
            <div
              className={cn(
                "mb-2 flex items-center justify-between rounded-lg px-2 hover:bg-neutral-800",
                categoryActive && "bg-neutral-800",
              )}
            >
              <div className="flex items-center px-2 py-1.5">
                <HandClickLogo />
                <p className="text-light px-2 text-sm font-semibold">
                  {category.name}
                </p>
              </div>
              <ChevronUpLogo />
            </div>
            <ul className="space-y-0.5">
              {category.items.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/components/${item.slug}`}
                    className={cn(
                      "mx-8 flex w-[80%] items-center justify-between rounded-lg px-2 py-1 text-sm transition-colors",
                      pathname === `/components/${item.slug}`
                        ? "text-light bg-neutral-800 font-medium"
                        : "text-neutral-400 hover:bg-neutral-900 hover:text-neutral-200",
                    )}
                  >
                    <span>{item.name}</span>
                    {item.isNew && (
                      <span className="py-0.2 rounded-md bg-emerald-500/15 px-1.5 text-[10px] font-medium text-green-500">
                        New
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </nav>
  );
}
