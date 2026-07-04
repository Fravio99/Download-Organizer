# 📂 Download Organizer

Un script **Node.js** permettant d'organiser automatiquement le dossier **Téléchargements (Downloads)** sous Windows.

Le script classe les fichiers dans des dossiers selon leur extension :

| Catégorie | Extensions |
|-----------|------------|
| 📷 Photos | .jpg, .jpeg, .png, .gif, .webp |
| 🎥 Videos | .mp4, .avi, .mkv, .mov, .ts |
| 📄 Documents | .pdf, .doc, .docx, .txt, .xlsx |
| 🎵 Musiques | .mp3, .wav, .ogg |
| 📦 Archives | .zip, .rar, .7z |
| 📁 Others | Tous les autres fichiers |

---

# Prérequis

Avant d'installer le projet, assurez-vous d'avoir :

- Windows 10 ou Windows 11
- Node.js installé sous votre Windows
- Git (facultatif mais recommandé)

---

# 1. Installer Node.js

Téléchargez Node.js :

https://nodejs.org/

Vérifiez l'installation :

```bash
node -v
```

Puis :

```bash
npm -v
```

Les deux commandes doivent afficher un numéro de version.

---

# 2. Télécharger le projet

## Option 1 : Avec Git

Ouvrir PowerShell ou Invite de commandes :

```bash
git clone https://github.com/Fravio99/Download-Organizer.git
```

Entrer dans le dossier :

```bash
cd download-organizer
```

---

## Option 2 : Télécharger le ZIP

1. Ouvrir le dépôt GitHub
2. Cliquer sur **Code**
3. Cliquer sur **Download ZIP**
4. Extraire le dossier

---

# 3. Installer les dépendances

Dans le dossier du projet :

```bash
npm install
```

---

# 4. Configurer le dossier Downloads

Ouvrir le fichier :

```
src/config.js
```

Modifier le chemin si nécessaire.

Exemple :

```javascript
module.exports = {

    downloadFolder: "C:\\Users\\VotreNom\\Downloads"

}
```

---

# 5. Configurer les catégories

Toujours dans `config.js` :

```javascript
Photos: [
    ".jpg",
    ".jpeg",
    ".png"
],

Videos: [
    ".mp4",
    ".avi",
    ".mkv"
],

Documents: [
    ".pdf",
    ".docx"
]
```

Vous pouvez ajouter autant d'extensions que vous souhaitez.

---

# 6. Tester le projet

Exécuter :

```bash
node src/index.js
```

Le script va :

- lire le dossier Downloads
- créer les dossiers nécessaires
- déplacer les fichiers
- écrire les logs

---

# 7. Vérifier le résultat

Votre dossier Downloads ressemblera à ceci :

```
Downloads

│

├── Photos

├── Videos

├── Documents

├── Musiques

├── Archives

└── Others
```

---

# 8. Consulter les logs

Les journaux sont enregistrés dans :

```
logs/
```

Exemple :

```
2026-06-20 08:00

photo.jpg

→ Photos
```

---

# Planification automatique sous Windows

Le script peut être exécuté automatiquement chaque jour grâce au **Planificateur de tâches Windows**.

---

## Étape 1 : Ouvrir le Planificateur de tâches

Appuyer sur :

```
Windows
```

Rechercher :

```
Planificateur de tâches
```

Puis ouvrir l'application.

---

## Étape 2 : Créer une tâche

Cliquer :

```
Créer une tâche...
```

---

## Étape 3 : Onglet Général

Nom :

```
Download Organizer
```

Cocher :

```
Exécuter même si l'utilisateur n'est pas connecté
```

---

## Étape 4 : Déclencheurs

Cliquer :

```
Nouveau...
```

Choisir :

```
Tous les jours
```

Exemple :

```
08:00
```

Valider.

---

## Étape 5 : Actions

Cliquer :

```
Nouveau...
```

Programme :

```
node
```

Arguments :

```
C:\Users\VotreNom\Documents\download-organizer\src\index.js
```

Dans :

```
C:\Users\VotreNom\Documents\download-organizer
```

Valider.

---

## Étape 6 : Enregistrer

Cliquer sur :

```
OK
```

Le script sera désormais exécuté automatiquement chaque jour.

---

# Alternative : Utiliser un fichier BAT

Créer un fichier :

```
start-organizer.bat
```

Contenu :

```bat
@echo off

cd /d C:\Users\VotreNom\Documents\download-organizer

node src\index.js
```

Dans le Planificateur de tâches :

Programme :

```
start-organizer.bat
```

---

# Exécuter manuellement

À tout moment :

```bash
node src/index.js
```

---

# Structure du projet

```
download-organizer/

│

├── src/

│   ├── index.js

│   ├── organizer.js

│   ├── config.js

│   ├── logger.js

│   └── utils.js

│

├── logs/

│

├── package.json

│

└── README.md
```

---

# Ajouter une nouvelle catégorie

Dans `config.js` :

```javascript
Codes: [

".js",

".ts",

".html",

".css"

]
```

Le script créera automatiquement :

```
Downloads

└── Codes
```

---

# Fonctionnement

Le script suit l'algorithme suivant :

```
Lire le dossier Downloads

↓

Pour chaque fichier

↓

Récupérer son extension

↓

Chercher la catégorie correspondante

↓

Créer le dossier si nécessaire

↓

Déplacer le fichier

↓

Écrire un log

↓

Fin
```

Complexité :

```
O(n)
```

où **n** représente le nombre de fichiers présents dans le dossier Downloads.

---

# Dépannage

## Node n'est pas reconnu

Vérifier :

```bash
node -v
```

Si une erreur apparaît, réinstallez Node.js et cochez l'option **Add to PATH** pendant l'installation.

---

## Les fichiers ne sont pas déplacés

Vérifiez :

- le chemin du dossier Downloads
- les permissions Windows
- que les fichiers ne sont pas ouverts par une autre application

---

## Le Planificateur de tâches ne fonctionne pas

Vérifiez :

- le chemin vers `node.exe`
- le chemin vers `index.js`
- le répertoire de travail ("Démarrer dans")
- l'historique des tâches dans le Planificateur

---

# Licence

MIT

---

# Auteur

Votre Nom

GitHub :

https://github.com/VOTRE-UTILISATEUR