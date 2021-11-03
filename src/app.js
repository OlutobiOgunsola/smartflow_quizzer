var express = require('express');
var router = require('./router')

var app = express();
var PORT = 5000;

app.use('/api/v1', router)


app.listen(PORT, () => {
    console.log(`App ready and listening on ${PORT}`);
})