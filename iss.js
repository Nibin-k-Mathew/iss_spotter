const request = require('request');
/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */

const fetchMyIP = function(apiurl,callback) {
  // use request to fetch IP address from JSON API
  request(apiurl, (error,response,body) => {
    if (error) {
      callback(error);
      return;
    }
    if (response && response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(new Error (msg))
      return;
    }
    let ip  = JSON.parse(body);
    callback(null,ip.ip);
  });

};

module.exports = { fetchMyIP };