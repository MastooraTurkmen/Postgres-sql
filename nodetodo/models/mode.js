const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    username: {
        type: String,
    },
    todo: {
        type: String,
    },
    isDone: {
        type: Boolean
    },
    hasAttachment: {
        type: Boolean
    }
})

const Todo = mongoose.user.models.Todo || mongoose.model("Todo", todoSchema);

module.exports = Todo;