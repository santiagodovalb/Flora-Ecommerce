const Sequelize = require('sequelize');
const chalk = require('chalk')

console.log(chalk.yellow('\n Openning connection to Postgres'))

<<<<<<< HEAD
const db = new Sequelize('postgres://localhost:5432/omdb', {
=======
const db = new Sequelize('postgres://postgres@localhost:5432/flora', {
>>>>>>> 48b499779a9657f77c66587f33be605167ee977d
    loggin: false,
})

module.exports = db;