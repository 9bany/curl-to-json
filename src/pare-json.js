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
	// minimist will treat `--flag value` as "flag has a value" unless configured as boolean.
	// For curl, many flags are boolean (e.g. `--location`) and may be followed immediately by the URL.
	// Without this, `--location https://...` incorrectly consumes the URL as the value for `location`.
	const argv = minimistParser(data, {
		boolean: [
			'f', 'fail',
			'i', 'include',
			'I', 'head',
			'k', 'insecure',
			'L', 'location',
			'O', 'remote-name',
			's', 'silent',
			'v', 'verbose',
		],
	})

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
		// When there is a body payload (e.g. -d/--data or -F/--form), default to POST.
		result.method = (result.data || result.form) ? 'POST' : 'GET';
	}
	
	return result
}