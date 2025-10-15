// Import
import express from "express";
import dotenv from "dotenv";
import globalMiddle from "./middleware/globalMiddle.mjs";
import logmiddle from "./middleware/logmiddle.mjs";




// Setups
 
dotenv.config();
const app = express();
const PORT = process.env.PORT ||3001;

// DB Connection

// Middleware

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(logmiddle);

// Global Err Handling
app.use(globalMiddle);


// app.use(log);
// app.use(cors());

// Routes
// Routes
app.get("/", (req, res) => {
  res.send("Testing, Home path");
});




// Listener
 app.listen(PORT,()=>{
    console.log(`This Server is Running On this Port:${PORT}`)
 });
 