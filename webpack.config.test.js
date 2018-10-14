/* eslint-env node */
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.config.common.js');

module.exports = merge(common, {
    mode: 'none',
    entry: {
        bundle: './src/js/index.test.js',
    },
    output: {
        filename: 'test.js',
    },
    node: {
        fs: 'empty',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader', options: { sourceMap: true } },
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
        new HtmlWebpackPlugin({
            title: 'Output Management | Testing',
            template: './src/template.ejs',
            filename: 'test.html',
        }),
    ],
});
