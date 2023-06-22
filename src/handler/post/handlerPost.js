const { Model } = require("sequelize");
const {
  createPostC,
  getAllPostC,
  idPostC,
} = require("../../Controllers/Post/PostController");
const { user, postUser } = require("../../db");
 
const createPostH = async (req, res) => {
  try {
    const {
      name,
      status,
      species,
      type,
      gender,
      image,
      location,
      origin,
      userId,
    } = req.body;
    const newPost = await createPostC(
      name,
      status,
      species,
      type,
      gender,
      image,
      location,
      origin,
      userId
    );
    res.status(201).json(newPost);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getAllPostH = async (req, res) => {
  try {
    const getAll = await getAllPostC();
    res.status(200).json(getAll);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getPostIDH = async (req, res) => {
  try {

    const { id } = req.params;
    const source = isNaN(id) ? "BB" : "api";
    const findID = await idPostC(id, source);
  
    res.status(200).json(findID);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createPostH,
  getAllPostH,
  getPostIDH,
};
