import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/getBooks");
  },
  saveBook: function(bookData) {
    return axios.post("/api/saveBook", bookData);
  }
}

