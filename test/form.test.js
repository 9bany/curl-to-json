var assert = require('assert');
const pareJson = require('../src/pare-json');

describe('Form parsing', function () {
    it('should always return form as array for a single --form (issue #29)', function () {
        const curl = `curl --location 'https://postman-echo.com/post' \
--form 'file=@"/C:/Users/JeyaramK/Downloads/Sample form data files/Free_Test_Data_1MB_PDF.pdf"'`

        const out = pareJson(curl);
        assert.equal(out.url, 'https://postman-echo.com/post');
        assert.ok(Array.isArray(out.form));
        assert.equal(out.form.length, 1);
        assert.equal(out.form[0], 'file=@"/C:/Users/JeyaramK/Downloads/Sample form data files/Free_Test_Data_1MB_PDF.pdf"');
        assert.equal(out.method, 'POST');
    });

    it('should keep form as array for multiple --form', function () {
        const curl = `curl --location --request POST 'https://example.com/posts' \
--form 'title=\"file_avatar\"' \
--form 'file=@\"/Users/bany/Desktop/Screen Shot 2022-05-22 at 22.55.22.png\"'`

        const out = pareJson(curl);
        assert.ok(Array.isArray(out.form));
        assert.equal(out.form.length, 2);
    });
});

