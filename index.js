const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')
mongoose.set('strictQuery', false);
const userRouter = require("./routes/userRoute")
const authRouter = require("./routes/authentificationRoute")
const articleRouter = require("./routes/articleRoute")
const ErrorHandler = require("./middlewares/ErrorHandler")
require("dotenv").config()

const index = express()
index.use(cors({
  origin: 'http://localhost:3000'
}))
index.use(express.json())
index.use(express.urlencoded({ extended: true }))


index.use("/users", userRouter)
index.use("/authentification", authRouter)
index.use("/articles", articleRouter)

index.use("/*", (req, res) => {
  res.status(404).json("Not found!")
})
index.use(ErrorHandler)

mongoose
  .connect(process.env.MONGO_URI)
  .then((res) => {
    index.listen(process.env.PORT, () => {
      console.log(" MAGGIE you are the BEST")
    })
  })
  .catch((err) => console.log(err))