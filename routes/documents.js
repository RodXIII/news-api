const router = require('express').Router();
const DocumentModel = require('../models/Document');

const getAllController = require('../controllers/documents/getAllController');

router.get('/', getAllController);

module.exports = router;