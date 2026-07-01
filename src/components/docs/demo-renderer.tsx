"use client";

import dynamic from "next/dynamic";

const LOADING = () => (
  <div className="flex h-full items-center justify-center">
    <div className="h-5 w-5 animate-spin rounded-full border-2 border-neutral-700 border-t-transparent" />
  </div>
);

const DEMO_COMPONENTS: Record<string, React.ComponentType> = {
  "ace-button": dynamic(
    () =>
      import("@/components/docs/ace-button-demo").then((m) => ({
        default: m.AceButtonDemo,
      })),
    { ssr: false, loading: LOADING },
  ),
};

export function DemoRenderer({ slug }: { slug: string }) {
  const Demo = DEMO_COMPONENTS[slug];
  if (!Demo)
    return <div className="text-sm text-neutral-500">Preview unavailable.</div>;
  return <Demo />;
}
