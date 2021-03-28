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
    'import/prefer-default-export': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": ["interface"],
        "format": ["PascalCase"],
        "custom": {
          "regex": "^I[A-Z]",
          "match": true
        }
      },
      {
        "selector": ["typeAlias"],
        "format": ["PascalCase"],
        "custom": {
          "regex": "[A-Z]*Type",
          "match": true
        }
      },
    ],
  },
  settings: {
    // eslint-disable-next-line global-require
    'svelte3/typescript': require('typescript'),
    "import/core-modules": ["svelte"]
  },
};
