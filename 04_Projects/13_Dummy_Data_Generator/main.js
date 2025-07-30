import express from 'express'
import mongoose from 'mongoose'
import { Employee } from './models/data.js'
const app = express()
const port = 3000
app.use(express.json())
app.use(express.static('public'))

let connect = await mongoose.connect("mongodb://localhost:27017/Company")

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/generate', async(req, res) => {
  await Employee.deleteMany({})
  await Employee.insertMany(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})