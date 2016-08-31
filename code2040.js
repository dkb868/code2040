/*
  Didn't know how far to go with this little module.
  Initially I didn't have one but got tired of writing request.post every time.
  Was going to put a default callback function but I thought maybe that would be too much
*/

const request = require('request');
const TOKEN = '040e7c5771fbd3eadca170f3f7c26656'

module.exports = {
  postWithToken: function (url, callback) {
    request.post(
      url,

      { json: {
        token: TOKEN,
      }},

      callback
    );
  },

  postWithKey: function (url, key, value, callback) {
    obj = {
      token: TOKEN
    };
    obj[key] = value;
    request.post(
      url,

      { json: obj },

      callback
    );
  }

};
