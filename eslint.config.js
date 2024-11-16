export default [
    {
        files: ["**/*.ts"],

        languageOptions: {
            globals: {
                ...globals.node,
            },

            parser: tsParser,
            ecmaVersion: 6,
            sourceType: "module",
        },

        rules: {
            curly: "warn",
            "prefer-const": "warn",
            "no-extra-semi": "warn",
            "no-var": "warn",

            quotes: ["warn", "single", {
                allowTemplateLiterals: true,
            }],

            indent: ["warn", 4],
            semi: ["error", "never"],
            eqeqeq: "error",
        },
    }
];
