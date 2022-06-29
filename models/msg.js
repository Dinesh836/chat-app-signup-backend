const Sequelize=require('sequelize')
const sequelize=require('../utils/database')

const Msg=sequelize.define('msg',{
    id:{ type:Sequelize.INTEGER,
     autoIncrement:true,
     allowNull:false,
     primaryKey:true,
    },
    name:{
     type:Sequelize.STRING,
     allowNull:false
     },
    msg:{
        type:Sequelize.STRING,
        allowNull:false
    }
 })
 module.exports = Msg