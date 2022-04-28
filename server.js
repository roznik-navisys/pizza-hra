/* eslint-disable */
const express = require('express');

const port = process.env.port || 3000;
const app = express();

app.use(express.static(__dirname + '/dist/'));
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
})

app.listen(port);
console.log('Server started successfully');