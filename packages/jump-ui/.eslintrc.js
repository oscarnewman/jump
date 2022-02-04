module.exports = {
	extends: ['next', 'plugin:prettier/recommended'],
	settings: {
		next: {
			rootDir: ['apps/*/', 'packages/*/'],
		},
	},
	rules: {
		'@next/next/no-html-link-for-pages': 'off',
	},
}
