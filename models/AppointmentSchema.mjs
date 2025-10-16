import mongoose from "mongoose";

const AppointmentSchema = new mongoose.Schema({
    name : { type : String, required:true},
    user : {type : String},
    message : {type : String}

})

export default mongoose.model ("Appointment", AppointmentSchema);
