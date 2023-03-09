import { deleteAsync } from 'del'

export const dist = () => {
	return deleteAsync(app.path.dist.files);
}

export const build = () => {
	return deleteAsync(app.path.build.dir);
}

export const html = () => {
	return deleteAsync(app.path.build.dir + '/*.html');
}

export const css = () => {
	return deleteAsync(app.path.build.css + '/*.css');
}

export const js = () => {
	return deleteAsync(app.path.build.js + '/*.js');
}
