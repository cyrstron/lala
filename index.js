const http = require('http');
const https = require('https');

require('dotenv').config();

const host = process.env.TARGET;

setInterval(() => {
    (host.startsWith('https://') ? https : http)
        .get(process.env.TARGET, (res) => {
            console.log(`${process.env.TARGET}: Done.`);
        })
        .on('error', (err) => {
            console.log(err);
        })
}, 10);