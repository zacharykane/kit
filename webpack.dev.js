var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    {
        devtool: 'inline-source-map',
        entry: {
            bundle: './src/js/entry.js'
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'public', 'dist'),
            publicPath: '/dist/'
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
                    }
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }
            ]
        },
        devServer: {
            publicPath: '/dist/',
            contentBase: path.join(__dirname, 'dev-server'),
            host: '0.0.0.0',
            watchOptions: {
                poll: 1000
            }
        }
    }
];
