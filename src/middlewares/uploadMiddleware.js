const multer = require('multer');
const path = require('path');
const uploadDirectory = path.join(__dirname, '../uploads');

// Configuração do Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDirectory); // Define o diretório de destino das imagens
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + '.' + file.originalname.split('.').pop()); // Define o nome do arquivo
    }
});

const upload = multer({storage: storage});

module.exports = upload;
