const myCommentModel = require('../model/commentModel')

let createComments = function (req, res, next) {
    console.log("req.body", req.body)
    let card = new myCommentModel({...req.body,
    id: req.params.id})
    card.save().then((data) => {
        // res.send(data);
        next()
    }).catch((err) => {
        res.status(422).send({ err: "error occurred when creating user" })
    })
}

const getComments = async function (req, res, next) {
    try {
        const id = req.params.id;
        const data = await myCommentModel.find({id});
        return res.send(data);
    } catch (err) {
        next(err);
    }
};
module.exports = { createComments ,getComments}
