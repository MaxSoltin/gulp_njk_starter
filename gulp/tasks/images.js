import webp from 'gulp-webp'
import imagemin from 'gulp-imagemin'

export const images = () => {
  return app.gulp.src(app.path.src.images)
		.pipe(app.plugins.newer(app.path.build.images))
		.pipe(webp())
		.pipe(app.gulp.dest(app.path.build.images))
		.pipe(app.gulp.src(app.path.src.images))
		.pipe(app.plugins.newer(app.path.build.images))
		.pipe(imagemin([
			imagemin.mozjpeg({quality: 75, progressive: true}),
			imagemin.optipng({optimizationLevel: 5})
		]))
		.pipe(app.gulp.dest(app.path.build.images))
}

export const svgo = () => {
  return app.gulp.src(app.path.src.svg)
		.pipe(app.plugins.newer(app.path.baseDir+'/assets/images/svgo'))
		.pipe(imagemin([
			imagemin.svgo({plugins: [{removeViewBox: false}]})
		]))
		.pipe(app.gulp.dest(app.path.baseDir+'/assets/images/svgo'))
}
