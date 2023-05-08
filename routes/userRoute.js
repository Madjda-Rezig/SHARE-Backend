const {
    ajouterUtilisateur,
    modifierUtilisateur,
    supprimerUtilisateur,
    autoDelete,
    
  } = require("../controllers/userController")

  const userRouter = require("express").Router()
  
  userRouter
    .post("/add", ajouterUtilisateur)
    .put("/modifier", modifierUtilisateur)
    .delete("/delete/:id", supprimerUtilisateur)
    .delete("/delete", autoDelete)
  
  module.exports = userRouter