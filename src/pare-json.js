const yargs = require('yargs/yargs');

const options = require('./option');
module.exports = exports.default = function(data) {
	const argv = yargs(data).argv
	let result = {}
	options.forEach(element => {
		let alias = element.alias
		let value = argv[alias[0]] || argv[alias[1]] || argv[alias[2]]
		if (value) {
			if(element.convertor) {
				result[element.name] = element.convertor(value)
			} else {
				result[element.name] = value
			}
		}
	})
	return result	
}