import React, { Component } from "react";
import Searchform from "../components/Searchform/";
import API from "../utils/google-api";
import SearchResult from "../components/SearchResult";
import SearchResultList from "../components/SearchResultList";


class Search extends Component {
  // Setting our component's initial state
  state = {
    search: "",
    foundBooks: []
  };

  doSearch = (search) => {
    if (search) {
      API.searchBooks(search, 1).then((books) => {
        console.log('books', books.length);
        if (books.length) {
          this.setState({
            foundBooks: this.createSearchResult(books)
          });
        }
      });
      console.log('this.state.foundBooks', this.state.foundBooks);
    }
  }

  handleBookSave = (book) => {
    return "hello";
  }

  createSearchResult = (books) => {
    let booksArr = [];
    let resultCount = books.length ? books.length : 10;
    if (books.length) {
      for(let i = 0;i < resultCount; i++){
        // console.log('books[i].volumeInfo', books[i].volumeInfo);
        booksArr.push(<SearchResult bookInfo={books[i].volumeInfo} key={"x"+i} handleSave={this.handleBookSave} />);
      }
    }
		return booksArr;
  }

  render() {
    return (
      <div className="container mx-auto pb-20">
        <Searchform doSearch={this.doSearch} />
        <SearchResultList>{
          this.state.foundBooks.length ? 
          this.state.foundBooks :
          <p>No books found</p>
        }</SearchResultList>
      </div>
    )
  }
}

export default Search;
