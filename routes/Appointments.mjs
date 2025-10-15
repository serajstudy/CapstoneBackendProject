import express from "express";
const router = express.Router();






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