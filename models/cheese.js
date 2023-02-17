//Connections
const {Sequelize, sequelize} = require('./connections/db.js');
const { DataTypes } = require('sequelize');

//Task - Create Model(Cheese)
let Cheese = sequelize.define('cheese', {
    title: DataTypes.STRING,
    description: DataTypes.STRING
});

//Create Cheese
const cheese = Cheese.create({
    title: 'Brie',
    description: 'Soft Cheese'
});

//Export
module.exports = Cheese;