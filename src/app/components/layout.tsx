import { Sidebar } from "@/components/layout/sidebar";
import { TableOfContents } from "@/components/layout/toc";

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full flex-1 items-start px-4 md:grid md:grid-cols-[220px_24px_minmax(0,1fr)] md:gap-6 md:px-8 lg:grid-cols-[240px_24px_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[240px_24px_minmax(0,1fr)_200px]">
      {/* Sidebar */}
      <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto py-6 pr-4 md:sticky md:block">
        <Sidebar />
      </aside>

      {/* Divider */}
      <div className="relative hidden h-[calc(100vh-3.5rem)] w-full opacity-60 md:sticky md:top-14 md:block">
        {/* Light mode */}
        <div
          className="absolute inset-0 border-r border-l border-neutral-200 dark:hidden"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, rgba(0,0,0,0.06), rgba(0,0,0,0.06) 1px, transparent 1px, transparent 6px)",
            backgroundSize: "16px 16px",
          }}
        />

        {/* Dark mode */}
        <div
          className="absolute inset-0 hidden border-r border-l border-white/10 dark:block"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.1) 1px, transparent 1px, transparent 6px)",
            backgroundSize: "16px 16px",
          }}
        />
      </div>

      {/* Main content */}
      <main className="relative py-3 pr-2 md:pr-4 md:pl-8 lg:py-4 lg:pl-12 xl:pl-20">
        <div className="w-full min-w-0 [&>div]:max-w-6xl">{children}</div>
      </main>

      {/* Right Sidebar */}
      <TableOfContents />
    </div>
  );
}
