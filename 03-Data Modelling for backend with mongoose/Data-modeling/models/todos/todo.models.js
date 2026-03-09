import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
content:{
    type: String,
    required: true,
    },
complete:{
    type: Boolean,
    default: false
},
    createBy:{
    type: mongoose.Schema.Types.ObjectId, // special type to refrence Model.
    ref: "User" // this is that refrence and its compuslsory to mentioned ref in the next line.
    },
subTodos: [
    {
type: mongoose.Schema.Types.ObjectId,
ref: "SubTodo"
}
]

}, {timestamps: true})
export const Todo = mongoose.model("Todo", todoSchema)
// the "Todo" is going to save as a "todos" in the database
