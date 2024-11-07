const express = require('express');
const { showAll, createJob } = require('../controllers/jobs');

const router = express.Router();

router.route('/all').get(showAll)
router.route('/add').post(createJob)

module.exports = router;
