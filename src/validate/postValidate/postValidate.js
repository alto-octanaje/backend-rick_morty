const              createChatacterV=(req,res,next)=>{
    const {name,image,statusId,speciesId,typeId,genderId,locationId,originId,userId}= req.body;
    if(!name) return res.status(400).json({error:"Missing Name" })
    if(!statusId) return res.status(400).json({error:"Missing status" })
    if(!speciesId) return res.status(400).json({error:"Missing species" })
    if(!typeId) return res.status(400).json({error:"Missing type" })
    if(!genderId) return res.status(400).json({error:"Missing gender" })
    if(!image) return res.status(400).json({error:"Missing image" })
    if(!locationId) return res.status(400).json({error:"Missing location" })
    if(!originId) return res.status(400).json({error:"Missing origin" })
    if(!userId) return res.status(400).json({error:"Missing userId" })


    next();
}
 module.exports={createChatacterV}