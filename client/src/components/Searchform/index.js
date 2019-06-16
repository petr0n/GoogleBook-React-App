import React, { Component } from 'react';

class Searchform extends Component {
  state = {
    search: ""
  }

  handleSearchChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSearchSubmit = e => {
    e.preventDefault();
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSearchSubmit}>
        <label className="">
          Search
        </label>
        <input 
          id="search" 
          name="search" 
          onChange={this.handleSearchChange}
          value={this.state.search}
          />
        <input type="button" value="Search" />
      </form>
    );
  }
}

export default Searchform;
