const express = require('express')
const path = require('path')
require('dotenv').config()

const sequelize = require('./db/connect')
const defineRelationships = require('./db/relationships')
const userRoutes = require('./routes/userRoutes')
const jobRoutes = require('./routes/jobRoutes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))


// urls
app.use('/api/v1/accounts', userRoutes)
app.use('/api/v1/jobs', jobRoutes)


const port = process.env.PORT
const start = async()=>{
    try {
        await sequelize.sync()
        defineRelationships()

        app.listen(port, ()=>{
            console.log(`Server is running on port ${port}...`)
        })

    } catch (error) {
        console.log(error)
    }
}

start()