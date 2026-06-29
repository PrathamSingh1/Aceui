import Link from "next/link";
import { getAllComponents } from "@/lib/registry";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const components = getAllComponents();

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="fixed top-0 left-0 h-screen w-64 overflow-y-auto border-r border-neutral-200 bg-white px-4 py-8 dark:border-neutral-800 dark:bg-neutral-950">
        <Link
          href="/"
          className="mb-8 block text-lg font-bold tracking-tight text-neutral-900 dark:text-white"
        >
          AceUI
        </Link>

        <nav className="space-y-1">
          <p className="mb-2 text-xs font-semibold tracking-widest text-neutral-400 uppercase">
            Components
          </p>
          {components.map((c) => (
            <Link
              key={c.slug}
              href={`/components/${c.slug}`}
              className="block rounded-md px-3 py-2 text-sm text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-white"
            >
              {c.name}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="ml-64 flex-1">{children}</main>
    </div>
  );
}
