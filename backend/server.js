const path = require("path")
const express = require("express")
const colors = require("colors")
const mongoose = require("mongoose")
const dotenv = require("dotenv").config()
const cors = require("cors")
const connectDB = require("./db/db")
const port = process.env.PORT || 5000


connectDB()

const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


app.use("/", require("./routes/postRoute"))


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})