import { defineConfig } from "vite-plus";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {
    // CLAUDE.md is a symlink to AGENTS.md; Git for Windows checks it out as a
    // plain text file holding the link target, which the formatter would flag.
    ignorePatterns: ["apps/website/src/routeTree.gen.ts", ".wrangler/**", "CLAUDE.md"],
  },
  lint: {
    ignorePatterns: ["apps/website/src/routeTree.gen.ts", ".wrangler/**"],
    options: { typeAware: true, typeCheck: true },
  },
  test: {
    projects: ["apps/*", "packages/*"],
  },
});
