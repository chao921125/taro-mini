const path = require("path");

const config = {
  projectName: 'mini-taro',
  date: '2021-10-10',
  // 设计稿尺寸
  designWidth: 750, // 750(1)、 640(2.34 / 2,)、 828(1.81 / 2,)、 375(2 / 1,)
  // 设计稿尺寸换算规则
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  // Taro 插件配置
  plugins: [],
  // 全局变量设置 // JSON.stringify('')
  defineConstants: {
  },
  alias: {
    '@/': path.resolve(__dirname, '..', 'src'),
  },
  // 文件 copy 配置
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  // 框架，react，nerv，vue, vue3 等
  framework: 'vue3',
  sass: {
    resource: [
      path.resolve(__dirname, '..', 'src/styles/variable.scss'),
    ]
  },
  // 小程序端专用配置
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ['body']
        }
      },
      // 小程序端样式引用本地资源内联配置
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    },
    // 自定义 Webpack 配置
    webpackChain (chain, webpack) {}
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      pxtransform: {
        enable: true,
        config: {
          selectorBlackList: ['body']
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
