var assert = require('assert');
const pareJson = require('./../src/pare-json');
const testDataList = require('./data.test.json');

describe('Pare json test', function () {
    testDataList.forEach(element => {
        it(`${element.name}`, function () {
            pareJson(element.curl)
        });
    })
});