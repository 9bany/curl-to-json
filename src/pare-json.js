const yargs = require('yargs/yargs');
const convertor = require('./convertor');

const options = require('./option');

module.exports = exports.default = function (data) {
	const argv = yargs(data).argv

	let result = {}

	if (argv._[1]) {
		result.url = argv._[1].replace(/'/g, '')
	}
	
	options.forEach(element => {
		let alias = element.alias
		let value = alias.map(element => argv[element]).filter(element => element)[0]
		if (value) {
			if (element.convertor) {
				result[element.name] = element.convertor(value)
			} else {
				result[element.name] = value
			}
		}
	})

	if (result.url) {
		let url = new URL(result.url);
		result.url = url.origin + url.pathname;
		let params = new URLSearchParams(url.search);
		if(Object.keys(params).length) {
			result.params = convertor.parseParamsField(params.toString());
		}
	}
	
	return result
}