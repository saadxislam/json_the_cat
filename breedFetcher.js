const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    } else {
      // console.log(body)                //notice that this is a string
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback("Breed doesn't exist", null);
        return;
      }
      callback(null, data[0].description);
    }
  });
};




module.exports = { fetchBreedDescription };

