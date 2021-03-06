const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema(
    { task: String, done: Boolean },
    { timestamps: { createdAt: 'created_at' } }
)

const Todo = mongoose.model('todo', todoSchema)
exports['Todo'] = Todo