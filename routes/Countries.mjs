import express from "express";
import Country from "../models/CountrySchema.mjs";
import { countriesData } from "../data/data.mjs";
const router = express.Router();

router.get("/seed", async(req,res)=>{
    try {
        await Country.deleteMany({});
        await Country.insertMany(countriesData);
        res.send("Sucess: database seeded and updated")
        
    } catch (err) {
        console.json(err)
        console.error(err.message);

        
    }

})



    


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
