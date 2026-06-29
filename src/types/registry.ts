export interface ComponentMeta {
    name: string;
    description: string;
    slug: string;
    demo: React.ComponentType;
    sourceCode: string;
    registryUrl: string;
    dependencies: string[];
    props: ComponentProp[];
    cssVariables?: string;
}

export interface ComponentProp {
    name: string;
    type: string;
    default: string;
    description: string;
}