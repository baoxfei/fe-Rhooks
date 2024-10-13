const commonConfig = require('../../gulpfile');
const gulp = require('gulp');
const gm = require('gray-matter');
const fg = require('fast-glob');
const fse = require('fs-extra');
const fs = require('fs');

async function genDesc(path) {
  if (!fs.existsSync(path)) {
    return;
  }
  const file = fs.readFileSync(path, { encoding: 'utf-8' });
  const { content } = gm(file);
  let description =
    (content
      .replace(/\r\n/g, '\n')
      .match(/# \w+[\s\n]+(.+?)(?:, |\. |\n|\.\n)/m) || [])[1] || '';

  description = description.trim();
  description = description.charAt(0).toLowerCase() + description.slice(1);
  return description;
}

async function generateMataData() {
  //
  const metadata = {
    functions: [],
  };
  const hooks = fg
    .sync('src/use*', { onlyDirectories: true })
    .map((hook) => hook.replace('src/', ''))
    .sort();
  await Promise.allSettled(
    hooks.map(async (hook) => {
      const desc = await genDesc(`src/${hook}/index.md`);
      return {
        hook,
        desc,
      };
    })
  ).then((hooks) => {
    metadata.functions = hooks.map((hook) => {
      if (hook.status === 'fulfilled') {
        return hook.value;
      } else {
        return null;
      }
    });
  });
  return metadata;
}

gulp.task('metaData', async () => {
  const metaData = await generateMataData();
  fse.writeJSON('metadata.json', metaData, { spaces: 2 });
});

exports.default = gulp.series(commonConfig.default, 'metaData');
