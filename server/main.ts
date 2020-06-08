import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";

// Initialize env variables
dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log("Connected.");
})