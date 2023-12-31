module.exports = {
  root: true,

  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    project: './tsconfig.json', // assuming you have a tsconfig.json at the root of your project
  },

  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended', // React specific linting rules
    'plugin:react-hooks/recommended', // React hooks specific linting rules
    'plugin:@next/next/recommended', // Next.js specific linting rules
    'prettier', // Make sure this is always the last configuration in the extends array.
  ],

  plugins: [
    '@typescript-eslint',
    'react', // React plugin
    'react-hooks', // React hooks plugin
  ],

  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
  },

  globals: {
    process: 'readonly',
  },

  rules: {
    'prefer-promise-reject-errors': 'off',
    quotes: ['warn', 'single', { avoidEscape: true }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'react/react-in-jsx-scope': 'off', // Not needed for Next.js
    'react/prop-types': 'off', // If you are using TypeScript, you can disable prop-types as you will be using TS types instead.
  },
};
