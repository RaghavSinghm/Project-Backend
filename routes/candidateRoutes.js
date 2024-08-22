const express = require('express');
const candidateController = require('../controllers/candidateController');
const router = express.Router();

router.post('/candidate', candidateController.addCandidate);
router.get('/candidate', candidateController.getCandidates);

module.exports = router;
