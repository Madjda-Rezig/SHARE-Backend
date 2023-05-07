const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema(
    {
      idUser: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        required: true,
      },
      
      nomarticle: {
        type: String,
        required: true,
      },
      article: {
        type: String,
        required: true,
      },
      reponses: [
        {
          idUser: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "User",
            required: true,
          },
          article: {
            type: String,
            required: true,
          },
          date: {
            type: Date,
            default: new Date(),
          },
        },
      ],
      date: {
        type: Date,
        default: Date.now,
      },
    },
    { timestamps: true }
  );
  
  module.exports = mongoose.model("article", ArticleSchema);