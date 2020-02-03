var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    const data = [
        {
        'name': 'John Doe',
        'location': 'Los Angeles, Ca',
        'description': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores mollitia vitae quis, sapiente voluptates necessitatibus ratione culpa alias labore voluptas cum omnis dolores explicabo, amet soluta consequatur pariatur officiis. Porro.'
        },
        {
            'name': 'Jane Doe',
            'location': 'Los Angeles, Ca',
            'description': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores mollitia vitae quis, sapiente voluptates necessitatibus ratione culpa alias labore voluptas cum omnis dolores explicabo, amet soluta consequatur pariatur officiis. Porro.'
        },
        {
            'name': 'Scott Doe',
            'location': 'San Francisco, Ca',
            'description': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores mollitia vitae quis, sapiente voluptates necessitatibus ratione culpa alias labore voluptas cum omnis dolores explicabo, amet soluta consequatur pariatur officiis. Porro.'
        },
    ]
    res.render('about', {data: data});
})

module.exports = router;