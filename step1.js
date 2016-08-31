const code2040 = require('./code2040.js');


code2040.postWithKey('http://challenge.code2040.org/api/register',
  'github', 'https://github.com/mitrikyle/code2040',
  (error, response, body) => {
    if (error) console.error("Error: ", error);
    else console.log(body);
  }
);
