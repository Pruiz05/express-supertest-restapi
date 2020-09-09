const express = require('express');
const app = express();


app.use(express.json());

app.use('/users',require('./routes/user'))

app.listen(8080);
console.log('Server on port 8080');

module.exports = app;