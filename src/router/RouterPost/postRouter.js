const { Router} = require('express')
const {createPostH}= require("../../handler/post/handlerPost");
const { createChatacterV } = require('../../validate/postValidate/postValidate');

const postRouter=Router();


postRouter.post("/",createChatacterV ,createPostH)
// postRouter.get("/:id",getUsersId)
// postRouter.post("/",postUser)
module.exports= postRouter;