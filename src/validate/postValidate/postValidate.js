const              createChatacterV=(req,res,next)=>{
    const {name,status,species,type,gender,image,location,origin,userId}= req.body;
    if(!name) return res.status(400).json({error:"Missing Name" })
    if(!status) return res.status(400).json({error:"Missing status" })
    if(!species) return res.status(400).json({error:"Missing species" })
    if(!type) return res.status(400).json({error:"Missing type" })
    if(!gender) return res.status(400).json({error:"Missing gender" })
    if(!image) return res.status(400).json({error:"Missing image" })
    if(!location) return res.status(400).json({error:"Missing location" })
    if(!origin) return res.status(400).json({error:"Missing origin" })
    if(!userId) return res.status(400).json({error:"Missing userId" })


    next();
}
 module.exports={createChatacterV}