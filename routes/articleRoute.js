const express = require('express');
const router = express.Router();
const {protect} = require("../middlewares/authMiddleware");
const {
    getAllArticles,
    getArticleById,
    createArticle,
    updateArticle,
    deleteArticle
} = require('../controllers/articleController');

// Route pour récupérer tous les articles
router.get('/', getAllArticles);

// Route pour récupérer un article par son id
router.get('/:id', getArticleById);

// Route pour créer un article
router.post('/', protect, createArticle);

// Route pour mettre à jour un article
router.put('/:id', protect, updateArticle);

// Route pour supprimer un article
router.delete('/:id', protect, deleteArticle);

module.exports = router;
