import { configFTP } from '../config/ftp.js'
import vinylFTP from 'vinyl-ftp'
import gutil from 'gulp-util'

export const ftp = () => {
	configFTP.log = gutil.log
	const ftpConnect = vinylFTP.create(configFTP)
	return app.gulp.src(app.path.build.files)
		.pipe(ftpConnect.dest(`/${app.path.ftp}/${app.path.rootDir}`))
}
