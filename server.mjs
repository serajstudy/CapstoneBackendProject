// Import
import express from "express";
import dotenv from "dotenv";
import globalMiddle from "./middleware/globalMiddle.mjs";
import logmiddle from "./middleware/logmiddle.mjs";
import AppointmentsRoutes from "./routes/Appointments.mjs";
import CountriesRoute from "./routes/Countries.mjs";
import connectDB from "./config/dbconn.mjs";



// import AppointmentSchema from "./models/AppointmentSchema.mjs";
// import Country from "./models/CountrySchema.mjs";
// import User from "./models/UserSchema.mjs";




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

// Global Err Handling
app.use(globalMiddle);


// app.use(log);
// app.use(cors());

// Routes

app.use("/api/appointments", AppointmentsRoutes);
app.use("/api/countries", CountriesRoute);


// // Routes
// app.get("/", (req, res) => {
//   res.send("Testing, Home path");
// });




// Listener
 app.listen(PORT,()=>{
    console.log(`This Server is Running On this Port:${PORT}`)
 });
 