/*
 * SPDX-License-Identifier: GPL-3.0
 * Vesktop, a desktop app aiming to give you a snappier Discord Experience
 * Copyright (c) 2023 Vendicated and Vencord contributors
 */

//@ts-check

import stylistic from "@stylistic/eslint-plugin";
import pathAlias from "eslint-plugin-path-alias";
import importSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";

export default tseslint.config(
    { ignores: ["dist"] },

    {
        extends: [],
        files: ["src/**/*.{tsx,ts,mts,mjs,js,jsx}"],
        plugins: {
            "@stylistic": stylistic,
            importSort,
            unusedImports,
            pathAlias,
            prettier
        },
        settings: {
            "import/resolver": {
                alias: {
                    map: [
                        ["@lib", "./lib"],
                        ["@utils", "./src/utils"],
                        ["@api", "./src/api"],
                        ["@components", "./src/components"]
                    ]
                }
            }
        },
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: true,
                tsconfigRootDir: import.meta.dirname
            }
        },
        rules: {
            // ESLint Rules

            yoda: "error",
            eqeqeq: ["error", "always", { null: "ignore" }],
            "prefer-destructuring": [
                "error",
                {
                    VariableDeclarator: { array: false, object: true },
                    AssignmentExpression: { array: false, object: false }
                }
            ],
            "operator-assignment": ["error", "always"],
            "no-useless-computed-key": "error",
            "no-unneeded-ternary": ["error", { defaultAssignment: false }],
            "no-invalid-regexp": "error",
            "no-constant-condition": ["error", { checkLoops: false }],
            "no-duplicate-imports": "error",
            "dot-notation": "error",
            "no-fallthrough": "error",
            "for-direction": "error",
            "no-async-promise-executor": "error",
            "no-cond-assign": "error",
            "no-dupe-else-if": "error",
            "no-duplicate-case": "error",
            "no-irregular-whitespace": "error",
            "no-loss-of-precision": "error",
            "no-misleading-character-class": "error",
            "no-prototype-builtins": "error",
            "no-regex-spaces": "error",
            "no-shadow-restricted-names": "error",
            "no-unexpected-multiline": "error",
            "no-unsafe-optional-chaining": "error",
            "no-useless-backreference": "error",
            "use-isnan": "error",
            "prefer-const": "error",
            "prefer-spread": "error",

            // Styling Rules
            "@stylistic/spaced-comment": ["error", "always", { markers: ["!"] }],
            "@stylistic/no-extra-semi": "error",
            "@stylistic/jsx-quotes": ["error", "prefer-double"],
            "@stylistic/quotes": ["error", "double", { avoidEscape: true }],
            "@stylistic/no-mixed-spaces-and-tabs": "error",
            "@stylistic/arrow-parens": ["error", "as-needed"],
            "@stylistic/eol-last": ["error", "always"],
            "@stylistic/no-multi-spaces": "error",
            "@stylistic/no-trailing-spaces": "error",
            "@stylistic/no-whitespace-before-property": "error",
            "@stylistic/semi": ["error", "always"],
            "@stylistic/semi-style": ["error", "last"],
            "@stylistic/space-in-parens": ["error", "never"],
            "@stylistic/block-spacing": ["error", "always"],
            "@stylistic/object-curly-spacing": ["error", "always"],
            "@stylistic/func-call-spacing": ["error", "never"],

            // Plugin Rules
            "importSort/imports": "error",
            "importSort/exports": "error",
            "unusedImports/no-unused-imports": "error",
            "pathAlias/no-relative": "error",
            "prettier/prettier": [
                "error",
                {
                    endOfLine: "auto"
                }
            ]
        }
    }
);
