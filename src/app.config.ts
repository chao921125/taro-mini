export default {
	pages: ["pages/tab-bar/index", "pages/tab-bar/me"],
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
	tabBar: {
		// tab 上的文字默认颜色，仅支持十六进制颜色
		// color: "",
		// tab 上的文字选中时的颜色，仅支持十六进制颜色
		// selectedColor: "",
		// tab 的背景色，仅支持十六进制颜色
		// backgroundColor: "",
		// tabbar 上边框的颜色， 仅支持 black / white
		borderStyle: "black",
		// tab 的列表，详见 list 属性说明，最少 2 个、最多 5 个 tab
		list: [
			{
				// 页面路径，必须在 pages 中先定义
				pagePath: "pages/tab-bar/index",
				// tab 上按钮文字
				text: "首页",
				// 图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。
				// 当 position 为 top 时，不显示 icon。
				// iconPath: "",
				// 选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。
				// 当 position 为 top 时，不显示 icon。
				// selectedIconPath: "",
			},
			{
				// 页面路径，必须在 pages 中先定义
				pagePath: "pages/tab-bar/me",
				// tab 上按钮文字
				text: "我",
				// 图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。
				// 当 position 为 top 时，不显示 icon。
				// iconPath: "",
				// 选中时的图片路径，icon 大小限制为 40kb，建议尺寸为 81px * 81px，不支持网络图片。
				// 当 position 为 top 时，不显示 icon。
				// selectedIconPath: "",
			},
		],
		// tabBar 的位置，仅支持 bottom / top
		position: "bottom",
		// 自定义 tabBar
		custom: false,
	},
	window: {
		// 导航栏背景颜色
		navigationBarBackgroundColor: "#fdfdfd",
		// 导航栏标题颜色，仅支持 black / white
		navigationBarTextStyle: "black",
		// 导航栏标题文字内容
		navigationBarTitleText: "CC APP",
		// 导航栏样式，仅支持以下值：default 默认样式；custom 自定义导航栏，只保留右上角胶囊按钮
		navigationStyle: "default",
		// 窗口的背景色
		backgroundColor: "#fdfdfd",
		// 下拉 loading 的样式，仅支持 dark / light
		backgroundTextStyle: "light",
		// 是否开启当前页面的下拉刷新
		enablePullDownRefresh: true,
		// 页面上拉触底事件触发时距页面底部距离，单位为 px
		onReachBottomDistance: 50,
		// 屏幕旋转设置，支持 auto / portrait / landscape 详见 响应显示区域变化
		pageOrientation: "portrait",
	},
};
