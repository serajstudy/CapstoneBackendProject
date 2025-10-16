import mongoose from "mongoose";

const CountrySchema = new mongoose.Schema({
    name : { type : String, required:true},
    description: {type : String},

})


export default mongoose.model("Country", CountrySchema);
