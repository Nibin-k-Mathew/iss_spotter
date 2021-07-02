// index.js
const { fetchMyIP } = require('./iss');

const apiurl = 'https://api.ipify.org/?format=json';

fetchMyIP(apiurl,(error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});