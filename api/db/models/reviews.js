const sequelize = require('sequelize');
const db = require('../db');

class Reviews extends sequelize.Model {}

Reviews.init(
    {
       comentario:{type: sequelize.TEXT, allowNull: false},
       valoracion:{type: sequelize.INTEGER, allowNull: false},
    }, { sequelize: db, timestamps:false, modelName: 'Reviews'}
)

module.exports = Reviews;