const db = require("../db");
const S = require("sequelize");
const bcrypt = require("bcrypt");

class User extends S.Model {}

User.init(
    {
        nick: {
            type: S.STRING,
            allowNull: false,
            unique: true,
        },
        email: {
            type: S.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: S.STRING,
            allowNull: false,
        },
        direction: {
            type: S.STRING,
            allowNull: false,
        },
        phone: {
            type: S.INTEGER,
        },
        salt: {
            type: S.STRING,
        },
    },
    { sequelize: db, timestamps: false, modelName: "users" }
);

User.addHook("beforeCreate", async (user) => {
    const salt = await bcrypt.genSalt(10);
    user.salt = salt;
    user.password = await user.hashPassword(user.password);
});

User.prototype.hashPassword = async function (password) {
    return bcrypt.hash(password, this.salt);
};

User.prototype.validatePassword = function (password) {
    return this.password === this.hashPassword(password);
};

User.addHook("afterCreate", async (user) => {
    await user.setRol(2)
    await user.save
});

module.exports = User;
