// src/components/layout/toc.tsx
// "ON THIS PAGE" right sidebar — only visible on component pages (xl screens)

export function TableOfContents() {
  return (
    <div className="mt-4 hidden xl:block">
      <div className="sticky top-20 space-y-2">
        <p className="text-xs font-semibold tracking-widest text-neutral-400 uppercase">
          On this page
        </p>
        <ul className="space-y-1.5 text-sm">
          {["Overview", "Preview", "Installation", "Usage", "Props"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="ml-4 block text-neutral-500 transition-colors hover:text-neutral-300"
                >
                  {item}
                </a>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  );
}
