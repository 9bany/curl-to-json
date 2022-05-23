var assert = require('assert');
const convertor = require('./../src/convertor');

let testCases = [
    {
        name: 'A header',
        stub: () => {
            return convertor.header('Content-Type: application/x-www-form-urlencoded')
        },
        check: (data) => {
            assert.equal(data['Content-Type'], 'application/x-www-form-urlencoded')
        }
    },
    {
        name: 'Multiple headers',
        stub: () => {
            return convertor.header([
                'Content-Type: application/x-www-form-urlencoded',
                'Accept-Encoding: something'
            ])
        },
        check: (data) => {
            assert.equal(data['Content-Type'], 'application/x-www-form-urlencoded')
            assert.equal(data['Accept-Encoding'], 'something')
        }
    }
]
describe('Header convertor', function () {
    testCases.forEach(element => {
        it(`${element.name}`, function () {
            let data = element.stub()
            element.check(data)
        });
    })
});