const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodoSchema = new Schema({
        userId: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        todoName: {
            type: String,
            required:true,
        },
        status: {
            type: Boolean,
        },
    },
    {timestamps:true}
);

const Todo = mongoose.model('todo', TodoSchema);
module.exports = Todo;