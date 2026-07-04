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
C:\Users\VotreNom\Documents\download-organizer\app.js
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


# Auteur

ZAFIMALADY Jean B. Fraviogarry

GitHub :

https://github.com/Fravio99