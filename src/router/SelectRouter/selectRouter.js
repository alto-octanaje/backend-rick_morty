const { Router } = require("express");
const {getAllSpecieH,getAllGenderH,getAllStatusH,getAllOriginH,getAllLocationH} =require("../../handler/select/handlerSelect")

const selectRouter = Router();

selectRouter.get("/species",getAllSpecieH);
selectRouter.get("/gender",getAllGenderH)
selectRouter.get("/status",getAllStatusH)
selectRouter.get("/origin",getAllOriginH)
selectRouter.get("/location",getAllLocationH)
module.exports = selectRouter;
