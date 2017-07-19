const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.json([
        {
            id: 1,
            name: 'test1',
            url: 'http://160.16.201.215:9001/test/testImg1.png'
        },
        {
            id: 2,
            name: 'test2',
            url: 'http://160.16.201.215:9001/test/testImg2.png'
        },
        {
            id: 3,
            name: 'test3',
            url: 'http://160.16.201.215:9001/test/testImg3.png'
        }
    ]);
});

module.exports = router;
