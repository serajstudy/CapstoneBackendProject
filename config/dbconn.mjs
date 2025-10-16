import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


const connectionStr = process.env.MONGO_URI || "";

async function connectDB() {

    try {

        console.log()
        await mongoose.connect(connectionStr,{
       
        });
        console.log(`MongooseDB Connected here`);
        
    } catch (err) {
        console.error(err.message);

        
    }
    
}


export default connectDB;
