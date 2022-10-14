var Sequelize = require("sequelize");
var db = require("../config/database");

var { DataTypes } = Sequelize;
var ResultModel = db.define("", {
  
}, {
    freezeTableName: true
});

module.exports = ResultModel