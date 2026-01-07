module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'jest',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
  ],
  env: {
    node: true,
    es6: true,
    'jest/globals': true,
  },
  rules: {
    // Add any specific rules here
  },
  overrides: [
    {
      files: ['client/**/*.ts', 'client/**/*.tsx'],
      plugins: [
        'react',
        'react-hooks',
        'jsx-a11y',
      ],
      extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
      ],
      settings: {
        react: {
          version: 'detect',
        },
      },
      rules: {
        // Add any client-specific rules here
      },
    },
  ],
};
