const router = require("express").Router();
const booksController = require("../controllers/BookController");


router.route('/getBooks')
  .get(booksController.findAll);


router.route('/saveBook')
  .post(booksController.create);



module.exports = router;
