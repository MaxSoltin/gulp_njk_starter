import dartSass from 'sass'
import gulpSass from 'gulp-sass'
const sass = gulpSass(dartSass)

import gcmq from 'gulp-group-css-media-queries'
import csso from 'gulp-csso'
import autoprefixer from 'gulp-autoprefixer'

export const scss = () => {
	return app.gulp.src(app.path.src.scss)
	.pipe(sass().on('error', sass.logError))
	.pipe(app.plugins.replace(/@img\//g, '../images/'))
	.pipe(gcmq())
	.pipe(autoprefixer({ overrideBrowserslist: ['last 15 versions'], grid: true }))
	.pipe(app.gulp.dest(app.path.build.css))
	.pipe(csso())
	.pipe(app.plugins.rename({ suffix: '.min' }))
	.pipe(app.gulp.dest(app.path.build.css))
	.pipe(app.plugins.browserSync.stream())
}
