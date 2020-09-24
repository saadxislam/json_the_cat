const request = require('request');

const arg = process.argv.slice(2);

const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + arg[0]

request(url, (error, response, body) => {
  if (error === undefined){
    console.log('NOPE!');
    process.exit;
  } else {
    // console.log(body)                //notice that this is a string
    const data = JSON.parse(body);       // serialize it into an object
    // console.log(data);
    // console.log(typeof data);
    console.log(data[0].description);
  }
});



