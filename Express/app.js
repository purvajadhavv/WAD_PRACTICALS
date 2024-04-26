const express = require("express")

const mongoose = require('mongoose')

const url = 'mongodb+srv://rutuja:Rutuja520ng16@cluster0.bnnfoua.mongodb.net/Mydb'
const app = express()
mongoose.connect(url)
app.use(express.json())
const mydbRouter = require('./Routes/mydbroutes')
app.use('/',mydbRouter)
app.listen(4000, () => {console.log("Port working")})
