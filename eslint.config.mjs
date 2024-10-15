import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
    {
        files: ["**/*.{js,mjs,cjs,jsx}"],
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        ...pluginJs.configs.recommended,
        rules: {
            "react/prop-types": "off",
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
            "react/prop-types": "off",
        },
    },
];
