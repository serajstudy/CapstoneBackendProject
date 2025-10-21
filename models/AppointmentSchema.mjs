import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({ 
    countryId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Country", 
        required: false, // optional if you don’t want to require it
    },
    
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: false, // optional if you don’t want to require it
    },

    name: { 
        type: String, 
        required: true,   // customer name
    },

    email: { 
        type: String, 
        required: true,   // customer email
    },

    message: { 
        type: String, 
        required: true, 
    },

}, { timestamps: true }); // optional: adds createdAt and updatedAt

export default mongoose.model("Appointment", AppointmentSchema);
