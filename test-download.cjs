const https = require('https');
https.get('https://logo.clearbit.com/bkash.com', (res) => {
  console.log(res.statusCode);
  if (res.statusCode === 301 || res.statusCode === 302) {
    console.log(res.headers.location);
  }
});
