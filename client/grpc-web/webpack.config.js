const path = require('path');

const LIB_BASE_CONFIG = {
  entry: "./src/index.ts",
  mode: "production",
  module: {
    rules: [{
      test: /\.ts?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
};
const DIST_DIR = path.resolve(__dirname, 'dist');

module.exports = [{
    name: 'lib-commonjs',
    ...LIB_BASE_CONFIG,
    target: 'es5',
    output: {
      filename: `grpc-web-client.js`,
      path: DIST_DIR,
      libraryTarget: 'commonjs',
      chunkFormat: 'commonjs',
      globalObject: 'this',
    }
  },
  {
    name: 'lib-esm',
    ...LIB_BASE_CONFIG,
    experiments: {
      outputModule: true
    },
    target: 'es5',
    output: {
      filename: `grpc-web-client.mjs`,
      path: DIST_DIR,
      libraryTarget: 'module',
      chunkFormat: 'module',
      module: true,
      globalObject: 'this',
    }
  },
  {
    name: 'lib-umd',
    ...LIB_BASE_CONFIG,
    target: 'es5',
    output: {
      filename: `grpc-web-client.umd.js`,
      path: DIST_DIR,
      libraryTarget: 'umd',
      chunkFormat: 'array-push',
      globalObject: 'this',
    }
  },
];
