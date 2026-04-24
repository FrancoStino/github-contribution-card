const path = require('path');
const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  target: 'node',
  stats: {
    builtAt: true,
    errorDetails: true,
    errorStack: true,
  },
  mode: 'development',
  entry: {
    index: './api/main.ts',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [new TsconfigPathsWebpackPlugin()],
    fallback: {
      util: require.resolve('util'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.(css|html)$/,
        type: 'asset/source',
      },
    ],
  },
  plugins: [],
  performance: {
    hints: false,
  },
  ignoreWarnings: [/Failed to parse source map/],
};
