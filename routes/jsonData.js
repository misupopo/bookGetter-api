const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.json([
        {
            name: 'test1',
            url: 'http://160.16.201.215:9001/testImg1.png'
        },
        {
            name: 'test2',
            url: 'http://160.16.201.215:9001/testImg2.png'
        },
        {
            name: 'test3',
            url: 'http://160.16.201.215:9001/testImg3.png'
        }
    ]);
});

module.exports = router;
