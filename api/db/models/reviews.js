const sequelize = require('sequelize');
const db = require('../index');

class Reviews extends sequelize.Model {}

Reviews.init(
    {
       comentario:{type: sequelize.TEXT, allowNull: false},
       valoracion:{type: sequelize.INTEGER, allowNull: false},
    }, { sequelize: db, modelName: 'Reviews'}
)

module.exports = Reviews;