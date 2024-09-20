const Book = require("../books/model");
const Author = require("./model")
    const addAuthor = async (req,res)=>{
    try{
        const author = await Author.create({
            name:req.body.name
            });
        res.status(201).json({message: "success",author:author});
    }catch(error) {
        res.status(500).json({message: error.message, error:error})
    }
};
const getAuthorandBooks = async(req,res) => {
    const author = await Author.findOne({
    where:{ name: req.params.name,
        },
    });
}
module.exports = {
    addAuthor: addAuthor,
    getAuthorandBooks: getAuthorandBooks,
};