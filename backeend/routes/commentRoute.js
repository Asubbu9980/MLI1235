var express = require('express')
var router = express.Router();

const commentsRouter = require("../controller/commentsController")

router.post('/:id', commentsRouter.createComments,commentsRouter.getComments)
router.get('/:id',commentsRouter.getComments)




module.exports = router;