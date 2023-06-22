const { Router } = require("express");
const usersRouter = require("./RouterUser/usersRouter");
const postRouter = require("./RouterPost/postRouter");
const selectRouter = require("./SelectRouter/selectRouter");

const mainRouter = Router();
mainRouter.use("/users", usersRouter);
mainRouter.use("/post", postRouter);
mainRouter.use("/select", selectRouter);

module.exports = mainRouter;
