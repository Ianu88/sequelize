const { DataTypes } = require("sequelize");

const sequelize = require("../db/connection");

const Author = sequelize.define("book", {author: {
    type: DataTypes.STRING,
    unique: false,
}}
);