import * as esbuild from "esbuild";

await esbuild.build({
  entryPoints: ["src/cursors.tsx"],
  bundle: true,
  outdir: "public",
  format: "iife",
  minify: true,
  sourcemap: true,
  alias: {
    react: "@preact/compat",
    "react-dom": "@preact/compat",
  },
});
