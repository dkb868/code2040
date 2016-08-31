const code2040 = require('./code2040.js');

var validate = function (index) {
  code2040.postWithKey('http://challenge.code2040.org/api/haystack/validate',
    'needle', index,
    (error, response, body) => {
      if (error) console.error("Error: ", error);
      else console.log(body);
    }
  );
};

var findNeedleAndSubmit = function() {
  code2040.postWithToken('http://challenge.code2040.org/api/haystack',
    (error, response, body) => {
      if (error) console.error("Error: ", error);
      else validate(body.haystack.indexOf(body.needle));
    });
};

findNeedleAndSubmit();
