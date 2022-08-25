var express = require('express');
var next = require('next');
var dev = process.env.NODE_ENV !== 'production';
var app = next({dev});
var handle = app.getRequestHandler();

app.prepare()
.then(() => {
    var server = express();

    server.get('*', function (req, res) {
        return handle(req, res);
    });

    server.listen(3000, function (err) {
       if(err) throw err;
       console.log('Now listening to port 3000'); 
    });
})

.catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
})