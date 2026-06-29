import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    // Allow ?raw imports — imports the file contents as a string
    config.module.rules.push({
      resourceQuery: /raw/,
      type: "asset/source",
    });
    return config;
  },
};

export default nextConfig;