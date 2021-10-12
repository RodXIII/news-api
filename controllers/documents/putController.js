const DocumentModel = require('../../models/Document');

const putController = (req, res) => {
  DocumentModel.findByIdAndUpdate(req.params.id, req.body)
    .then(document => res.status(201).send(document))
    .catch(error => res.send(error))
}

module.exports = putController;