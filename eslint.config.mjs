import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import prettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
    {
        files: ["**/*.{jsx}"],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
            },
        },
        plugins: {
            prettier: prettierPlugin,
        },
        ...pluginJs.configs.recommended,
        rules: {
            "no-unused-vars": "error",
            "react/jsx-uses-vars": "error",
            "react/jsx-no-undef": "error",
            "prettier/prettier": [
                "error",
                {
                    endOfLine: "auto",
                    printWidth: 80,
                },
            ],
            "react/jsx-max-props-per-line": [
                "error",
                {
                    maximum: 1,
                    when: "multiline",
                },
            ],
        },
    },
    {
        files: ["**/*.jsx", "**/*.js"],
        ...pluginReact.configs.flat.recommended,
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            "react/jsx-uses-react": "off",
            indent: ["error", 2],
        },
    },
    {
        files: ["**/*.{js,mjs,cjs,jsx}"],
        rules: {
            ...prettier.rules,
        },
    },
];
