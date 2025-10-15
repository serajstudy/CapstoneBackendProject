import express from "express";
import country from "../models/Country.mjs";
const router = express.Router();

// Create

router.route("/").get(async(req,res)=>{
    let countries = await Country.find({});
    res.json(countries);

})

.post(async(req,res)=>{
    let newCountries = await Country.create(req.body);
    res.json(newCountries);
})

router.route("/:id").get(async(req,res)=>{
    let atCounries = await Counry.findbyId(req.params.id);
    res.json(atCounries);
})

.put (async(req,res)=>{
    let updateCounries = await Country.findbyIdAndupdate(req.params.id,req.body,{new:true});
    res.json(updateCounries);
})

.delete(async(req,res)=>{
    let deletedCounries = await Country.findbyIdAndDelete(req.params.id);
    if(!deleledCounries) res.json({msg:"err doesnot exist"});
    else res.json(deletedCounries);
});

export default router;
