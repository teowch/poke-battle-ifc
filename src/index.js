const battle = require('./battle');
const stats = require('./stats');

const express = require('express');
const app = express();

app.get('/battle', battle);

app.get('/stats', stats);

console.log(app)

app.listen(8080);