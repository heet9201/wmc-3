const { handleClientScriptLoad } = require('next/script');

var router = require('express').Router();
var User = require('../models/user');
var bcrypt = require('bcrypt');
var bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post('/signin', urlencodedParser, async function (req, res) {
    // var salt = bcrypt.genSaltSync(10);
    // var hashedPwd = bcrypt.hash(req.body.password, salt);
    var newUser = User({
        firstName: req.body.fname,
        lastName: req.body.lname,
        email: req.body.email,
        password: req.body.password
    }).save(function (err, data) {
        if (err) throw err;
        console.log('Data added');
    });
    res.redirect('/login');

    //res.send(await User.save());
});

router.post('/login', urlencodedParser, function (req, res) {
    var regUser = User.findOne({ email: req.body.email }, function (err, obj) {
        if (err) throw err;
        // console.log(obj);
        // console.log(regUser.password);
        // console.log({data: regUser});
        if (!regUser) {
            return res.status(404).send('User not found');
        }

        if (req.body.password != obj.password) {

            return res.status(400).send('Invalid credentials');
        }
        console.log('Login successful');

        var token = jwt.sign({ _id: obj._id }, 'secret');
        res.cookie('jwt', token, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        console.log('success');
        res.redirect('/');
    });
    // console.log(obj);
    // // console.log(regUser.password);
    // // console.log({data: regUser});
    // if(!regUser){
    //     return res.status(404).send('User not found');
    // }

    // if(req.body.password != obj.password){

    //     return res.status(400).send('Invalid credentials');
    // }
    // console.log('Login successful');
    // res.redirect('/');
});

router.get('/user', function (req, res) {
    try {
        var cookie = req.cookies['jwt'];
        var claims = jwt.verify(cookie, 'secret');
        if (!claims) {
            return res.status(401).send('Unauthenticated');
        }

        var user = User.findOne({ _id: claims._id });
        res.send(user);
    } catch (e) {
        return res.status(401).send('Unauthenticated');
    }
});

router.post('/logout', function (req, res) {
    res.cookie('jwt', '', {
        maxAge: 0
    });
    console.log('logged out successfully');
    res.redirect('/login');
});



module.exports = router;