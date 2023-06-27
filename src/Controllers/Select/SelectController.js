const { default: axios } = require("axios");

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
    allSpecies: [...getAllSpeciesApi] ,
     allGender: [...getAllGenderApi] ,
     allStatus: [...getAllStatusApi] ,
     allOrigin: [...getAllOriginApi] ,
     allLocation: [...getAllLocationApi] ,
     allType: [...getAllTypeApi] ,
  }
  console.log(allFullData);
  return allFullData;
};

const getAllSpeciesC = async () => {
  const { allSpecies } =await getAllSelectFull()
  console.log(allSpecies);
  return allSpecies;
};

const getAllGenderC = async () => {
  const { allGender } =await getAllSelectFull()
  console.log(allGender);
  return allGender;
};

const getAllStatusC = async () => {
  const { allStatus} =await getAllSelectFull()
  console.log(allStatus);
  return allStatus;
};

const getAllOriginC = async () => {
  const { allOrigin} =await getAllSelectFull()
  console.log(allOrigin);
  return allOrigin;
};

const getAllLocationC = async () => {
  const { allLocation} =await getAllSelectFull()
  console.log(allLocation);
  return allLocation;
};
const getAllTypeC = async () => {
  const { allType} =await getAllSelectFull()
  console.log(allType);
  return allType;
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
