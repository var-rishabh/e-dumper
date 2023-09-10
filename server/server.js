const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();

const connectDB = require("./config/db");
connectDB();

app.get("/", async (req, res) => {
    try {
        return res.status(200).json({
            status: "success",
            message: "API running successfully",
            data: null,
        });
    } catch (err) {
        return res.status(401).json({
            status: "failure",
            message: "API not running successfully",
            data: null,
        });
    }
});

app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(`Error: ${err}`.red);
    }
    console.log(`Server running on PORT ${process.env.PORT}`.blue.underline);
});
