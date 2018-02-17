const webpack = require('webpack');
const path = require('path');
const HWP = require('html-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
  entry: {
    filename: './src/main.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        /* query: {
          presets: [
            ['es2015', { modules: false }],
          ],
        }, */
      },
    ],
  },
  plugins: [
    new HWP('index.html'),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) },
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    open: true,
  },
};
