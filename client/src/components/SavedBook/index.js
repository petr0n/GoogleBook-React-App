import React, { Component } from "react";


class SavedBook extends Component {
  constructor(props) {
    super(props);
    this.book = props.book;
  }

  render() {

    const imgStyle = {
      width: "150px"
    }
    return (
      <div className="border-b flex mb-5">
        <figure className="p-2 flex-none" style={imgStyle}>
          <img src={this.book.image} alt={this.book.title} className="min-w-full" />
        </figure>
        <div className="p-2 flex-auto">
          <h3 className="text-xl font-bold">{this.book.title}</h3>
          <h4 className="text-lg font-bold">{this.book.subtitle}</h4>
          <p><a href={this.book.link} target="_blank" rel="noopener noreferrer" className="text-sm italic">Download or purchase Book</a></p>
          <p>Author(s): {this.book.author}</p>
          <p>{this.book.description}</p>
        </div>
      </div>
    )
  }
}

export default SavedBook;
