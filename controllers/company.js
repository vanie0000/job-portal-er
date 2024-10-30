const Company = require('../models/company')

const showAll = async (req,res)=>{
    try {
        const companies = await Company.findAll()  
        res.status(200).json({ companies })   

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const addCompany = async (req,res)=>{
    try {
        const {CompanyName, ContactEmail} = req.body
        const newCompany = await Company.create({CompanyName, ContactEmail});

        res.status(201).json({ message: 'Job added successfully', company: newCompany })
        

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    addCompany,
    showAll
}