const express = require("express")
const mongoose = require("mongoose")
mongoose.set('strictQuery', false);



const ErrorHandler = require("./middlewares/ErrorHandler")

const userRouter = require("./routes/userRoute")
const authRouter = require("./routes/authentificationRoute")
const articleRouter = require("./routes/articleRoute")




require("dotenv").config()

const index = express()
index.use(express.json())
index.use(express.urlencoded({ extended: true }))


index.use("/users", userRouter)
index.use("/authentification", authRouter)
index.use("/article", articleRouter)

index.use("/*", (req, res) => {
  res.status(404).json("Not found!")
})
index.use(ErrorHandler)

mongoose
  .connect(process.env.MONGO_URI)
  .then((res) => {
    index.listen(process.env.PORT, () => {
      console.log("Server is running madjda you are the BEST")
    })
  })
  .catch((err) => console.log(err))