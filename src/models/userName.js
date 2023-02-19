'use strict';


module.exports = (sequelizeDatabase, DataTypes) => {
  return sequelizeDatabase.define('userName', {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

