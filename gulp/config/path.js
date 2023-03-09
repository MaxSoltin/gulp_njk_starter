import * as nodePath from 'path'
const rootDir = nodePath.basename(nodePath.resolve()) 

const baseDir    = './src',
			filesWatch = 'njk,html,txt,json,md,woff2'

export const path = {
	baseDir: baseDir,
	rootDir: rootDir,
	data: baseDir+'/data/data.json',
	src: {
		njk: `${baseDir}/*.njk`,
		scss: `${baseDir}/assets/styles/scss/*.scss`,
		js: `${baseDir}/assets/scripts/modules/**/*.js`,
		commonJS: `${baseDir}/assets/scripts/common.js`,
		fonts: `${baseDir}/assets/fonts/**/*`,
		images: `${baseDir}/assets/images/**/*.{jpg,jpeg,png,webp,gif}`,
		svg: `${baseDir}/assets/images/svg/*.svg`
	},
	build: {
		dir: `${baseDir}/build`,
		files: `${baseDir}/build/**/*`,
		css: `${baseDir}/build/css`,
		js: `${baseDir}/build/scripts`,
		fonts: `${baseDir}/build/fonts`,
		images: `${baseDir}/build/images`
	},
	dist: {
		dir: './dist',
		files: `./dist/${rootDir}`
	},
	watch: {
		js: `${baseDir}/assets/scripts/**/*.js`,
		scss: `${baseDir}/assets/styles/scss/**/*`,
		images: `${baseDir}/assets/images/**/*`,
		files: [`${baseDir}/**/*.{${filesWatch}}`, `!${baseDir}/build/**`]
	},
	ftp: '',
}
