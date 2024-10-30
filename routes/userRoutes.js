const express = require('express')


const {addUser, getAllUsers} = require('../controllers/user')
const {addCompany, showAll} = require('../controllers/company')


const router = express.Router()


router.route('/user-signup').post(addUser)
router.route('/allUsers').get(getAllUsers)
router.route('/company-signup').post(addCompany)
router.route('/allCompanies').get(showAll)

module.exports = router;