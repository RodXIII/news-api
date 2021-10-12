const DocumentModel = require('../../models/Document');

const getAllController = (req, res) => {
  DocumentModel.find({}).sort({createdAt: -1})
    .then(documents => res.status(200).send(documents))
    .catch(error => res.send(error))
}

module.exports = getAllController;