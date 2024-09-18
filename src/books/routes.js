const Router = require("express");
const booksRouter = Router();

const {addbook, getallbooks, } = require("./controllers");

booksRouter.post("/books/addbook", addbook);

booksRouter.get("/books/getallbooks", getallbooks);

// booksRouter.put("books/updateAuthor", updateAuthor);

module.exports = booksRouter;
