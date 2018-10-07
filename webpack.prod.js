/* eslint-env node */
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        filename: '[name].[contenthash].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true, importLoaders: 1 },
                    },
                    {
                        loader: 'postcss-loader',
                        options: { ident: 'postcss', sourceMap: true },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'theme.[id].[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './src/template.ejs',
            filename: path.resolve(__dirname, 'public', 'index.html'),
        }),
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/].*\.js$/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },
});
