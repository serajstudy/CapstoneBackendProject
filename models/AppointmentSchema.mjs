import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({ 

    countryId : 
    { type: mongoose.Schema.Types.ObjectId, 
        ref: "Country", 
        required: true,
    },
    
    userId : 
    {type: mongoose.Schema.Types.ObjectId, 
        ref: "User", 
        required: true,
    },

    message : 
    { type: String, 
        required: true, 
    },

})

export default mongoose.model ("Appointment", AppointmentSchema);
