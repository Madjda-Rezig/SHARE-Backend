const mongoose = require("mongoose")

//Role
const Role = Object.freeze(["admin", "utilisateur"])
//Sexe
const Sexe = Object.freeze(["Homme", "Femme"])
//Super classe
const UserSchema = mongoose.Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    prenom: {
      type: String,
      required: true,
    },
    mail: {
      type: String,
      required: true,
      unique: true,
    },
    date_de_naissance: {
      type: Date,
      required: true,
    },
    sexe: {
      type: String,
      required: true,
      enum: Sexe,
    },
    mot_de_passe: {
      type: String,
      required: true,
    },
    num_tel: {
      type: Number,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: Role,
    },
  },
  { timestamps: true }
)
//Sub classes

const AdminSchema = new mongoose.Schema({})

const UtilisateurSchema = new mongoose.Schema({})




UserSchema.set("discriminatorKey", "role")
UserSchema.discriminator("admin", AdminSchema)
UserSchema.discriminator("utilisateur", UtilisateurSchema)


module.exports = mongoose.model("users", UserSchema)
