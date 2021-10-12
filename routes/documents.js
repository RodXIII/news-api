const router = require('express').Router();
const DocumentModel = require('../models/Document');

const getAllController = require('../controllers/documents/getAllController');
const createController = require('../controllers/documents/createController');
const deleteController = require('../controllers/documents/deleteController');
const putController = require('../controllers/documents/putController');

router.get('/', getAllController);
router.post('/', createController);
router.delete('/:id', deleteController);
router.put('/:id', putController);

module.exports = router;