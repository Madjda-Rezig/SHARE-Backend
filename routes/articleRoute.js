
const {
    getAllArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle
} = require('../controllers/articleController');

const articleRouter = require("express").Router()


articleRouter
// Route pour récupérer tous les articles
.get('/', getAllArticles)

// Route pour récupérer un article par son id
.get('/:id', getArticleById)

// Route pour créer un article
.post('/', protect, createArticle)

// Route pour mettre à jour un article
.put('/:id', protect, updateArticle)

// Route pour supprimer un article
.delete('/:id', protect, deleteArticle)

module.exports = articleRouter;
