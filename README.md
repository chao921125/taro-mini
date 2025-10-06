# [taro MiniAPP](https://docs.taro.zone/docs/)
###### 以下UI都集成进来了 [nutui 推荐](https://nutui.jd.com/#/) [taro-ui](https://taro-ui.jd.com/#/) [NutUI-Bingo 基于 NutUI 的抽奖组件库，助力营销活动和小游戏场景。](https://nutui.jd.com/bingo/index.html#/)
## 内部 vite 迭代版本依旧在 4.x，目前最新 vite 构建为 7.x，谨慎选择
## 新版本 scss 语法无法使用，依旧是内部版本的问题，这里大家做一个参考就行了
```shell
npx @tarojs/cli init myApp
```
https://transfonter.org/
```text
├── dist                        编译结果目录
|
├── config                      项目编译配置目录
|   ├── index.js                默认配置
|   ├── dev.js                  开发环境配置
|   └── prod.js                 生产环境配置
|
├── src                         源码目录
|   ├── pages                   页面文件目录
|   |   └── index               index 页面目录
|   |       ├── index.js        index 页面逻辑
|   |       ├── index.css       index 页面样式
|   |       └── index.config.js index 页面配置
|   |
|   ├── app.js                  项目入口文件
|   ├── app.css                 项目总通用样式
|   └── app.config.js           项目入口配置
|
├── project.config.json         微信小程序项目配置 project.config.json
├── project.tt.json             抖音小程序项目配置 project.tt.json
├── project.swan.json           百度小程序项目配置 project.swan.json
├── project.qq.json             QQ 小程序项目配置 project.qq.json
|
├── .babelrc.js             Babel 配置
├── tsconfig.json               TypeScript 配置
├── .eslintrc                   ESLint 配置
|
└── package.json
```
