//Connections
const {Sequelize, sequelize} = require('./connections/db.js');
const { DataTypes } = require('sequelize');

//Task - Create Model(User)
let User = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING
});

//Create User
const user = User.create({
    name: 'Adrian',
    email: 'adrian@email.com'
});

//Export
module.exports = User;