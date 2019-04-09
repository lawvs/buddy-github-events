// https://eslint.org/
module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // semi: ['error', 'never'],
    // 'comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 'off',
    'linebreak-style': ['error', 'unix'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-undef': 'error',
    'no-var': 'error',
    'no-unused-vars': ['error', { args: 'none' }],
    'unicode-bom': 'error',
    'prefer-const': ['error', { destructuring: 'all' }],
    'prettier/prettier': 'warn',
  },
  settings: {
    react: {
      // https://github.com/yannickcr/eslint-plugin-react#configuration
      version: require('react').version,
    },
  },
}
