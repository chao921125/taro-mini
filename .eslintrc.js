// ESLint 检查 .vue 文件需要单独配置编辑器：
// https://eslint.vuejs.org/user-guide/#editor-integrations
module.exports = {
	root: true,
	env: {
		node: true,
		"vue/setup-compiler-macros": true,
	},
	extends: ["taro/vue3", "plugin:vue/vue3-essential", "eslint:recommended"],
	parserOptions: {
		parser: "@typescript-eslint/parser",
	},
};
