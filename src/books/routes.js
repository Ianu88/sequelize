const Router = require("express");
const booksRouter = Router();

const {addbook} = require("./controllers")

booksRouter.post("/books/addbook", addbook);


module.exports = booksRouter;

