const myRestaurantsModel = require('../model/restaurantsModel')

let createRestaurants = function (req, res, next) {
    let card = new myRestaurantsModel(req.body)
    card.save().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(422).send({ err: "error occurred when creating user" })
    })
}

const getRestaurants = async function (req, res, next) {
    try {
        const data = await myRestaurantsModel.find({});
        return res.send(data);
    } catch (err) {
        next(err);
    }
};


const deleteRestaurants = async function (req, res, next) {
    try {
        const id = req.params.id;
        const data = await myRestaurantsModel.findByIdAndDelete(id);
        res.send(data);
    } catch (err) {
        res.status(422).send(err);
    }
};

const getOneRestaurants = async function (req, res, next) {
    try {
        const id = req.params.id;
        const data = await myRestaurantsModel.findById(id);
        return res.send(data);
    } catch (err) {
        next(err);
    }
};

const UpdateOneRestaurants = async function(req,res,next){
    try{
        const id = req.params.id;
        const body = req.body
        const data = await myRestaurantsModel.findByIdAndUpdate(id, body);
        res.send(data);
    } catch (err) {
        res.status(422).send(err);
      }
}


module.exports = { createRestaurants ,getRestaurants ,deleteRestaurants,getOneRestaurants,UpdateOneRestaurants}
