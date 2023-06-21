const { where } = require("sequelize");
const { user, postUser } = require("../../db");
const axios = require("axios");

const cleanArray = (array) =>
  array.map((e) => ({
    id: e.id,
    name: e.name,
  }));

const getAllCharacters = async () => {
  const userApiRaw = (
    await axios.get("https://rickandmortyapi.com/api/character/")
  ).data.results;
  const userDB = await user.findAll();
  const userApi = cleanArray(userApiRaw);
  return [...userApi, ...userDB];
};
const searchCharacters = async (name) => {
  const nameDB = await user.findAll({ where: { name } });
  const userApiNameRaw = (
    await axios.get("https://rickandmortyapi.com/api/character/")
  ).data.results;
  const userApiName = cleanArray(userApiNameRaw);
  const nameApi = userApiName.filter((e) => e.name === name);
  return [...nameDB, ...nameApi];
};

const CreateCharacters = async (name) => {
  return await user.create({ name });
};

const idCharacters = async (id, source) => {
  const charactersFind=
    source === "api"
      ? (await axios.get(`https://rickandmortyapi.com/api/character/${id}`))
          .data
      : await user.findByPk(id, {
          include: {
            model: postUser,
            attributes: ["name"],
          },
        });

  return charactersFind;
};
module.exports = { CreateCharacters, idCharacters, getAllCharacters, searchCharacters };
