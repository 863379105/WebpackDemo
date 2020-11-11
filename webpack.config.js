const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    entry : {
       'index' : './src/js/index.js',
       'detail' : './src/js/detail.js'
    },

    output : {
        publicPath : '',
        path : path.resolve(__dirname,"dist/"),
        filename : "js/[name].js"
    },
    mode: 'development',
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
          title: "index",
          filename: "index.html",
          template: "./src/index.html",
          chunks : ['index']
        }),
        new HtmlWebpackPlugin({
            title: "detail",
            filename: "detail.html",
            template: "./src/detail.html",
            chunks : ['detail']
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use : [
                    { 
                        loader:MiniCssExtractPlugin.loader,
                        options : {
                            publicPath : '/dist/css'
                        }
                    },
                    {
                        loader : 'css-loader',
                        options : {
                            url : true,
                            import : true
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader : 'file-loader',
                    options : {
                        name : "[name].[ext]",
                        outputPath : '/images',
                        publicPath : '/dist/images'
                    }
                }
            }
        ]
    },
    devServer: {
        host : '127.0.0.1',
        // 生成的虚拟目录路径
        contentBase: "./dist",
        // 自动开启浏览器
        open: true,
        // 端口
        port: 8080
    }
}
/////暗号暗号：模块打包