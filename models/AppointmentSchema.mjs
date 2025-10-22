import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({ 
    countryId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "Country", 
        required: false, 
    },
    
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: false, 
    },

    name: { 
        type: String, 
        required: true,   
    },

    email: { 
        type: String, 
        required: true,   
    },

    message: { 
        type: String, 
        required: true, 
    },

}, { timestamps: true }); 

export default mongoose.model("Appointment", AppointmentSchema);
