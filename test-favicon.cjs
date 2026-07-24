const https = require('https');
https.get('https://www.google.com/s2/favicons?domain=bkash.com&sz=64', (res) => {
  console.log(res.statusCode);
});
