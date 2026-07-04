const path = require("path");
const os = require("os");

module.exports = {
    // Parcourir le dossier "Download"
    downloadPath: path.join(os.homedir(), "Downloads"),

    categories: {
    Photos: [
        ".jpg",
        ".jpeg",
        ".png",
        ".gif",
        ".bmp",
        ".webp"
    ],

    Video: [
        ".mp4",
        ".mpg",
        ".avi",
        ".mkv",
        ".mov",
        ".ts"
    ],

     Music: [
        ".mp3",
        ".wav",
        ".aac",
        ".flac"
    ],

    Documents: [
        ".pdf",
        ".docx",
        ".doc",
        ".txt",
        ".xlsx",
        ".xls"
    ],

    Compressed: [
        ".zip",
        ".rar",
        ".7z"
    ],

    Programs: [
        ".exe",
        ".msi",
        ".dll",
        ".vbs",
        ".ps1",
        ".deb"
    ]
}
};