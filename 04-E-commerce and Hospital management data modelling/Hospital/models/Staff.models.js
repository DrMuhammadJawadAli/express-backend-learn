import mongoose from "mongoose";
const staffSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
},
    role: {
        type: String,
        required: true,

    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department",
    },
    contactNumber: {
        type: String,
        required: true
    }
})      
export const Staff = mongoose.model("Staff", staffSchema)