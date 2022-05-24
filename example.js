const parse = require('./src/pare-json');

var out = parse(`curl --location --request GET ' localhost:8002/v1/api/search?q=react' \
--header 'ss: asd ' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-raw 'sd=dsb' \
--data-raw 'sds=sdsss'`);

console.log(JSON.stringify(out, null, 2))
