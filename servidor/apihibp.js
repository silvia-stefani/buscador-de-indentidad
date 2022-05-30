const { search } = require('hibp');
var config = require('./config');

exports.apihibp = async (term) => {
  return new Promise((resolve, reject) => {
        //more params: https://haveibeenpwned.com/API/v3
        //more on search: https://www.npmjs.com/package/hibp
        search(term, { apiKey: config.hibp.api_key, truncate: false }).then((data) => {
          if (data.breaches || data.pastes) {
            //console.log(data);
            resolve(data);
          } else {
            console.log('Good news — no pwnage found!');
            resolve({data: "NOTHING FOUND"});
          }
        }).catch((err) => {
          console.log(err.message);
          reject(err);
        });
  
    });
};


