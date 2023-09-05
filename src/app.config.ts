export default defineAppConfig({
	pages: ["pages/index/index"],
	subPackages: [
		{
			root: "pages/user",
			pages: ["list"],
		},
		{
			root: "pages/order",
			pages: ["list"],
		},
	],
	// 建议tabbar自定义，因为其默认的会闪烁 TODO
	// 创建一个tabbar页面，然后其余的页面为组件形式提供，如果需要特殊的跳转，那么就传入参数即可
	// tabBar: {
	//   // tab 上的文字默认颜色，仅支持十六进制颜色
	//   // color: "",
	//   // tab 上的文字选中时的颜色，仅支持十六进制颜色
	//   // selectedColor: "",
	//   // tab 的背景色，仅支持十六进制颜色
	//   // backgroundColor: "",
	//   // tabbar 上边框的颜色， 仅支持 black / white
	//   borderStyle: "black",
	//   // tab 的列表，详见 list 属性说明，最少 2 个、最多 5 个 tab
	//   list: [
	//     {
	//       // 页面路径，必须在 pages 中先定义
	//       pagePath: "pages/tab-bar/index",
	//       // tab 上按钮文字
	//       text: "首页",
	//       // 图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。
	//       // 当 position 为 top 时，不显示 icon。
	//       // iconPath: "",
	//       // 选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。
	//       // 当 position 为 top 时，不显示 icon。
	//       // selectedIconPath: "",
	//     },
	//   ],
	//   // tabBar 的位置，仅支持 bottom / top
	//   position: "bottom",
	//   // 自定义 tabBar
	//   custom: false,
	// },
	// 非开发环境请关闭掉
	debug: false,
	window: {
		backgroundTextStyle: "light",
		navigationBarBackgroundColor: "#fff",
		navigationBarTitleText: "WeChat",
		navigationBarTextStyle: "black",
	},
	networkTimeout: {
		request: 60000,
		connectSocket: 60000,
		uploadFile: 60000,
		downloadFile: 60000,
	},
	permission: {
		"scope.userLocation": {
			desc: "你的位置信息将用于小程序位置接口的效果展示",
		},
		"scope.werun": {
			desc: "你的运动信息将用于小程序位置接口的效果展示",
		},
	},
	// 后台定位
	requiredBackgroundModes: ["audio", "location"],
});
