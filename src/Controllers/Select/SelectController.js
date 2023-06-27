const { default: axios } = require("axios");
const { species, gender, location, origin, status, type } = require("../../db");

const arrayFull = (array) =>
  array.map((e) => ({
    species: e.species,
    gender: e.gender,
    status: e.status,
    origin: e.location.name,
    location: e.location.name,
    type: e.type,
  }));

const getAllSelectFull = async () => {
  let nextUrl = "https://rickandmortyapi.com/api/character/";
  const getAllSFull = [];
  while (nextUrl) {
    const findSpeciesApi = (await axios.get(nextUrl)).data;
    const allFull = arrayFull(findSpeciesApi.results);
    getAllSFull.push(...allFull);
    nextUrl = findSpeciesApi.info.next;
  }

  const getAllSpeciesApi = [...new Set(getAllSFull.map((e) => e.species))];
  const getAllGenderApi = [...new Set(getAllSFull.map((e) => e.gender))];
  const getAllStatusApi = [...new Set(getAllSFull.map((e) => e.status))];
  const getAllOriginApi = [...new Set(getAllSFull.map((e) => e.origin))];
  const getAllLocationApi = [...new Set(getAllSFull.map((e) => e.location))];
  const getAllTypeApi = [...new Set(getAllSFull.map((e) => e.type))];
  const allFullData = {
    allSpecies: [...getAllSpeciesApi],
    allGender: [...getAllGenderApi],
    allStatus: [...getAllStatusApi],
    allOrigin: [...getAllOriginApi],
    allLocation: [...getAllLocationApi],
    allType: [...getAllTypeApi],
  };
  return allFullData;
};

const getAllSpeciesC = async () => {
  const seeSpecies = await species.findAll();

  if (seeSpecies.length) return seeSpecies;
  else return "alert Empty database..";
};

const getAllGenderC = async () => {
  const seeGender = await gender.findAll();

  if (seeGender.length) return seeGender;
  else return "alert Empty database..";
};

const getAllStatusC = async () => {
  const seeStatus = await status.findAll();

  if (seeStatus.length) return seeStatus;
  else return "alert Empty database..";
};

const getAllOriginC = async () => {
  const seeOrigin = await origin.findAll();

  if (seeOrigin.length) return seeOrigin;
  else return "alert Empty database..";
};

const getAllLocationC = async () => {
  const seeLocation = await location.findAll();

  if (seeLocation.length) return seeLocation;
  else return "alert Empty database..";
};
const getAllTypeC = async () => {
  const seeType = await type.findAll();

  if (seeType.length) return seeType;
  else return "alert Empty database..";
};


module.exports = {
  getAllSpeciesC,
  getAllGenderC,
  getAllStatusC,
  getAllOriginC,
  getAllLocationC,
  getAllTypeC,
  getAllSelectFull,

};
