
var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('*', function(req, res) {
    console.log(req.method);

    res.sendStatus(200);
});

app.post('*', function(req, res) {
    console.log(req.method);

    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log('Done')
})