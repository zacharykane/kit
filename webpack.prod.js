var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    {
        devtool: 'source-map',
        entry: {
            bundle: './src/js/entry.js'
        },
        output: {
            filename: '[name].[chunkhash].js',
            path: path.resolve(__dirname, 'public', 'dist'),
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
                    use: ExtractTextPlugin.extract({
                        use: [
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
                    })
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false
            }),
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: true,
                beautify: false,
                mangle: {
                    screw_ie8: true,
                    keep_fnames: true
                },
                compress: {
                    screw_ie8: true
                },
                comments: false
            }),
            new ExtractTextPlugin({
                filename: 'theme.[contenthash].css'
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: function (module) {
                    // this assumes your vendor imports exist in the node_modules directory
                    return module.context && module.context.indexOf('node_modules') !== -1;
                }
            }),
            //CommonChunksPlugin will now extract all the common modules from vendor and main bundles
            new webpack.optimize.CommonsChunkPlugin({
                name: 'manifest' //But since there are no more common modules between them we end up with just the runtime code included in the manifest file
            }),
            new HtmlWebpackPlugin({
                filename: path.resolve(__dirname, 'public', 'index.html'),
                template: path.resolve(__dirname, 'src', 'index.ejs')
            })
        ]
    }
];
