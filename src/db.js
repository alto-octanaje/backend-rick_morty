const { Sequelize } = require("sequelize");
const UserModel = require("./Models/user");
const PostUser = require("./Models/postUser");

require("dotenv").config();

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rick_morty`,
  { logging: false }
); 
UserModel(sequelize);
PostUser(sequelize);

const { user, postUser } = sequelize.models;
// console.log(sequelize.models);

user.hasMany(postUser );//1-N
postUser.belongsTo(user); //N-1

module.exports = { sequelize , ...sequelize.models };
