import React, { Component } from "react";
import * as Redux from "redux";
import { connect } from "react-redux";
import "./Homepage.css";
import { pages } from "../../App";
import { actionIdentifier, createSearchAction } from "../../redux/actions";
//import { spawn } from "child_process";

interface SearchProps {
  //Contructor like for the page, these two methods are provided by the App for AddItemsPage to use
  changePage: (page: pages) => void;
  searchArticles: (query: string) => void;
}

interface StateProps {
  propFromReduxStore: string;
}

interface DispatchProps {
  createSearchAction: () => void;
}

class Search extends React.Component<SearchProps, any> {
  searchitem: string = "";
  state = {
    query: "",
    error: null,
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Welcome to DisMis !</h1>
        <h2>
          <i>
            Americans don't trust 65% of news from social media.
            <br />
            Use the DisMis database to find rated articles and better yet, rate
            them yourselves.
          </i>
        </h2>
        <input
          name="text"
          type="text"
          placeholder="Search"
          onChange={(e) => {
            this.setState({ query: e.target.value.toUpperCase() });
          }}
        />
        {/* {this.props.error ? <span>{this.props.error}</span> : "No results found"} */}

        <button type="submit">Search</button>
        {/* <button
          onClick={(e) => this.props.changePage(pages.ListviewPage)}
        ></button> */}
        <p>OR</p>
      </form>
    );
  }

  private handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (this.state.query == "") {
      alert("INTERNAL ERROR: missing reference!");
      return;
    }
    this.props.searchArticles(this.state.query);
    //console.log(this.state.query);

    this.props.changePage(pages.ListviewPage);
  };
}

function mapStateToProps(state: Object) {
  return {
    // error: state.error,
  };
}

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
  searchArticles: (query: string) => dispatch(createSearchAction(query)),
});

// connect is a HOC and it returns a function that you then pass your component to
// what this does is
// places the redux state as props to your component (mapStateToProps)
// places the dispatch actions (functions) onto your component props
// this allows us to call these functions inside your component ro change the redux state via reducers
let connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Search);
//this.props.searchArticles(this.state.query)

export default connectedComponent;
