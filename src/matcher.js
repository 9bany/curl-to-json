module.exports = {
	matchArgv: function(s) {
		// ref: https://stackoverflow.com/questions/366202/regex-for-splitting-a-string-using-space-when-not-surrounded-by-single-or-double
		return s
			.replace(/\\\n/g, ' ')
			.match(/"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)'|[^\s]+/g)
			.map((s) => {
				if ((s.startsWith(`'`) && s.endsWith(`'`)) || (s.startsWith(`"`) && s.endsWith(`"`))) {
					// remove quotes on both sides
					return s.substring(1, s.length - 1)
				} else {
					return s
				}
			})
	}
}