import { deleteAsync } from 'del'
import zip from 'gulp-zip'

export const zipy = () => {
	deleteAsync(app.path.dist.dir+'*.zip');
	return app.gulp.src(app.path.build.files)
		.pipe(zip(app.path.rootDir+'.zip'))
		.pipe(app.gulp.dest(app.path.dist.dir))
}
