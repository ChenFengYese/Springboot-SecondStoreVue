// webpack.config.js
const path = require('path')
const VueLoaderPlugin = require('@vue/cli-service/node_modules/vue-loader/lib/plugin')

module.exports = {
    mode: 'development',
    resolve: {
        // 自动补全的扩展名
        extensions: ['.js', '.vue', '.json', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            // 它会应用到普通的 `.js` 文件
            // 以及 `.vue` 文件中的 `<script>` 块
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            // 它会应用到普通的 `.css` 文件
            // 以及 `.vue` 文件中的 `<style>` 块
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        // 请确保引入这个插件来施展魔法
        new VueLoaderPlugin()
    ]
}