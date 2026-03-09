import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, 
        unique: true
},
    password: {
        type: String,
        required: true
    },
    email:{type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ["admin", "doctor", "nurse", "staff"],
        required: true
    },
    staff: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Staff"
    },
    

},
{timestamps: true})
export const User = mongoose.model("User", userSchema)