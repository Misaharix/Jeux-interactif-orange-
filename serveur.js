const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// 🔹 Sert les fichiers statiques (HTML, CSS, JS) depuis le dossier actuel
app.use(express.static(__dirname));

// 🔹 Route principale : renvoie index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 🔹 Démarrage du serveur
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur http://localhost:${PORT}`);
});
