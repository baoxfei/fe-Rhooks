const commonConfig = require('../../gulpfile');
const gule = require('gulp');
console.log(commonConfig, 'commonConfig');
exports.default = gule.series(commonConfig.default);
