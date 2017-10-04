const find = flag => process.argv.includes(flag);
const IS_PROD = find('--env.prod');
const IS_WATCH = find('--env.watch');
const IS_DEV = !IS_PROD;

module.exports = {
	IS_DEV,
	IS_PROD,
	IS_WATCH,
};
