import { defineConfig, type UserConfigExport } from "@tarojs/cli";
import * as path from "path";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import Components from "unplugin-vue-components/webpack";
import NutUIResolver from "@nutui/nutui-taro/dist/resolver";
import devConfig from "./dev";
import prodConfig from "./prod";
import * as process from "process";

// https://taro-docs.jd.com/docs/next/config#defineconfig-辅助函数
export default defineConfig(async (merge, { command, mode }) => {
	console.log(command, mode, process.env.TARO_APP_NAME);
	const baseConfig: UserConfigExport = {
		// 项目名称
		projectName: "CC NET",
		// 项目创建日期
		date: "2020-12-21",
		// 设计稿尺寸
		designWidth(input) {
			// @ts-ignore
			if (input?.file?.replace(/\\+/g, "/").indexOf("@nutui") > -1) {
				return 375;
			}
			return 750;
		},
		// 设计稿尺寸换算规则
		deviceRatio: {
			640: 2.34 / 2,
			750: 1,
			828: 1.81 / 2,
			375: 2,
		},
		// 项目源码目录
		sourceRoot: "src",
		// 项目产出目录
		outputRoot: `dist/${process.env.TARO_ENV}`,
		// Taro 插件配置
		plugins: ["@tarojs/plugin-sass", "@tarojs/plugin-html", "@tarojs/plugin-http"],
		// 全局变量设置
		defineConstants: {},
		// 别名
		alias: {
			"@": path.resolve(__dirname, "..", "src"),
			"@/components": path.resolve(__dirname, "..", "src/components"),
		},
		// 文件 copy 配置
		copy: {
			patterns: [
				{
					from: "src/assets/fonts/",
					to: "dist/assets/fonts/",
					ignore: ["*.js"],
				},
			],
			options: {},
		},
		// 框架，react，nerv，vue, vue3 等
		framework: "vue3",
		compiler: {
			type: "webpack5",
			prebundle: { enable: false },
		},
		sass: {
			// data: `@import "@nutui/nutui-taro/dist/styles/variables.scss";`,
			resource: ["src/assets/styles/mixins.scss"],
			projectDirectory: path.resolve(__dirname, ".."),
		},
		cache: {
			enable: true, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
		},
		logger: {
			quiet: false,
			stats: false,
		},
		// 小程序端专用配置
		mini: {
			postcss: {
				pxtransform: {
					enable: true,
					config: {
						onePxTransform: true,
						unitPrecision: 5,
						propList: ["*"],
						selectorBlackList: ["nut-"],
						replace: true,
						mediaQuery: false,
						minPixelValue: 0,
						baseFontSize: 20,
						maxRootSize: 40,
						minRootSize: 20,
					},
				},
				url: {
					enable: true,
					config: {
						limit: 10240, // 设定转换尺寸上限
					},
				},
				cssModules: {
					enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
					config: {
						namingPattern: "module", // 转换模式，取值为 global/module
						generateScopedName: "[name]__[local]___[hash:base64:5]",
					},
				},
			},
			webpackChain(chain) {
				chain.plugin("unplugin-vue-components").use(
					Components({
						resolvers: [NutUIResolver({ taro: true })],
					}),
				);
				chain.resolve.plugin("tsconfig-paths").use(TsconfigPathsPlugin);
				chain.merge({
					module: {
						rule: {
							mjsScript: {
								test: /\.mjs$/,
								include: [/pinia/],
								use: {
									babelLoader: {
										loader: require.resolve("babel-loader"),
									},
								},
							},
						},
					},
				});
			},
		},
		// H5 端专用配置
		h5: {
			publicPath: "/",
			staticDirectory: "static",
			output: {
				filename: "js/[name].[hash:8].js",
				chunkFilename: "js/[name].[chunkhash:8].js",
			},
			miniCssExtractPluginOption: {
				ignoreOrder: true,
				filename: "css/[name].[hash].css",
				chunkFilename: "css/[name].[chunkhash].css",
			},
			esnextModules: ["nutui-taro", "icons-vue-taro", "taro-ui"],
			postcss: {
				pxtransform: {
					enable: true,
					config: {
						onePxTransform: true,
						unitPrecision: 5,
						propList: ["*"],
						selectorBlackList: ["nut-"],
						replace: true,
						mediaQuery: false,
						minPixelValue: 0,
						baseFontSize: 20,
						maxRootSize: 40,
						minRootSize: 20,
					},
				},
				autoprefixer: {
					enable: true,
					config: {},
				},
				url: {
					enable: true,
					config: {
						limit: 10240, // 设定转换尺寸上限
					},
				},
				cssModules: {
					enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
					config: {
						namingPattern: "module", // 转换模式，取值为 global/module
						generateScopedName: "[name]__[local]___[hash:base64:5]",
					},
				},
			},
			webpackChain(chain) {
				chain.plugin("unplugin-vue-components").use(
					Components({
						resolvers: [NutUIResolver({ taro: true })],
					}),
				);
				chain.resolve.plugin("tsconfig-paths").use(TsconfigPathsPlugin);
				chain.merge({
					module: {
						rule: {
							mjsScript: {
								test: /\.mjs$/,
								include: [/pinia/],
								use: {
									babelLoader: {
										loader: require.resolve("babel-loader"),
									},
								},
							},
						},
					},
				});
			},
		},
		rn: {
			appName: "taroDemo",
			postcss: {
				cssModules: {
					enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
				},
			},
		},
	};
	if (process.env.NODE_ENV === "development") {
		// 本地开发构建配置（不混淆压缩）
		return merge({}, baseConfig, devConfig);
	}
	// 生产构建配置（默认开启压缩混淆等）
	return merge({}, baseConfig, prodConfig);
});
