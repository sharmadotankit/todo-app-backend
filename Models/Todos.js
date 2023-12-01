const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodoSchema = new Schema({
        userId: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        text: {
            type: String,
            required:true,
        },
        completed: {
            type: Boolean,
        },
    },
    {timestamps:true}
);

const Todo = mongoose.model('todo', TodoSchema);
module.exports = Todo;