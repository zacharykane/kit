/*eslint-env node*/
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = function(env) {
    const config = {
        entry: {
            main: [
                './node_modules/regenerator-runtime/runtime.js',
                './src/js/entry.js',
            ],
            vendor: ['moment'],
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
                    enforce: 'pre',
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'eslint-loader',
                    options: {
                        failOnError: true,
                    },
                },
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
                filename: '[name].css',
                disable: true,
            }),
            new HtmlWebpackPlugin({
                title: 'Development | Kit',
                template: './src/template.ejs',
            }),
            new webpack.NamedModulesPlugin(),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: function(module) {
                    return (
                        module.context &&
                        module.context.indexOf('node_modules') !== -1
                    );
                },
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'runtime',
                minChunks: Infinity,
            }),
        ],
    };

    if (env.testing) {
        config.entry = {
            'browser-testing': [
                './node_modules/regenerator-runtime/runtime.js',
                './src/js/entry.test.js',
            ],
        };
        config.node = {
            fs: 'empty',
        };
        config.plugins = [
            new CleanWebpackPlugin(['public']),
            new ExtractTextPlugin({
                filename: '[name].css',
                disable: true,
            }),
            new HtmlWebpackPlugin({
                title: 'Testing | Kit',
                template: './src/template.ejs',
            }),
        ];
    }

    if (env.production) {
        config.output.filename = '[name].[chunkhash].js';
        config.devtool = 'source-maps';
        config.plugins = [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production'),
                },
            }),
            new CleanWebpackPlugin(['public']),
            new ExtractTextPlugin({
                filename: '[name].[contenthash].css',
                disable: false,
            }),
            new HtmlWebpackPlugin({
                title: 'Kit',
                template: './src/template.ejs',
            }),
            new webpack.HashedModuleIdsPlugin(),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: function(module) {
                    return (
                        module.context &&
                        module.context.indexOf('node_modules') !== -1
                    );
                },
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'runtime',
                minChunks: Infinity,
            }),
            new UglifyJSPlugin({
                sourceMap: true,
            }),
        ];
    }

    return config;
};
