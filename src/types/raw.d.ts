// Tells TypeScript: importing a file with ?raw gives you a string
declare module "*?raw" {
    const content: string;
    export default content;
}