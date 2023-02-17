//Connections
const {Sequelize, sequelize} = require('../connections/db.js');
const { DataTypes } = require('sequelize');

//Task - Create Model(Cheese)
let Cheese = sequelize.define('cheese', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
});

//Export
module.exports = Cheese;