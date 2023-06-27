const { Sequelize } = require("sequelize");
const UserModel = require("./Models/user");
const PostUser = require("./Models/postUser");
const{
  genderModel,
  locationModel,
  speciesModel,
  originModel,
  statusModel,
  typeModel,
} =require("./Models/select/allSelectModel")


require("dotenv").config();

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rick_morty`,
  { logging: false }
); 
UserModel(sequelize);
PostUser(sequelize);

genderModel(sequelize);
locationModel(sequelize);
originModel(sequelize);
speciesModel(sequelize);
statusModel(sequelize);
typeModel(sequelize);


const { user, postUser,species,gender,location,origin,status,type } = sequelize.models;
// console.log(sequelize.models);

user.hasMany(postUser );//1-N
postUser.belongsTo(user); //N-1
gender.hasMany(postUser);
location.hasMany(postUser);
origin.hasMany(postUser);
species.hasMany(postUser);
status.hasMany(postUser);
type.hasMany(postUser);



module.exports = { sequelize , ...sequelize.models };
