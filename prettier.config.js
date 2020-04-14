module.exports = {
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  svelteSortOrder: 'styles-scripts-markup',
  svelteStrictMode: true,
  svelteBracketNewLine: true,
  svelteAllowShorthand: true,
  overrides: [
    {
      files: '*.md',
      options: {
        printWidth: 80,
        useTabs: false,
        trailingComma: 'none',
        proseWrap: 'never',
      },
    },
  ],
}
