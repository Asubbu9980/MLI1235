const { Schema, default: mongoose } = require("mongoose");

const restaurantsSchema = new Schema({

    name:String,
    description:String,
    image:String,
    address:String,
    rating:Number,
    comment:String,   
})

const RestaurantDetails = mongoose.model('RestaurantDetails',restaurantsSchema)
module.exports=RestaurantDetails;
