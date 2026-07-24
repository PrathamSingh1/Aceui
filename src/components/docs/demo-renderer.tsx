"use client";

import dynamic from "next/dynamic";

const LOADING = () => (
  <div className="flex h-full items-center justify-center">
    <div className="h-5 w-5 animate-spin rounded-full border-2 border-neutral-700 border-t-transparent" />
  </div>
);

const DEMO_COMPONENTS: Record<string, React.ComponentType> = {
  "glass-premium-button": dynamic(
    () =>
      import("@/components/docs/glass-premium-button-demo").then((m) => ({
        default: m.GlassPremiumButtonDemo,
      })),
    { ssr: false, loading: LOADING },
  ),
  "shadow-button": dynamic(
    () =>
      import("@/components/docs/shadow-button-demo").then((m) => ({
        default: m.ShadowButtonDemo,
      })),
    { ssr: false, loading: LOADING },
  ),
  "blue-tonned-button": dynamic(
    () =>
      import("@/components/docs/blue-tonned-button-demo").then((m) => ({
        default: m.BlueTonnedButtonDemo,
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
