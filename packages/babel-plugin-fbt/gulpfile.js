/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const del = require('del');
const gulp = require('gulp');
const babel = require('gulp-babel');
const gulpOnce = require('gulp-once');
const rename = require('gulp-rename');
const path = require('path');

const paths = {
  src: {
    js: ['src/**/*.tsx', '!dist/**', '!gulpfile.js', '!node_modules/**'],
    json: ['src/**/*.json', '!dist/**', '!node_modules/**'],
  },
  dist: 'dist',
};

const checksumFile = '.checksums';
const once = () => gulpOnce({ file: path.join(__dirname, checksumFile) });

const src = (glob, opts) =>
  gulp.src(glob, {
    cwd: __dirname,
    ...opts,
  });

const dest = (glob, opts) =>
  gulp.dest(glob, {
    cwd: __dirname,
    ...opts,
  });

const babelPluginFbt_buildDistJS = () =>
  src(paths.src.js, {
    follow: true,
  })
    .pipe(once())
    .pipe(
      babel({
        presets: [
          require('@babel/preset-env'),
          require('@babel/preset-typescript'),
        ],
      })
    )
    .pipe(dest(paths.dist));

const babelPluginFbt_copyJsonToDist = () =>
  src(paths.src.json, { follow: true }).pipe(once()).pipe(dest(paths.dist));

gulp.task(
  'build',
  gulp.parallel(babelPluginFbt_buildDistJS, babelPluginFbt_copyJsonToDist)
);

const babelPluginFbt_clean = () =>
  del(
    [path.join(__dirname, checksumFile), path.join(__dirname, paths.dist, '*')],
    { force: true }
  );
gulp.task('clean', gulp.series(babelPluginFbt_clean));

gulp.task('default', gulp.series('build'));

module.exports = {
  build: gulp.task('build'),
  clean: gulp.task('clean'),
};
