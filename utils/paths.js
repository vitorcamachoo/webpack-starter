const path = require('path');
const BASE_DIR = process.cwd();

module.exports = {
	BASE_DIR,
	DEV_DIR: path.resolve(BASE_DIR, 'src'),
	DIST_DIR: path.resolve(BASE_DIR, 'dist'),
	PUBLIC_DIR: '/',
};
