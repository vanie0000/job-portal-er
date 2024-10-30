const Job = require('../models/job')

const showAll = async (req,res)=>{
    try {
        const jobs = await Job.findAll()  
        res.status(200).json({ jobs })   

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const createJob = async (req,res)=>{
    try {
        const {Title, Description, Location, Salary, DatePosted, CompanyID} = req.body
        const newJob = await Job.create({Title, Description, Location, Salary, DatePosted, CompanyID})

        res.status(201).json({ message: 'Job added successfully', job: newJob })
        

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createJob,
    showAll
}