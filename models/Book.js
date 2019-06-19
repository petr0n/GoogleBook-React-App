const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  author: {
    type: String, 
    required: true
  },  
  description: {
    type: String, 
    required: true
  },
  image: {
    type: String, 
    required: true
  }
});

// This creates our model from the above schema, using mongoose's model method
const Book = mongoose.model("Book", BookSchema);

// Export the Article model
module.exports = Book;
