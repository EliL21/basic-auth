'use strict';

const userName = require('./userName');
const { Sequelize, DataTypes } = require('./userName');

const sequelize = new Sequelize(process.env.DATABASE_URL);



const userNameModel = userName(sequelizeDatabase, DataTypes);


module.exports {sequlizeDatabase, userNameModel};