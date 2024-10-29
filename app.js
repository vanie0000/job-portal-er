const express = require('express')
const path = require('path')
require('dotenv').config()

const connectDB = require('./db/connect')

const app = express()

app.use(express.static(path.join(__dirname, 'public')));

// urls

const port = process.env.PORT
const start = async()=>{
    try {
        await connectDB(process.env.DB_URL)
        app.listen(port, ()=>{
            console.log(`Server is running on port ${port}...`)
        })

    } catch (error) {
        console.log(error)
    }
}

start()