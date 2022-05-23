/**
 * Parse header field.
 */

function parseField(s) {
    return s.split(/: (.+)/)
}

module.exports = {
    header: (data) => {
        
        let ouput = {}
        
        function pareString(s) {
            let result = {}
            var field = parseField(s)
            result[field[0]] = field[1]
            return result
        }
        if ((typeof data) === "string") {
            ouput = pareString(data)
        } else {
            data.forEach(element => {
                ouput = {
                    ...ouput,
                    ...pareString(element)
                }
            });
            return ouput
        }
        return ouput
    }
}