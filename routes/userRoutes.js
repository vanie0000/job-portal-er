const express = require('express')


const {addUser, getAllUsers} = require('../controllers/user')
const {addCompany, showAll} = require('../controllers/company')


const router = express.Router()


router.route('/addUser').post(addUser)
router.route('/allUsers').get(getAllUsers)
router.route('/addCompany').post(addCompany)
router.route('/allCompanies').get(showAll)

module.exports = router;