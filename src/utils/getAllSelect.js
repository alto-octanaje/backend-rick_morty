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
      !allSpecies.length ||
      !allGender.length ||
      !allLocation.length ||
      !allOrigin.length ||
      !allStatus.length ||
      !allType.length
    ) { 
      // const findSpecies = (
      //   await axios.get("http://localhost:3001/select/species")).data;
      // findSpecies.map((e) => {
      //   species.findOrCreate({ where: { name: e, }, });
      // });
      // const findGender = (
      //   await axios.get("http://localhost:3001/select/gender")).data;
      // findGender.map((e) => {
      //   gender.findOrCreate({ where: { name: e, }, });
      // });
      const findOrigin = (
        await axios.get("http://localhost:3001/select/origin")).data;
      findOrigin.map((e) => {
        origin.findOrCreate({ where: { name: e, }, });
      });
      const findLocation = (
        await axios.get("http://localhost:3001/select/location")).data;
      findLocation.map((e) => {
        location.findOrCreate({ where: { name: e, }, });
      });
      
      const findStatus = (
        await axios.get("http://localhost:3001/select/status")).data;
      findStatus.map((e) => {
        status.findOrCreate({ where: { name: e, }, });
      });
      const findType = (
        await axios.get("http://localhost:3001/select/type")).data;
      findType.map((e) => {
        type.findOrCreate({ where: { name: e, }, });
      });


      return console.log("all Select ");
    } else console.log("tiene elementos ");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllSelect,
};
