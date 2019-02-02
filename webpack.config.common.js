/* eslint-env node */
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        bundle: './src/js/index.jsx',
    },
    output: {
        path: path.resolve(__dirname, 'public', 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
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
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
