const find = flag => process.argv.includes(`--${flag}`);
const IS_DEV = !find('--prod');
const IS_PROD = find('--prod');
const IS_WATCH = find('--watch');

module.exports = {
	IS_DEV,
	IS_PROD,
	IS_WATCH,
};
