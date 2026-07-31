const https = require('https');

function checkUrl(url) {
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    console.log(url + " -> " + res.statusCode);
  }).on('error', err => console.log(url + " -> " + err.message));
}

checkUrl('https://upload.wikimedia.org/wikipedia/commons/c/c2/Dutch_Bangla_Bank_Logo.svg');
checkUrl('https://upload.wikimedia.org/wikipedia/en/thumb/4/47/BRAC_Bank_logo.svg/512px-BRAC_Bank_logo.svg.png');
checkUrl('https://upload.wikimedia.org/wikipedia/en/4/47/BRAC_Bank_logo.svg');
checkUrl('https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Islami_Bank_Bangladesh_Ltd_Logo.svg/512px-Islami_Bank_Bangladesh_Ltd_Logo.svg.png');
checkUrl('https://upload.wikimedia.org/wikipedia/commons/8/82/Islami_Bank_Bangladesh_Ltd_Logo.svg');

