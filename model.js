
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/bookGetter';

mongoose.Promise = Promise;

db = mongoose.createConnection(url, function (err, res) {
    if (err) {
        console.log('Error connected: ' + url + ' - ' + err);
    } else {
        console.log('Success connected: ' + url);
    }
});

mongoose.connection.close();
