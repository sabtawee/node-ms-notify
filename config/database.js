const Sequeliize = require('sequelize')

const db = new Sequeliize("poapproval", "v9", "abcdef0101", {
    host: "192.168.23.50",
    dialect: "mysql",
    define:{
        timestamps: false,
    },
})
module.exports = db;
