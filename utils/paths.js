const path = require('path');
const BASEDIR = process.cwd();

module.exports = {
	DEV_DIR: path.resolve(BASEDIR, 'src'),
	ENTRY_POINT: {
		app: path.resolve(BASEDIR, 'src/app'),
	},
	DIST_DIR: path.resolve(BASEDIR, 'dist'),
	PUBLIC_DIR: '/',
};
