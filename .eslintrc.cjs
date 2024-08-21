module.exports = {
  extends: [
    '@codpoe',
    'plugin:storybook/recommended',
    'plugin:storybook/recommended',
  ],
  overrides: [
    {
      files: ['src/ui/**/*.tsx', 'src/ui/**/*.ts'],
      rules: {
        'react/no-unknown-property': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'prettier/prettier': 'off',
      },
    },
  ],
  rules: {
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
      },
    ],
  },
};
