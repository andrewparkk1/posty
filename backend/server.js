const path = require("path")
const express = require("express")
const colors = require("colors")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const port = process.env.PORT || 5000
const app = express();

app.get("/", (req, res) => {
    res.send("asdf")
})


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})