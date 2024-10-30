const express = require('express');

const {showAll, createJob} = require('../controllers/jobs')

const router = express.Router()

router.route('/all').get(showAll)
router.route('/new').post(createJob)


module.exports = router