import { type ComponentMeta } from "@/types/registry";

// Import every demo wrapper
import AceButtonDemo from "@/components/docs/ace-button-demo";

// Import source code as strings
// (explained in Step 6 how to handle this)
import aceButtonSource from "@/components/ui/ace-button.tsx?raw";

export const registry: Record<string, ComponentMeta> = {
    "ace-button": {
        name: "Ace Button",
        description: "A button with a shiny animated border and text reveal effect.",
        slug: "ace-button",
        demo: AceButtonDemo,
        sourceCode: aceButtonSource,
        registryUrl: "https://aceui.dev/r/ace-button.json",
        dependencies: ["framer-motion", "clsx", "tailwind-merge"],
        props: [
            {
                name: "children",
                type: "React.ReactNode",
                default: "'Click me'",
                description: "Content inside the button.",
            },
            {
                name: "className",
                type: "string",
                default: "''",
                description: "Additional Tailwind classes.",
            },
        ],
    },

};

// Helper — get a component or return null
export function getComponent(slug: string): ComponentMeta | null {
    return registry[slug] ?? null;
}

// Helper — get all components as an array (for the overview page)
export function getAllComponents(): ComponentMeta[] {
    return Object.values(registry);
}