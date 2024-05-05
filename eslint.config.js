import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        HTMLElement: 'readonly',
        IntersectionObserver: 'readonly',
        getComputedStyle: 'readonly',
        window: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        document: 'readonly',
        process: 'readonly',
        console: 'readonly',
        Buffer: 'readonly'
      }
    },
    rules: {
      'import/extensions': 'off',
      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': 'off',
      'no-shadow': 'off',
      'no-unused-vars': 'off',
      'no-undef': 'warn',
      'quotes': ['error', 'single'],
    },
  },
];