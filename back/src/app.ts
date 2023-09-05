import { createApp } from "vue";
import { createPinia } from "pinia";

import "./assets/styles/index.scss";

if (process.env.TARO_ENV === "h5") {
	if ("serviceWorker" in navigator) {
		window.addEventListener("load", () => {
			navigator.serviceWorker
				.register("/service-worker.js")
				.then((registration) => {
					console.log("SW registered: ", registration);
				})
				.catch((registrationError) => {
					console.log("SW registration failed: ", registrationError);
				});
		});
	}
}

const App = createApp({
	// 可以使用所有的 Vue 生命周期方法
	mounted() {},
	// 对应 onLaunch
	onLaunch(options) {
		console.log("onLaunch = ", options, process.env.TARO_APP_API);
	},
	// 对应 onShow
	onShow(options) {
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

App.use(createPinia());

export default App;
