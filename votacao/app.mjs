const express = require('express');
const bodyParser = require('body-parser');
const enquetesRouter = require('./routes/enquetes');
const opcoesRouter = require('./routes/opcoes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/enquetes', enquetesRouter);
app.use('/enquetes/:enqueteId/opcoes', opcoesRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});