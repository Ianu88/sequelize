const addbook = async (req,res)=>{
    try{
        // try the thing
        res.status(201).json({message: "success"});
    }catch(error) {
        // iff anerror is found, react as stated
        res.status(500).json({message: error.message, error:error})
    }
};

module.exports = {
    addbook: addbook,
};
