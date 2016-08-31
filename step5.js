const code2040 = require('./code2040.js');

var validate = function (str) {
  code2040.postWithKey('http://challenge.code2040.org/api/dating/validate',
    'datestamp', str,
    (error, response, body) => {
      if (error) console.error("Error: ", error);
      else console.log(body);
    }
  );
};

var addIntervalAndSubmit = function() {
  code2040.postWithToken('http://challenge.code2040.org/api/dating',
    (error, response, body) => {
      if (error) console.error("Error: ", error);
      else {
        // I initially tried using various date libraries to do this
        // They all kept changing the timezone and messing up the answer
        // Realized it was easier done without any libraries
        let date = new Date(body.datestamp);
        date.setTime(date.getTime() + body.interval * 1000);
        let str = date.toISOString().replace(/\..+/, 'Z');
        validate(str);
      }
  });
};

addIntervalAndSubmit();
