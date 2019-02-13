/* eslint-env node */
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.config.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },
    output: {
        filename: '[name].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management | Development',
            template: './src/template.ejs',
        }),
    ],
});
