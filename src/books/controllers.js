const Book = require("./model");
const booksRouter = require("./routes");
const {get}  = require("./routes");

const addbook = async (req,res)=>{
    try{
        // try the thing
        const book = await Book.create({
            title:req.body.title,
            author:req.body.author,
            genre: req.body.genre,
            authorId:req.body/authorId 
        });
        res.status(201).json({message: "success",book:book});
    }catch(error) {
        // if an error is found, react as stated
        res.status(500).json({message: error.message, error:error})
    }
};
const getallbooks = async(req,res) =>{
    try{
        const books = await Book.findAll();
        res.status(201).json({message:"success, all books available", books: books});
    } catch(error){
        res.status(500).json({message:error.message, error: error})
    }
    };
    
const updateAuthor = async (req,res)=>{
    const books=  await Book.update (
        {author: req.body.author},

        {  where: {
            title:req.body.title
            }
        }
    )
    res.status(201).json({message: "success, book updated", books: books})
};


const deleteBookByTitle = async(req,res)=>{
try {
    const deleteBook = await Book.destroy({
        where:{
            title: req.body.title,}},);
    res.status(201).json({message:"success, book has beend deleted", deleteBook: deleteBook})
} catch (error) {
    res.status(500).json({message:error.message, error: error})
}
};
const getBookByAuthor = async(req,res) =>{
    try {
        const Book = await Book.findOne({where:  {author: req.params.title}});
        res.status(201).json({message:"success, author was found", books: books});
    } catch (error) {
        res.status(500).json({message: error.message, error: error});

    }
}
const paramsexample = async(req,res)=>{
    try {
        console.log("req.params:", req.params.title);
        res.status(200).json ({message:"success", params: req.params});
    }catch (error) {
        res.status(500).json({message: error.message, error: error});
    }
};  
module.exports = {
    addbook: addbook,
    getallbooks: getallbooks,
    paramsexample: paramsexample,
    getBookByAuthor: getBookByAuthor,
    deleteBookByTitle: deleteBookByTitle,
    updateAuthor: updateAuthor
};