const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); 

app.get('/api/breeds', async (req, res) => {
  try {
    const response = await axios.get('https://dog.ceo/api/breeds/list/all');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter as raças de cães.' });
  }
});

app.get('/api/breeds/image/:breed/random', async (req, res) => {
    const { breed } = req.params;
    try {
      const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);//https://dog.ceo/api/breed/hound/images
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao obter as raças de cães.' });
    }
  });


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});