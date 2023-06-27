const axios = require("axios");
const { species, gender, location, origin, status, type } = require("../db");

const getAllSelect = async () => {
  try {
    const allSpecies = await species.findAll();
    const allGender = await gender.findAll();
    const allLocation = await location.findAll();
    const allOrigin = await origin.findAll();
    const allStatus = await status.findAll();
    const allType = await type.findAll();

    if (
      !allSpecies.length &&
      !allGender.length &&
      !allLocation.length &&
      !allOrigin.length &&
      !allStatus.length &&
      !allType.length
    ) {
      const allSelectFull = (await axios.get("http://localhost:3001/select/"))
        .data;

      allSelectFull.allSpecies.map((e) => {
        species.findOrCreate({ where: { name: e } });
      });
      allSelectFull.allGender.map((e) => {
        gender.findOrCreate({ where: { name: e } });
      });
      allSelectFull.allLocation.map((e) => {
        location.findOrCreate({ where: { name: e } });
      });
      allSelectFull.allOrigin.map((e) => {
        origin.findOrCreate({ where: { name: e } });
      });
      allSelectFull.allStatus.map((e) => {
        status.findOrCreate({ where: { name: e } });
      });
      allSelectFull.allType.map((e) => {
        type.findOrCreate({ where: { name: e } });
      });
      return console.log("all Select ");
    } 
    else  console.log("full Data ");
    
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllSelect,
};
