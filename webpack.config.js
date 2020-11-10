module.exports = {
    entry : {
       'index' : './src/index.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader : 'file-loader',
                    options : {
                        name : "[name].[ext]"
                    }
                }
            }
        ]
    }
}