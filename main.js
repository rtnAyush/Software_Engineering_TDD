import express from "express";
const app = express();
import routes from "./src/routes/index.js";
import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import mongoose from "mongoose";
import bodyParser from "body-parser";

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