/* eslint-env node */
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        bundle: './src/js/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'public', 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use: ['babel-loader'],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin([
            path.resolve(__dirname, 'public', 'dist'),
            path.resolve(__dirname, 'public', 'index.html'),
        ]),
        new webpack.HashedModuleIdsPlugin(),
    ],
};
