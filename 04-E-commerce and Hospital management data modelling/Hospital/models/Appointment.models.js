import mongoose from 'mongoose'

const appointmentSchema = new mongoose.Schema({
    timing:{
        type:Date,
        required:true
    },
    doctor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    patient:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },
    status:{
        type: String,
        enum: ["scheduled", "completed", "cancelled"],
        default: "scheduled"
    },
    reason:{
        type: String,
        required: true,

    },
    nurse:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Nurse"
    },
    billingAmount:{
        type: Number,
        required: true
    },
    ticketNumber:{
        type: String,
        required: true,
        unique: true
    },
  billingStatus:{
    type: String,
    enum: ["paid", "unpaid"],
    default: "unpaid"
  },
})
export const Appointment = mongoose.model("Appointment", appointmentSchema)
