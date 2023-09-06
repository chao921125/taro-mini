/**
 * navigationBarBackgroundColor	HexColor（十六进制颜色值）	#000000	导航栏背景颜色，如 #000000
 * navigationBarTextStyle	String	white	导航栏标题颜色，仅支持 black / white
 * navigationBarTitleText	String		导航栏标题文字内容
 * navigationStyle	String	default	导航栏样式，仅支持以下值：default 默认样式；custom 自定义导航栏，只保留右上角胶囊按钮
 * transparentTitle	String	none	导航栏透明设置。支持 always 一直透明 / auto 滑动自适应 / none 不透明
 * backgroundColor	String		窗口的背景色
 * backgroundTextStyle	String	dark	下拉 loading 的样式，仅支持 dark / light
 * backgroundColorTop	String	#ffffff	顶部窗口的背景色，仅 iOS 支持
 * backgroundColorBottom	String	#ffffff	底部窗口的背景色，仅 iOS 支持
 * enablePullDownRefresh	boolean	false	是否开启当前页面的下拉刷新。
 * onReachBottomDistance	Number	50	页面上拉触底事件触发时距页面底部距离，单位为 px
 * pageOrientation	String	portrait	屏幕旋转设置，支持 auto / portrait / landscape 详见 响应显示区域变化
 * disableScroll	Boolean	false	设置为 true 则页面整体不能上下滚动。
 * 只在页面配置中有效，无法在 app.json 中设置
 * disableSwipeBack	Boolean	false	禁止页面右滑手势返回
 * enableShareAppMessage	Boolean	false	是否启用分享给好友。
 * enableShareTimeline	Boolean	false	是否启用分享到朋友圈。
 * usingComponents	Object	否	页面自定义组件配置
 * renderer	String	webview	渲染后端
 */
export default definePageConfig({
	navigationBarTitleText: "首页",
});
