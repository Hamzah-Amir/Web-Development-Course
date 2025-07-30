import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  name: String,
  desc: String,
  is_done: Boolean,
  days: Number
});

export const Todo = mongoose.model('todo', todoSchema);