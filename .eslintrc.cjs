module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "quotes": ["error", "single"],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
    "eol-last": ["error", "always"],
    "semi": ["error", "never"],
    "no-console": "warn"
  },
}
