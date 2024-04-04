const express = require("express");
const app = express();
const routes = require("./src/routes/index.js");
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Database Connected");
    })
    .catch((err) => {
        console.log("Database connection failed" + err);
    });

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use('/', routes);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Listening to the server on http://localhost:${port}`);
});