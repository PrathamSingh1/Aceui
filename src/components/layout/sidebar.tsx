"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { COMPONENT_CATEGORIES } from "@/lib/components-catalog";

const docsNav = [
  { label: "Install Next.js", href: "/docs/install-nextjs" },
  { label: "Install Tailwind CSS", href: "/docs/install-tailwind" },
  { label: "Add utilities", href: "/docs/add-utilities" },
  { label: "CLI", href: "/docs/cli" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="space-y-6 text-sm">
      {/* Installation */}
      <div>
        <p className="mb-2 px-2 text-xs font-semibold tracking-widest text-neutral-500 uppercase">
          Installation
        </p>
        <ul className="space-y-0.5">
          {docsNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "block rounded-md px-3 py-1.5 text-sm transition-colors",
                  pathname === item.href
                    ? "bg-neutral-800 font-medium text-white"
                    : "text-neutral-400 hover:bg-neutral-900 hover:text-neutral-200",
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Component categories — straight from catalog */}
      {COMPONENT_CATEGORIES.map((category) => (
        <div key={category.name}>
          <p className="mb-2 px-2 text-xs font-semibold tracking-widest text-neutral-500 uppercase">
            {category.name}
          </p>
          <ul className="space-y-0.5">
            {category.items.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/components/${item.slug}`}
                  className={cn(
                    "flex items-center justify-between rounded-md px-3 py-1.5 text-sm transition-colors",
                    pathname === `/components/${item.slug}`
                      ? "bg-neutral-800 font-medium text-white"
                      : "text-neutral-400 hover:bg-neutral-900 hover:text-neutral-200",
                  )}
                >
                  <span>{item.name}</span>
                  {item.isNew && (
                    <span className="rounded-full bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-medium text-emerald-400">
                      New
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}
