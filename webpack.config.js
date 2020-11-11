const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {

    entry : {
       'index' : './src/js/index.js',
       'detail' : './src/js/detail.js'
    },

    plugins: [
        new HtmlWebpackPlugin({
          title: "index",
          filename: "index.html",
          template: "./src/index.html",
        }),
        new HtmlWebpackPlugin({
            title: "detail",
            filename: "detail.html",
            template: "./src/detail.html",
        }),
        new CleanWebpackPlugin()
    ],

    output : {
        path : path.resolve(__dirname,"dist/"),
        filename : "[name].js"
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use : [
                    'style-loader',
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
                        publicPath : '../dist/images'
                    }
                }
            }
        ]
    }
}
/////暗号暗号：模块打包