import mongoose from "mongoose";

const CountrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
}, { timestamps: true });

export default mongoose.model("Country", CountrySchema);