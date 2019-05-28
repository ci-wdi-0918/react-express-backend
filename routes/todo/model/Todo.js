const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    todo: {type: String, default: ''}
})

module.exports = mongoose.model('Todo', TodoSchema);
