const battle = require('./battle');
const stats = require('./stats');

const express = require('express');
const app = express();

app.get('/', stats);

app.listen(8080);