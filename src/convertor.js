/**
 * Parse header field.
 */

function parseField(s) {
    return s.split(/: (.+)/)
}

function parseFieldWithEqual(s) {
    return s.split(/=(.+)/)
}

function pareString(s, pareCallBack = parseField) {
    let result = {}
    var field = pareCallBack(s)
    result[field[0]] = field[1]
    return result
}

module.exports = {
    header: (data) => {
        
        let ouput = {}
        if ((typeof data) === "string") {
            ouput = pareString(data)
        } else {
            data.forEach(element => {
                ouput = {
                    ...ouput,
                    ...pareString(element, parseField)
                }
            });
            return ouput
        }
        return ouput
    },
    body: (data) => {
        
        if ((typeof data) === "string") {
            return JSON.parse(data)
        } else {
            let ouput = {}
            data.forEach(element => {
                ouput = {
                    ...ouput,
                    ...pareString(element, parseFieldWithEqual)
                }
            });
            return ouput
        }
    }
}