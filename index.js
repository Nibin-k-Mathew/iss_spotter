// index.js
const { fetchMyIP,fetchCoordsByIP } = require('./iss');

const apiurl = 'https://api.ipify.org/?format=json';
const ip = '99.199.26.69'

fetchMyIP(apiurl,(error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP(ip,(error,callback) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , callback);
});