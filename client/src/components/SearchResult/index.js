import React, { Component } from "react";
import SaveButton from "../../components/SaveButton";
import API from "../../utils/api";



class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.bookInfo = this.props.bookInfo;
    this.smallThumb = this.getThumbnail(this.bookInfo);
    this.authors = this.getAuthors(this.bookInfo);
  }

  getThumbnail = (book) => {
      let thumbnailUrl = book && book.imageLinks && book.imageLinks.smallThumbnail;
      return thumbnailUrl ? thumbnailUrl.replace(/^http:\/\//i, 'https://') : '';
  }

  getAuthors = (book) => {
      let authorList = book && book.authors && book.authors;
      if (!authorList) {
          return <span>No authors to display</span>;
      }
      return authorList.map((author, index) => {
          return <span key={index}>{author}{index + 1 !== authorList.length ? ', ' : ''}</span>;
      });
  }

  saveBook = (book) => {
    API.saveBook(book);
    return "money";
  }

  
  render() {
    const createBookSave = {
        title: this.bookInfo.title,
        link: this.bookInfo.infoLink,
        image: this.smallThumb,
        author: this.authors,
        description: this.bookInfo.description
    }
    const imgStyle = {
      width: "150px"
    }
    return (
      <div className="border-b flex mb-5">
        <figure className="p-2 flex-none" style={imgStyle}>
          <img src={this.smallThumb} alt={this.bookInfo.title} className="min-w-full" />
        </figure>
        <div className="p-2 flex-auto">
          <h3 className="text-xl font-bold">{this.bookInfo.title}</h3>
          <h4 className="text-lg font-bold">{this.bookInfo.subtitle}</h4>
          <p><a href={this.bookInfo.infoLink} target="_blank" rel="noopener noreferrer" className="text-sm italic">Download or purchase Book</a></p>
          <p>Author(s): {this.authors}</p>
          <p>{this.bookInfo.description}</p>
        </div>
        <div className="flex-auto">
          <SaveButton saveBook={this.saveBook} createBookSave={createBookSave} />
        </div>
      </div>
    )
  }
}

export default SearchResult;
