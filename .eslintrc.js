module.exports = {
    root: true,
    env: {
        "vue/setup-compiler-macros": true,
        node: true
    },
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/typescript/recommended",
        "plugin:prettier/recommended"
        // "./.eslintrc-auto-import.json",
        // "./.eslintrc-components.json"
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        // "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
        // "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off"
    }
}
