const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

// ?: style-loader: css-loader 가 Converts한 스타일을 html에 넣어줌
// ?: css-loader: Converts CSS into JavaScript

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
    ]
  },
  entry: {
    main: './js/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './pages/page1.html',
      filename: 'page1.html',
    }),
    new HtmlWebpackPlugin({
      template: './pages/payment.html',
      filename: 'payment.html',
    }),
    new MiniCssExtractPlugin({ filename: "[name].css" }), // Generates styles.css
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'common/icons', // Source folder
          to: 'images/', // Destination folder in dist
        },
      ],
    }),
  ],
};

