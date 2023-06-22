const { Router } = require("express");
const {getAllSpecieH} =require("../../handler/select/handlerSelect")

const selectRouter = Router();

selectRouter.get("/",getAllSpecieH);
module.exports = selectRouter;
