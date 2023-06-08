import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs"],
  external: ["path"],
  sourcemap: true,
  dts: true,
});
