
# curl-to-json
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

var out = parse(`curl -X GET 'http://localhost:3001/search?search=react&asdfa=asfdaf' \
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

## CURL Example
- [Check this gist](https://gist.github.com/subfuzion/08c5d85437d5d4f00e58)
- Accept curl from Postman.
## Contributing

If you want to colaborate check the project's issues.

1. Fork the repository
2. Create a new branch
3. Implement your solution
4. Commit
5. Open a Pull Request

Thanks!

