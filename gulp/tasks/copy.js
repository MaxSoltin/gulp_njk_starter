export const copy = () => {
	return app.gulp.src(app.path.build.files)
		.pipe(app.gulp.dest(app.path.dist.files))
}
