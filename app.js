const express = require('express')
const path = require('path')
require('dotenv').config()

const sequelize = require('./db/connect')
const defineRelationships = require('./db/relationships')

const app = express()

app.use(express.static(path.join(__dirname, 'public')));


const port = process.env.PORT
const start = async()=>{
    try {
        await sequelize.sync()
        defineRelationships()

        await sequelize.sync()

        app.listen(port, ()=>{
            console.log(`Server is running on port ${port}...`)
        })

    } catch (error) {
        // console.log(error)
    }
}

start()