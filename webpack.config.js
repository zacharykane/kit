var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = [
  {
    entry: './src/js/entry.js',
    output: {
      filename: 'bundle.js',
      path: __dirname + '/dist/assets',
      publicPath: '/assets/'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          loaders: [
            'style-loader',
            'css-loader?sourceMap!sass-loader?sourceMap'
          ]
        }
      ]
    }
  },
  {
    entry: './src/sass/main.scss',
    output: {
      filename: 'main.css',
      path: __dirname + '/dist/assets',
      publicPath: '/assets/'
    },
    module: {
      loaders: [
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!sass-loader?sourceMap')
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin('main.css')
    ]
  }
];
