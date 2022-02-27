const http = require('http');
const https = require('https');

require('dotenv').config();

const port = +process.env.PORT ?? 80;

let headers = {};

try {
    headers = JSON.parse(process.env.HEADERS);
} catch (err) {

}

setInterval(() => {
    (port === 443 ? https : http)
        .get(process.env.TARGET, (res) => {
            console.log(`${process.env.TARGET}: Done.`);
        })
        .on('error', (err) => {
            console.log(err);
        })
}, 10);

