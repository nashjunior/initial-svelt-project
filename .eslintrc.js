module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'prettier',

  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'svelte3',
    '@typescript-eslint',
  ],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3',
    },
  ],
  rules: {
    'import/no-mutable-exports': 'off',
    'import/prefer-default-export': 'off'
  },
  settings: {
    // eslint-disable-next-line global-require
    'svelte3/typescript': require('typescript'),
    "import/core-modules": ["svelte"]
  },
};
