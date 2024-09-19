const Router = require("express");
const booksRouter = Router();

const {addbook, getallbooks, paramsexample,getBookByAuthor, deleteBookByTitle, updateAuthor} = require("./controllers");

booksRouter.post("/books/addbook", addbook);
booksRouter.get("/books/getBookAuthor/:author", getBookByAuthor);
booksRouter.get("/books/getallbooks", getallbooks);
booksRouter.get ("/books/paramsexample/:example", paramsexample);
booksRouter.delete("/books/deleteBookByTitle", deleteBookByTitle)
booksRouter.put("/books/updateAuthor", updateAuthor);

module.exports = booksRouter;
