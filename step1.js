const request = require('request');

request.post(
  'http://challenge.code2040.org/api/register',

  { json: {
    token: '040e7c5771fbd3eadca170f3f7c26656',
    github: 'https://github.com/mitrikyle/code2040'
  }},

  (error, response, body) => {
    if (error) console.error("Error: ", error);
    else console.log(body);
  }
);
