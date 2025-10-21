// Import
import express from "express";
import dotenv from "dotenv";
import globalMiddle from "./middleware/globalMiddle.mjs";
import logmiddle from "./middleware/logmiddle.mjs";
import AppointmentsRoutes from "./routes/Appointments.mjs";
import CountriesRoute from "./routes/Countries.mjs";
import UserRoutes from "./routes/Users.mjs"
import connectDB from "./config/dbconn.mjs";
import cors from "cors";







// Setups
 
dotenv.config();
const app = express();
const PORT = process.env.PORT ||3001;

// DB Connection
connectDB();


// Middleware

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(logmiddle);
app.use(cors());

// Global Err Handling
app.use(globalMiddle);





// Routes

app.use("/api/appointment", AppointmentsRoutes);
app.use("/api/countries", CountriesRoute);
app.use("/api/users", UserRoutes);




// // Routes
// app.get("/", (req, res) => {
//   res.send("Testing, Home path");
// });




// Listener
 app.listen(PORT,()=>{
    console.log(`This Server is Running On this Port:${PORT}`)
 });
 