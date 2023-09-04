// ESLint 检查 .vue 文件需要单独配置编辑器：
// https://eslint.vuejs.org/user-guide/#editor-integrations
module.exports = {
	root: true,
	env: {
		node: true,
		"vue/setup-compiler-macros": true,
	},
	extends: ["taro/vue3", "plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier", "@vue/typescript"],
	parserOptions: {
		parser: "@typescript-eslint/parser",
	},
	rules: {
		"prettier/prettier": [
			"error",
			{
				singleQuote: true,
				semi: false,
				trailingComma: "none",
				arrowParens: "avoid",
				printWidth: 100,
			},
		],
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
	},
};
