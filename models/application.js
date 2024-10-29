// models/application.js
const { DataTypes } = require('sequelize')
const sequelize = require('../db/connect')
const Job = require('./job');
const User = require('./user');


const Application = sequelize.define('Application', {
    ApplicationID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    JobID: {
        type: DataTypes.INTEGER,
        references: {
            model: Job,
            key: 'JobID',
        },
    },
    UserID: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'UserID',
        },
    },
    Status: {
        //type: DataTypes.ENUM('Pending', 'Accepted', 'Rejected', 'Interview Scheduled'),
        type: DataTypes.STRING,
        allowNull: false,
    },
    ApplicationDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    UpdateDate: {
        type: DataTypes.DATE,
        allowNull: true,
    },
});

module.exports = Application