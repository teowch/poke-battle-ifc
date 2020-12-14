const battle = require('./battle');
const stats = require('./stats');

const express = require('express');
const app = express();

app.get('/', stats);

app.listen(process.env.PORT || 8080);