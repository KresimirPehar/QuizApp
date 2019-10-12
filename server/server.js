const express = require('express');
const resultsRouter = require('./router/resultsRouter');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./database/config');

const app = express();
const PORT = 5000;

mongoose.connect(config.DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(results => console.log('Connected to database'))
    .catch(err => console.log(`Can't connect to database:`, err));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({ secret: 'mysecret', resave: true, saveUninitialized: false }));

app.use('/results', resultsRouter);

app.listen(PORT, () => {
    console.log('Listening on port:', PORT);
})