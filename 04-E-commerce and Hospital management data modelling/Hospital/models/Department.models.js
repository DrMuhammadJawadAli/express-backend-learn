import mongoose from 'mongoose'
const departmentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    headOfDepartment:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor", },
    doctors:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"   }],
    nurses:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Nurse"   }],
        
})
export const Department = mongoose.model("Department", departmentSchema)