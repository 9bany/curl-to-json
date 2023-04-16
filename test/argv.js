const proc = require('node:process')

console.log(JSON.stringify(proc.argv.slice(2)));