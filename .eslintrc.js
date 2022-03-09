module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['typescript'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single']
  }
}