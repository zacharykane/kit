/* eslint-env node */
const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const common = require('./webpack.config.common.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        filename: '[name].[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true, importLoaders: 1 }
                    },
                    {
                        loader: 'postcss-loader',
                        options: { ident: 'postcss', sourceMap: true }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'theme.[contenthash].css',
            chunkFilename: 'theme.[id][contenthash].css'
        }),
        new HtmlWebpackPlugin({
            title: 'Output Management | Production',
            template: './src/template.ejs',
            filename: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    optimization: {
        runtimeChunk: 'single',
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    map: { inline: false }
                }
            })
        ],
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/].*\.js$/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
});
