export type PackageManager = "npm" | "pnpm" | "bun" | "yarn";

export const REGISTRY_BASE_URL = "https://aceui.dev/r";

export const PACKAGE_MANAGER_EXECUTORS: Record<PackageManager, string> = {
    npm: "npx",
    pnpm: "pnpm dlx",
    bun: "bunx",
    yarn: "yarn dlx",
};

export function getRegistryItemUrl(componentName: string): string {
    return `${REGISTRY_BASE_URL}/${componentName}.json`;
}

export function getShadcnAddCommand(
    componentName: string,
    packageManager: PackageManager = "npm"
): string {
    return `${PACKAGE_MANAGER_EXECUTORS[packageManager]} shadcn@latest add ${getRegistryItemUrl(componentName)}`;
}