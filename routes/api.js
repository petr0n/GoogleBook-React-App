const router = require("express").Router();
const Book = require("../models/Book");


router.route('/getBooks')
  .get((req, res) => {
    let savedBooks = Book.find({});
    //   .find(req.query)
    //   .sort({ date: -1 })
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
    console.log('savedBooks', savedBooks)
    return res.json({yo: "api-getBooks"});
  });


router.route('/saveBook')
  .get((req, res) => {
    let book = req.body;
    return res.json({yo: "I'm words"});
  });



module.exports = router;
