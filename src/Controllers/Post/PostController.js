const { default: axios } = require("axios");
const { postUser } = require("../../db");

const cleanArray = (array) =>
  array.map((e) => ({
    id: e.id,
    name: e.name,
    status:e.status,
    species:e.species,
    type:e.type,
    gender:e.gender,
    image:e.image,
    location:e.location.name,
    origin:e.origin.name,
  }));
  const cleanObject = (object) =>{
  return {
    id: object.id,
    name: object.name,
    status:object.status,
    species:object.species,
    type:object.type,
    gender:object.gender,
    image:object.image,
    location:object.location.name,
    origin:object.origin.name,
  };}

const createPostC = async (
  name,
  status,
  species,
  type,
  gender,
  image,
  location,
  origin,
  userId
) => {
  const newPost = await postUser.create({
    name,
    status,
    species,
    type,
    gender,
    image,
    location,
    origin,
  });
  await newPost.setUser(userId);
  return newPost;
}; 
const getAllPostApi=async()=>{
  const  fullDataApi= (await axios.get('https://rickandmortyapi.com/api/character/')
  ).data.results;
  const postAllApi= cleanArray(fullDataApi)
  return postAllApi
}
const getAllPostDB=async()=>{
  const postAllDB = await postUser.findAll();
  return postAllDB;
}
const getAllPostC = async () => {
  const postAllApi= await getAllPostApi()
  const postAllDB= await getAllPostDB()
  
  return [...postAllDB,...postAllApi]
};

const idPostC= async (id,source)=>{
  const findPost=
  source ==="api" ? cleanObject((
    await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
  ).data)
  :await postUser.findByPk(id)
  console.log("controlles");
  console.log(findPost);
 return findPost;
}

module.exports = { createPostC, getAllPostC,idPostC };
