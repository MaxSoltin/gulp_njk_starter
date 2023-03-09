//const fileswatch = 'njk,txt,json,md,woff2'

import gulp from 'gulp'
import { path } from './gulp/config/path.js'
import { plugins } from './gulp/config/plugins.js'
import * as clean from './gulp/tasks/clean.js'
import { copy } from './gulp/tasks/copy.js'
import { nunjucks } from './gulp/tasks/nunjucks.js'
import { server } from './gulp/tasks/server.js'
import { scss } from './gulp/tasks/styles.js'
import { scripts, copyCommon } from './gulp/tasks/scripts.js'
import { images, svgo } from './gulp/tasks/images.js'
import { fonts } from './gulp/tasks/fonts.js'
import { zipy } from './gulp/tasks/zip.js'

global.app = {
	isOpen: process.argv.includes('--open'),
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	path: path,
	plugins: plugins,
	gulp: gulp
}

function watch() {
	gulp.watch(path.watch.scss, gulp.series(clean.css, scss))
	gulp.watch(path.watch.js, gulp.series(clean.js, scripts, copyCommon))
	gulp.watch(path.watch.files, gulp.series(clean.html, nunjucks))
	//gulp.watch(path.watch.images, images, svgo)
}

export { svgo }
export { images }
export { fonts }
//exports.build = series(clearDist, scripts, buildCopy, cssModules, buildhtml, clearPartials)
//exports.default = parallel(nunjucks, browsersync, startwatch)

const mainTasks = gulp.series(clean.html, nunjucks, scss, scripts, copyCommon)

const dev = gulp.series(mainTasks, gulp.parallel(watch, server))
const dist = gulp.series(mainTasks, images, fonts, clean.dist, copy)
const depZip = gulp.series(mainTasks, images, fonts, zipy)

gulp.task('default', dev)
gulp.task('dist', dist)
gulp.task('depZip', depZip)
