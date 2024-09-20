require("dotenv").config();
const express = require("express");
const booksRouter = require("./books/routes");
const Book = require("./books/model");
const Author = require("./authors/model")
const authorRouter = require("./authors/routes")
const Genre = require("./authors/model")

const syncTables = () =>
    Author.hasMany(Book);
    Book.belongsTo(Author);

    Author.sync({alter: true});
    Book.sync({alter: true});

    // Genre.hasMany(Book);
    // Book.belongsTo(Genre);

    // Genre.sync({alter: true});
    // Book.sync({alter: true});

    
const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

app.use(booksRouter);
app.use(authorRouter);

app.get("/health", (req,res) => {
    res.status(200).json({message:"API is healthy"});
}); 

app.listen(port, ()=>{
  syncTables(); 
   console.log(`   server is listening on port ${port}`);
});
