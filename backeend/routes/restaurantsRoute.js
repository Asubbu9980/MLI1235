var express = require('express')
var router = express.Router();

const restaurantsRouter = require("../controller/restaurantsController")

router.post('/',restaurantsRouter.createRestaurants)
router.get('/',restaurantsRouter.getRestaurants)
router.delete('/:id',restaurantsRouter.deleteRestaurants)
router.get('/:id',restaurantsRouter.getOneRestaurants)
router.put('/:id',restaurantsRouter.UpdateOneRestaurants)





module.exports = router;