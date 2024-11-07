const express = require('express')
const path = require('path')
require('dotenv').config()

const sequelize = require('./db/connect')
const defineRelationships = require('./db/relationships')
const userRoutes = require('./routes/userRoutes')
const homepage = require('./routes/homepage')
const jobRoutes = require('./routes/jobRoutes')
const { showAll } = require('./controllers/jobs');

const app = express()

// views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use('/', homepage)

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