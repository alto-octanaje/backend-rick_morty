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
postUser.belongsTo(gender); //N-1
location.hasMany(postUser);
postUser.belongsTo(location); //N-1
origin.hasMany(postUser);//1-N
postUser.belongsTo(origin); //N-1
species.hasMany(postUser);
postUser.belongsTo(species); //N-1
status.hasMany(postUser);
postUser.belongsTo(status); //N-1
type.hasMany(postUser);
postUser.belongsTo(type); //N-1




module.exports = { sequelize , ...sequelize.models };
