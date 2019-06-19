import React, { Component } from "react";
import API from "../utils/api";
import SavedBook from "../components/SavedBook";
import SavedBookList from "../components/SavedBookList";




class Saved extends Component {
  // Setting our component's initial state
  state = {
    savedBooks: []
  };

  getBooks = () => {
    API.getBooks().then((books) => {
      if (books.data) {
        this.setState({
          savedBooks: this.createBookList(books.data)
        });
      }
    });
  }

  componentDidMount() {
    this.getBooks();
  }

  createBookList = (books) => {
    let booksArr = [];
    let resultCount = books.length ? books.length : 10;
    if (books.length) {
      for(let i = 0;i < resultCount; i++){
        // console.log('books[i]', books[i]);
        booksArr.push(<SavedBook book={books[i]} key={"x"+i}  />);
      }
    }
		return booksArr;
  }

  render() {
    return (
      <div>
        <h3 className="text-3xl text-teal-700 mb-3">Saved Books</h3>
        <SavedBookList>
          {this.state.savedBooks.length ? 
          this.state.savedBooks :
          <p>No books found</p>}
        </SavedBookList>
      </div>
    )
  }
}

export default Saved;
