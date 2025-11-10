// @ts-check

import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import ts from "typescript-eslint";

export default defineConfig([
  globalIgnores([".next/", "out/", "build/", "next-env.d.ts"]),
  js.configs.recommended,
  ts.configs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
]);
