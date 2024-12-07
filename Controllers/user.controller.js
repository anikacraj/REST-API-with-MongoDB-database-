
const { use } = require("../app");
const userModel =require("../Models/user.model")

const {v4: uuidv4} =require("uuid");

const getAllUsers = async (req,res)=>{
try {
    const users = await userModel.find();
    res.status(200).json(users);

} catch (error) {
    res.status(500).send(error.message);
}  
}

const getOneUser =async (req,res)=>{
try {
    const user = await user.findOne({id:req.params.id})
res.status(200).json(user)
} catch (error) {
    res.status(500).send(error.message);
}

   
}

const createUser =async (req,res)=>{
 try {
    const newUser =  new userModel({
        id: uuidv4(),
        name:req.body.name,
        age:Number(req.body.age)
    })

    await newUser.save();
    res.status(201).json({
        message:" user is created"
    });
 } catch (error) {
    res.status(500).send(error.message)
 }
}

const updatedUser =async (req,res)=>{
try {
const user = await userModel.findOne({id: req.params.id});
user.name = req.body.name;
user.age = Number(req.body.age);
await user.save();

    res.status(200).json({
        message:"updated user"
    });
} catch (error) {
    res.status(200).json(error.message);
}   
}

const deleteUser = async (req,res)=>{
   try {
    await userModel.deleteOne({id: req.params.id})
    res.status(200).json({
        message:'user is deleted'
    });
   } catch (error) {
    res.status(500).send(error.message)
   }
}

module.exports ={getAllUsers , getOneUser ,createUser ,updatedUser,deleteUser};

