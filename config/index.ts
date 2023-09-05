import { defineConfig, type UserConfigExport } from "@tarojs/cli";
import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import Components from "unplugin-vue-components/webpack";
import NutUIResolver from "@nutui/nutui-taro/dist/resolver";
import devConfig from "./dev";
import prodConfig from "./prod";

// https://taro-docs.jd.com/docs/next/config#defineconfig-辅助函数
export default defineConfig(async (merge, { command, mode }) => {
	const baseConfig: UserConfigExport = {
		projectName: process.env.TARO_APP_NAME,
		date: "2020-12-21",
		designWidth(input) {
			// @ts-ignore
			if (input?.file?.replace(/\\+/g, "/").indexOf("@nutui") > -1) {
				return 375;
			}
			return 750;
		},
		deviceRatio: {
			640: 2.34 / 2,
			750: 1,
			828: 1.81 / 2,
			375: 2,
		},
		sourceRoot: "src",
		outputRoot: "dist",
		plugins: ["@tarojs/plugin-html", "@tarojs/plugin-http"],
		defineConstants: {},
		copy: {
			patterns: [],
			options: {},
		},
		framework: "vue3",
		compiler: {
			type: "webpack5",
			prebundle: { enable: false },
		},
		sass: {
			data: `@import "@nutui/nutui-taro/dist/styles/variables.scss";`,
		},
		cache: {
			enable: true, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
		},
		mini: {
			postcss: {
				pxtransform: {
					enable: true,
					config: {
						// selectorBlackList: ['nut-']
					},
				},
				url: {
					enable: true,
					config: {
						limit: 1024, // 设定转换尺寸上限
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
			esnextModules: ["nutui-taro", "icons-vue-taro"],
			postcss: {
				autoprefixer: {
					enable: true,
					config: {},
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
