const Enquete = require('../models/enquete');

exports.getAllEnquetes = (req, res, next) => {
  Enquete.getAll()
    .then(([rows, fields]) => {
      res.status(200).json(rows);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'Something went wrong' });
    });
};

exports.getEnqueteById = (req, res, next) => {
  const enqueteId = req.params.enqueteId;
  Enquete.getById(enqueteId)
    .then(([rows, fields]) => {
      if (rows.length > 0) {
        res.status(200).json(rows[0]);
      } else {
        res.status(404).json({ error: 'Enquete not found' });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'Something went wrong' });
    });
};

exports.createEnquete = (req, res, next) => {
  const { titulo, data_inicio, data_fim } = req.body;
  const enquete = new Enquete(titulo, data_inicio, data_fim);
  Enquete.create(enquete)
    .then(result => {
      res.status(201).json({ message: 'Enquete created successfully', enqueteId: result.insertId });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'Something went wrong' });
    });
};

exports.updateEnquete = (req, res, next) => {
  const enqueteId = req.params.enqueteId;
  const { titulo, data_inicio, data_fim } = req.body;
  const enquete = new Enquete(titulo, data_inicio, data_fim);
  Enquete.update(enqueteId, enquete)
    .then(result => {
      res.status(200).json({ message: 'Enquete updated successfully' });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'Something went wrong' });
    });
};

exports.deleteEnquete = (req, res, next) => {
  const enqueteId = req.params.enqueteId;
  Enquete.delete(enqueteId)
    .then(result => {
      res.status(200).json({ message: 'Enquete deleted successfully' });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'Something went wrong' });
    });
};