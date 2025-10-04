const express = require('express');
const cors = require('cors');
const mongodb = require('./db/connect');

// const professionalRoutes = require('./routes/professional');

const port = process.env.PORT || 8080;
const app = express();

app
    .use(cors()) //Handles all CORS headers
    .use(express.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    })
    .use('/', require('./routes/index'));


mongodb.initDB((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`Connected to DB and listening on ${port}`);
        });
    }
});

