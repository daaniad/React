module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"standard",
		"eslint-config-prettier",
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		// 'react/react-in-jsx-scope': 'off'
		// 'no-unused-vars': 'warn'
	},
};
