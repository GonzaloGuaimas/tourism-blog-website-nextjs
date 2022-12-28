module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react', '@typescript-eslint'
  ],
  rules: {
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.tsx'] }
    ],
    'react/react-in-jsx-scope': 'off',
    indent: [
      'off'
    ],
    'dot-notation': 0,
    quotes: [
      'error',
      'single'
    ],
    semi: [
      'error',
      'never'
    ]
  }
}
