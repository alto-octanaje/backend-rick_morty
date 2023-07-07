const { default: axios } = require("axios");
const {
  postUser,
  status,
  species,
  type,
  gender,
  location,
  origin,
} = require("../../db");

const cleanArray = (array) =>
  array.map((e) => ({
    id: e.id,
    name: e.name,
    status: e.status,
    species: e.species,
    type: e.type,
    gender: e.gender,
    image: e.image,
    location: e.location.name,
    origin: e.origin.name,
  }));
const cleanObject = (object) => {
  return {
    id: object.id,
    name: object.name,
    status: object.status,
    species: object.species,
    type: object.type,
    gender: object.gender,
    image: object.image,
    location: object.location.name,
    origin: object.origin.name,
  };
};

const createPostC = async (
  name,
  image,
  statusId,
  speciesId,
  typeId,
  genderId,
  locationId,
  originId,
  userId
) => {
  const newPost = await postUser.create({
    name,
    image,
  });
  await newPost.setStatus(statusId);
  await newPost.setSpecies(speciesId);
  await newPost.setType(typeId);
  await newPost.setGender(genderId);
  await newPost.setLocation(locationId);
  await newPost.setOrigin(originId);
  await newPost.setUser(userId);
  return newPost;
};
const getAllPostApi = async () => {
  const fullDataApi = (
    await axios.get("https://rickandmortyapi.com/api/character/")
  ).data.results;
  const postAllApi = cleanArray(fullDataApi);
  return postAllApi;
};
const getAllPostDB = async () => {
  const postAllDB = await postUser.findAll({
    include: [
      { model: species, attributes: ["name"] },
      { model: status, attributes: ["name"] },
      { model: type, attributes: ["name"] },
      { model: gender, attributes: ["name"] },
      { model: location, attributes: ["name"] },
      { model: origin, attributes: ["name"] },
    ],
  });
  return postAllDB;
};
const getAllPostC = async () => {
  const postAllApi = await getAllPostApi();
  const postAllDB = await getAllPostDB();

  return [...postAllDB, ...postAllApi];
};

const idPostC = async (id, source) => {
  const findPost =
    source === "api"
      ? cleanObject(
          (await axios.get(`https://rickandmortyapi.com/api/character/${id}`))
            .data
        )
      : await postUser.findOne({
        where: { id: id },
        include: [
          { model: species, attributes: ["name"] },
          { model: status, attributes: ["name"] },
          { model: type, attributes: ["name"] },
          { model: gender, attributes: ["name"] },
          { model: location, attributes: ["name"] },
          { model: origin, attributes: ["name"] },
        ],
      });
  console.log("controlles");
  console.log(findPost);
  return findPost;
};

module.exports = { createPostC, getAllPostC, idPostC };
