const Opcao = require('../models/opcao');

exports.getAllOpcoesByEnqueteId = (req, res, next) => {
  const enqueteId = req.params.enqueteId;
  Opcao.getAllByEnqueteId(enqueteId)
    .then(([rows, fields]) => {
      res.status(200).json(rows);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'Something went wrong' });
    });
};

exports.createOpcao = (req, res, next) => {
  const enqueteId = req.params.enqueteId;
  const opcao = req.body.opcao;
  const novaOpcao = new Opcao(enqueteId, opcao);
  Opcao.create(novaOpcao)
    .then(result => {
      res.status(201).json({ message: 'Opcao created successfully', opcaoId: result.insertId });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'Something went wrong' });
    });
};

exports.updateOpcao = (req, res, next) => {
  const opcaoId = req.params.opcaoId;
  const opcao = req.body.opcao;
  const atualizaOpcao = new Opcao(null, opcao);
  Opcao.update(opcaoId, atualizaOpcao)
    .then(result => {
      res.status(200).json({ message: 'Opcao updated successfully' });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'Something went wrong' });
    });
};

exports.deleteOpcao = (req, res, next) => {
  const opcaoId = req.params.opcaoId;
  Opcao.delete(opcaoId)
    .then(result => {
      res.status(200).json({ message: 'Opcao deleted successfully' });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: 'Something went wrong' });
    });
};