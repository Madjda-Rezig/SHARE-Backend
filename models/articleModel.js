const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema(
  {
    titre: {
      type: String,
      required: true,
    },
    contenu: {
      type: String,
      required: true,
    },
    auteur: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: false,
    },
    date_creation: {
      type: Date,
      default: Date.now,
    },
    photo: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("articles", ArticleSchema);
