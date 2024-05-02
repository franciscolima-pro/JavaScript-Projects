const express = require('express');
const router = express.Router();
const Enquete = require('../models/enquete');
const Opcao = require('../models/opcao');

router.get('/', async (req, res) => {
  try {
    const [rows, fields] = await Enquete.getAll();
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao buscar enquetes.');
  }
});

router.post('/', async (req, res) => {
  const { titulo, data_inicio, data_fim } = req.body;

  try {
    const novaEnquete = new Enquete(titulo, data_inicio, data_fim);
    const result = await Enquete.create(novaEnquete);
    const enqueteId = result[0].insertId;

    const opcoes = ['JavaScript', 'Python', 'Java']; // Opções para a enquete
    for (const opcao of opcoes) {
      await Opcao.create({ enqueteId, opcao });
    }

    res.status(201).send('Enquete criada com sucesso.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao criar enquete.');
  }
});

module.exports = router;