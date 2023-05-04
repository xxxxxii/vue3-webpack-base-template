const { defineConfig } = require("@vue/cli-service")

module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: process.env.NODE_ENV === "production" ? "" : "/",
    outputDir: process.env.VUE_APP_BUILD_DIR,
    assetsDir: "static",

    lintOnSave: false,
    pages: {
        index: {
            entry: "src/main.ts", // page 的入口
            template: "public/index.html", // 模板来源
            filename: "index.html", // 在 dist/index.html 的输出
            title: process.env.VUE_APP_GLOB_APP_TITLE, // 标签需要<title><%= htmlWebpackPlugin.options.title %></title>
            chunks: ["chunk-vendors", "chunk-common", "index"]
        }
    },

    devServer: {
        host: "localhost", // ip 本地
        // disableHostCheck: true, //是否关闭用于 DNS 重绑定的 HTTP 请求的 HOST 检查
        // hotOnly: true, // 热更新
        https: false, // https:{type:Boolean}配置前缀
        open: false, //配置自动启动浏览器
        proxy: {
            //目的是解决跨域，若测试环境不需要跨域，则不需要进行该配置
            "/api": {
                // 拦截以 /api 开头的url接口
                target: "https://blogyl.xyz/", //目标接口域名
                changeOrigin: true, //是否跨域
                ws: true, //如果要代理 websockets，配置这个参数
                secure: false, // 如果是https接口，需要配置这个参数
                // 标识替换
                // 原请求地址为 /api/getData 将'/api'替换''时，
                // 代理后的请求地址为： http://xxx.xxx.xxx/getData
                // 若替换为'/other',则代理后的请求地址为 http://xxx.xxx.xxx/other/getData
                pathRewrite: {
                    // 标识替换
                    "^/api": "/" //重写接口 后台接口指向不统一  所以指向所有/
                    // "^/api": "/api/mock"
                }
            }
        }
    },
    css: {
        // css相关配置
        // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中，生产环境下是 true，开发环境下是 false
        extract: process.env.NODE_ENV === "production",
        // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能。
        sourceMap: false,
        // 启用 CSS modules for all css / pre-processor files.(预加载)
        // requireModuleExtension: true,
        loaderOptions: {
            sass: {
                // data: `@import "@/assets/css/variables.scss";`
            }
        }
    }
})
