import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import globals from "globals";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    ignores: [
      ".next/**",
      ".wrangler/**",
      "out/**",
      "node_modules/**",
      "public/ffmpeg/**",
      "next-env.d.ts",
      "playwright-report/**",
      "test-results/**"
    ]
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: { ecmaVersion: 2022, sourceType: "module" }
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
      ],
      "no-empty": ["error", { allowEmptyCatch: true }]
    }
  },
  {
    files: ["public/sw.js"],
    languageOptions: { globals: globals.serviceworker }
  },
  {
    files: ["scripts/**/*.{ts,mjs}", "tests/**/*.ts", "*.mjs"],
    languageOptions: { globals: globals.node },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "no-console": "off"
    }
  }
);
