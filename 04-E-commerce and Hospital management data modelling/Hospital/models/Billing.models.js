import mongoose from 'mongoose'
const billingSchema = new mongoose.Schema({
    appointment:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment",
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    status:{
        type: String,
        enum: ["paid", "unpaid"],
        default: "unpaid"
    }
})
export const Billing = mongoose.model("Billing", billingSchema)