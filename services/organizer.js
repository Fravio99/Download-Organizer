const fs = require("fs");
const path = require("path");

const { downloadPath, categories } = require("../utils/config");

function organizeDownloads() {

    // Lire le contenu du dossier Downloads
    const files = fs.readdirSync(downloadPath);

    files.forEach(file => {

        const filePath = path.join(downloadPath, file);

        // Ignorer tous ce qui n'est pas fichier
        if (!fs.statSync(filePath).isFile()) {
            return;
        }

        // Récuperer l'extension du fichier
        const extension = path.extname(file).toLowerCase();

        let folderName = "Others";

        // Chercher la catégorie correspondante à chaque fichier
        for (const category in categories) {

            if (categories[category].includes(extension)) {
                folderName = category;
                break;
            }

        }

        const destinationFolder = path.join(downloadPath, folderName);

        // Créer le dossier si nécessaire
        if (!fs.existsSync(destinationFolder)) {
            fs.mkdirSync(destinationFolder);
        }

        let destination = path.join(destinationFolder, file);

        destination = getUniquePath(destination);

        // Déplacer le fichier
        fs.renameSync(filePath, destination);

        console.log(`${file} → ${folderName}`);

    });

}

// Incrementer les fichier qui on une même nom pour eviter le doublon
function getUniquePath(destination) {

    if (!fs.existsSync(destination)) {
        return destination;
    }

    const extension = path.extname(destination);
    const filename = path.basename(destination, extension);
    const directory = path.dirname(destination);

    let i = 1;
    let newPath;

    do {
        newPath = path.join(
            directory,
            `${filename} (${i})${extension}`
        );
        i++;
    } while (fs.existsSync(newPath));

    return newPath;
}

module.exports = organizeDownloads;