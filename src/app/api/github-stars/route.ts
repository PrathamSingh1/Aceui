import { NextResponse } from "next/server";

export async function GET() {
    try {
        const res = await fetch(
            "https://api.github.com/repos/PrathamSingh1/aceui",
            {
                headers: {
                    // Optional: add your GitHub token to avoid rate limiting
                    // Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                    "Accept": "application/vnd.github.v3+json",
                },
                // Revalidate once per hour — no need to hit GitHub on every request
                next: { revalidate: 3600 },
            }
        );
        const data = await res.json();
        return NextResponse.json({ stars: data.stargazers_count });
    } catch {
        return NextResponse.json({ stars: 0 });
    }
}