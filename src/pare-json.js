
const yargs = require('yargs/yargs')
const options = require('./option');
module.exports = function (data) {
	const argv = yargs(data).argv
	let result = {}
	options.forEach(element => {
		let alias = element.alias
		let value = argv[alias[0]] || argv[alias[1]]
		if (value) {
			if(element.convertor) {
				result[element.name] = element.convertor(value)
			} else {
				result[element.name] = value
			}
		}
	})
	console.log(result)	
}