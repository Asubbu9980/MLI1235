const { Schema, default: mongoose } = require("mongoose");

const commentsSchema = new Schema({
    id:String,
    rating:Number,
    comment:String,   
})

const CommentsDetails = mongoose.model('CommentsDetails',commentsSchema)
module.exports=CommentsDetails;
