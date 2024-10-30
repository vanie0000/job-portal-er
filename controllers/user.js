const User = require('../models/user')

// Create a new user
const addUser = async (req, res) => {
    try {
        const {Name, Email, Password, PhoneNumber } = req.body
        const newUser = await User.create({Name, Email, Password, PhoneNumber })

        res.status(201).json({ message: 'User added successfully', user: newUser })

    } catch (error) {

        res.status(500).json({ error: error })
    }
};

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll() 
        res.status(200).json({ users })     
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};



module.exports = {
    addUser,
    getAllUsers
}