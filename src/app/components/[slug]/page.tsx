import { notFound } from "next/navigation";
import { getComponent, getAllComponents } from "@/lib/registry";
import { ComponentPreview } from "@/components/docs/component-preview";
import { ComponentInstallation } from "@/components/docs/component-installation";
import { ComponentPropsTable } from "@/components/docs/component-props-table";
import type { Metadata } from "next";

interface PageProps {
  params: { slug: string };
}

// Tell Next.js all valid slugs at build time → static generation
export function generateStaticParams() {
  return getAllComponents().map((c) => ({ slug: c.slug }));
}

// Dynamic <title> and <meta description> per component
export function generateMetadata({ params }: PageProps): Metadata {
  const component = getComponent(params.slug);
  if (!component) return {};
  return {
    title: `${component.name} — AceUI`,
    description: component.description,
  };
}

export default function ComponentPage({ params }: PageProps) {
  const component = getComponent(params.slug);

  // If slug doesn't exist in registry → 404
  if (!component) notFound();

  return (
    <div className="mx-auto max-w-3xl space-y-10 px-4 py-12">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">
          {component.name}
        </h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          {component.description}
        </p>
      </div>

      {/* Live Preview */}
      <section>
        <h2 className="mb-4 text-sm font-medium tracking-widest text-neutral-500 uppercase">
          Preview
        </h2>
        <ComponentPreview demo={component.demo} />
      </section>

      {/* Installation */}
      <section>
        <h2 className="mb-4 text-sm font-medium tracking-widest text-neutral-500 uppercase">
          Installation
        </h2>
        <ComponentInstallation
          registryUrl={component.registryUrl}
          dependencies={component.dependencies}
          sourceCode={component.sourceCode}
        />
      </section>

      {/* Props */}
      {component.props.length > 0 && (
        <section>
          <h2 className="mb-4 text-sm font-medium tracking-widest text-neutral-500 uppercase">
            Props
          </h2>
          <ComponentPropsTable props={component.props} />
        </section>
      )}
    </div>
  );
}
