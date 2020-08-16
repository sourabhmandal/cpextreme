const mongoose = require('mongoose');
const schema = mongoose.Schema;

const PostSchema = new schema({
    title:{
        type : String,
        required : true,
    },
    tags: [{ body: String}],
    author: String,
    body:   String,
    date: { 
        type: Date, 
        default: Date.now 
    },
});


module.exports = Post = mongoose.model("POST", PostSchema)