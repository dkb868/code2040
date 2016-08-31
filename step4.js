const code2040 = require('./code2040.js');

var validate = function (array) {
  code2040.postWithKey('http://challenge.code2040.org/api/prefix/validate',
    'array', array,
    (error, response, body) => {
      if (error) console.error("Error: ", error);
      else console.log(body);
    }
  );
};

var filterArrayAndSubmit = function() {
  code2040.postWithToken('http://challenge.code2040.org/api/prefix',
    (error, response, body) => {
      if (error) console.error("Error: ", error);
      else {
        validate(
          // I learned about arrow functions today
          // and as you can see, I really like them
          body.array.filter((str) =>
            str.indexOf(body.prefix) !== 0
          ));
      }
  });
};

filterArrayAndSubmit();
