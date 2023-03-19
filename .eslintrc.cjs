module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
  plugins: [],
  rules: {
    "no-restricted-syntax": [
      "error",
      {
        selector: "CallExpression[callee.name='require'][arguments.length!=0]",
        message: "Using 'require' with await is not allowed.",
      },
    ],
    "max-len": "off",
    "no-console": "off",
    "require-await": "off",
    "prettier/prettier": [
      "error",
      {
        printWidth: 420,
        vueIndentScriptAndStyle: false,
      },
    ],
  },
};
