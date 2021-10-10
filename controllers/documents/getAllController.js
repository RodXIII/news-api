const DocumentModel = require('../../models/Document');

const getAllController = (req, res) => {
  DocumentModel.find({})
    .then(documents => res.send(documents))
    .catch(error => res.send(error))
}

module.exports = getAllController;