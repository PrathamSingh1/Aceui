import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Install Next.js — AceUI",
  description: "Create a Next.js project configured for AceUI components.",
};

export default function InstallNextjsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-white">Install Next.js</h1>
        <p className="mt-2 text-neutral-400">
          Install Next.js with Create Next App
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          Create a new project
        </h2>
        <CodeBlock code="npx create-next-app@latest my-app" />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          On installation, you'll see the following prompts
        </h2>
        <CodeBlock
          code={`What is your project named? my-app
Would you like to use TypeScript? Yes
Would you like to use ESLint? Yes
Would you like to use Tailwind CSS? Yes
Would you like your code inside a src/ directory? Yes
Would you like to use App Router? Yes
Would you like to customize the import alias? Yes (@/*)`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">Start the app</h2>
        <CodeBlock code={`cd my-app\nnpm run dev`} />
      </section>
    </div>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4">
      <pre className="overflow-x-auto font-mono text-sm whitespace-pre text-neutral-200">
        {code.split("\n").map((line, i) => (
          <div key={i} className="flex gap-4">
            <span className="w-4 shrink-0 text-right text-neutral-600 select-none">
              {i + 1}
            </span>
            <span>{line}</span>
          </div>
        ))}
      </pre>
    </div>
  );
}
