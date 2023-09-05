/// <reference types="@tarojs/taro" />
/// <reference types="@taro-hooks/plugin-vue" />
import "@taro-hooks/plugin-vue";

declare module "*.png";
declare module "*.gif";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.css";
declare module "*.less";
declare module "*.scss";
declare module "*.sass";
declare module "*.styl";

// eslint-disable-next-line no-unused-vars
declare namespace NodeJS {
	// eslint-disable-next-line no-unused-vars
	interface ProcessEnv {
		TARO_ENV: "weapp" | "swan" | "alipay" | "h5" | "rn" | "tt" | "quickapp" | "qq" | "jd";
	}
}

// @ts-ignore
// eslint-disable-next-line no-unused-vars
declare const process: {
	env: {
		TARO_ENV: "weapp" | "swan" | "alipay" | "h5" | "rn" | "tt" | "quickapp" | "qq";
		[key: string]: any;
	};
};

declare module "@tarojs/components" {
	export * from "@tarojs/components/types/index.vue3";
}
