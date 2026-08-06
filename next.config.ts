import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site into `out/` so GitHub Pages can serve it.
  output: "export",

  // Pages has no image optimization server.
  images: { unoptimized: true },

  // Don't auto-generate AGENTS.md / CLAUDE.md in the repo.
  agentRules: false,
};

export default nextConfig;
