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
            { name: "Ace Button", slug: "ace-button", description: "Animated border sweep button", componentName: "ace-button", isNew: true },
        ],
    },
];

export const COMPONENT_BY_SLUG = new Map(
    COMPONENT_CATEGORIES.flatMap((cat) => cat.items.map((item) => [item.slug, item] as const))
);