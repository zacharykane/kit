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
        host: '0.0.0.0',
        port: 3000
    },
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
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
        new HtmlWebpackPlugin({
            title: 'Output Management | Development',
            template: './src/template.ejs'
        })
    ]
});
