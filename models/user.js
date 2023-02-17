//Connections
const {Sequelize, sequelize} = require('../connections/db.js');
const { DataTypes } = require('sequelize');

//Task - Create Model(User)
let User = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
});

//Export
module.exports = User;