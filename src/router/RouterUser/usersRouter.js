const {Router} =require("express")
const { getApiUsers, getUsersId,postUser }= require("../../handler/users/HandlerUsers");
const { crateUsersV } = require("../../validate/userValidate/userValidate");


const usersRouter= Router();


usersRouter.get("/", getApiUsers)
usersRouter.get("/:id",getUsersId)

usersRouter.post("/",crateUsersV, postUser)

module.exports= usersRouter;