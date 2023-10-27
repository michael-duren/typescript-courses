module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // rules that use type information require this
  ],
  overrides: [
    // describe local parts of project where rules may apply differently
    {
      files: ['tests/**/*.ts'],
      env: { node: true, jest: true },
    },
    {
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
      },
      env: {
        node: true, // lets us acccess node globals
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: true, //
    tsConfigRootDir: __dirname, // help eslint find tsconfig
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {},
}
