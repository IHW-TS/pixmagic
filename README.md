# PixMagic

PixMagic est une application web qui permet aux utilisateurs de rechercher et de sélectionner des images libres de droits via l'API Pixabay, et de les partager directement sur un canal Discord grâce à un webhook.

## Fonctionnalités

- Recherche d'images basée sur des mots-clés.
- Affichage des résultats sous forme de galerie d'images.
- Envoi de l'image sélectionnée vers un canal Discord via un webhook.

## Prérequis

Pour exécuter cette application, vous aurez besoin de Node.js et npm installés sur votre machine.

## Installation

Suivez ces étapes pour installer et exécuter PixMagic :

```bash
# Clonez le dépôt
git clone <URL_DU_DEPOT>

# Accédez au dossier du projet
cd pixmagic

# Installez les dépendances
npm install

# Démarrez le serveur
npm start
```
## Configuration

Créez un fichier .env dans le dossier racine du projet et ajoutez les clés d'API nécessaires :
```bash
PIXABAY_API_KEY=<votre_clé_api_pixabay>
DISCORD_WEBHOOK_URL=<votre_webhook_url_discord>
```
## Utilisation

Une fois le serveur démarré, ouvrez votre navigateur et allez à http://localhost:5500 pour commencer à utiliser l'application.

Construit avec :
```bash
- Node.js
- Express
- Axios
- Pixabay API
```
## Contribuer

Les contributions sont ce qui rend la communauté open source un lieu d'apprentissage, d'inspiration et de créativité. Toutes les contributions sont grandement appréciées.

Forkez le projet
Créez votre branche de fonctionnalité (git checkout -b feature/AmazingFeature)
Committez vos changements (git commit -m 'Add some AmazingFeature')
Poussez votre branche (git push origin feature/AmazingFeature)
Ouvrez une Pull Request
