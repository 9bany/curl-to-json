const words = require('shellwords')
const dJSON = require('dirty-json');

// TODO -F, --form
// TODO --data-binary
// TODO --data-urlencode
// TODO -r, --range

/**
 * Attempt to parse the given curl string.
 */

module.exports = exports.default = function(s) {
  if (0 != s.indexOf('curl ')) return
  var args = rewrite(words.split(s))
  var out = { method: 'GET', header: {}, form: {} }
  var state = ''

  args.forEach(function(arg){
    switch (true) {
      case isURL(arg):
        let url = new URL(arg);
        out.url = url.toString();
        out.origin = url.origin
        out.pathname = url.pathname
        let params = new URLSearchParams(url.search);
        out.params = parseParamsField(params.toString());
        break;
      case arg == '-A' || arg == '--user-agent':
        state = 'user-agent'
        break;
      case arg == '--data-binary':
        state = 'data.binary'
        break;
      case arg == '-F' || arg == '--form':
        state = 'form'
        break;
      case arg == '-H' || arg == '--header':
        state = 'header'
        break;

      case arg == '-d' || arg == '--data' || arg == '--data-ascii' || arg == '--data-raw':
        state = 'data'
        break;

      case arg == '-u' || arg == '--user':
        state = 'user'
        break;

      case arg == '-I' || arg == '--head':
        out.method = 'HEAD'
        break;

      case arg == '-X' || arg == '--request' || arg == '--location':
        state = 'method'
        break;

      case arg == '-b' || arg =='--cookie':
        state = 'cookie'
        break;

      case arg == '--compressed':
        out.header['Accept-Encoding'] = out.header['Accept-Encoding'] || 'deflate, gzip'
        break;

      case !!arg:
        switch (state) {
          case 'header':
            var field = parseField(arg)
            out.header[field[0]] = field[1]
            state = ''
            break;
          case 'user-agent':
            out.header['User-Agent'] = arg
            state = ''
            break;
          case 'data':
            out.header['Content-Type'] = out.header['Content-Type'] || 'application/x-www-form-urlencoded'
            let body = out.body ? out.body + '&' + arg: arg
            
            out.body = dJSON.parse(body)

            state = ''
            break;
          case 'user':
            out.header['Authorization'] = 'Basic ' + btoa(arg)
            state = ''
            break;
          case 'method':
            out.method = arg
            state = ''
            break;
          case 'cookie':
            out.header['Set-Cookie'] = arg
            state = ''
            break;
          case 'form':
            var field = parseFromField(arg)
            out.form[field[0]] = field[1].substring(1, field[1].length - 1);
            state = ''
            break;
          case 'data.binary':
            out.binary_data = arg
        }
        break;
    }
  })

  return out
}

/**
 * Rewrite args for special cases such as -XPUT.
 */

function rewrite(args) {
  return args.reduce(function(args, a){
    if (0 == a.indexOf('-X')) {
      args.push('-X')
      args.push(a.slice(2))
    } else {
      args.push(a)
    }

    return args
  }, [])
}

/**
 * Parse header field.
 */

function parseField(s) {
  return s.split(/: (.+)/)
}

/**
 * Parse params field.
 * @param {s: string} 
 * @returns object | null
 */

function parseParamsField(s) {
  if(s === "") return null;
  let object = {}
  const allParamsArr = s.split(/&/)
  allParamsArr.forEach(element => {
    const field = element.split(/=/)
    object[field[0]] = field[1]
  })

  return object
}

/**
 * Parse params field.
 * @param {arg: string} 
 * @returns object | null
 */

function parseFromField(arg) {
  return arg.split(/=/)
}

/**
 * Check if `s` looks like a url.
 */

function isURL(s) {
  return /^https?:\/\//.test(s) || /^localhost?:/.test(s) || /^127.0.0.1?:/.test(s)
}
