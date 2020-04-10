module.exports = {
	semi: false,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'es5',
	useTabs: false,
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
