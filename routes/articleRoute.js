
const {
    ajouterArticle,
    lireArticle,
    lireTousArticles,
    modifierArticle,
    supprimerArticle
    
} = require('../controllers/articleController');
const multer = require('multer')
const path = require('path')
const articleRouter = require("express").Router()

const upload = multer({
    storage: multer.diskStorage({
        destination: function(req,file,callback) {
            callback(null, path.join(__dirname, "../images") )
        },
        filename: function (req, file, callback) {
            callback(null, `${Date.now().toString()}.jpeg`)
        }
    })
})

articleRouter

.get('/', lireTousArticles)
.get('/:id', lireArticle)
.post('/',upload.single('photo'), ajouterArticle)
.put('/:id', modifierArticle)
.delete('/:id', supprimerArticle)

module.exports = articleRouter
