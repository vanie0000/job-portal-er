const { DataTypes } = require('sequelize')
const sequelize = require('../db/connect')
const Company = require('./company')

const Job = sequelize.define('Job', {
    JobID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    Location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Salary: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
    DatePosted: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    CompanyID: {
        type: DataTypes.INTEGER,
        references: {
            model: Company,
            key: 'CompanyID',
        },
    }
});

module.exports = Job