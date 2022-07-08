const path = require("path")
const express = require("express")
const colors = require("colors")
const mongoose = require("mongoose")
const cors = require("cors")
const connectDB = require("./db/db")
const port = process.env.PORT || 5000

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: __dirname + '/.env' });
} else {
    const dotenv = require("dotenv").config()
}

// connectDB()

const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }));


mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.listen(port, () => {
            console.log("Connected successfully to server");
            console.log(`listening on port ${port}`)
        })
    })

app.use("/api/posts", require("./routes/postRoute"))

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
    app.get('/*', (req, res) =>
        res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html'))
        // res.sendFile(path.join(__dirname, '../', 'frontend', 'build', 'index.html'))
    );
} else {
    app.get('/', (req, res) => res.send('Please set to production'));
}


// app.listen(port, () => {
//     console.log(`listening on port ${port}`)
// })