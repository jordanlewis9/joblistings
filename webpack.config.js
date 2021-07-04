const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path')

module.exports = {
    mode: 'development',
    devtool: "eval-cheap-source-map",
    entry: './src/index.js',
    output: {
        filename: 'myBundle.[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: ""
    },
    devServer: {
        port: 3000,
        contentBase: path.resolve(__dirname, 'dist'),
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.svg/,
                type: 'asset/inline'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['@babel/preset-env', {
                            "useBuiltIns": 'usage',
                            "corejs": 3,
                            "targets": "defaults"
                        }], "@babel/preset-react"]
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html'
        })
    ]

}