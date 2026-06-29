export default function Loading() {
  return (
    <div className="mx-auto max-w-3xl space-y-10 px-4 py-12">
      {/* Header skeleton */}
      <div className="space-y-2">
        <div className="h-8 w-48 animate-pulse rounded-lg bg-neutral-200 dark:bg-neutral-800" />
        <div className="h-4 w-80 animate-pulse rounded-lg bg-neutral-200 dark:bg-neutral-800" />
      </div>

      {/* Preview skeleton */}
      <div className="h-[400px] w-full animate-pulse rounded-xl bg-neutral-200 dark:bg-neutral-800" />

      {/* Code block skeleton */}
      <div className="h-24 w-full animate-pulse rounded-lg bg-neutral-200 dark:bg-neutral-800" />
    </div>
  );
}
