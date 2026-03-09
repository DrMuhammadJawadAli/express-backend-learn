import mongoose from 'mongoose'
const recordSchema = new mongoose.Schema({
    patient:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },
    doctor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    diagnosis:{
        type: String,
        required: true
    },
    treatment:{
        type: String,
        required: true
    }
})
export const Record = mongoose.model("Record", recordSchema)