const { Router} = require('express')
const {createPostH,getAllPostH,getPostIDH}= require("../../handler/post/handlerPost");
const { createChatacterV } = require('../../validate/postValidate/postValidate');

const postRouter=Router();

postRouter.post("/",createChatacterV ,createPostH)
postRouter.get("/",getAllPostH)
postRouter.get("/:id",getPostIDH)
module.exports= postRouter;