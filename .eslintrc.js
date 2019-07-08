module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: [
    "standard",
    "prettier",
    "prettier/flowtype",
    "prettier/react",
    "prettier/standard"
  ],
  plugins: ["react", "react-native", "flowtype", "prettier", "standard"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  rules: {}
};
