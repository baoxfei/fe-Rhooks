const path = require('path');
const merge = require('webpack-merge');
const common = require('../../webpack.common');
module.exports = merge(common, {
  entry: './es/index.js',
  output: {
    filename: 'feRhooks.js',
    library: 'feRhooks',
    path: path.resolve(__dirname, './dist'),
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      // todo 非要完整的路径 单单./es/index.js不行
      encodeHooks: path.resolve(__dirname, './es/index.js'),
    },
  },
});
