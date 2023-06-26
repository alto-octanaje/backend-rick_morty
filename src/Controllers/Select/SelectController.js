const { default: axios } = require("axios");
const arraySpecies = (array) =>
  array.map((e) => ({
    species: e.species,
  }));
const arrayGender = (array) =>
  array.map((e) => ({
    gender: e.gender,
  }));

const arrayStatus = (array) =>
  array.map((e) => ({
    status: e.status,
  }));
const arrayOrigin = (array) =>
  array.map((e) => ({
    origin: e.origin.name,
  }));
const arrayLocation = (array) =>
  array.map((e) => ({
    location: e.location.name,
  }));
const arrayType = (array) =>
array.map((e) => ({
  gender: e.type,
}));

const getAllSpeciesC = async () => {
  let nextUrl = "https://rickandmortyapi.com/api/character/";
  const getAllSpeciesApi = [];
  while (nextUrl) {
    const findSpeciesApi = (await axios.get(nextUrl)).data;
    const allSpecies = arraySpecies(findSpeciesApi.results);
    getAllSpeciesApi.push(...allSpecies);
    nextUrl = findSpeciesApi.info.next;
  }

  const uniqueSpecies = [...new Set(getAllSpeciesApi.map((e) => e.species))];
  return uniqueSpecies;
};

const getAllGenderC = async () => {
  let nextUrl = "https://rickandmortyapi.com/api/character/";
  const getAllGenderApi = [];
  while (nextUrl) {
    const findGenderApi = (await axios.get(nextUrl)).data;
    const allGender = arrayGender(findGenderApi.results);
    getAllGenderApi.push(...allGender);
    nextUrl = findGenderApi.info.next;
  }

  const uniqueGender = [...new Set(getAllGenderApi.map((e) => e.gender))];
  return uniqueGender;
};


//   const findGenderApi = (
//     await axios.get("https://rickandmortyapi.com/api/character/")
//   ).data.results;
//   const allGender = arrayGender(findGenderApi);
//   const uniqueGender = [...new Set(allGender.map((e) => e.gender))];

//   return uniqueGender;
// };

const getAllStatusC = async () => {
  let nextUrl = "https://rickandmortyapi.com/api/character/";
  const getAllStatusApi = [];
  while (nextUrl) {
    const findStatusApi = (await axios.get(nextUrl)).data;
    const allStatus = arrayStatus(findStatusApi.results);
    getAllStatusApi.push(...allStatus);
    nextUrl = findStatusApi.info.next;
  }

  const uniqueStatus = [...new Set(getAllStatusApi.map((e) => e.status))];
  return uniqueStatus;
};

//   const findStatusApi = (
//     await axios.get("https://rickandmortyapi.com/api/character/")
//   ).data.results;
//   const allStatus = arrayStatus(findStatusApi);
//   const uniqueStatus = [...new Set(allStatus.map((e) => e.status))];

//   return uniqueStatus;
// };

const getAllOriginC = async () => {
  let nextUrl = "https://rickandmortyapi.com/api/character/";
  const getAllOriginApi = [];
  while (nextUrl) {
    const findOriginApi = (await axios.get(nextUrl)).data;
    const allOrigin = arrayOrigin(findOriginApi.results);
    getAllOriginApi.push(...allOrigin);
    nextUrl = findOriginApi.info.next;
  }

  const uniqueOrigin = [...new Set(getAllOriginApi.map((e) => e.origin))];
  return uniqueOrigin;
};


//   const findOriginApi = (
//     await axios.get("https://rickandmortyapi.com/api/character/")
//   ).data.results;
//   const allOrigin = arrayOrigin(findOriginApi);
//   const uniqueOrigin = [...new Set(allOrigin.map((e) => e.origin))];

//   return uniqueOrigin;
// };

const getAllLocationC = async () => {
  let nextUrl = "https://rickandmortyapi.com/api/character/";
  const getAllLocationApi = [];
  while (nextUrl) {
    const findLocationApi = (await axios.get(nextUrl)).data;
    const allLocation = arrayLocation(findLocationApi.results);
    getAllLocationApi.push(...allLocation);
    nextUrl = findLocationApi.info.next;
  }

  const uniqueLocation = [...new Set(getAllLocationApi.map((e) => e.location))];
  return uniqueLocation;
};
const getAllTypeC = async () => {
  let nextUrl = "https://rickandmortyapi.com/api/character/";
  const getAllTypeApi = [];
  while (nextUrl) {
    const findTypeApi = (await axios.get(nextUrl)).data;
    const allType = arrayType(findTypeApi.results);
    getAllTypeApi.push(...allType);
    nextUrl = findTypeApi.info.next;
  }

  const uniqueType = [...new Set(getAllTypeApi.map((e) => e.type))];
  return uniqueType;
};

module.exports = {
  getAllSpeciesC,
  getAllGenderC,
  getAllStatusC,
  getAllOriginC,
  getAllLocationC,
  getAllTypeC,
};
