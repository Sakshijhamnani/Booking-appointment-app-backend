const Sequelize = require('sequelize');

const sequelize=require('../util/database');

const Appointment=sequelize.define('appointment',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allwNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    phone:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    email:{
        type : Sequelize.STRING,
        allowNull:false,
        unique:true
    }
})

module.exports=Appointment