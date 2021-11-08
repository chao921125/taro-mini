// ESLint 检查 .vue 文件需要单独配置编辑器：
// https://eslint.vuejs.org/user-guide/#editor-integrations
module.exports = {
  extends: ['taro/vue3'],
  parserOptions: {
    parser: "babel-eslint",
    sourceType: 'module',
    ecmaVersion: 6
  }
}
