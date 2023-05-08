
const {
    ajouterArticle,
    lireArticle,
    lireTousArticles,
    modifierArticle,
    supprimerArticle
    
} = require('../controllers/articleController');

const articleRouter = require("express").Router()


articleRouter
// Route pour récupérer tous les articles
.get('/', lireTousArticles)

// Route pour récupérer un article par son id
.get('/:id', lireArticle)

// Route pour créer un article
.post('/', ajouterArticle)

// Route pour mettre à jour un article
.put('/:id', modifierArticle)

// Route pour supprimer un article
.delete('/:id', supprimerArticle)

module.exports = articleRouter
