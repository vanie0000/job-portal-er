const express = require('express');
const { showAll } = require('../controllers/jobs');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const jobs = await showAll(req,res)
        console.log(jobs)

    } catch (error) {
        console.error('Error fetching jobs:', error);
        return res.status(500).json({ msg: error.message })
    }
});

module.exports = router;
