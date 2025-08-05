import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import { User } from '../db/models/User.js'
const port = 3000
const app = express()

let connect = await mongoose.connect("mongodb://localhost:27017/user_auth")

app.use(cors())
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.post("/", async (req, res) => {
    let data = req.body
    console.log(req.body)
    await new User({
        username : data.name,
        password: data.password
    }).save()
    res.status(200).json({success:true})
})

app.listen(port, ()=>{
    console.log("Example listening on Port "+ port)
})