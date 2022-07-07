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

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    app.get('*', (req, res) =>
        res.sendFile(
            path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
        )
    );
} else {
    app.get('/', (req, res) => res.send('Please set to production'));
}


app.listen(port, () => {
    console.log(`listening on port ${port}`)
})