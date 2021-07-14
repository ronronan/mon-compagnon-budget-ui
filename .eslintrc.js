module.exports = {
  root: true,
  env: {
    // this section will be used to determine which APIs are available to us
    // (i.e are we running in a browser environment or a node.js env)
    node: true,
    browser: true
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
    // specifying a module sourcetype prevent eslint from marking import statements as errors
    sourceType: "module"
  },
  extends: [
    // use the recommended rule set for both plain javascript and vue
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/recommended"
  ],
  rules: {
    // we should always disable console logs and debugging in production
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/max-attributes-per-line": "off",
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error'
  }
};
