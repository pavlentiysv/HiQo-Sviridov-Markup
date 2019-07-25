module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [],
  rules: {
    indent: ['error', 2],
    'wrap-iife': [2, 'any'],
    'linebreak-style': ['error', 'windows'],
    'comma-dangle': ['error', 'never']
  }
};
