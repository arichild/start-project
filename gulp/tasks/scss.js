import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import bulk from 'gulp-sass-bulk-importer';
import prefixer from 'gulp-autoprefixer';
import clean from 'gulp-clean-css';
import concat from 'gulp-concat';
import map from 'gulp-sourcemaps';

const sass = gulpSass(dartSass);

export const scss = () => {
  return app.gulp.src(app.path.src.scss)
    .pipe(map.init())
		.pipe(bulk())
		.pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
		.pipe(prefixer())
		.pipe(clean())
		.pipe(concat('style.css'))
		.pipe(map.write('../sourcemaps/'))
    .pipe(app.gulp.dest(app.path.build.css))
}