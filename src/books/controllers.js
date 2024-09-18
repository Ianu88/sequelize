const Book = require("./model");
const { get } = require("./routes");

const addbook = async (req,res)=>{
    try{
        // try the thing
        const book = await Book.create({
            title:req.body.title,
            author:req.body.author,
            genre: req.body.genre
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
    {author: "Robert Jordan and Brandon Sanderson"})    
     }
module.exports = {
    addbook: addbook,
    getallbooks: getallbooks,
    updateauthor: updateauthor
}
