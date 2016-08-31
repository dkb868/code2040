const code2040 = require('./code2040.js');
const reverse = require('reverse-utf16-string');

var validate = function (str) {
  code2040.postWithKey('http://challenge.code2040.org/api/reverse/validate',
    'string', str,
    (error, response, body) => {
      if (error) console.error("Error: ", error);
      else console.log(body);
    }
  );
};

var reverseStringAndSubmit = function () {
  code2040.postWithToken('http://challenge.code2040.org/api/reverse',
    (error, response, body) => {
      if (error) console.error("Error: ", error);
      else validate(reverse(body));
    });
};

reverseStringAndSubmit();
