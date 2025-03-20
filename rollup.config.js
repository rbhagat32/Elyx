import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";

export default defineConfig({
  input: "src/index.ts",
  output: {
    dir: "dist",
    format: "esm",
    name: "elyx",
  },
  external: ["react", "react-dom", "motion", "motion/react", "react-icons/io"],
  plugins: [
    typescript({ tsconfig: "tsconfig.json" }),
    postcss({ modules: true }),
  ],
});
