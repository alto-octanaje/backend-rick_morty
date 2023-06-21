const {
  CreateUser,
  idUser,
  getAllUsers,
  searchUserName
} = require("../../Controllers/UserController/UserController");

const getApiUsers = async (req, res) => {
 try {
  const { name } = req.query;
  if (name){
    const searchByName= await searchUserName(name)
    res.status(200).json(searchByName)
  } 
  else {
    const getAll= await getAllUsers()
    res.status(200).json(getAll)

  }
 } catch (error) {
    res.status(400).json({error:error.message})  
 }
};
const getUsersId = async (req, res) => {
  try {
    const { id } = req.params;
    const source = isNaN(id) ? "DB" : "api";
    const findID = await idUser(id, source);

    res.status(200).json(findID);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const postUser = async (req, res) => {
  try {
    const { name } = req.body;
    const newUser = await CreateUser(name);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getApiUsers,
  getUsersId,
  postUser,
};
