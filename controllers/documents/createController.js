const DocumentModel = require('../../models/Document');

async function createController (req, res) {
  try {

    const document = await new DocumentModel({
      title: req.body.title,
      description: req.body.description,
      date: req.body.date,
      content: req.body.content,
      archiveDate: req.body.archiveDate,
      author: req.body.author
    }).save() 

    res.status(201).send(document);
    
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = createController;