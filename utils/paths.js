const path = require('path');
const BASEDIR = process.cwd();

module.exports = {
	BASEDIR,
	DEV_DIR: path.resolve(BASEDIR, 'src'),
	DIST_DIR: path.resolve(BASEDIR, 'dist'),
	PUBLIC_DIR: '/',
};
