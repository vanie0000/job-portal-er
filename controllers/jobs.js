const Job = require('../models/job')

const showAll = async (req, res) => {
    try {
        const jobs = await Job.findAll();

        return res.status(200).json({ jobs:jobs });
       
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}; 


const createJob = async (req,res)=>{
    try {
        const {Title, Description, Location, Salary, DatePosted, CompanyID} = req.body
        const newJob = await Job.create({Title, Description, Location, Salary, DatePosted, CompanyID})

        return res.status(201).json({ message: 'Job added successfully', job: newJob })
        

    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createJob,
    showAll
}