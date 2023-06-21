const sequelize = require("../databases/sequelize")

const {DataTypes}=require("sequelize")

const Messages=sequelize.define('message',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING
    },
    body:{
        type:DataTypes.STRING
    }

})
module.exports = Messages





//מחקתי 
//mongoose
//התקנתי
//sequelize, mysql2