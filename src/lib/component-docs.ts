export interface ComponentDocData {
    dependencies: string;
    includeUtils?: boolean;
    usageCode: string;
    props: { prop: string; type: string; defaultValue: string; description: string }[];
}

export const COMPONENT_DOCS: Record<string, ComponentDocData> = {
    "ace-button": {
        dependencies: "npm install motion clsx tailwind-merge",
        includeUtils: true,
        usageCode: `import { AceButton } from "@/components/ui/ace-button"

export function Demo() {
  return <AceButton>Get Started</AceButton>
}`,
        props: [
            { prop: "children", type: "React.ReactNode", defaultValue: "'Click me'", description: "Content inside the button." },
            { prop: "className", type: "string", defaultValue: "''", description: "Additional Tailwind classes." },
        ],
    },
};