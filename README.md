# curl-to-json

## Feature
- Mapping curl string to json
- Support mapping header, params, body-raw
## TODO
Mapping list case
- [ ] Form -F, --form
- [ ] Binary data --data-binary
- [ ] Urlencode data --data-urlencode
- [ ] Range -r, --range
## Install
```
npm i @bany/curl-to-json
```
## Usage

```js
const parse = require('@bany/curl-to-json');

var out = parse(`your_curl`);

```
## Example
```js
const parse = require('@bany/curl-to-json');

var out = parse(`curl -X --request GET 'http://localhost:3001/search?search=react&asdfa=asfdaf' \
--header 'xapi-key: 21432139847290402402190' \
--header 'Content-Type: text/html' \
--data-raw '{
    "name": "string",
    "name2": "string"
}'`);

console.log(out)

/**
 * OUTPUT:
 {
  method: 'GET',
  header: {
    'xapi-key': '21432139847290402402190',
    'Content-Type': 'text/html'
  },
  url: 'http://localhost:3001/search?search=react&asdfa=asfdaf',
  origin: 'http://localhost:3001',
  params: { search: 'react', asdfa: 'asfdaf' },
  body: { name: 'string', name2: 'string' }
} */
```
