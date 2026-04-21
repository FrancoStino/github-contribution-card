const path = require('path');
const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  // Production mode
  mode: 'production',
  // Keep the same entry point and target as the common config
  entry: {
    index: './api/main.ts',
  },
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  devtool: false,
  resolve: {
    extensions: ['.ts', '.js', '.html', '.css'],
    plugins: [new TsconfigPathsWebpackPlugin()],
    fallback: {
      util: require.resolve('util'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
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
        test: /\.(html|css|script)$/,
        include: /\/api\/demo\//,
        use: ['raw-loader'],
      },
    ],
  },
  performance: {
    hints: false,
  },
  ignoreWarnings: [/Failed to parse source map/],
};
