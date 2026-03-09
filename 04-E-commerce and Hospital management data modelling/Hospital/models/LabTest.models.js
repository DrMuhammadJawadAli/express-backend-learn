import mongoose from 'mongoose'
const labTestSchema = new mongoose.Schema({
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
    testName:{
        type: String,
        required: true
    },
    result:{
        type: String
    },
    status:{
        type: String,
        enum: ["pending", "completed"],
        default: "pending"
    }
})
export const LabTest = mongoose.model("LabTest", labTestSchema)