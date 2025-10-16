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


// router.post("/seed", async (req, res) => {
//   try {
//     await Appointment.deleteMany({});

//     const users = await User.find({});
//     const countries = await Country.find({});

//     const appointmentsToInsert = appointmentsdata.map(a => {
//       const user = users.find(u => u.name === a.user);
//       const country = countries.find(c => c.name === a.country);

//       return {
//         userId: user?._id,
//         countryId: country?._id,
//         message: a.message
//       };
//     }).filter(a => a.userId && a.countryId);

//     await Appointment.insertMany(appointmentsToInsert);

//     res.send("Appointments seeded successfully!");
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json(err);
//   }
// });





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

