const mongoose = require('mongoose');

const DocumentSchema = mongoose.Schema({
  title: String,
  description: String,
  date: String,
  content: String,
  author: String,
  archive_date: String,
});

const DocumentModel = mongoose.model('document', DocumentSchema);

module.exports = DocumentModel;