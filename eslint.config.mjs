// @ts-check

import { globalIgnores, defineConfig } from "eslint/config";
import perfectionist from "eslint-plugin-perfectionist";
import ts from "typescript-eslint";
import js from "@eslint/js";

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
  perfectionist.configs["recommended-line-length"],
]);
