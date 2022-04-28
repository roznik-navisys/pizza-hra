/* eslint-disable */
const express = require('express');

const port = process.env.port || 3000;
const app = express();

app.use(express.static(__dirname + '/dist/'));
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
})

const today = new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const dateTime = date+' '+time;

app.listen(port);
console.log('Server started successfully ' + dateTime);