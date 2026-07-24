const https = require('https');
https.get('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/BKash_Logo.svg/512px-BKash_Logo.svg.png', { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
  console.log(res.statusCode);
});
