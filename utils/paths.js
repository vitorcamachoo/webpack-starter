const path = require('path');
const BASEDIR = __dirname;

module.exports = {
	DEV_DIR: path.resolve(BASEDIR, '../src'),
	DIST_DIR: path.resolve(BASEDIR, '../dist'),
};
