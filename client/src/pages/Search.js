import React, { Component } from "react";
import Searchform from "../components/Searchform/";



class Search extends Component {
  // Setting our component's initial state
  state = {
    search: ""
  };

  render() {
    return (
      <Searchform />
    )
  }
}

export default Search;
