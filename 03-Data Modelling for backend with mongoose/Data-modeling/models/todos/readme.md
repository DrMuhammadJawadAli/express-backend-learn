special types = 
types: mongoose.Schema.Types.ObjectId,
ref: "User"

import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({})
export User = mongoose.model("User" , userSchema)
 // this is the name of the model
 // make the model on the sacham.
 // best practise is the make the variable name with model name to export it.