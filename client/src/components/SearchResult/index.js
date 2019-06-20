import React, { Component } from "react";
import SaveButton from "../../components/SaveButton";
import API from "../../utils/api";
import './SearchResult.css';



class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.bookInfo = this.props.bookInfo;
    this.smallThumb = this.getThumbnail(this.bookInfo);
    this.authors = this.getAuthorsEl(this.bookInfo);
    this.authorsString = this.bookInfo.authors ? this.bookInfo.authors.map((author) => {return author}).join('') : [];
    this.state = {
      isSaved: false
    };
  }

  getThumbnail = (book) => {
      let thumbnailUrl = book && book.imageLinks && book.imageLinks.smallThumbnail;
      return thumbnailUrl ? thumbnailUrl.replace(/^http:\/\//i, 'https://') : '';
  }

  getAuthorsEl = (book) => {
      let authorList = book && book.authors;
      if (!authorList) {
          return <span>No authors to display</span>;
      }
      return authorList.map((author, index) => {
          return <span key={index}>{author}{index + 1 !== authorList.length ? ', ' : ''}</span>;
      });
  }

  saveBook = (book) => {
    this.setState(
      prevState => ({ isSaved: !prevState.isSaved })
    );
    API.saveBook(book);
  }
  
  render() {
    const createBookSave = {
        title: this.bookInfo.title,
        link: this.bookInfo.infoLink,
        image: this.smallThumb,
        author: this.authorsString,
        description: this.bookInfo.description
    }
    const imgStyle = {
      width: "150px"
    }
    const { isSaved } = this.state;
    return (
      <div className={`search-item border-b flex justify-between mb-10 ${isSaved ? 'saved' : ''}`}>
        <figure className="p-2 flex-none" style={imgStyle}>
          <img src={this.smallThumb} alt={this.bookInfo.title} className="min-w-full" style={imgStyle} />
        </figure>
        <div className="p-2">
          <h3 className="text-3xl">{this.bookInfo.title}</h3>
          <h4 className="text-lg font-bold">{this.bookInfo.subtitle}</h4>
          <p><a href={this.bookInfo.infoLink} target="_blank" rel="noopener noreferrer" className="text-sm italic">Download or purchase Book</a></p>
          <p>Author(s): {this.authors}</p>
          <p>{this.bookInfo.description}</p>
        </div>
        <div className="text-right">
          <SaveButton saveBook={this.saveBook} createBookSave={createBookSave} />
        </div>
      </div>
    )
  }
}

export default SearchResult;
