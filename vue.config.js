const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    productionSourceMap: false,
    devServer: {
        open: true
    },
    configureWebpack: config => {
        // 判断是否是生产环境
        if(process.env.NODE_ENV === 'production'){
            return {
                plugins: [
                    // 正则 js html css文件
                    // 第二个表示超过10kb的进行压缩
                    // 是否删除源文件
                    new CompressionPlugin({
                        test: /\.js$|\.html$|\.css$/,
                        threshold: 10240,
                        deleteOriginalAssets: true
                    })
                ]
            }
        }
    }
}

// nginx 高性能http和反向代理的服务器 经常用于分布式