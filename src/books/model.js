const { DataTypes } = require("sequelize");

const sequelize = require("../db/connection");

const Book = sequelize.define("book", {
    title: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
    authorName: {
            type: DataTypes.STRING,
            defaultvalue:   "written by some author"
            },

    genreName: {
            type: DataTypes.STRING,
            defaultvalue:   "some genre"
            }},
            {timestamps: false}
        );
module.exports = Book;
