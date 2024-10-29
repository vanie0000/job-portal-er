const { DataTypes } = require('sequelize')
const sequelize = require('../db/connect')

const Company = sequelize.define('Company', {
    CompanyID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    CompanyName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    ContactEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }    
});

module.exports = Company