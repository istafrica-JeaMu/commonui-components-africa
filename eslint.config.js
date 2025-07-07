// eslint.config.js
import eslint from "@eslint/js";
import tsEslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import vueTsEslintConfig from "@vue/eslint-config-typescript";

export default [
  {
    ignores: ["!documentation/.vitepress"],
  },
  eslint.configs["recommended"],
  {
    files: ["lib/**/*.{ts,tsx,vue}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
  },
  // typescript
  ...vueTsEslintConfig(),
  {
    files: ["lib/**/*.{ts,tsx,vue}"],
    languageOptions: {
      parser: tsEslint.parser,
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "no-console": ["warn", { allow: ["warn", "error", "info"] }],
      "vue/define-emits-declaration": ["error", "type-based"],
      "vue/block-order": [
        "error",
        {
          order: [["script", "template"], "style"],
        },
      ],
      "vue/max-attributes-per-line": "off",
    },
  },
  ...pluginVue.configs["flat/recommended"],
  {
    files: ["lib/**/*.vue"],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsEslint.parser, // parse TS inside VUE
      },
    },
    rules: {
      "vue/multi-word-component-names": ["error", {
        "ignores": ["Button"]
      }],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "require-await": "error",
      "vue/define-emits-declaration": ["error", "type-based"],
      "vue/block-order": [
        "error",
        {
          order: [["script", "template"], "style"],
        },
      ],
      "vue/define-macros-order": [
        "error",
        {
          order: [
            "defineOptions",
            "defineProps",
            "defineModel",
            "defineCustom",
            "defineSlots",
            "defineEmits",
          ],
        },
      ],
      // let prettier control formatting
      "vue/html-closing-bracket-newline": "off",
      "vue/html-indent": "off",
      "vue/html-self-closing": "off",
      "vue/max-attributes-per-line": "off",
      "vue/singleline-html-element-content-newline": "off",
    },

    settings: {
      tailwindcss: {
        whitelist: [
          "cui\\-modal\\-icon\\-slot",
          "cui\\-progress\\-bar",
          "cui\\-tooltip\\-arrow\\-top",
          "cui\\-tooltip\\-arrow\\-right",
          "cui\\-tooltip\\-arrow\\-bottom",
          "cui\\-tooltip\\-arrow\\-left",
          "bg-",
          "text-",
          "success-",
          "danger-",
          "-100",
          "-600",
          "-700",
          "-800",
        ],
      },
    },
  },
]; 