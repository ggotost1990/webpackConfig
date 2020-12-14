/** @type {import('webpack').Configuration} */
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
export default {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new CopyWebpackPlugin({
            patterns: ['public']
        })
    ],
    devServer: {
        contentBase: path.join(__dirnamem, 'dist'),
        compress: true,
        port: 9000
    }

};
