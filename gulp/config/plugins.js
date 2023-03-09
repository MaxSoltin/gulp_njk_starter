import replace from 'gulp-replace'
import notify from 'gulp-notify'
import browserSync from 'browser-sync'
import rename from 'gulp-rename'
import newer from 'gulp-newer'
import gulpif from 'gulp-if'

export const plugins = {
	replace: replace,
	notify: notify,
	browserSync: browserSync,
	rename: rename,
	newer: newer,
	if: gulpif
}
