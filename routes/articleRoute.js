
const {
    ajouterArticle,
    lireArticle,
    lireTousArticles,
    modifierArticle,
    supprimerArticle
    
} = require('../controllers/articleController');

const articleRouter = require("express").Router()


articleRouter

.get('/', lireTousArticles)
.get('/:id', lireArticle)
.post('/', ajouterArticle)
.put('/:id', modifierArticle)
.delete('/:id', supprimerArticle)

module.exports = articleRouter
