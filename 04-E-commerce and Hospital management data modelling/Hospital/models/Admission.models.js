import mongoose from 'mongoose'
const admissionSchema = new mongoose.Schema({
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
    roomNumber:{
        type: String,
        required: true
    },
    admissionDate:{
        type: Date,
        required: true
    },
    dischargeDate:{
        type: Date
    },
    status:{
        type: String,
        enum: ["admitted", "discharged"],
        default: "admitted"
    }
})
export const Admission = mongoose.model("Admission", admissionSchema)
