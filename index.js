const http = require('http');
const https = require('https');
const express = require('express');

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

var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('*', function(req, res) {
    console.log(req.method);

    res.sendStatus(200);
});

app.listen(process.env.PORT ?? 3000, () => {
    console.log('Done')
})