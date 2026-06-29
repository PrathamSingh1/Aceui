"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { getAllComponents } from "@/lib/registry";

// ── Static docs nav ──────────────────────────────────────
const docsNav = [
  {
    group: "Installation",
    items: [
      { label: "Install Next.js", href: "/docs/install-nextjs" },
      { label: "Install Tailwind CSS", href: "/docs/install-tailwind" },
      { label: "Add utilities", href: "/docs/add-utilities" },
      { label: "CLI", href: "/docs/cli" },
    ],
  },
];

// ── Build component nav from registry ────────────────────
function buildComponentNav() {
  const all = getAllComponents();
  const groups: Record<string, typeof all> = {};
  for (const c of all) {
    if (!groups[c.category]) groups[c.category] = [];
    groups[c.category].push(c);
  }
  return groups;
}

const component = getAllComponents()[0];

console.log(component);
console.log("category =", component.category);
console.log("keys =", Object.keys(component));
// ── Sidebar ───────────────────────────────────────────────
export function Sidebar() {
  const pathname = usePathname();
  const componentGroups = buildComponentNav();

  return (
    <nav className="space-y-6 text-sm">
      {/* ── Installation ── */}
      {docsNav.map((section) => (
        <div key={section.group}>
          <p className="mb-2 px-2 text-xs font-semibold tracking-widest text-neutral-500 uppercase">
            {section.group}
          </p>
          <ul className="space-y-0.5">
            {section.items.map((item) => (
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
      ))}

      {/* ── Component categories from registry ── */}
      {Object.entries(componentGroups).map(([category, components]) => (
        <div key={category}>
          <p className="mb-2 px-2 text-xs font-semibold tracking-widest text-neutral-500 uppercase">
            {category}
          </p>
          <ul className="space-y-0.5">
            {components.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/components/${c.slug}`}
                  className={cn(
                    "flex items-center justify-between rounded-md px-3 py-1.5 text-sm transition-colors",
                    pathname === `/components/${c.slug}`
                      ? "bg-neutral-800 font-medium text-white"
                      : "text-neutral-400 hover:bg-neutral-900 hover:text-neutral-200",
                  )}
                >
                  <span>{c.name}</span>
                  {c.isNew && (
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
