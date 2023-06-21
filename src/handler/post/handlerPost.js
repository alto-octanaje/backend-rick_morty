const { Model } = require("sequelize")
const {createPostC} =require("../../Controllers/Post/PostController")

const createPostH= async (req,res )=>{
    try {
        const {name,status,species,type,gender,image,location,origin,userId}= req.body
    const newPost =await createPostC(name,status,species,type,gender,image,location,origin,userId)
    res.status(201).json(newPost)
    
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


module.exports={
    createPostH
}