import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

const app = express()
const port = 3000

let connect = await mongoose.connect("mongodb://localhost:27017/todo")

app.get('/', (req, res) => {
    const todo = new Todo({
        name: "Learn Mongoose",
        desc: "Learn how to use Mongoose with MongoDB",
        is_done: false,
        days: Math.floor(Math.random() * (8 - 3) +3)
    })
    todo.save()
  res.send('Hello World!')
})

app.get('/info', async (req, res) => {
  let todo = await Todo.findOne({})
  res.json({title: todo.name, desc: todo.desc})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})