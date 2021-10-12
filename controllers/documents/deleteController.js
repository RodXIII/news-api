const DocumentModel = require('../../models/Document');

const deleteController = (req, res) => {
  DocumentModel.findByIdAndRemove(req.params.id)
    .then(() => res.status(204).json())
    .catch(error => res.send(error))
}

module.exports = deleteController;