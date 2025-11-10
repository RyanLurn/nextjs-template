// @ts-check

import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";

export default defineConfig([
  globalIgnores([".next/", "out/", "build/", "next-env.d.ts"]),
  js.configs.recommended,
]);
