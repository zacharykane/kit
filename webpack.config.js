const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = function(env) {
    const config = {
        entry: {
            main: './src/js/entry.js',
            vendor: ['lodash'],
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'public'),
        },
        devtool: 'eval',
        devServer: {
            contentBase: './public',
            host: '0.0.0.0',
            watchOptions: {
                poll: true,
            },
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                            },
                            {
                                loader: 'sass-loader',
                            },
                        ],
                    }),
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin(['public']),
            new ExtractTextPlugin({
                filename: '[name].[contenthash].css',
                disable: !!env.production,
            }),
            new HtmlWebpackPlugin({
                title: 'Development',
                template: './src/template.ejs',
            }),
            new webpack.HashedModuleIdsPlugin(),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'runtime',
            }),
        ],
    };

    if (env.production) {
        config.output.filename = '[name].[chunkhash].js';
        config.devtool = 'source-maps';
        config.plugins.push(
            new UglifyJSPlugin({
                sourceMap: true,
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production'),
                },
            }),
        );
    }

    return config;
};
