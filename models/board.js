//Connections
const {Sequelize, sequelize} = require('../connections/db.js');
const { DataTypes } = require('sequelize');

//Task - Create Model(BOARD)
let Board = sequelize.define('board', {
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    rating: DataTypes.NUMBER
});

//Export
module.exports = Board;