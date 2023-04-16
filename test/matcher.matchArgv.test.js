var assert = require('assert');
const matcher = require('../src/matcher');
const testDataList = require('./data.test');
const fs = require('fs');

const childProcess = require('child_process');

describe('matcher.matchArgv test', function () {
    testDataList.forEach(element => {
        
        it(`${element.name || 'Test case '}`, function () {
            childProcess.exec(`node ./test/argv.js ${element.curl.trim()}`, function(error, stdout, buffer){
                const parsedArgv = JSON.stringify(matcher.matchArgv(element.curl));
                const answer = stdout;
                assert.equal(parsedArgv.trim(), answer.trim());
            });
        });
    })
});