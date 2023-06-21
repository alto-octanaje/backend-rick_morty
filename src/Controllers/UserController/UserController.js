const { where } = require("sequelize");
const { user, postUser } = require("../../db");
const axios = require("axios");

const cleanArray = (array) =>
  array.map((e) => ({
    id: e.id,
    name: e.name,
  }));

const getAllUsers = async () => {
  const userApiRaw = (
    await axios.get("https://rickandmortyapi.com/api/character/")
  ).data.results;
  const userDB = await user.findAll();
  const userApi = cleanArray(userApiRaw);
  return [...userApi, ...userDB];
};
const searchUserName = async (name) => {
  const nameDB = await user.findAll({ where: { name } });
  const userApiNameRaw = (
    await axios.get("https://rickandmortyapi.com/api/character/")
  ).data.results;
  const userApiName = cleanArray(userApiNameRaw);
  const nameApi = userApiName.filter((e) => e.name === name);
  return [...nameDB, ...nameApi];
};

const CreateUser = async (name) => {
  return await user.create({ name });
};

const idUser = async (id, source) => {
  const miUser =
    source === "api"
      ? (await axios.get(`https://rickandmortyapi.com/api/character/${id}`))
          .data
      : await user.findByPk(id, {
          include: {
            model: postUser,
            attributes: ["name"],
          },
        });

  return miUser;
};
module.exports = { CreateUser, idUser, getAllUsers, searchUserName };
