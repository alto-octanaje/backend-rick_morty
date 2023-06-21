const { postUser}=require('../../db')
const createPostC=async(name,status,species,type,gender,image,location,origin,userId)=>{
    const newPost= await postUser.create({name,status,species,type,gender,image,location,origin})
    await newPost.setUser(userId)
    return newPost
}
module.exports={createPostC}