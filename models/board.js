//Connections
const {Sequelize, sequelize} = require('./connections/db.js');
const { DataTypes } = require('sequelize');

//Task - Create Model(BOARD)
let Board = sequelize.define('board', {
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    rating: DataTypes.NUMBER
});

//Create Board
const board = Board.create({
    type: 'Master',
    description: 'Best Board',
    rating: 5
});

//Export
module.exports = Board;