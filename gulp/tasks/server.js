export const server = () => {
	app.plugins.browserSync.init({
		server: {
			baseDir: app.path.build.dir,
		},
		notify: false,
		open: app.isOpen,
		online: false,
		port: 4000
	})
}
