const { DataTypes } = require("sequelize");

const sequelize = require("../db/connection");

const Author = sequelize.define("author", {
    
    name: {
            type: DataTypes.STRING,
            allowNull: false
            },

        }
        );
const Genre = sequelize.define("genre", {
    
    name: {
            type: DataTypes.STRING,
            allowNull: false
                        },
            
                    }
                    );
module.exports = Author;
module.exports = Genre;