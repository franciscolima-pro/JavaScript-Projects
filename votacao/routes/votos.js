const express = require('express');
const router = express.Router();
const Voto = require('../models/voto');

router.post('/:enqueteId/opcoes/:opcaoId/votar', async (req, res) => {
  const { enqueteId, opcaoId } = req.params;

  //lógica para validar se a enquete está ativa

  try {
    await Voto.vote(enqueteId, opcaoId);
    res.status(200).json({ message: 'Voto registrado com sucesso.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao registrar voto.' });
  }
});

