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
});
