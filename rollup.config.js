import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "esm",
    name: "elyx",
  },
  external: ["react", "react-dom", "motion/react"],
  plugins: [typescript({ tsconfig: "tsconfig.json" })],
});
