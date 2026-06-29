import { CodeBlock } from "@/components/docs/code-block";

export default function CliPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-white">CLI</h1>
        <p className="mt-2 text-neutral-400">
          Install AceUI components with the shadcn CLI and registry.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Initialization</h2>
        <p className="text-neutral-400">
          Run this once in your project before adding components.
        </p>
        <CodeBlock code="npx shadcn@latest init" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Add a component</h2>
        <p className="text-neutral-400">
          Use the registry URL from any component's page.
        </p>
        <CodeBlock
          code={`npx shadcn@latest add "https://aceui.dev/r/ace-button.json"`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          Namespaced shortcut
        </h2>
        <p className="text-neutral-400">
          Add this to your{" "}
          <code className="text-neutral-300">components.json</code> for shorter
          install commands:
        </p>
        <CodeBlock
          code={`{
  "registries": {
    "@aceui": "https://aceui.dev/r/{name}.json"
  }
}`}
        />
        <CodeBlock code="npx shadcn@latest add @aceui/ace-button" />
      </section>
    </div>
  );
}
