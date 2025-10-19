import express from "express";
import Appointment from "../models/AppointmentSchema.mjs";
import { appointmentsdata } from "../data/data.mjs";
import User from "../models/UserSchema.mjs";
import Country from "../models/CountrySchema.mjs";




const router = express.Router();


router.get("/seed", async(req,res)=>{
    try {
        await Appointment.deleteMany({});
        await Appointment.insertMany(appointmentsdata);
        res.send("Sucess : database seeded and updated");
        
    } catch (err) {
        res.json(err)
        console.error(err.message);
        
    }
});



// Create

router
.route("/")
.get(async(req,res)=>{
    let appts = await Appointment.find({});
    res.json(appts);
})

.post(async(req,res)=>{
    let newAppt = await Appointment.create(req.body);
    res.json(newAppt);
})

router
.route("/:id")
.get(async(req,res)=>{
    let atAppt = await Appointment.findById(req.params.id);
    res.json(atAppt);

})

.put(async(req,res)=>{
    let updateAppt = await Appointment.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(updateAppt);

})

.delete(async(req,res)=>{
    let deletedAppt = await Appointment.findByIdAndDelete(req.params.id);
    if(!deletedAppt) res.json({msg:"err doesnot exit"});
    else res.json(deletedAppt);
});

export default router;

