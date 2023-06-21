const { Router } = require("express");
const usersRouter = require("./RouterUser/usersRouter");
const postRouter =require("./RouterPost/postRouter")

const mainRouter = Router();
mainRouter.use("/users", usersRouter);
mainRouter.use("/post",postRouter)

module.exports = mainRouter;
