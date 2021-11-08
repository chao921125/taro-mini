// process.env.TARO_ENV
export default {
  // 页面路径列表
  pages: [
    'pages/index/index'
  ],
  debug: process.env.TARO_ENV === 'development',
  // 小程序端特有属性 分包结构配置
  subPackages: {},
  // 全局的默认窗口表现
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  // 底部 tab 栏的表现
  tabBar: {}
}
