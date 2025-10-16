import express from "express";
import User from "../models/UserSchema.mjs";
import { Userdata } from "../data/data.mjs";
const router = express.Router();

router.get("/seed",async(req,res)=>{
    try {

        await User.deleteMany({});
        await User.insertMany(Userdata);
        res.send("Sucess: database seeded and updated")
        
    } catch (err) {
        res.json(err)
        console.error(err.message);
        
    }
})





// CRUD routes
router
  .route("/")
  .get(async (req, res) => {
    const users = await User.find({});
    res.json(users);
  })
  .post(async (req, res) => {
    const newUser = await User.create(req.body);
    res.json(newUser);
  });

router
  .route("/:id")
  .get(async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
  })
  .put(async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUser);
  })
  .delete(async (req, res) => {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) res.json({ msg: "User does not exist" });
    else res.json(deletedUser);
  });

export default router;

