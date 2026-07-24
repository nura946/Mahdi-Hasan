const https = require('https');
https.get('https://logo.clearbit.com/bkash.com', (res) => {
  console.log(res.statusCode);
});
