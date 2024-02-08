require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const path = require('path');
const app = express();

// Configuration pour parser le corps des requêtes en JSON
app.use(bodyParser.json());

app.use(express.static('public'));

// Cette route envoie la clé API au client
app.get('/api-key', (req, res) => {
    res.json({ apiKey: process.env.PIXABAY_API_KEY });
});


// Remplacez ceci par l'URL de votre webhook Discord
const discordWebhookUrl = process.env.DISCORD_WEBHOOK_URL;

app.post('/sendImage', (req, res) => {
    const imageUrl = req.body.imageUrl;
    const message = {
        content: `Voici votre image sélectionnée : ${imageUrl}`
    };

    axios.post(discordWebhookUrl, message)
        .then(response => {
            console.log('Message posté');
            res.send({ success: true, message: 'Image envoyée avec succès à Discord!' });
        })
        .catch(error => {
            console.error('Erreur lors de l\'envoi du message', error);
            res.send({ success: false, message: 'Échec de l\'envoi de l\'image à Discord.' });
        });
});

// Définir le port sur lequel le serveur écoute
const PORT = process.env.PORT || 5500
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
