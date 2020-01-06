var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    const data = [
        {'total': '$52,200'},
        {'total': '$1 Million'},
        {'total': '$11,432'},
        {'total': '$1 Million'},
        {'total': '$5 Million'},
    ];
    res.render('home', {data: data})
});

module.exports = router;