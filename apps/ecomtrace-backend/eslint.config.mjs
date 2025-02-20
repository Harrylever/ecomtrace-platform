import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ['**/*.{js,mjs,cjs,ts}'] },
	{ languageOptions: { globals: globals.browser } },
	...tseslint.configs.recommended,
	eslintPluginPrettierRecommended,

	{
		rules: {
			'prettier/prettier': 'error',
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/no-unused-vars': 'error',
			'no-unused-expressions': 'error',
			'no-var': 'error',
			'prefer-const': 'error',
			'no-console': 'warn',
			eqeqeq: 'error',
			'no-throw-literal': 'error',
			'no-unused-vars': 'error',
			'no-process-exit': 'error',
			'handle-callback-err': 'error',
		},
	},
];
