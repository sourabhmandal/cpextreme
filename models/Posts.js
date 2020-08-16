const mongoose = require('mongoose');
const schema = mongoose.Schema;

const PostSchema = new schema({
    title:{
        type : String,
        required : true,
    },
    tags: [{ tag: String}],
    author: String,
    content:   String,
    date: { 
        type: Date, 
        default: Date.now 
    },
});


module.exports = Post = mongoose.model("POST", PostSchema)