// Import
import express from "express";
import dotenv from "dotenv";




// Setups
 
dotenv.config();
const app = express();
const PORT = process.env.PORT ||3001;

// DB Connection

// Middleware

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use((req,res,next)=>{
  console.log(`{req.method}-${req.path}`);
  next;

})

// Global Err Handling
app.use((err,req,res,next)=>{
  res.status(500).json({msg:`Error-${err.messae}`});

})


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
 