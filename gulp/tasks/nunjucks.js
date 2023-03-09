import njkRender from 'gulp-nunjucks-render'
import versionNumber from 'gulp-version-number'
import data from 'gulp-data'
import fs from 'fs'

export const nunjucks = () => {
	return app.gulp.src(app.path.src.njk)
		.pipe(data(function(file) {
			return JSON.parse(fs.readFileSync(app.path.data));
		}))
		.pipe(
			njkRender({
				path: ['src/templates/', 'src/components/']
			})
		)
		.pipe(app.plugins.replace(/@img\//g, 'images/'))
		.pipe(app.plugins.if(
			app.isBuild, versionNumber({
				'value' : '%TS%',
				'append': {
					'key' : '_v',
					'cover' : 0,
					'to' : ['css', 'js']
				},
				'output' : {'file': 'gulp/version.json'}
			})
		))
		.pipe(app.gulp.dest(app.path.build.dir))
		.pipe(app.plugins.browserSync.stream())
}
