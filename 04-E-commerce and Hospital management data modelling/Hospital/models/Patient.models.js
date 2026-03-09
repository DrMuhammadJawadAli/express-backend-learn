import mongoose from 'mongoose'
const patientSchema = new mongoose.Schema({
    name:{ 
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    idNumber:{
        type: String,
        required: true,
        unique: true
    },    
    doctorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    nurseId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Nurse",
        required: true
    },
    surgeryId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Surgery",
        required: true
    },
    prescription:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Prescription
    },
    record:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Record
    },
    isAdmitted:{
        type: Boolean,
        default: false
    },
    admissionDate:{
        type: Date
    },
    dischargeDate:{
        type: Date
    },
    
})
const Patient = mongoose.model("Patient", patientSchema)