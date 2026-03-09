import mongoose from "mongoose";
const nurseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  idNumber: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Department",
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  shiftTiming: {
    type: String,
    required: true,
  },
  patients: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
    },
  ],
    joiningDate: {
      type: Date,
      required: true
    },
    jobStatus: {
      type: String,
      enum: ["active", "inactive"],
      default: "active"
    },
    
});
const Nurse = mongoose.model("Nurse", nurseSchema);
