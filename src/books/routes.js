const Router = require("express");
const booksRouter = Router();

const {addbook, getallbooks, } = require("./controllers");

booksRouter.post("/books/addbook", addbook);

booksRouter.get("/books/getallbooks", getallbooks);

// booksRouter.put("books/updateauthor", updateauthor)

module.exports = booksRouter;
