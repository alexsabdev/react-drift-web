const path = require('path');
const merge = require('webpack-merge');

const commonConfig = {
  entry: './src/index.ts',
  output: {
    path: path.resolve('dist'),
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  externals: {
    'react': 'React',
  },
};

module.exports = [
  merge(commonConfig, {
    mode: 'production',
    output: {
      filename: 'react-drift-web.min.js',
    },
  }),
  merge(commonConfig, {
    mode: 'development',
    output: {
      filename: 'react-drift-web.js',
    },
  }),
];
