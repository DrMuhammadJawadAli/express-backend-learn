import mongoose from "mongoose";
import { Billing } from "./Billing.models";
const surgerySchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
  },
    surgeryType: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
},
    roomNumber: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["scheduled", "completed", "cancelled"],
        default: "scheduled"
    },
    BillingAmount: { 
        type: Number,
        required: true
     },
        billingStatus: {  
            type: String,
            enum: ["paid", "unpaid"],
            default: "unpaid"
        },
        


});      
export const Surgery = mongoose.model("Surgery", surgerySchema);
