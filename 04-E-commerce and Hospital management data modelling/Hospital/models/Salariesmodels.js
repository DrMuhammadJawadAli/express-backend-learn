import mongoose from 'mongoose'
const salariesSchema = new mongoose.Schema({
    staffId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Staff",
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
export const Salaries = mongoose.model("Salaries", salariesSchema)