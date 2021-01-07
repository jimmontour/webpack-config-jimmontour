const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: './src/vendor.js',
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ['html-loader'],
      },
      {
        test: /\.(svg|png|jpg|gif)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'imgs',
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'fonts',
          },
        },
      },
      {
        test: /\.(csv|tsv)$/i,
        use: {
          loader: 'csv-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'csv',
          },
        },
      },
      {
        test: /\.xml$/i,
        use: {
          loader: 'xml-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'xml',
          },
        },
      },
    ],
  },
};
