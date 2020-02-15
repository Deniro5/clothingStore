module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    window: true,
    document: true,
    localStorage: true,
    FormData: true,
    FileReader: true,
    Blob: true,
    navigator: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react', 'prettier'
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/forbid-prop-types": 0,
    "linebreak-style": 0,
    "no-use-before-define": ["error", { "variables": false }],
    "react/prefer-stateless-function": [0, {
      "ignorePureComponents": true
    }],
    "react/require-default-props": 0
  },
};
