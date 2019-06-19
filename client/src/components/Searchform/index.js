import React, { Component } from 'react';

class Searchform extends Component {
  state = {
    search: ""
  }

  handleSearchChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  
  handleSearchSubmit = e => {
    e.preventDefault();
    if (this.state.search) {
      console.log('this.state.search', this.state.search);
      this.props.doSearch(this.state.search);
    }
  }

  render() {
    return (
      <form className="w-3/6 mb-10 mx-auto" onSubmit={this.handleSearchSubmit}>
        <input 
          className="p-2 w-3/4 text-lg border mr-10 border border-teal-500 rounded"
          placeholder="Search"
          id="search" 
          name="search" 
          onChange={this.handleSearchChange}
          value={this.state.search}
          />
        <input type="submit" value="Search" className="cursor-pointer bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded" />
      </form>
    );
  }
}

export default Searchform;
