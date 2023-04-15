const convertor = require("./convertor");

module.exports = [
    {
        name: 'url',
        alias: ['url', 'curl'],
        description: 'Url request',
        convertor: null,
    },
    {
        name: 'cookie',
        alias: ['b', 'cookie'],
        description: '<name=data> Supply cookie with request. If no =, then specifies the cookie file to use (see -c).',
        convertor: null,
    },
    {
        name: 'cookie-jar',
        alias: ['c', 'cookie-jar'],
        description: '<file name> File to save response cookies to.',
        convertor: null,
    },
    {
        name: 'data',
        alias: ['d', 'data', 'data-raw', 'data-urlencode', 'data-binary'],
        description: '<data> Send specified data in POST request. Details provided below.',
        convertor: convertor.body,
    },
    /*-f, --fail Fail silently (don't output HTML error form if returned).*/
    {
        name: 'fail',
        alias: ['f', 'fail'],
        description: 'Fail silently (don\'t output HTML error form if returned).',
        convertor: null,
    },
    // -F, --form <name=content> Submit form data.
    {
        name: 'form',
        alias: ['F', 'form'],
        description: '<name=content> Submit form data.',
        convertor: null,
    },
    // -H, --header <header> Headers to supply with request.
    {
        name: 'header',
        alias: ['H', 'header'],
        description: '<header> Headers to supply with request.',
        convertor: convertor.header,
    },

    // -i, --include Include HTTP headers in the output.
    {
        name: 'include',
        alias: ['i', 'include'],
        description: 'Include HTTP headers in the output.',
        convertor: null,
    },

    // -I, --head Fetch headers only.
    {
        name: 'head',
        alias: ['I', 'head'],
        description: 'Fetch headers only.',
        convertor: null,
    },

    // -k, --insecure Allow insecure connections to succeed.
    {
        name: 'insecure',
        alias: ['k', 'insecure'],
        description: 'Allow insecure connections to succeed.',
        convertor: null,
    },

    // -L, --location Follow redirects.
    {
        name: 'location',
        alias: ['L', 'location'],
        description: 'v',
        convertor: null,
    },

    // -o, --output <file> Write output to . Can use --create-dirs in conjunction with this to create any directories specified in the -o path.
    {
        name: 'output',
        alias: ['o', 'output'],
        description: '<file> Write output to . Can use --create-dirs in conjunction with this to create any directories specified in the -o path.',
        convertor: null,
    },

    // -O, --remote-name Write output to file named like the remote file (only writes to current directory).
    {
        name: 'remote-name',
        alias: ['remote-name', 'O'],
        description: 'Write output to file named like the remote file (only writes to current directory).',
        convertor: null,
    },

    // -s, --silent Silent (quiet) mode. Use with -S to force it to show errors.
    {
        name: 'silent',
        alias: ['s','silent'],
        description: 'Silent (quiet) mode. Use with -S to force it to show errors.',
        convertor: null,
    },

    // -v, --verbose Provide more information (useful for debugging).
    {
        name: 'verbose',
        alias: ['v', 'verbose'],
        description: 'Provide more information (useful for debugging).',
        convertor: null,
    },

    // -w, --write-out <format> Make curl display information on stdout after a completed transfer. See man page for more details on available variables. Convenient way to force curl to append a newline to output: -w "\n" (can add to ~/.curlrc).
    {
        name: 'write-out',
        alias: ['write-out', 'w'],
        description: '<format> Make curl display information on stdout after a completed transfer. See man page for more details on available variables. Convenient way to force curl to append a newline to output: -w "\n" (can add to ~/.curlrc).',
        convertor: null,
    },

    // -X, --request The request method to use.
    {
        name: 'method',
        alias: ['X', 'request'],
        description: 'The request method to use.',
        convertor: null,
    },

    // -A, --user-agent <name>
    {
        name: 'user-agent',
        alias: ['A', 'user-agent'],
        description: 'Specify the User-Agent send to the HTTP server.',
        convertor: null,
    },

    // -e, --referer <URL>
    {
        name: 'referer',
        alias: ['e', 'referer'],
        description: 'Sends the "Referrer Page" information to the HTTP server.',
        convertor: null,
    },
]