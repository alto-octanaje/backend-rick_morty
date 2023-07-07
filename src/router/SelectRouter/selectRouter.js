const { Router } = require("express");
const {
  getAllSpecieH,
  getAllGenderH,
  getAllStatusH,
  getAllOriginH,
  getAllLocationH,
  getAllTypeH,
  getAllFullH,
  getSpeciesIDH,
} = require("../../handler/select/handlerSelect");

const selectRouter = Router();

selectRouter.get("/", getAllFullH);
selectRouter.get("/species", getAllSpecieH);
selectRouter.get("/species/:id",getSpeciesIDH)
selectRouter.get("/gender", getAllGenderH);
selectRouter.get("/status", getAllStatusH);
selectRouter.get("/origin", getAllOriginH);
selectRouter.get("/location", getAllLocationH);
selectRouter.get("/type", getAllTypeH);




module.exports = selectRouter;
