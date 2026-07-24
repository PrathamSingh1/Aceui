export interface ComponentDocData {
    dependencies: string;
    includeUtils?: boolean;
    usageCode: string;
    props: { prop: string; type: string; defaultValue: string; description: string }[];
}

export const COMPONENT_DOCS: Record<string, ComponentDocData> = {
    "glass-premium-button": {
        dependencies: "npm install clsx tailwind-merge",
        includeUtils: true,
        usageCode: `import { GlassPremiumButton } from "@/components/ui/glass-premium-button"

export function Demo() {
  return <GlassPremiumButton>Get Started</GlassPremiumButton>
}`,
        props: [
            { prop: "children", type: "React.ReactNode", defaultValue: "'Click me'", description: "Content inside the button." },
            { prop: "className", type: "string", defaultValue: "''", description: "Additional Tailwind classes." },
        ],
    },
};