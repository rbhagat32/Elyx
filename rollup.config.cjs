// import { defineConfig } from "rollup";
// import typescript from "@rollup/plugin-typescript";
// import postcss from "rollup-plugin-postcss";

// export default defineConfig({
//   input: "src/index.ts",
//   output: {
//     dir: "dist",
//     format: "esm",
//     name: "elyx",
//   },
//   external: ["react", "react-dom", "motion", "motion/react", "react-icons/io"],
//   plugins: [
//     typescript({ tsconfig: "tsconfig.json" }),
//     postcss({ modules: true }),
//   ],
// });
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import terser from "@rollup/plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      typescript(),
      peerDepsExternal(),
      resolve(),
      commonjs(),
      postcss({
        config: {
          path: "./postcss.config.js",
        },
        extensions: [".css"],
        minimize: true,
        inject: {
          insertAt: "top",
        },
      }),
      terser(),
    ],
  },
  {
    input: "dist/cjs/types/src/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts.default()],
    external: [/\.css$/],
  },
];
