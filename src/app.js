import { createApp } from "vue";
import { createPinia } from "pinia";
import NutBig from "@nutui/nutui-bingo";
import Taro from "@tarojs/taro";

// 组件
import "@nutui/nutui-bingo/dist/style.css";
import "./assets/styles/index.scss";

const App = createApp({
	// 可以使用所有的 Vue 生命周期方法
	mounted() {},
	// 对应 onLaunch
	onLaunch(options) {
		console.log("onLaunch = ", options, process.env.TARO_APP_API);
	},
	// 对应 onShow
	onShow(options) {
		Taro.pxTransform(10);
		console.log("onShow = ", options);
	},
	// 对应 onHide
	onHide() {},
	// 对应 onError
	onError() {},
	// 对应 onPageNotFound
	onPageNotFound(options) {
		console.log("onPageNotFound = ", options);
	},
	// 对应 onUnhandledRejection
	onUnhandledRejection(options) {
		console.log("onUnhandledRejection = ", options);
	},
	// 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

Taro.loadFontFace({
	family: "SF-Pro-Rounded-Bold",
	source: 'url("/src/assets/fonts/SF-Pro-Rounded-Bold.ttf")',
	success: console.log,
});
Taro.loadFontFace({
	family: "SF-Pro-Rounded-Regular",
	source: 'url("/src/assets/fonts/SF-Pro-Rounded-Regular.ttf")',
	success: console.log,
});

App.use(NutBig);
App.use(createPinia());

export default App;
