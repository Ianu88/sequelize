const Book = require("./model");
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

module.exports = {
    addbook: addbook,
};
