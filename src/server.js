var express = require('express');
var next = require('next');
var dev = process.env.NODE_ENV !== 'production';
var app = next({dev});
var handle = app.getRequestHandler();
var mongoose = require('mongoose');
var routes = require('./routes/routes');
var cors = require('cors');
var cookieParser = require('cookie-parser');

//connecting to database...
mongoose.connect('mongodb+srv://admin:admin@users.gaj3akz.mongodb.net/?retryWrites=true&w=majority', function (err) {
    if(err) throw err;
    console.log('Connected successfully');
});


app.prepare()
.then(() => {
    var server = express();

    server.get('*', function (req, res) {
        return handle(req, res);
    });

    server.listen(8000, function (err) {
       if(err) throw err;
       console.log('Now listening to port 8000'); 
    });

    server.use(routes);
    server.use(express.json);
    server.use(cookieParser());
    server.use(cors({
        credentials: true,
        origin: ['http://localhost:3000']
    }));
})

.catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
})
