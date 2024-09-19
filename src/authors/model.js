const { DataTypes } = require("sequelize");

const sequelize = require("../db/connection");

const Book = sequelize.define("book", {
    
    author: {
            type: DataTypes.STRING,
            allowNull: false
            },

    genre: {
            type: DataTypes.STRING,
            }},
            {timestamps: false}
        );
module.exports = Book;
