// @ts-check

import { globalIgnores, defineConfig } from "eslint/config";
import { configs as tsConfigs } from "typescript-eslint";
import perfectionist from "eslint-plugin-perfectionist";
import prettier from "eslint-config-prettier/flat";
import { importX } from "eslint-plugin-import-x";
import unicorn from "eslint-plugin-unicorn";
import js from "@eslint/js";

export default defineConfig([
  globalIgnores([".next/", "out/", "build/", "next-env.d.ts"]),
  js.configs.recommended,
  tsConfigs.recommendedTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
  perfectionist.configs["recommended-line-length"],
  {
    plugins: {
      // @ts-expect-error ignore type incompatibility
      "import-x": importX,
    },
    extends: ["import-x/flat/recommended", "import-x/flat/typescript"],
  },
  unicorn.configs.recommended,
  prettier,
]);
