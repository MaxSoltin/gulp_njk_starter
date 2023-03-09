/* import webpack from 'webpack-stream'

export const scripts = () => {
	return app.gulp.src(app.path.src.js, {sourcemaps: true})
		.pipe(webpack({
			mode: 'development',
			output: {
				filename: 'libs.min.js'
			}
		}))
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browserSync.stream())
}
 */

import webpack from 'webpack'
import webpackStream from 'webpack-stream'
import TerserPlugin from 'terser-webpack-plugin'
import concat from 'gulp-concat'
import uglify from'gulp-uglify-es'

export const scripts = () => {
	return app.gulp.src(app.path.src.js)
		.pipe(
			webpackStream({
					mode: 'production',
					performance: { hints: false },
					module: {
						rules: [
							{
								test: /\.m?js$/,
								exclude: /(node_modules)/,
								use: {
									loader: 'babel-loader',
									options: {
										presets: ['@babel/preset-env'],
										plugins: ['babel-plugin-root-import'],
									},
								},
							},
						],
					},
					optimization: {
						minimize: true,
						minimizer: [
							new TerserPlugin({
								terserOptions: { format: { comments: false } },
								extractComments: false,
							}),
						],
					},
				},
				webpack
			)
		)
		.on('error', function handleError() {
			this.emit('end')
		})
		.pipe(concat('libs.min.js'))
		.pipe(app.gulp.dest(app.path.build.js))
		.pipe(app.plugins.browserSync.stream())
}

export const copyCommon = () => {
	return app.gulp.src(app.path.src.commonJS)
		.pipe(app.gulp.dest(app.path.build.js))
}
