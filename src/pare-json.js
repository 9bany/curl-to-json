const minimistParser = require('minimist');
const convertor = require('./convertor');

const options = require('./option');
const matcher = require('./matcher')

module.exports = exports.default = function (data) {
	if (typeof data === 'string' || data instanceof String) {
		// minimistParser cannot parse from string
		// parse string to argvs array for minimistParser
		data = matcher.matchArgv(data)
	}
	const argv = minimistParser(data)

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
		if(Array.from(params).length) {
			result.params = convertor.parseParamsField(params.toString());
		}
	}

	if (!result.method) {
		// When there is a "data" parameter, the default is "post" request mode
		result.method = result.data ? 'POST' : 'GET';
	}
	
	return result
}