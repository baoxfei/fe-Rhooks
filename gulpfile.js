const gulp = require('gulp');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const clean = require('del');
gulp.task('clean', async () => {
  await clean('dist/**');
  await clean('es/**');
  await clean('lib/**');
});

// 生成es版本
gulp.task('es', () => {
  const tsResult = ts.createProject('tsconfig.pro.json', {
    module: 'ESNext',
  });

  return tsResult.src().pipe(tsResult()).pipe(babel()).pipe(gulp.dest('es/'));
});

// 生成cjs版本
gulp.task('lib', () => {
  return gulp
    .src('./es/**/*.js')
    .pipe(
      babel({
        configFile: '../../.babelrc',
      })
    )
    .pipe(gulp.dest('lib/'));
});

// 生成 declaration
gulp.task('declaration', () => {
  const tsResult = ts.createProject('tsconfig.pro.json', {
    declaration: true,
    emitDeclarationOnly: true,
  });
  return tsResult.src().pipe(tsResult()).pipe(gulp.dest('lib/'));
});

// copy readme
gulp.task('copyReadme', () => {
  return gulp.src('../../README.md').pipe(gulp.dest('./', { overwrite: true }));
});

exports.default = gulp.series(
  'clean',
  'es',
  'lib',
  'declaration',
  'copyReadme'
);
