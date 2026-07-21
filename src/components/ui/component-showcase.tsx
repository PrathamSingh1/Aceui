import fs from "fs";
import path from "path";
import { ComponentDocsSections } from "@/components/docs/component-docs-sections";
import { ComponentPreviewPanel } from "@/components/docs/component-preview-panel";
import { getShadcnAddCommand } from "@/lib/registry";

function readComponentSource(componentName: string): string {
  try {
    const p = path.join(
      process.cwd(),
      "src",
      "components",
      "ui",
      `${componentName}.tsx`,
    );
    if (fs.existsSync(p)) return fs.readFileSync(p, "utf8");
  } catch {}
  return `// Source not found for ${componentName}`;
}

export function ComponentShowcase({
  componentName,
  slug,
  title,
  description,
  children,
}: {
  componentName: string;
  slug: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  const sourceCode = readComponentSource(componentName);
  const installCommand = getShadcnAddCommand(componentName);

  return (
    <div className="w-full space-y-4">
      <div id="overview" className="scroll-mt-24">
        <p className="mb-2 text-sm">
          <span className="dark:text-neutral-400">Components / </span>
          {title}
        </p>
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-200 dark:text-shadow-md">
          {title}
        </h1>
        <p className="text-md mt-2 text-neutral-500 dark:text-neutral-400">
          {description}
        </p>
      </div>

      <ComponentPreviewPanel
        installCommand={installCommand}
        sourceCode={sourceCode}
        componentName={componentName}
        slug={slug}
      >
        {children}
      </ComponentPreviewPanel>

      <ComponentDocsSections
        componentName={componentName}
        slug={slug}
        sourceCode={sourceCode}
      />
    </div>
  );
}
