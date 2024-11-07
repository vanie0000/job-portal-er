const express = require('express')
const path = require('path')

const {addUser, getAllUsers} = require('../controllers/user')
const {addCompany, showAll} = require('../controllers/company')


const router = express.Router()


router.route('/allUsers').get(getAllUsers)
router.route('/allCompanies').get(showAll)


router.route('/user-signup').get((_,res)=>{
    res.sendFile(path.join(__dirname, '..','public/html', 'user-signup.html'));
}).post(addUser)

router.route('/company-signup').get((_,res)=>{
    res.sendFile(path.join(__dirname, '..','public/html', 'company-signup.html'));
}).post(addCompany)



module.exports = router;