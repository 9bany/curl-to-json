module.exports = [
    {
        "name": "multiple headers",
        "curl": "curl --location -X GET -H 'Content-Type: application/x-www-form-urlencoded' -H 'Accept-Encoding: something' 'https://example.com/posts'"
    },
    {
        "name": "a headers",
        "curl": "curl --location -X GET -H 'Content-Type: application/x-www-form-urlencoded' 'https://example.com/posts'"
    },
    {
        "name": "data raw",
        "curl": `curl -X GET 'http://localhost:3001/search?search=react&asdfa=asfdaf' \
        --header 'xapi-key: 21432139847290402402190' \
        --header 'Content-Type: text/html' \
        --data-raw '{
            "name": "string",
            "name2": "string"
        }'`
    }
    
]