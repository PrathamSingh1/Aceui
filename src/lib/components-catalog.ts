export interface ComponentItem {
    name: string;
    slug: string;
    description: string;
    componentName: string;
    isNew?: boolean;
}

export interface ComponentCategory {
    name: string;
    items: ComponentItem[];
}

export const COMPONENT_CATEGORIES: ComponentCategory[] = [
    {
        name: "Buttons",
        items: [
            { name: "Glass Premium Button", slug: "glass-premium-button", description: "Glossy gradient button with soft glow and gradient", componentName: "glass-premium-button", isNew: true },
            { name: "Shadow Button", slug: "shadow-button", description: "Shadow button with inner shadow and box shadow", componentName: "shadow-button", isNew: true },
            { name: "Blue Tonned Button", slug: "blue-tonned-button", description: "Blue Gradient button with layerd shadow", componentName: "blue-tonned-button", isNew: true },
        ],
    },
];

export const COMPONENT_BY_SLUG = new Map(
    COMPONENT_CATEGORIES.flatMap((cat) => cat.items.map((item) => [item.slug, item] as const))
);