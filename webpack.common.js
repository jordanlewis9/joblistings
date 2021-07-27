const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path')

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.svg/,
                type: 'asset/resource'
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
    }
}